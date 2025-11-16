import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {


  return (
    <div className="pb-6 border-b-2 ">
      <div className="mt-5 flex items-center justify-between ">
        <div className="">
          <Link to={'/'} className='text-5xl font-["Ubuntu"] font-bold'>Pagalworld</Link>
        </div>
        <div className=" rounded-md  w-50 text-xl flex  items-center justify-between">
          <input
            type="text"
            placeholder="Search "
            className="outline-none"
          />
          <IoMdSearch className="text-xl font-bold" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 text-lg font-bold">
          <Link to={'/recently'}>Recently songs</Link>
          <Link to={'/hindi'}>Hindi pop songs</Link>
          <Link to={'/Bollywood'}>Bollywood songs</Link>
          <Link to={'/panjabi'}>Punjabi songs</Link>
          <Link to={'/haryanvi'}>Haryanvi songs</Link>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
