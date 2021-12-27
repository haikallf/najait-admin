import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./Body.css";
import Penjahit from "./Penjahit";
import Pesanan from "./Pesanan";
import TambahPenjahit from "./TambahPenjahit";
import EditPenjahit from "./EditPenjahit";
import EditPesanan from "./EditPesanan";

function Body() {
  return (
    <div className="body">
      <Switch>
        <Route exact path="/" component={Penjahit} />
        <Route path="/penjahit" component={Penjahit} />
        <Route path="/editpesanan" component={EditPesanan} />
        <Route path="/pesanan" component={Pesanan} />
        <Route path="/tambahpenjahit" component={TambahPenjahit} />
        <Route path="/editpenjahit" component={EditPenjahit} />
      </Switch>
    </div>
  );
}

export default Body;
