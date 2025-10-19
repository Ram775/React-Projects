import { useState } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";

const Location = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const getData = () => {
    const geo = navigator.geolocation;

    if (geo) {
      setLoading(true);
      geo.getCurrentPosition(onSuccess, onError);
    } else {
      setAddress("❌ Your browser does not support Geolocation");
    }
  };

  const onSuccess = async (position) => {
    const { latitude, longitude } = position.coords;
    setLatitude(latitude);
    setLongitude(longitude);

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await res.json();
      setAddress(data.display_name || "Address not found");
    } catch (error) {
      setAddress("⚠️ Failed to fetch address");
    }

    setLoading(false);
  };

  const onError = (error) => {
    if (error.code === 1) {
      setAddress("❌ User denied location access");
    } else if (error.code === 2) {
      setAddress("⚠️ Position unavailable");
    } else {
      setAddress("❗ Something went wrong");
    }
    setLoading(false);
  };

  return (
    <div className="h-screen w-full bg-gradient-to-t from-blue-600 to-emerald-400 flex flex-col items-center justify-center gap-10 text-center p-5">
      <button
        onClick={getData}
        className="flex items-center justify-center gap-4 px-10 py-4 cursor-pointer text-2xl font-bold bg-black text-white rounded-2xl shadow-lg hover:bg-gray-800 transition"
      >
        {loading ? "Detecting..." : "Detect Your Address"}
        <FaLocationCrosshairs className="text-3xl" />
      </button>

      {address && (
        <div className="bg-white/80 rounded-xl p-6 w-3/4 max-w-2xl text-gray-800 shadow-md">
          <p className="font-semibold text-lg">📍 Address:</p>
          <p>{address}</p>
          <p className="mt-3">
            <span className="font-semibold">Latitude:</span> {latitude} <br />
            <span className="font-semibold">Longitude:</span> {longitude}
          </p>
        </div>
      )}
    </div>
  );
};

export default Location;
