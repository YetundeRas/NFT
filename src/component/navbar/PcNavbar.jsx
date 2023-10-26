import { React, useState } from "react";
import nftmarket from "../../assets/NFT.market.png";
import { NavLink } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { useState } from "react";

const PcNavbar = () => {

  return (
    <div>
      <div className="nav">
        <div className="logo">
          <img src={nftmarket} alt="nft market" />
        </div>
        <div className="list">
          <NavLink to="/collection" className="collect">
            Collection
          </NavLink>
          <NavLink to="/community" className="collect">
            Community
          </NavLink>
          <NavLink to="/create" className="collect">
            Create
          </NavLink>
          <NavLink to="/about" className="collect">
            About
          </NavLink>
          <NavLink to="/" className="collect">
            Home
          </NavLink>
        </div>
        <div className="lists">
          <NavLink to="/signin" className="collect">
            sign in
          </NavLink>
          <NavLink to="/signup" className="collect">
            sign up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PcNavbar;
