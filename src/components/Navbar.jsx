import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavDrawerOpen((prev) => !prev);
  };
  return (
    <nav className="sticky top-0 z-50 border-b py-3 backdrop-blur-lg border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex space-x-12 ml-14">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-between space-x-12">
            <a href="#" className="border py-2 px-3 rounded-md">
              Sign in
            </a>
            <a
              href="#"
              className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={handleNavToggle}>
              {isNavDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isNavDrawerOpen && (
          <div className="fixed z-20 right-0 w-full p-12 bg-neutral-900 flex flex-col items-center justify-center lg:hidden">
            <ul>
              {navItems.map((item,index) => (
                <li className="py-4" key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
            <a href="#" className="border py-2 px-3 rounded-md">
              Sign in
            </a>
            <a
              href="#"
              className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
            >
              Create an account
            </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
