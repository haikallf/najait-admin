import React, { useEffect, useState } from "react";
import "./TambahPenjahit.css";
import Box from "@mui/material/Box";
import { Button, Grid, MenuItem, Typography } from "@mui/material";
import TealTextField from "./TealTextField";
import axios from "axios";
import { url } from "../globalConfig";
import { useHistory } from "react-router-dom";

export default function TambahPenjahit() {
  const history = useHistory();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [thread, setThread] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setThread(thread + 1);
    }, 1000);
  }, [thread]);

  useEffect(() => {
    checkAuthAdmin();
  }, [thread]);
  const checkAuthAdmin = () => {
    if (!localStorage.getItem("token") || localStorage.getItem("token") == "") {
      history.replace("/login");
    }
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kota, setKota] = useState("");
  const [price_range_min, setPrice_range_min] = useState("");
  const [price_range_max, setPrice_range_max] = useState("");
  const [status, setStatus] = useState("available");

  const addPenjahit = () => {
    if (
      name == "" ||
      description == "" ||
      address == "" ||
      price_range_min == "" ||
      price_range_max == "" ||
      kecamatan == "" ||
      kota == ""
    ) {
      alert("Tidak boleh ada field yang kosong!");
    } else {
      const token = localStorage.getItem("token");
      axios
        .post(
          url + `/penjahit`,
          {
            name: name,
            description: description,
            address: address,
            kecamatan: kecamatan,
            kota: kota,
            price_range_min: parseInt(price_range_min),
            price_range_max: parseInt(price_range_max),
            status: status,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(function (response) {
          history.replace("/penjahit");
          return response;
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

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
              id="name"
              name="name"
              label="Nama Penjahit"
              variant="outlined"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
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
              <MenuItem value="available">Available</MenuItem>
              <MenuItem value="unavailable">Unavailable</MenuItem>
            </TealTextField>
          </div>
          <TealTextField
            fullWidth
            multiline
            rows={4}
            id="outlined-basic"
            label="Deskripsi"
            variant="outlined"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="tambahPenjahit__address">
          <TealTextField
            sx={{ width: "100%" }}
            id="address"
            name="address"
            label="Alamat"
            variant="outlined"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div className="tambahPenjahit__location">
          <TealTextField
            sx={{ flex: 0.49 }}
            id="kecamatan"
            name="kecamatan"
            label="Kecamatan"
            variant="outlined"
            value={kecamatan}
            onChange={(e) => {
              setKecamatan(e.target.value);
            }}
          />
          <TealTextField
            sx={{ flex: 0.49 }}
            id="kota"
            name="kota"
            label="Kabupaten / Kota"
            variant="outlined"
            value={kota}
            onChange={(e) => {
              setKota(e.target.value);
            }}
          />
        </div>
        <div className="tambahPenjahit__priceInfo">
          <TealTextField
            sx={{ flex: "0.49" }}
            id="price_range_min"
            name="price_range_min"
            label="Harga Minimum"
            variant="outlined"
            type="number"
            value={price_range_min}
            onChange={(e) => {
              setPrice_range_min(e.target.value);
            }}
          />
          <TealTextField
            sx={{ flex: "0.49" }}
            id="price_range_max"
            name="price_range_max"
            label="Harga Maksimum"
            variant="outlined"
            type="number"
            value={price_range_max}
            onChange={(e) => {
              setPrice_range_max(e.target.value);
            }}
          />
        </div>
        <div className="tambahPenjahit__submitButton">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#266679",
              "&:hover": { backgroundColor: "#266679" },
            }}
            component="span"
            onClick={addPenjahit}
          >
            Tambah Penjahit
          </Button>
        </div>
      </div>
    </div>
  );
}
