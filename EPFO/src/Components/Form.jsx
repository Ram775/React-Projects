import React, { useState } from "react";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";

const Form = () => {
  const [dob, setDob] = useState("");
  const [doj, setDoj] = useState("");
  const [dol, setDol] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // page reload रोकता है

    toast.success("Form submitted successfully! 🎉", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <>
      <div className="min-h-screen w-full bg-red-500 flex justify-center items-center p-4">
        
        <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
          
          <h1 className="text-3xl font-bold text-center mb-6 text-red-600">
            Employee Registration
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <input className="w-full border-2 p-4 text-xl outline-none rounded-xl" type="number" placeholder="UAN" />

            <input className="w-full border-2 p-4 text-xl outline-none rounded-xl" type="number" placeholder="A/C No" />

            <input className="w-full border-2 p-4 text-xl outline-none rounded-xl" type="text" placeholder="Member Name" />

            <input className="w-full border-2 p-4 text-xl outline-none rounded-xl" type="text" placeholder="Father / Husband Name" />

            <input className="w-full border-2 p-4 text-xl outline-none rounded-xl" type="number" placeholder="Mobile Number" />

            {/* DOB */}
            <InputMask mask="99/99/9999" value={dob} onChange={(e) => setDob(e.target.value)}>
              {(inputProps) => (
                <input {...inputProps} className="w-full border-2 p-4 text-xl outline-none rounded-xl" type="text" placeholder="Date of Birth (DD/MM/YYYY)" />
              )}
            </InputMask>

            {/* DOJ */}
            <InputMask mask="99/99/9999" value={doj} onChange={(e) => setDoj(e.target.value)}>
              {(inputProps) => (
                <input {...inputProps} className="w-full border-2 p-4 text-xl outline-none rounded-xl" type="text" placeholder="Date of Joining (DD/MM/YYYY)" />
              )}
            </InputMask>

            {/* DOL */}
            <InputMask mask="99/99/9999" value={dol} onChange={(e) => setDol(e.target.value)}>
              {(inputProps) => (
                <input {...inputProps} className="w-full border-2 p-4 text-xl outline-none rounded-xl" type="text" placeholder="Date of Leaving (DD/MM/YYYY)" />
              )}
            </InputMask>

            <input className="w-full border-2 p-4 text-xl outline-none rounded-xl" type="text" placeholder="Remark" />

            {/* Submit Button */}
            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white text-2xl py-4 rounded-xl mt-4 transition-all">
              Submit
            </button>

          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
