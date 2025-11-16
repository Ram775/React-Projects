import axios from "axios";
import React from "react";
import { useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);

  const photos = async () => {
    const res = await fetch("https://picsum.photos/v2/list?page=2&limit=100");
    const data = await res.json()
    
    console.log(data);
    setImages(data)
    
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center ">
        {images.map((elem, idx) => (
          <div key={idx} className="h-40 W-40">
            <img className="" src={elem.download_url} alt="" />
          </div>
        ))}
      </div>
      <button className="px-5 py-3 bg-amber-300" onClick={photos}>Search</button>
    </div>
  );
};

export default Gallery;
