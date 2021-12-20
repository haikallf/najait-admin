import React, { useEffect, useState } from "react";
import "./TambahPenjahit.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { Button, Grid, Typography } from "@mui/material";

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
        <div className="tambahPenjahit__submitButton">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#266679",
              "&:hover": { backgroundColor: "#266679" },
            }}
            component="span"
          >
            Tambah Penjahit
          </Button>
        </div>
      </div>
    </div>
  );
}
