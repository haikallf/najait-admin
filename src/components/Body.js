import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./Body.css";
import Penjahit from "./Penjahit";
import Pesanan from "./Pesanan";
import TambahPenjahit from "./TambahPenjahit";
import EditPenjahit from "./EditPenjahit";
import EditPesanan from "./EditPesanan";
import Login from "./Login";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Body() {
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    checkAuthAdmin();
  }, []);

  const checkAuthAdmin = () => {
    if (!localStorage.getItem("token") || localStorage.getItem("token") == "") {
      history.replace("/login");
    }
  };
  return (
    <div
      className="body"
      style={location.pathname == "/login" ? { flex: 1 } : { flex: 0.9 }}
    >
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/penjahit" component={Penjahit} />
        <Route path="/editpesanan/:id" component={EditPesanan} />
        <Route path="/pesanan" component={Pesanan} />
        <Route path="/tambahpenjahit" component={TambahPenjahit} />
        <Route path="/editpenjahit/:id" component={EditPenjahit} />
        <Redirect to="penjahit" />
      </Switch>
    </div>
  );
}

export default Body;
