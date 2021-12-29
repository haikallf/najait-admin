import React, { useEffect, useState } from "react";
import "./TambahPenjahit.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { Button, Grid, MenuItem, Typography } from "@mui/material";
import TealTextField from "./TealTextField";
import axios from "axios";
import { url } from "../globalConfig";
import { useHistory } from "react-router-dom";

export default function TambahPenjahit() {
  const history = useHistory();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState(null);
  const [address, setAddress] = useState("");
  const [price_range_min, setPrice_range_min] = useState("");
  const [price_range_max, setPrice_range_max] = useState("");
  const [current_location, setCurrent_location] = useState("");
  const [available_location, setAvailable_location] = useState("");
  const [status, setStatus] = useState("available");

  const addPenjahit = () => {
    console.log(description);
    if (
      name == "" ||
      description == "" ||
      address == "" ||
      price_range_min == "" ||
      price_range_max == "" ||
      current_location == "" ||
      available_location == ""
    ) {
      alert("Tidak boleh ada field yang kosong!");
    } else {
      const token = localStorage.getItem("token");
      axios
        .post(
          url + `/penjahit`,
          {
            name: name,
            picture: picture,
            description: description,
            address: address,
            price_range_min: parseInt(price_range_min),
            price_range_max: parseInt(price_range_max),
            current_location: current_location,
            available_location: available_location,
            status: status,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(function (response) {
          history.push("/penjahit");
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

  // const TealButton = styled(Button)(() => ({
  //   "& .MuiButton-contained": {
  //     backgroundColor: "#266679",
  //   },
  // }));

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className="tambahPenjahit">
      <div className="tambahPenjahit__top">
        <div className="tambahPenjahit__title">TAMBAH PENJAHIT</div>
      </div>

      <div className="tambahPenjahit__form">
        <div className="tambahPenjahit__userInfoImage">
          <Grid
            container
            p={2}
            columnSpacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {imageUrl || selectedImage ? (
                <Box>
                  <img
                    src={imageUrl}
                    alt={selectedImage.name}
                    style={{
                      height: "200px",
                      width: "200px",
                      borderRadius: "50%",
                    }}
                  />
                </Box>
              ) : (
                <Box
                  sx={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "50%",
                    backgroundColor: "gray",
                  }}
                ></Box>
              )}
            </Grid>

            <Grid item xs={6} justifySelf="center">
              <Box>
                <input
                  accept="image/*"
                  type="file"
                  id="select-image"
                  style={{ display: "none" }}
                  onChange={(e) => setSelectedImage(e.target.files[0])}
                />
                <label htmlFor="select-image">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#266679",
                      "&:hover": { backgroundColor: "#266679" },
                    }}
                    component="span"
                  >
                    Upload Image
                  </Button>
                </label>
                <Box mt={1}>
                  <Typography
                    variant="h10"
                    fontFamily="Montserrat"
                    color="gray"
                  >
                    Format gambar yang diterima adalah .jpg dan .png Ukuran file
                    maksimal adalah 1MB
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
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
            id="outlined-basic"
            label="Deskripsi"
            variant="outlined"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="tambahPenjahit__contactInfo">
          <p>Informasi Kontak</p>
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
        <div className="tambahPenjahit__location">
          <TealTextField
            sx={{ flex: "0.49" }}
            id="current_location"
            name="current_location"
            label="Lokasi Saat Ini"
            variant="outlined"
            value={current_location}
            onChange={(e) => {
              setCurrent_location(e.target.value);
            }}
          />
          <TealTextField
            sx={{ flex: "0.49" }}
            id="available_location"
            name="available_location"
            label="Lokasi Tersedia"
            variant="outlined"
            value={available_location}
            onChange={(e) => {
              setAvailable_location(e.target.value);
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
