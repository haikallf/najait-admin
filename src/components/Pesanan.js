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
import { Button } from "@mui/material";
import axios from "axios";
import { url } from "../globalConfig";
import AccepttModal from "./AcceptModal";
// import { pesanan as rows } from "../globalConfig";
import { useHistory } from "react-router-dom";

export default function Pesanan() {
  const history = useHistory();
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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
  }, [rows]);

  const getOrder = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(url + "/order", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setRows(response.data);
    console.log(rows);
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

      <div className="penjahit">
        <div className="penjahit__up">
          <div className="penjahit__title">PESANAN</div>
        </div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: "80vh" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">ID Pesanan</TableCell>
                  <TableCell align="center">Nama Penjahit</TableCell>
                  <TableCell align="center">Nama Pengguna</TableCell>
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
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">
                        {row.firstName} {row.lastName}
                      </TableCell>
                      <TableCell align="center">{row.jenis}</TableCell>
                      <TableCell align="center">{row.pakaian}</TableCell>
                      <TableCell align="center">{row.catatan}</TableCell>
                      <TableCell align="center">{row.waktu_pesan}</TableCell>
                      <TableCell align="center">{row.status}</TableCell>
                      <TableCell align="center">
                        {row.status == "pending" ? (
                          <Button
                            onClick={handleOpen}
                            variant="outlined"
                            style={{
                              borderColor: "#4abdac",
                              color: "#4abdac",
                              width: "90px",
                              height: "40px",
                            }}
                          >
                            Accept
                          </Button>
                        ) : (
                          <Button
                            variant="outlined"
                            style={{
                              borderColor: "#4abdac",
                              color: "#4abdac",
                              width: "90px",
                              height: "40px",
                            }}
                            onClick={() => goToEditPesanan(row.id_order)}
                          >
                            Edit
                          </Button>
                        )}
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
