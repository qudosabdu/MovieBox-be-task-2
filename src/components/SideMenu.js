import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[120px] ${
        isOpen ? "bg-violet-600" : ""
      } text-white p-4 flex top-0`}
    >
      <div
        className={`absolute top-0 right-0 w-[120px] ${
          isOpen ? "bg-violet-600" : ""
        } text-white p-4 flex justify-center`}
      >
        <div className="text-center flex items-center">
          <a href="#">SignIn</a>
          <div className="mt-2" onClick={toggleMenu}>
            <HiOutlineMenuAlt4
              size={40}
              className="text-white bg-red-600 rounded-full p-2 cursor-pointer ml-2"
            />
          </div>
          {isOpen && <h1 className="text-2xl font-bold">Menu</h1>}
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
