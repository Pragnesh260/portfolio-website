import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center just bg-black p-3 font-sans">
        <Link href="/">
          <a className="items-center p-2 ml-6 md:ml-11 ">
            <span className="text-xl text-white font-semibold tracking-wider">
              Pragnesh Anekal
            </span>
          </a>
        </Link>
        <div className="flex ml-auto items-start h-auto">
        <Link href="/">
            <a className="w-auto px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white ">
            Home
            </a>
        </Link>
        <Link href="/about">
            <a className="w-auto px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
            About
            </a>
        </Link>
        </div>
      </nav>
    </>
  );
};