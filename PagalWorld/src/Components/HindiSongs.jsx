import React from "react";

const HindiSongs = () => {
  const hindiSongs = [
    {
      name: "Yaad Piya Ki Aane Lagi Club Mix",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Yaad-Piya-Ki-Aane-Lagi-Club-Mix-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Kolkata Rap",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Kolkata-Rap-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Bharat Ka Baccha Baccha Club Mix",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Bharat-Ka-Baccha-Baccha-Club-Mix-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Kar Gayi Chull Club Mix",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Kar-Gayi-Chull-Club-Mix-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Titliaan Remix",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Titliaan-Remix-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Jhoom Barabar Jhoom Remix",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Jhoom-Barabar-Jhoom-Remix-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Dafli Wale Trap Remix",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Dafli-Wale-Trap-Remix-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Mat Ro Mere Dil Remix",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Mat-Ro-Mere-Dil-Remix-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Soniye Hiriye Remix",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Soniye-Hiriye-Remix-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Dil To Pagal Hai Remix",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Dil-To-Pagal-Hai-Remix-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Kaun Disha Mein",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Kaun-Disha-Mein-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Yeh Mera Husn",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Yeh-Mera-Husn-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Julmi Sawariya",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Julmi-Sawariya-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Jhamkudi Re Jhamkudi",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Jhamkudi-Re-Jhamkudi-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Aye Gori",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Aye-Gori-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Sukoon",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Sukoon-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Monica",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Monica-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Das Haasil Sau Baaki Acapella",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Das-Haasil-Sau-Baaki-Acapella-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Badli Si Hawa Hai",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Badli-Si-Hawa-Hai-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Sangwaari",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Sangwaari-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Underground",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Underground-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "I Am Ready",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/I-Am-Ready-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Ya Khudaya",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Ya-Khudaya-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Ul Jalool Ishq",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Ul-Jalool-Ishq-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Bol Kaffara Kya Hoga",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Bol-Kaffara-Kya-Hoga-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Bailamos",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Bailamos-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Tu Meri Poori Kahani",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Tu-Meri-Poori-Kahani-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Narayan Mil Jayega",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Narayan-Mil-Jayega-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Zaalim",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Zaalim-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Raanjhan",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Raanjhan-Song-DownloadPagalworldi.com_.co_.webp",
    },
  ];

  return (
    <div className="p-4">
      <div className="border-2 text-white text-2xl p-3 font-bold rounded-md bg-black mt-5">
        <h2>Hindi Songs</h2>
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5  gap-6">
        {hindiSongs.map((elem, index) => (
          <div
            key={index}
            className="cursor-pointer hover:scale-105 duration-300  rounded-xl overflow-hidden  text-white bg-blue-400"
          >
            <img
              className="h-50 object-cover w-full "
              src={elem.img}
              alt=""
            />
            <div className="p-4">
              <h3 className="text-lg truncate font-semibold mb-3">{elem.name}</h3>
              <audio className="h-10 w-full" controls controlsList="download">
                <source src="" type="audio"  /> 
              </audio>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HindiSongs;
