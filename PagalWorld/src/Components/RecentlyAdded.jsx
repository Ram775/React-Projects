import React from "react";

const RecentlyAdded = () => {
const songs = [
  {
    name: "Aaj Ki Raat",
    imgUrl: "https://pagalworldi.com.co/wp-content/uploads/2025/09/aaj-ki-raat-400x400.webp",
    mp3Url: "https://pagalworldi.com.co/wp-content/uploads/2025/09/aaj-ki-raat-400x400.webp.mp3",
  },
  {
    name: "Toronto",
    imgUrl: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Toronto-Mp3-SongPagalworldi.com_.co_.webp",
    mp3Url: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Toronto-Mp3-SongPagalworldi.com_.co_.webp.mp3",
  },
  {
    name: "Jatt Di Kahani",
    imgUrl: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Jatt-Di-Kahani-Mp3-SongPagalworldi.com_.co_.webp",
    mp3Url: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Jatt-Di-Kahani-Mp3-SongPagalworldi.com_.co_.webp.mp3",
  },
  {
    name: "Sira",
    imgUrl: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Sira-Mp3-SongPagalworldi.com_.co_.webp",
    mp3Url: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Sira-Mp3-SongPagalworldi.com_.co_.webp.mp3",
  },
  {
    name: "Har Har Shambhu Shiv Mahadeva",
    imgUrl: "https://pagalworldi.com.co/wp-content/uploads/2025/08/Har-Har-Shambhu-Shiv-Mahadeva-Mp3-SongPagalworldi.com_.co_.webp",
    mp3Url: "https://pagalworldi.com.co/wp-content/uploads/2025/08/Har-Har-Shambhu-Shiv-Mahadeva-Mp3-SongPagalworldi.com_.co_.webp.mp3",
  },
  {
    name: "Aura Farming",
    imgUrl: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Aura-Farming-Mp3-SongPagalworldi.com_.co_.webp",
    mp3Url: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Aura-Farming-Mp3-SongPagalworldi.com_.co_.webp.mp3",
  },
  {
    name: "Jinniyan",
    imgUrl: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Jinniyan-Mp3-SongPagalworldi.com_.co_.webp",
    mp3Url: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Jinniyan-Mp3-SongPagalworldi.com_.co_.webp.mp3",
  },
  {
    name: "Dhurandhar Title Track",
    imgUrl: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Dhurandhar-Title-Track-Mp3-SongPagalworldi.com_.co_.webp",
    mp3Url: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Dhurandhar-Title-Track-Mp3-SongPagalworldi.com_.co_.webp.mp3",
  },
  {
    name: "Hum Bas Tere Hain",
    imgUrl: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Hum-Bas-Tere-Hain-Mp3-SongPagalworldi.com_.co_.webp",
    mp3Url: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Hum-Bas-Tere-Hain-Mp3-SongPagalworldi.com_.co_.webp.mp3",
  },
  {
    name: "Tum Saath Ho Toh",
    imgUrl: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Tum-Saath-Ho-Toh-Mp3-SongPagalworldi.com_.co_.webp",
    mp3Url: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Tum-Saath-Ho-Toh-Mp3-SongPagalworldi.com_.co_.webp.mp3",
  },
  {
    name: "Tere Ishk Mein",
    imgUrl: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Tere-Ishk-Mein-Mp3-SongPagalworldi.com_.co_.webp",
    mp3Url: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Tere-Ishk-Mein-Mp3-SongPagalworldi.com_.co_.webp.mp3",
  },
  {
    name: "Mf Gabhru",
    imgUrl: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Mf-Gabhru-Mp3-SongPagalworldi.com_.co_.webp",
    mp3Url: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Mf-Gabhru-Mp3-SongPagalworldi.com_.co_.webp.mp3",
  },
  {
    name: "Husan Tera",
    imgUrl: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Husan-Tera-Mp3-SongPagalworldi.com_.co_.webp",
    mp3Url: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Husan-Tera-Mp3-SongPagalworldi.com_.co_.webp.mp3",
  },
  {
    name: "Black Diwali",
    imgUrl: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Black-Diwali-Mp3-SongPagalworldi.com_.co_.webp",
    mp3Url: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Black-Diwali-Mp3-SongPagalworldi.com_.co_.webp.mp3",
  },
  {
    name: "Firottiye",
    imgUrl: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Firottiye-Mp3-SongPagalworldi.com_.co_.webp",
    mp3Url: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Firottiye-Mp3-SongPagalworldi.com_.co_.webp.mp3",
  },
  {
    name: "Takk Lain De",
    imgUrl: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Takk-Lain-De-Mp3-SongPagalworldi.com_.co_.webp",
    mp3Url: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Takk-Lain-De-Mp3-SongPagalworldi.com_.co_.webp.mp3",
  },
  {
    name: "Insane Love",
    imgUrl: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Insane-Love-Mp3-SongPagalworldi.com_.co_.webp",
    mp3Url: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Insane-Love-Mp3-SongPagalworldi.com_.co_.webp.mp3",
  },
  {
    name: "Singari",
    imgUrl: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Singari-Mp3-SongPagalworldi.com_.co_.webp",
    mp3Url: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Singari-Mp3-SongPagalworldi.com_.co_.webp.mp3",
  },
  {
    name: "Abdi Abdi",
    imgUrl: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Abdi-Abdi-Mp3-SongPagalworldi.com_.co_.webp",
    mp3Url: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Abdi-Abdi-Mp3-SongPagalworldi.com_.co_.webp.mp3",
  },
  {
    name: "Dil Dil Dil",
    imgUrl: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Dil-Dil-Dil-Mp3-SongPagalworldi.com_.co_.webp",
    mp3Url: "https://pagalworldi.com.co/wp-content/uploads/2025/10/Dil-Dil-Dil-Mp3-SongPagalworldi.com_.co_.webp.mp3",
  },
  {
    name: "Tell Me Honestly",
    imgUrl: "https://pagalworldi.com.co/wp-content/uploads/2025/08/Tell-Me-Honestly-Mp3-SongPagalworldi.com_.co_.webp",
    mp3Url: "https://pagalworldi.com.co/wp-content/uploads/2025/08/Tell-Me-Honestly-Mp3-SongPagalworldi.com_.co_.webp.mp3",
  },
  {
    name: "Jaane Meriye",
    imgUrl: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Jaane-Meriye-Mp3-SongPagalworldi.com_.co_.webp",
    mp3Url: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Jaane-Meriye-Mp3-SongPagalworldi.com_.co_.webp.mp3",
  },
  {
    name: "Punjab",
    imgUrl: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Punjab-Mp3-SongPagalworldi.com_.co_.webp",
    mp3Url: "https://pagalworldi.com.co/wp-content/uploads/2025/09/Punjab-Mp3-SongPagalworldi.com_.co_.webp.mp3",
  },
];


  return (
    <div className="p-4">
      <div className="border-2 text-white text-2xl p-3 font-bold rounded-md bg-black mt-5">
        <h2>Recently Added Songs</h2>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 md:grid-col-4 lg:grid-cols-5 xl:grid-cols-5">
        {songs.map((item, index) => (
          <div
            key={index}
            className=" mt-5 overflow-hidden hover:scale-105 duration-300 cursor-pointer  rounded-xl bg-blue-300"
          >
            <div className="h-50 w-full  ">
              <img
                className="object-top object-cover h-full w-full "
                src={item.imgUrl}
                alt=""
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg truncate font-semibold mb-3">
                {item.name}
              </h3>
              <audio className="h-10 w-full text-black" controls>
                <source src={item.mp3Url} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;
