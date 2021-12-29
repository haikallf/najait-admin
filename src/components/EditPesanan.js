import React, { useEffect, useState } from "react";
import "./EditPesanan.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { Button, Grid, MenuItem, Typography } from "@mui/material";
import TealTextField from "./TealTextField";
import { useParams } from "react-router-dom";
import axios from "axios";
import { url } from "../globalConfig";

export default function EditPesanan() {
  // const TealButton = styled(Button)(() => ({
  //   "& .MuiButton-contained": {
  //     backgroundColor: "#266679",
  //   },
  // }));

  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jenis, setJenis] = useState("");
  const [pakaian, setPakaian] = useState("");
  const [catatan, setCatatan] = useState("");
  const [waktu_pesan, setWaktu_pesan] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    getPesananById();
  }, []);

  const getPesananById = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(url + `/order/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setName(response.data.inbound.inboundIdPenjahit);
    setEmail(response.data.User.email);
    setJenis(response.data.jenis);
    setPakaian(response.data.pakaian);
    setCatatan(response.data.catatan);
    setWaktu_pesan(response.data.waktu_pesan);
    setStatus(response.data.inbound?.status);
  };

  const [rows, setRows] = useState([]);
  useEffect(() => {
    getPenjahit();
  }, [rows]);

  const getPenjahit = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(url + "/penjahit", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setRows(response.data);
    console.log(rows);
  };

  // const editPesananById = () => {
  //   const token = localStorage.getItem("token");
  //   const response = await axios.put(url + `/order/${id}`, {
  //     name: name,
  //     email: email,
  //     jenis: jenis,

  //   },{
  //     headers: { Authorization: `Bearer ${token}` },
  //   });
  // }
  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className="editPesanan">
      <div className="editPesanan__top">
        <div className="editPesanan__title">DETAIL PESANAN</div>
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
              variant="standard"
              InputProps={{
                readOnly: true,
              }}
              value={id}
            />
            <TealTextField
              sx={{ flex: "0.49" }}
              id="status"
              name="status"
              label="Status"
              value={status}
              onChange={handleStatus}
              variant="standard"
              InputProps={{
                readOnly: true,
              }}
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
              variant="standard"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              InputProps={{
                readOnly: true,
              }}
              select
            >
              {rows.map((row, index) => (
                <MenuItem key={index} value={row.id_penjahit}>
                  {row.name}
                </MenuItem>
              ))}
            </TealTextField>
          </div>
          <div className="editPesanan__single">
            <TealTextField
              fullWidth
              id="email"
              name="email"
              label="Email Pengguna"
              variant="standard"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
          <div className="editPesanan__double">
            <TealTextField
              sx={{ flex: "0.49" }}
              id="jenis"
              name="jenis"
              label="Jenis Reparasi"
              variant="standard"
              value={jenis}
              onChange={(e) => {
                setJenis(e.target.value);
              }}
              InputProps={{
                readOnly: true,
              }}
            />
            <TealTextField
              sx={{ flex: "0.49" }}
              id="pakaian"
              name="pakaian"
              label="Pakaian"
              variant="standard"
              value={pakaian}
              onChange={(e) => {
                setPakaian(e.target.value);
              }}
              InputProps={{
                readOnly: true,
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
              variant="standard"
              value={catatan}
              onChange={(e) => {
                setCatatan(e.target.value);
              }}
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
          <div className="editPesanan__single">
            <TealTextField
              fullWidth
              id="waktu_pesan"
              name="waktu_pesan"
              label="Waktu Pesan"
              variant="standard"
              value={waktu_pesan}
              onChange={(e) => {
                setWaktu_pesan(e.target.value);
              }}
              InputProps={{
                readOnly: true,
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
