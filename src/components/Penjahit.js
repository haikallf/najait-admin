import React, { useEffect, useState } from "react";
import "./Penjahit.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { truncate, url } from "../globalConfig";
import { Box } from "@mui/system";
import PenjahitModal from "./PenjahitModal";
import axios from "axios";

const DeletePenjahitModal = ({ name, id }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deletePenjahitById = (id) => {
    const token = localStorage.getItem("token");
    axios
      .delete(url + `/penjahit/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((err) => console.log(err));
    handleClose();
  };
  return (
    <div>
      <Button
        variant="outlined"
        style={{
          borderColor: "#266679",
          color: "#266679",
          width: "90px",
          height: "40px",
        }}
        onClick={handleClickOpen}
      >
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Hapus Penjahit"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`Apakah yakin ingin menghapus penjahit ${name} dengan id ${id}?`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{ color: "#266679" }} onClick={handleClose}>
            Disagree
          </Button>
          <Button
            style={{ color: "#266679" }}
            onClick={() => deletePenjahitById(id)}
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const avatarThumbnail = (penjahit) => {
  if (penjahit.picture) {
    return <Avatar alt={penjahit.name} src={penjahit.picture} />;
  } else {
    return <Avatar>{penjahit?.name?.substring(0, 1)}</Avatar>;
  }
};

export default function Penjahit() {
  const history = useHistory();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    checkAuthAdmin();
  }, []);

  const checkAuthAdmin = () => {
    if (!localStorage.getItem("token") || localStorage.getItem("token") == "") {
      history.replace("/login");
    }
  };

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = (index) => {
    setCurrentPenjahit(rows[index]);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [currentPenjahit, setCurrentPenjahit] = React.useState({});

  const goToTambahPenjahit = () => {
    history.push("/tambahpenjahit");
  };

  const goToEditPenjahit = (id) => {
    history.push(`/editpenjahit/${id}`);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <>
      <PenjahitModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        penjahit={currentPenjahit}
      />
      <div className="penjahit">
        <div className="penjahit__up">
          <div className="penjahit__title">PENJAHIT</div>
          <Button
            variant="contained"
            style={{
              borderColor: "#4abdac",
              color: "#266679",
              backgroundColor: "white",
            }}
            onClick={goToTambahPenjahit}
          >
            Tambah Penjahit
          </Button>
        </div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: "80vh" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">ID Penjahit</TableCell>
                  <TableCell align="center">Nama Penjahit</TableCell>
                  <TableCell align="center">Deskripsi</TableCell>
                  <TableCell align="center">Alamat</TableCell>
                  <TableCell align="center">Harga Minimum</TableCell>
                  <TableCell align="center">Harga Maksimum</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow key={row.id_penjahit}>
                      <TableCell align="center">{row.id_penjahit}</TableCell>
                      <TableCell align="center">
                        <div
                          className="penjahit__thumbnail"
                          onClick={() => handleOpen(index)}
                        >
                          <div className="penjahit__thumbnailContainer">
                            {avatarThumbnail(row)}
                          </div>
                          <div className="penjahit__thumbnailName">
                            {row.name}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell align="center">
                        {truncate(row.description, 20)}
                      </TableCell>
                      <TableCell align="center">
                        {truncate(row.address, 20)}
                      </TableCell>
                      <TableCell align="center">
                        {row.price_range_min}
                      </TableCell>
                      <TableCell align="center">
                        {row.price_range_max}
                      </TableCell>
                      <TableCell align="center">
                        <div className="penjahit__actionButton">
                          <Button
                            variant="contained"
                            style={{
                              backgroundColor: "#266679",
                              width: "90px",
                              height: "40px",
                              marginRight: "10px",
                            }}
                            onClick={() => goToEditPenjahit(row.id_penjahit)}
                          >
                            Edit
                          </Button>
                          <DeletePenjahitModal
                            key={row.id_penjahit}
                            name={row.name}
                            id={row.id_penjahit}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  );
}
