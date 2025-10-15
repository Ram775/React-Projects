import React, { useState } from "react";

const Search = () => {
  const [inp, setInp] = useState("");
  const [result, setResult] = useState([]);

  const handleClick = async () => {
    if (!inp) {
      alert("Please enter pincode");
      return;
    }

    if (inp.length !== 6) {
      alert("Please enter a 6-digit pincode");
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
        alert("Invalid pincode you entered");
        setResult([]);
      }
    } catch (err) {
      alert("Something went wrong");
      console.error(err);
    }
  };

  return (
    <div>
      <div className="h-20  mt-5">
        <div className="flex flex-col items-center justify-center gap-3">
          <input
            onChange={(e) => setInp(e.target.value)}
            className=" w-[50vw] border-red-600 border-2 h-[6vh] rounded-md font-bold text-[1.5vw] text-center "
            type="number"
            maxLength={6}
            placeholder="Enter your pincode...."
          />
          <button
            onClick={handleClick}
            className="px-87 hover:-translate-y-1 hover:bg-red-500   duration-400  py-2 cursor-pointer text-white text-[1.5vw]  font-bold rounded bg-black"
          >
            Search
          </button>
        </div>
      </div>

      {result.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
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
    </div>
  );
};

export default Search;
