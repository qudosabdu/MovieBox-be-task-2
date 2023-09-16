import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';
import { IoMdCheckboxOutline, IoMdLock } from 'react-icons/io';
import { AiOutlineGlobal } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto">
        <div className="flex justify-center mb-6 text-black">
          <a href="#" className="mr-4">
            <FaFacebook size={32} />
          </a>
          <a href="#" className="mr-4">
            <FaInstagram size={32} />
          </a>
          <a href="#" className="mr-4">
            <FaTwitter size={32} />
          </a>
          <a href="#">
            <FaYoutube size={32} />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mb-6 font-medium">
          <a href="#" className="mr-4">
            Condition of use
          </a>
          <a href="#" className="mr-4">
            Privacy and policy
          </a>
          <a href="#">
            Press Room
          </a>
        </div>

        <div className="flex items-center justify-center">
          <IoMdCheckboxOutline size={20} className="mr-2" />
          <span className="mr-4">2023 Moviebox by ariana aka prayyudha</span>
          <IoMdLock size={20} className="mr-2" />
          <AiOutlineGlobal size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
