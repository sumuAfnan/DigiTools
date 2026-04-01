import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import DigiTools_logo from "../../assets/products/DigiTools_log.png";

const Navbar = ({Cards , totalPrice }) => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("menu.json");
      const data = await response.json();

      setMenuData(data);
    };

    getData();
  }, []);

  return (
    <div>
      <div className="navbar shadow-lg px-4">
        {/* LEFT */}
        <div className="navbar-start">
        

          {/* Logo */}
          <img src={DigiTools_logo} alt="" className="w-30 md:w-40 h-10" />
        </div>
     
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-8 px-1 text-lg font-bold">
            {menuData.map((nav) => (
              <NavLink key={nav.id} nav={nav} />
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-3 md:gap-5">
          {/* Cart */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{Cards.length}</span>
                
              </div>
            </div>

            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">Items : {Cards.length} </span>
                <span className="text-info">Subtotal: $ {totalPrice}</span>
              </div>
            </div>
          </div>

          <a className="hidden md:block font-bold text-lg cursor-pointer">
            Login
          </a>

          <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white text-sm md:text-base px-4 md:px-6">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
