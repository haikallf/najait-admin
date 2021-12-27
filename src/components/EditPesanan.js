import React, { useEffect, useState } from "react";
import "./EditPesanan.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { Button, Grid, MenuItem, Typography } from "@mui/material";

export default function EditPesanan() {
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
              id="outlined-basic"
              label="ID Order"
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
          <div className="editPesanan__single">
            <TealTextField
              fullWidth
              id="outlined-basic"
              label="Nama Penjahit"
              variant="outlined"
            />
          </div>
          <div className="editPesanan__single">
            <TealTextField
              fullWidth
              id="outlined-basic"
              label="Nama Pengguna"
              variant="outlined"
            />
          </div>
          <div className="editPesanan__double">
            <TealTextField
              sx={{ flex: "0.49" }}
              id="outlined-basic"
              label="Jenis Reparasi"
              variant="outlined"
            />
            <TealTextField
              sx={{ flex: "0.49" }}
              id="outlined-basic"
              label="Pakaian"
              variant="outlined"
            />
          </div>
          <div className="editPesanan__single">
            <TealTextField
              fullWidth
              multiline
              rows={4}
              id="outlined-basic"
              label="Catatan"
              variant="outlined"
            />
          </div>
          <div className="editPesanan__single">
            <TealTextField
              fullWidth
              id="outlined-basic"
              label="Waktu Pesan"
              variant="outlined"
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
