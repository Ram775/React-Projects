import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="flex flex-wrap justify-between  items-center p-3 bg-zinc-900 text-white shadow">
      <div className="h-20 w-20 overflow-hidden  bg-amber-50 rounded-[50%]">
        <img
          className="h-full w-full object-cover object-center"
          src="./src/images/srl-logo.jpeg"
          alt=""
        />
      </div>
      <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold uppercase ">
        {" "}
        SRL Public School
      </h1>
      <div className="space-x-4 text-sm md:space-x-6 md:text-base">
        {" "}
        <Link to="/" className="text-xl font-semibold  hover:text-yellow-300 ">
          Home
        </Link>{" "}
        <Link
          to="/about"
          className="text-xl font-semibold  hover:text-yellow-300"
        >
          About
        </Link>{" "}
        <Link
          to="/faculty"
          className="text-xl font-semibold hover:text-yellow-300"
        >
          Faculty
        </Link>{" "}
        <Link
          to="/facilities"
          className="text-xl font-semibold hover:text-yellow-300"
        >
          Facilities
        </Link>{" "}
        <Link
          to="/fees"
          className="text-xl font-semibold hover:text-yellow-300"
        >
          Fees
        </Link>{" "}
        <Link
          to="/enquiry"
          className="text-xl font-semibold hover:text-yellow-300"
        >
          Enquiry
        </Link>{" "}
        <Link
          to="/contact"
          className="text-xl font-semibold hover:text-yellow-300"
        >
          Contact
        </Link>{" "}
      </div>{" "}
    </nav>
  );
}
