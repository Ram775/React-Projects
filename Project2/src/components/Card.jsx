import { CiBookmark } from "react-icons/ci";

const Card = ({ values, i }) => {
  const { companyName, logo, payPerHour, type, position } = values;

  return (
    <div
      className="h-[400px] w-80 rounded-2xl bg-amber-50 shadow-lg hover:scale-105 transition-transform"
    >
      {/* Top Section */}
      <div className="flex justify-between p-5">
        <div className="h-20 w-20 overflow-hidden rounded-full">
          <img className="h-full w-full object-cover" src={logo} alt={companyName} />
        </div>
        <button className="bg-zinc-200 flex items-center gap-1 px-3 py-1 text-md rounded-2xl">
          Save <CiBookmark className="text-xl" />
        </button>
      </div>

      {/* Middle Section */}
      <div className="p-5 flex flex-col justify-between h-[250px]">
        <div>
          <h3 className="font-semibold text-2xl">
            {companyName}
            <span className="text-xs text-gray-500 ml-2">5 days ago</span>
          </h3>
          <h2 className="text-3xl font-bold mt-1">{position}</h2>

          <div className="flex items-center mt-2 gap-2 flex-wrap">
            {type.map((t, index) => (
              <h6
                key={index}
                className="bg-zinc-200 px-2 py-1 rounded-2xl text-sm text-gray-700"
              >
                {t}
              </h6>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between border-t mt-3 pt-3">
          <div>
            <h2 className="text-xl font-semibold">${payPerHour}/hour</h2>
            <h3 className="text-xs text-gray-600">Mumbai, India</h3>
          </div>
          <button className="px-3 py-1 bg-black text-white font-semibold text-md rounded">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
