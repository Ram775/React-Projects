import React from "react";

const Haryanvi = () => {
  const haryanviSongs = [
    {
      name: "Mithi Bole Bangro",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Mithi-Bole-Bangro-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Dukh Mota",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Dukh-Mota-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "DADSON",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/DADSON-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Neend Na Aandi Ke",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Neend-Na-Aandi-Ke-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Ghungroo 2",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Ghungroo-2-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Smarun Bande",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Smarun-Bande-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Padosan",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Padosan-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Nachan Dyo Naar Ne",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Nachan-Dyo-Naar-Ne-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Payal Karwachauth Ki",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Payal-Karwachauth-Ki-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Pajeb Ki Khanak",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Pajeb-Ki-Khanak-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Rangdari",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Rangdari-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Chambal Mein Ferrari",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Chambal-Mein-Ferrari-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Zindagi",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Zindagi-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "52 Gaj Ka Remix",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/52-Gaj-Ka-Remix-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Born Jaat",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Born-Jaat-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Desi Hood",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Desi-Hood-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Haryana Drip",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Haryana-Drip-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Rare",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Rare-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Rohtak 3",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Rohtak-3-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Nagar Nigam Rohtak",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Nagar-Nigam-Rohtak-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Confuse Darling",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Confuse-Darling-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Mrignayan",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Mrignayan-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Kacha Badam",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Kacha-Badam-Song-Download-Mp3Pagalworldi.com_.co_.webp",
    },
    {
      name: "Falani",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Falani-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Chail Chabila",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Chail-Chabila-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Rail Bareli Ki",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Rail-Bareli-Ki-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Bateu",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Bateu-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Chalu Matak Ke",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Chalu-Matak-Ke-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Kholu Teri Pol",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Kholu-Teri-Pol-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Dhunge Pe Pistol",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Dhunge-Pe-Pistol-Mp3-SongPagalworldi.com_.co_.webp",
    },
  ];

  return (
    <div className="p-4">
      <div className="border-2 text-white text-2xl p-3 font-bold rounded-md bg-black mt-5">
        <h2>Haryanvi Songs</h2>
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6">
        {haryanviSongs.map((elem, index) => (
          <div
            key={index}
            className=" cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <img
              className="h-50 object-cover w-full "
              src={elem.img}
              alt=""
            />
            <div className="p-4">
              <h3 className="text-lg truncate font-semibold mb-3">{elem.name}</h3>
              <audio className="w-full h-10 " controls controlsList="nodownload , noplaybackspeed">
                  <source src="" type="audio/mpeg" />
              </audio>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Haryanvi;



