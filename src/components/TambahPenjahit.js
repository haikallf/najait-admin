import * as React from "react";
import "./TambahPenjahit.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

export default function TambahPenjahit() {
  const TealTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#266679",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#266679",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#266679",
      },
      "&:hover fieldset": {
        borderColor: "#266679",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#266679",
      },
    },
  });

  return (
    <div className="tambahPenjahit">
      <div className="tambahPenjahit__top">
        <div className="tambahPenjahit__title">TAMBAH PENJAHIT</div>
      </div>

      <div className="tambahPenjahit__form">
        <div className="tambahPenjahit__userInfo">
          <p>Informasi Penjahit</p>
          <div className="tambahPenjahit__userInfoNama">
            <TealTextField
              sx={{ flex: "0.49" }}
              id="outlined-basic"
              label="Nama Depan"
              variant="outlined"
            />
            <TealTextField
              sx={{ flex: "0.49" }}
              id="outlined-basic"
              label="Nama Belakang"
              variant="outlined"
            />
          </div>
          <TealTextField
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
        </div>
        <div className="tambahPenjahit__contactInfoTop">
          <p>Informasi Kontak</p>
          <TealTextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Alamat"
            variant="outlined"
          />
        </div>
        <div className="tambahPenjahit__contactInfoBottom">
          <TealTextField
            sx={{ flex: "0.32" }}
            id="outlined-basic"
            label="Kota"
            variant="outlined"
          />
          <TealTextField
            sx={{ flex: "0.32" }}
            id="outlined-basic"
            label="Provinsi"
            variant="outlined"
          />
          <TealTextField
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
