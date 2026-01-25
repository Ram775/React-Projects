import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { FaExchangeAlt } from "react-icons/fa";
import 'animate.css';

const Dog_img = () => {
    const Dog_URL = import.meta.env.VITE_DOG_URL;
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);

  const getImg = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        Dog_URL,
      );
      setImg(data.message);
      
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getImg();
  }, []);

  return (
    <div className="bg-zinc-400 min-h-screen w-full">
      <div className="w-9/12 min-h-screen bg-white mx-auto">
        <h1 className="text-2xl font-bold text-center py-12">
          {" "}
          🐕 Random Dog Images
        </h1>
        {loading === true && (
          <div className="text-center">
            <small className=" text-center justify-center text-xl font-bold">
              Loading.......
            </small>
          </div>
        )}
        {loading === false && (
          <div className=" mx-auto animate__animated  animate__fadeInDown mb-8  overflow-hidden  h-100 rounded-xl w-3/6">
            <img
              className="w-full h-full bg-cover bg-center object-cover object-center"
              src={img}
              alt="Dog Img"
            />
          </div>
        )}
        <div className=" w-full left-0 bottom-20 fixed flex items-center justify-center">
          <button
            onClick={getImg}
            className="text-center cursor-pointer flex flex-col items-center  hover:bg-green-600 duration-200   transition-transform hover:scale-105 text-2xl text-white font-semibold px-4 py-3  bg-blue-500  rounded"
          >
            <FaExchangeAlt />
                Change Img
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Dog_img;
