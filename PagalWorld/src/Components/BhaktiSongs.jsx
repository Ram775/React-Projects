const BhaktiSongs = () => {
  return (
    <div className="p-4">
      <div className="border-2 text-white text-2xl p-3 font-bold rounded-md bg-gradient-to-r from-purple-600 to-blue-600 mt-5 text-center">
        <h2>Recently Added Songs</h2>
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {hindiSongs.map((elem, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <img
              className="h-50 w-full object-cover"
              src={elem.img}
              alt={elem.name}
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 truncate mb-3">
                {elem.name}
              </h3>

              <audio className="w-full h-10 " controls controlsList="download">
                <source src={elem.mp3} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BhaktiSongs;
