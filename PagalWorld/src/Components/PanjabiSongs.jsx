import React from "react";

const PanjabiSongs = () => {
  const punjabiSongs2 = [
    {
      name: "Toronto",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Toronto-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Jatt Di Kahani",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Jatt-Di-Kahani-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Sira",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Sira-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Jinniyan",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Jinniyan-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Mf Gabhru",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Mf-Gabhru-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Black Diwali",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Black-Diwali-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Firottiye",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Firottiye-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Takk Lain De",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Takk-Lain-De-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Insane Love",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Insane-Love-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "ARTHI",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/ARTHI-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Firozpur Jail",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Firozpur-Jail-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Raavi De Kande",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Raavi-De-Kande-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Sundaa Ravaan",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Sundaa-Ravaan-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Aaj Na Bula Jatta Nu",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Aaj-Na-Bula-Jatta-Nu-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Dirty Money",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Dirty-Money-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Goriye",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Goriye-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Soohe Ve Cheere Waleya",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Soohe-Ve-Cheere-Waleya-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Sheesha",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Sheesha-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Dad Says",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Dad-Says-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Chai",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Chai-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Niharna",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Niharna-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Temperature",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Temperature-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Ishqa Ve",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Ishqa-Ve-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Nai Jana",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Nai-Jana-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "First Episode",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/First-Episode-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Kahda Soorma",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Kahda-Soorma-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Gucci",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Gucci-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Rishta",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Rishta-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Tere Naal Pyar Ho Gya",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Tere-Naal-Pyar-Ho-Gya-Mp3-SongPagalworldi.com_.co_.webp",
    },
    {
      name: "Main Ni Auna",
      img: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Main-Ni-Auna-Mp3-SongPagalworldi.com_.co_.webp",
    },
  ];

  return (
    <div className="p-4">
      <div className="border-2 text-white text-2xl p-3 font-bold rounded-md bg-black mt-5">
        <h2>Panjabi Songs</h2>
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 md:grid-col-4 lg:grid-cols-5 xl:grid-cols-5 gap-6">
        {punjabiSongs2.map((elem, index) => (
          <div
            key={index}
            className="cursor-pointer hover:scale-105 duration-300 rounded-xl overflow-hidden bg-green-300"
          >
            <img
              className="h-50 object-cover  w-full "
              src={elem.img}
              alt=""
            />
            <div className="p-4">
              <h3 className="text-lg truncate font-bold mb-3">{elem.name}</h3>
              <audio className="h-10 w-full" controls>
                <source src="" type="audio"/>
              </audio>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PanjabiSongs;
  