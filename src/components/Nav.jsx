import { CiSearch } from "react-icons/ci";
import { LuSettings2 } from "react-icons/lu";
import { IoHeartSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Nav = () => {
  return (
    <header className="mb-10">
      <nav className="flex justify-between items-center">
        <div className="sm:flex justify-between items-center ml-4 sm:ml-10">
          <div>
            <h1 className="text-blue-700 font-extrabold mt-4 text-3xl">
              RentalCars
            </h1>
          </div>
          <div className="flex justify-center sm:justify-around items-center sm:ml-24 border-2 mt-5 h-11 rounded-xl w-72 sm:rounded-full sm:w-[450px]">
            <div className="flex sm:mr-0 mr-2">
              <button>
                <CiSearch size={24} color="gray" />
              </button>
            </div>
            <div>
              <input type="text" placeholder="Search something here" />
            </div>
            <div className="absolute right-3  sm:relative sm:right-0 sm:flex">
              <button className="border-2 rounded-xl sm:border-0 p-2">
                <LuSettings2 size={24} color="gray" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end mr-2 sm:mr-6 mt-5">
          <div className="ml-6 rounded-full p-2 hidden sm:flex" style={{border: '1px solid gray'}}>
            <button>
              <IoHeartSharp size={24} color="gray" />
            </button>
          </div>
          <div className="ml-6 rounded-full p-2 hidden sm:flex" style={{border: '1px solid gray'}}>
            <button>
              <IoIosNotifications size={24} color="gray" />
            </button>
          </div>
          <div className="ml-6 rounded-full p-2 hidden sm:flex" style={{border: '1px solid gray'}}>
            <button>
              <IoSettingsSharp size={24} color="gray" />
            </button>
          </div>
          <div className="sm:ml-6 rounded-full p-2 top-4  flex absolute sm:top-0 sm:relative sm:flex " style={{border: '1px solid gray'}}>
            <button>
              <CgProfile size={24} color="gray" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
