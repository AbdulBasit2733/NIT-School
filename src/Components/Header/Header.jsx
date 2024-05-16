import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <nav className="px-10 flex justify-between items-center py-5">
      <h1 className="text-3xl font-bold text-[#4747D7]">Izone</h1>
      {isOpen && (
        <ul className="absolute top-14  w-full left-0 space-y-8 pl-10 pt-5 font-semibold">
          <li className="hover:text-[#4747D7]">Home</li>
          <li className="hover:text-[#4747D7]">About</li>
          <li className="hover:text-[#4747D7]">Academics</li>
          <li className="hover:text-[#4747D7]">Activities</li>
          <li className="hover:text-[#4747D7]">Contact</li>
          <div className="flex justify-start gap-5">
            <a>
              <AiFillFacebook />
            </a>
            <a>
              <AiFillInstagram />
            </a>
          </div>
        </ul>
      )}
      <ul className="hidden md:flex justify-between items-center space-x-3 font-semibold ">
        <li className="hover:text-indigo-600 text-sm">Home</li>
        <li className="hover:text-indigo-600 text-sm">About</li>
        <li className="hover:text-indigo-600 text-sm">Academics</li>
        <li className="hover:text-indigo-600 text-sm">Activities</li>
        <li className="hover:text-indigo-600 text-sm">Contact</li>
      </ul>
      <div className="md:flex gap-5 hidden">
        <span>
          <a href="/">
            <AiFillFacebook className="text-indigo-600 text-2xl hover:text-black" />
          </a>
        </span>
        <span>
          <a href="/">
            <AiFillInstagram className="text-indigo-600 text-2xl hover:text-black" />
          </a>
        </span>
      </div>

      <IoMdMenu onClick={handleMenu} className="md:hidden text-3xl" />
    </nav>
  );
};

export default Header;
