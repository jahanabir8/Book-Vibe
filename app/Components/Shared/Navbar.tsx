'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
// import React from "react";
import Logo from '@/public/book.ico'
import Image from "next/image";


const Navbar = () => {
  const pathName = usePathname()
  const links = (
    <>
      <li>
        <Link className={pathName === '/books' ? 'text-[#23BE0A] border-2 border-[#23BE0A]' : ''} href="/books">Books</Link>
      </li>
      <li>
        <Link className={pathName === '/listedbooks' ? 'text-[#23BE0A] border-2 border-[#23BE0A]' : ''} href="/listedbooks">Listed Books</Link>
      </li>
      <li>
        <Link className={pathName === '/pagestoread' ? 'text-[#23BE0A] border-2 border-[#23BE0A]' : ''} href="/pagestoread">Pages to Read</Link>
      </li>
    </>
  );
  return (
    <div className=" shadow-sm bg-base-100">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href='/' 
          // className="btn btn-ghost text-xl"
          className="flex items-center gap-1 cursor-pointer font-bold text-black"
          >
            <Image src={Logo} alt="logo"></Image>
            Book Vibe
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex gap-2">
          <button className="btn btn-success">Sign In</button>
          <button className="btn btn-info">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
