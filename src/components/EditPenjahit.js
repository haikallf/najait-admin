import React, { useEffect, useState } from "react";
import "./EditPenjahit.css";
import Box from "@mui/material/Box";
import TealTextField from "./TealTextField";
import { Button, Grid, MenuItem, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { penjahit as rows, url } from "../globalConfig";
import axios from "axios";

export default function TambahPenjahit() {
  const { id } = useParams();
  const [currentPenjahit, setCurrentPenjahit] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState(null);
  const [address, setAddress] = useState("");
  const [price_range_min, setPrice_range_min] = useState("");
  const [price_range_max, setPrice_range_max] = useState("");
  const [current_location, setCurrent_location] = useState("");
  const [available_location, setAvailable_location] = useState("");
  const [status, setStatus] = useState("available");

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  useEffect(() => {
    getPenjahitById(id);
  }, [currentPenjahit]);

  const getPenjahitById = async (id) => {
    const token = localStorage.getItem("token");
    const response = await axios.get(url + `/penjahit/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setCurrentPenjahit(response.data);
    const penjahit = currentPenjahit;
    setName(penjahit?.name);
    setDescription(penjahit?.description);
    setPicture(penjahit?.picture);
    setAddress(penjahit?.address);
    setPrice_range_min(penjahit?.price_range_min);
    setPrice_range_max(penjahit?.price_range_max);
    setCurrent_location(penjahit?.current_location);
    setAvailable_location(penjahit?.available_location);
    setStatus(penjahit?.status);
  };

  // const TealButton = styled(Button)(() => ({
  //   "& .MuiButton-contained": {
  //     backgroundColor: "#266679",
  //   },
  // }));

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className="editPenjahit">
      <div className="editPenjahit__top">
        <div className="editPenjahit__title">EDIT PENJAHIT</div>
      </div>

      <div className="editPenjahit__form">
        <div className="editPenjahit__userInfoImage">
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
        <div className="editPenjahit__userInfo">
          <p>Informasi Penjahit</p>
          <div className="editPenjahit__userInfoNama">
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
              <MenuItem value="unavailable">Not Available</MenuItem>
            </TealTextField>
          </div>
          <TealTextField
            fullWidth
            id="description"
            name="description"
            label="Deskripsi"
            variant="outlined"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="editPenjahit__contactInfo">
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
        <div className="editPenjahit__priceInfo">
          <TealTextField
            sx={{ flex: "0.49" }}
            id="price_range_min"
            name="price_range_min"
            label="Harga Minimum"
            variant="outlined"
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
            value={price_range_max}
            onChange={(e) => {
              setPrice_range_max(e.target.value);
            }}
          />
        </div>
        <div className="editPenjahit__location">
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
        <div className="editPenjahit__submitButton">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#266679",
              "&:hover": { backgroundColor: "#266679" },
            }}
            component="span"
          >
            Edit Penjahit
          </Button>
        </div>
      </div>
    </div>
  );
}
