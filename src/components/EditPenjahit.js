import React, { useEffect, useState } from "react";
import "./EditPenjahit.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { Button, Grid, MenuItem, Typography } from "@mui/material";

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

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

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

  const [status, setStatus] = useState("AVAILABLE");

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
              id="outlined-basic"
              label="Nama Depan"
              variant="outlined"
            />
            <TealTextField
              sx={{ flex: "0.49" }}
              label="Status"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              onChange={handleStatus}
              select
            >
              <MenuItem value="AVAILABLE">Available</MenuItem>
              <MenuItem value="NOT AVAILABLE">Not Available</MenuItem>
            </TealTextField>
          </div>
          <TealTextField
            fullWidth
            id="outlined-basic"
            label="Deskripsi"
            variant="outlined"
          />
        </div>
        <div className="editPenjahit__contactInfo">
          <p>Informasi Kontak</p>
          <TealTextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Alamat"
            variant="outlined"
          />
        </div>
        <div className="editPenjahit__priceInfo">
          <TealTextField
            sx={{ flex: "0.49" }}
            id="outlined-basic"
            label="Harga Minimum"
            variant="outlined"
          />
          <TealTextField
            sx={{ flex: "0.49" }}
            id="outlined-basic"
            label="Harga Maksimum"
            variant="outlined"
          />
        </div>
        <div className="editPenjahit__location">
          <TealTextField
            sx={{ flex: "0.49" }}
            id="outlined-basic"
            label="Lokasi Saat Ini"
            variant="outlined"
          />
          <TealTextField
            sx={{ flex: "0.49" }}
            id="outlined-basic"
            label="Lokasi Tersedia"
            variant="outlined"
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
