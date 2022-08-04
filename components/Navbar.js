import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center p-4 font-sans bg-black">
        <Link href="/">
          <a className="ml-3 mr-auto md:ml-16">
            <span className="text-xl tracking-wider text-white">
              Pragnesh Anekal
            </span>
          </a>
        </Link>
        <div className="flex ml-auto md:mr-12">
        <Link href="/">
            <a className="px-4 py-2 tracking-wide text-white border-2 border-transparent rounded md:mx-4 hover:border-white hover:text-white">
            Home
            </a>
        </Link>
        <Link href="/about">
            <a className="px-4 py-2 tracking-wide text-white border-2 border-transparent rounded md:mx-4 hover:border-white hover:text-white">
            About
            </a>
        </Link>
        </div>
      </nav>
    </>
  );
};