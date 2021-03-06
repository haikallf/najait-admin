import React, { useEffect, useState } from "react";
import "./EditPenjahit.css";
import Box from "@mui/material/Box";
import TealTextField from "./TealTextField";
import { Button, Grid, MenuItem, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { url } from "../globalConfig";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { LoadingButton } from "@mui/lab";

export default function EditPenjahit() {
  const { id } = useParams();
  const history = useHistory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const [address, setAddress] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kota, setKota] = useState("");
  const [price_range_min, setPrice_range_min] = useState("");
  const [price_range_max, setPrice_range_max] = useState("");
  const [current_location, setCurrent_location] = useState("");
  const [available_location, setAvailable_location] = useState("");
  const [status, setStatus] = useState("available");
  const [loading, setLoading] = useState(false);

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

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  useEffect(() => {
    getPenjahitById();
  }, []);

  const getPenjahitById = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(url + `/penjahit/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setName(response.data.name);
    setDescription(response.data.description);
    if (response.data.picture) {
      setImageUrl(`${url}/${response.data.picture}`);
    }
    setAddress(response.data.address);
    setKecamatan(response.data.kecamatan);
    setKota(response.data.kota);
    setPrice_range_min(response.data.price_range_min);
    setPrice_range_max(response.data?.price_range_max);
    setCurrent_location(response.data?.statuspenjahit.current_location);
    setAvailable_location(response.data?.statuspenjahit.available_location);
    setStatus(response.data?.statuspenjahit.status);
  };

  const editPenjahitById = async (id) => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const payload = new FormData();
    if (selectedImage) {
      payload.append("image", selectedImage);
    }
    payload.append("name", name);
    payload.append("description", description);
    payload.append("address", address);
    payload.append("kecamatan", kecamatan);
    payload.append("kota", kota);
    payload.append("price_range_min", price_range_min);
    payload.append("price_range_max", price_range_max);
    payload.append("current_location", current_location);
    payload.append("available_location", available_location);
    payload.append("status", status);
    axios
      .put(url + `/penjahit/${id}`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (response) {
        setLoading(false);
        history.replace("/penjahit");
        return response;
      })
      .catch(function (err) {
        setLoading(false);
      });
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
                    id="editPenjahit__image"
                    src={imageUrl}
                    alt={imageUrl}
                    style={{
                      height: "200px",
                      width: "200px",
                      borderRadius: "50%",
                      objectFit: "cover",
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
              <MenuItem value="unavailable">Unavailable</MenuItem>
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
        <div className="editPenjahit__address">
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
        <div className="editPenjahit__location">
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
          <LoadingButton
            loading={loading}
            variant="contained"
            sx={{
              backgroundColor: "#266679",
              "&:hover": { backgroundColor: "#266679" },
            }}
            onClick={() => editPenjahitById(id)}
          >
            Edit Penjahit
          </LoadingButton>
        </div>
      </div>
    </div>
  );
}
