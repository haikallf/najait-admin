import React from "react";
import FeedbackIcon from "@mui/icons-material/Feedback";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import { useHistory } from "react-router-dom";
import "./Sidebar.css";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const history = useHistory();
  const location = useLocation();
  const goToPenjahit = () => {
    history.replace("/penjahit");
  };

  const goToPesanan = () => {
    history.replace("/pesanan");
  };

  const goToFeedback = () => {
    history.replace("/feedback");
  };

  const handleLogout = () => {
    localStorage.clear();
    history.replace("/login");
  };

  return (
    <>
      {location.pathname != "/login" ? (
        <div className="sidebar">
          <div className="sidebar__logo">
            <Logo color="black" textColor="#266679" />
          </div>

          <div className="sidebar__options">
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

            <div className="sidebar__option" onClick={goToFeedback}>
              <div className="sidebar__optionLogo">
                <FeedbackIcon sx={{ color: "#4abdac" }} />
              </div>
              <div className="sidebar__optionTitle">Feedback</div>
            </div>

            <div className="sidebar__option" onClick={handleLogout}>
              <div className="sidebar__optionLogo">
                <LogoutIcon sx={{ color: "#4abdac" }} />
              </div>
              <div className="sidebar__optionTitle">Logout</div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Sidebar;
