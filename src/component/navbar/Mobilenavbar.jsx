import { useState } from "react";
import React from "react";
import nftmarket from "../../assets/NFT.market.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Mobilenavbar = () => {
  const [openlist, setOpenlist] = useState(false);
  const handledrop = () => {
    setOpenlist((prev) => !prev);
  };
  return (
    <div>
      <nav className="navv">
        <img src={nftmarket} alt="" />
        <button onClick={handledrop}>
          {" "}
          menu
          {openlist ? MdCancel : GiHamburgerMenu}
        </button>
      </nav>
      {openlist && (
        <ul>
          <li>
            {" "}
            <NavLink to="/collection" className="collect">
              Collection
            </NavLink>
          </li>
          <li>
            <NavLink to="/community" className="collect">
              Community
            </NavLink>
          </li>
          <li>
            <NavLink to="/create" className="collect">
              Create
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="collect">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="collect">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/signin" className="collect">
              sign in
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" className="collect">
              sign up
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Mobilenavbar;
