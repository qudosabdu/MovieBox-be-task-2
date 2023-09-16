import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed top-0 right-0 h-full w-[200px] ${isOpen ? 'bg-violet-600' : ''} text-white p-4 flex top-0`}>
      <div className="flex">
        <a href="#">Sign In</a>
        <AiOutlineMenu size={30} className="cursor-pointer ml-2" onClick={toggleMenu} />
        {isOpen && <h1 className="text-2xl font-bold">Menu</h1>}
      </div>
    </div>
  );
};

export default SideMenu;
