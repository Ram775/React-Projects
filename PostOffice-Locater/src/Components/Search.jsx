import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Search = () => {
  const [inp, setInp] = useState("");
  const [result, setResult] = useState([]);

  const handleClick = async () => {
    if (!inp) {
      toast.warning("Please Enter Pincode");
      return;
    }

    if (inp.length !== 6) {
      toast.warning("Please enter  6-digit pincode");
      return;
    }

    try {
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${inp}`
      );
      const data = await response.json();

      if (data && data[0].Status === "Success") {
        setResult(data[0].PostOffice);
      } else {
        toString.error("Invalid pincode you entered");
        setResult([]);
      }
    } catch (err) {
      alert("Something went wrong");
      console.error(err);
    }
  };

  return (
    <div>
      <h1 className="mt-5 text-center text-4xl font-bold underline">PostOffice-locator</h1>
      <div className="h-20 p-3 mt-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <input
            onChange={(e) => setInp(e.target.value)}
            className="w-100  sm:w-full md:max-w-200 lg:max-w-300 xl:max-w-300 border-red-600 border-2 h-[6vh] rounded-md font-bold  text-center "
            type="tel"
            maxLength={6}
            placeholder="Enter your pincode...."
          />
          <button
            onClick={handleClick}
            className="px-15 mb-100 hover:-translate-y-1 hover:bg-red-500 sm:text-2xl md:text-3xl lg:text-4xl   duration-400  py-3 cursor-pointer text-white   font-bold rounded bg-black"
          >
            Search
          </button>
        </div>
      </div>

      {result.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-4 mt-20">
          {result.map((item, index) => (
            <div
              key={index}
              className="p-5 w-[400px] hover:shadow-black drop-shadow-lg hover:-translate-y-2 cursor-pointer duration-300 rounded-xl bg-blue-800 shadow-lg text-white"
            >
              <h1 className="text-center text-2xl font-bold mb-2">
                {item.Name},{item.District}
              </h1>
              <div className="text-start  text-lg font-thin space-y-1">
                <p className="flex justify-between text-[15px]">
                  <span className="text-[16px] font-medium">Branch Type:</span>{" "}
                  {item.BranchType}
                </p>
                <p className="flex justify-between text-[15px]">
                  <span className="text-[16px] font-medium">
                    Delivery Status:
                  </span>{" "}
                  {item.DeliveryStatus}
                </p>
                <p className="flex justify-between text-[15px]">
                  <span className="text-[16px] font-medium">Division:</span>{" "}
                  {item.Division}
                </p>
                <p className="flex justify-between text-[15px]">
                  <span className="text-[16px] font-medium">Block:</span>{" "}
                  {item.Block}
                </p>
                <p className="flex justify-between text-[15px]">
                  <span className="text-[16px] font-medium">Region:</span>{" "}
                  {item.Region}
                </p>
                <p className="flex justify-between text-[15px]">
                  <span className="text-[16px] font-medium">District:</span>{" "}
                  {item.District}
                </p>
                <p className="flex justify-between text-[15px]">
                  <span className="text-[16px] font-medium">State:</span>{" "}
                  {item.State}
                </p>
                <p className="flex justify-between text-[15px]">
                  <span className="text-[16px] font-medium">Country:</span>{" "}
                  {item.Country}
                </p>
                <p className="flex justify-between text-[15px]">
                  <span className="text-[16px] font-medium">Pincode:</span>{" "}
                  {item.Pincode}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Search;
