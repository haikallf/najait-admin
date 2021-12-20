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

const rows_ = [
  {
    idPenjahit: 1,
    nama: "Nama Penjahit 1",
    pendapatan: 30000,
    status: "PENDING",
  },
  {
    idPenjahit: 2,
    nama: "Nama Penjahit 2",
    pendapatan: 30000,
    status: "PENDING",
  },
  {
    idPenjahit: 3,
    nama: "Nama Penjahit 3",
    pendapatan: 30000,
    status: "PENDING",
  },
  {
    idPenjahit: 4,
    nama: "Nama Penjahit 4",
    pendapatan: 30000,
    status: "PENDING",
  },
  {
    idPenjahit: 5,
    nama: "Nama Penjahit 5",
    pendapatan: 30000,
    status: "PENDING",
  },
  {
    idPenjahit: 6,
    nama: "Nama Penjahit 6",
    pendapatan: 30000,
    status: "PENDING",
  },
];

export default function Pesanan() {
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    getBahan();
  }, [rows]);

  const getBahan = async () => {
    const response = await axios.get(url + "/bahan");
    setRows(response.data);
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
    <div className="penjahit">
      <div className="penjahit__up">
        <div className="penjahit__title">PESANAN</div>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: "80vh" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Nama Penjahit</TableCell>
                <TableCell align="center">Pendapatan</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={row.name}>
                    <TableCell align="center">{row.idBahan}</TableCell>
                    <TableCell align="center">{row.namaBahan}</TableCell>
                    <TableCell align="center">{row.stokBahan}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="outlined"
                        style={{
                          borderColor: "#4abdac",
                          color: "#4abdac",
                        }}
                      >
                        Edit
                      </Button>
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
  );
}
