import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Avatar } from "@mui/material";
import "./PenjahitModal.css";

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

const avatarThumbnail = (penjahit) => {
  if (penjahit.picture) {
    return <Avatar alt={penjahit.name} src={penjahit.picture} />;
  } else {
    return <Avatar>{penjahit?.name?.substring(0, 1)}</Avatar>;
  }
};

export default function PenjahitModal({
  open,
  handleOpen,
  handleClose,
  penjahit,
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="penjahitModal__name">
            <div className="penjahit__thumbnailContainer">
              {avatarThumbnail(penjahit)}
            </div>
            <div className="penjahit__thumbnailName">{penjahit.name}</div>
          </div>

          <div className="penjahitModal__description">
            <p>Deskripsi: </p>
            <p style={{ textAlign: "justify", marginLeft: "10px" }}>
              {penjahit.description}
            </p>
          </div>

          <div className="penjahitModal__address">
            <p>Alamat: </p>
            <p style={{ textAlign: "justify", marginLeft: "25px" }}>
              {penjahit.address}
            </p>
          </div>

          <div className="penjahitModal__price">
            <p>Harga Minimum: </p>
            <p style={{ marginLeft: "22px" }}>{penjahit.price_range_min}</p>
          </div>

          <div className="penjahitModal__price">
            <p>Harga Maksimum: </p>
            <p style={{ marginLeft: "10px" }}>{penjahit.price_range_max}</p>
          </div>

          {/* <div className="penjahitModal__location">
            <p>Lokasi Saat Ini: </p>
            <p style={{ marginLeft: "40px" }}>
              {penjahit.statuspenjahit?.current_location
                ? penjahit.statuspenjahit.current_location
                : "-"}
            </p>
          </div>

          <div className="penjahitModal__location">
            <p>Lokasi Tersedia: </p>
            <p style={{ marginLeft: "33px" }}>
              {penjahit.statuspenjahit.available_location
                ? penjahit.statuspenjahit.available_location
                : "-"}
            </p>
          </div>

          <div className="penjahitModal__location">
            <p>Status: </p>
            <p style={{ marginLeft: "103px" }}>
              {penjahit.statuspenjahit.status}
            </p>
          </div> */}
        </Box>
      </Modal>
    </div>
  );
}
