import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar, MenuItem, TextField } from "@mui/material";
import "./AcceptModal.css";
import { styled } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #266679",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  outline: "none",
};

export default function AccepttModal({
  open,
  handleOpen,
  handleClose,
  penjahit,
}) {
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
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="acceptModal__container">
            <TealTextField
              fullWidth
              label="Status"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              select
            >
              <MenuItem value="available">Available</MenuItem>
              <MenuItem value="unavailable">Unvailable</MenuItem>
            </TealTextField>

            <Button
              variant="contained"
              style={{
                backgroundColor: "#266679",
                width: "100px",
                height: "56px",
                marginLeft: "10px",
              }}
            >
              Accept
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
