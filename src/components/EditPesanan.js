import React, { useEffect, useState } from "react";
import "./EditPesanan.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { Button, Grid, MenuItem, Typography } from "@mui/material";
import TealTextField from "./TealTextField";
import { useParams } from "react-router-dom";
import { pesanan as rows } from "../globalConfig";

export default function EditPesanan() {
  // const TealButton = styled(Button)(() => ({
  //   "& .MuiButton-contained": {
  //     backgroundColor: "#266679",
  //   },
  // }));

  const { id } = useParams();
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jenis, setJenis] = useState("");
  const [pakaian, setPakaian] = useState("");
  const [catatan, setCatatan] = useState("");
  const [waktu_pesan, setWaktu_pesan] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    getPesananById(id, rows);
  }, []);

  const getPesananById = (id, rows) => {
    const pesanan = rows[id - 1];
    setName(pesanan?.name);
    setFirstName(pesanan?.firstName);
    setLastName(pesanan?.lastName);
    setJenis(pesanan?.jenis);
    setPakaian(pesanan?.pakaian);
    setCatatan(pesanan?.catatan);
    setWaktu_pesan(pesanan.waktu_pesan);
    setStatus(pesanan?.status);
  };

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className="editPesanan">
      <div className="editPesanan__top">
        <div className="editPesanan__title">EDIT PESANAN</div>
      </div>

      <div className="editPesanan__form">
        <div className="editPesanan__pesananInfo">
          <p>Informasi Pesanan</p>
          <div className="editPesanan__double">
            <TealTextField
              sx={{ flex: "0.49" }}
              id="id_order"
              name="id_order"
              label="ID Order"
              variant="outlined"
              disabled
              value={id}
            />
            <TealTextField
              sx={{ flex: "0.49" }}
              id="status"
              name="status"
              label="Status"
              value={status}
              onChange={handleStatus}
              select
            >
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="ongoing">Ongoing</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </TealTextField>
          </div>
          <div className="editPesanan__single">
            <TealTextField
              fullWidth
              id="name"
              name="name"
              label="Nama Penjahit"
              variant="outlined"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="editPesanan__double">
            <TealTextField
              sx={{ flex: "0.49" }}
              id="firstName"
              name="firstName"
              label="Nama Depan Pengguna"
              variant="outlined"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <TealTextField
              sx={{ flex: "0.49" }}
              id="lastName"
              name="lastName"
              label="Nama Belakang Pengguna"
              variant="outlined"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="editPesanan__double">
            <TealTextField
              sx={{ flex: "0.49" }}
              id="jenis"
              name="jenis"
              label="Jenis Reparasi"
              variant="outlined"
              value={jenis}
              onChange={(e) => {
                setJenis(e.target.value);
              }}
            />
            <TealTextField
              sx={{ flex: "0.49" }}
              id="pakaian"
              name="pakaian"
              label="Pakaian"
              variant="outlined"
              value={pakaian}
              onChange={(e) => {
                setPakaian(e.target.value);
              }}
            />
          </div>
          <div className="editPesanan__single">
            <TealTextField
              fullWidth
              multiline
              rows={9}
              id="catatan"
              name="catatan"
              label="Catatan"
              variant="outlined"
              value={catatan}
              onChange={(e) => {
                setCatatan(e.target.value);
              }}
            />
          </div>
          <div className="editPesanan__single">
            <TealTextField
              fullWidth
              id="waktu_pesan"
              name="waktu_pesan"
              label="Waktu Pesan"
              variant="outlined"
              value={waktu_pesan}
              onChange={(e) => {
                setWaktu_pesan(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="editPesanan__submitButton">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#266679",
              "&:hover": { backgroundColor: "#266679" },
            }}
            component="span"
          >
            Edit Pesanan
          </Button>
        </div>
      </div>
    </div>
  );
}
