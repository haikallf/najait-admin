import * as React from "react";
import "./TambahPenjahit.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TambahPenjahit() {
  return (
    <div className="tambahPenjahit">
      <div className="tambahPenjahit__top">
        <div className="tambahPenjahit__title">TAMBAH PENJAHIT</div>
      </div>

      <div className="tambahPenjahit__form">
        <div className="tambahPenjahit__userInfo">
          <p>Informasi Penjahit</p>
          <div className="tambahPenjahit__userInfoNama">
            <TextField
              sx={{ flex: "0.49" }}
              id="outlined-basic"
              label="Nama Depan"
              variant="outlined"
            />
            <TextField
              sx={{ flex: "0.49" }}
              id="outlined-basic"
              label="Nama Belakang"
              variant="outlined"
            />
          </div>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
        </div>
        <div className="tambahPenjahit__contactInfoTop">
          <p>Informasi Kontak</p>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Alamat"
            variant="outlined"
          />
        </div>
        <div className="tambahPenjahit__contactInfoBottom">
          <TextField
            sx={{ flex: "0.32" }}
            id="outlined-basic"
            label="Kota"
            variant="outlined"
          />
          <TextField
            sx={{ flex: "0.32" }}
            id="outlined-basic"
            label="Provinsi"
            variant="outlined"
          />
          <TextField
            sx={{ flex: "0.32" }}
            id="outlined-basic"
            label="Kode Pos"
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
}
