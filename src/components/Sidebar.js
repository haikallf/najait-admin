import React from "react";
import LaptopIcon from "@mui/icons-material/Laptop";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">Najait</div>

      <div className="sidebar__options">
        <div className="sidebar__option">
          <div className="sidebar__optionLogo">
            <LaptopIcon sx={{ color: "#4abdac" }} />
          </div>
          <div className="sidebar__optionTitle">Dashboard</div>
        </div>

        <div className="sidebar__option">
          <div className="sidebar__optionLogo">
            <PersonIcon sx={{ color: "#4abdac" }} />
          </div>
          <div className="sidebar__optionTitle">Tailor</div>
        </div>

        <div className="sidebar__option">
          <div className="sidebar__optionLogo">
            <ShoppingCartIcon sx={{ color: "#4abdac" }} />
          </div>
          <div className="sidebar__optionTitle">Orders</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
