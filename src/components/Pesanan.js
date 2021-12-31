import React, { useEffect, useState } from "react";
import "./Pesanan.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { url } from "../globalConfig";
import AccepttModal from "./AcceptModal";
// import { pesanan as rows } from "../globalConfig";
import { useHistory } from "react-router-dom";
import TealTextField from "./TealTextField";

const AcceptOrderModal = ({ id_order }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [rows, setRows] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    getPenjahit();
  }, [rows]);

  const getPenjahit = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(url + "/penjahit/available", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setRows(response.data);
  };

  const acceptOrderById = (id_order, id_penjahit) => {
    const token = localStorage.getItem("token");
    axios
      .put(
        url + `/order/accept`,
        {
          id_order: id_order,
          id_penjahit: id_penjahit,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .catch((err) => console.log(err));
    handleClose();
    window.location.reload();
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
        Accept
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Pilih Penjahit"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TealTextField
              sx={{ width: "200px", marginTop: "10px" }}
              id="name"
              name="name"
              label="Nama Penjahit"
              variant="outlined"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              select
            >
              {rows.map((row, index) => (
                <MenuItem key={index} value={row.id_penjahit}>
                  {row.name}
                </MenuItem>
              ))}
            </TealTextField>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{ color: "#266679" }} onClick={handleClose}>
            Cancel
          </Button>
          <Button
            style={{ color: "#266679" }}
            onClick={() => acceptOrderById(id_order, name)}
            autoFocus
          >
            Pilih
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default function Pesanan() {
  const history = useHistory();
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    checkAuthAdmin();
  }, []);

  const checkAuthAdmin = () => {
    if (!localStorage.getItem("token") || localStorage.getItem("token") == "") {
      history.replace("/login");
    }
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [currentPenjahit, setCurrentPenjahit] = useState({});

  const goToEditPesanan = (id) => {
    history.push(`/editpesanan/${id}`);
  };

  useEffect(() => {
    getOrder();
  }, []);

  const getOrder = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(url + "/order", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
    setRows(response.data);
  };

  const getNamaPenjahitById = (id) => {
    const token = localStorage.getItem("token");
    axios
      .get(url + `/penjahit/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res.data.name))
      .catch((err) => console.log(err));
  };

  const completeOrderById = (id_order, id_penjahit) => {
    const token = localStorage.getItem("token");
    axios
      .put(
        url + `/order/finish`,
        {
          id_order: id_order,
          id_penjahit: id_penjahit,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => window.location.reload())
      .catch((err) => console.log(err));
  };

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
      <AccepttModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        penjahit={currentPenjahit}
      />

      <div className="pesanan">
        <div className="pesanan__up">
          <div className="pesanan__title">PESANAN</div>
        </div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: "80vh" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">ID Pesanan</TableCell>
                  <TableCell align="center">ID Penjahit</TableCell>
                  <TableCell align="center">Email Pengguna</TableCell>
                  <TableCell align="center">Jenis</TableCell>
                  <TableCell align="center">Pakaian</TableCell>
                  <TableCell align="center">Catatan</TableCell>
                  <TableCell align="center">Waktu Pesan</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow key={row.name}>
                      <TableCell align="center">{row.id_order}</TableCell>
                      <TableCell align="center">
                        {row.inbound.inboundIdPenjahit
                          ? row.inbound.inboundIdPenjahit
                          : "-"}
                      </TableCell>
                      <TableCell align="center">{row.User.email}</TableCell>
                      <TableCell align="center">{row.jenis}</TableCell>
                      <TableCell align="center">{row.pakaian}</TableCell>
                      <TableCell align="center">{row.catatan}</TableCell>
                      <TableCell align="center">
                        {new Date(row.waktu_pesan).toDateString()}
                      </TableCell>
                      <TableCell align="center">
                        {row.inbound?.status}
                      </TableCell>
                      <TableCell align="center">
                        <div className="pesanan__actionButton">
                          <Button
                            variant="contained"
                            style={{
                              backgroundColor: "#266679",
                              width: "90px",
                              height: "40px",
                              marginRight: "10px",
                            }}
                            onClick={() => goToEditPesanan(row.id_order)}
                          >
                            Details
                          </Button>
                          {row.inbound.status == "pending" ? (
                            <>
                              <AcceptOrderModal id_order={row.id_order} />
                            </>
                          ) : row.inbound.status == "ongoing" ? (
                            <>
                              <Button
                                variant="outlined"
                                style={{
                                  borderColor: "#266679",
                                  color: "#266679",
                                  width: "90px",
                                  height: "40px",
                                }}
                                onClick={() =>
                                  completeOrderById(
                                    row.id_order,
                                    row.inbound.inboundIdPenjahit
                                  )
                                }
                              >
                                Complete
                              </Button>
                            </>
                          ) : (
                            <></>
                          )}
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
