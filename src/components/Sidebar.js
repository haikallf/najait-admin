import React from "react";
import LaptopIcon from "@mui/icons-material/Laptop";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useHistory } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const history = useHistory();
  const goToPenjahit = () => {
    history.push("/penjahit");
  };

  const goToPesanan = () => {
    history.push("/pesanan");
  };

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

        <div className="sidebar__option" onClick={goToPenjahit}>
          <div className="sidebar__optionLogo">
            <PersonIcon sx={{ color: "#4abdac" }} />
          </div>
          <div className="sidebar__optionTitle">Penjahit</div>
        </div>

        <div className="sidebar__option" onClick={goToPesanan}>
          <div className="sidebar__optionLogo">
            <ShoppingCartIcon sx={{ color: "#4abdac" }} />
          </div>
          <div className="sidebar__optionTitle">Pesanan</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
