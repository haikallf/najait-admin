import React, { useEffect, useState } from "react";
import "./Feedback.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { truncate, url } from "../globalConfig";
import axios from "axios";

export default function Feedback() {
  const history = useHistory();
  const [rows, setRows] = useState([]);
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

  useEffect(() => {
    getFeedback();
  }, [rows]);

  const getFeedback = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(url + "/order/review", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
    setRows(response.data);
  };
  const [open, setOpen] = React.useState(false);

  const goToEditPenjahit = (id) => {
    history.replace(`/editpenjahit/${id}`);
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
      <div className="feedback">
        <div className="feedback__up">
          <div className="feedback__title">FEEDBACK</div>
        </div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: "80vh" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">ID Feedback</TableCell>
                  <TableCell align="center">ID Order</TableCell>
                  <TableCell align="center">ID Penjahit</TableCell>
                  <TableCell align="center">Jenis</TableCell>
                  <TableCell align="center">Pakaian</TableCell>
                  <TableCell align="center">Rating</TableCell>
                  <TableCell align="center">Deskripsi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow key={row.id_penjahit}>
                      <TableCell align="center">
                        {row.orderfeedback.id_feedback}
                      </TableCell>
                      <TableCell align="center">
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            history.replace(
                              `/editpesanan/${row.Order.id_order}`
                            )
                          }
                        >
                          {row.Order.id_order}
                        </div>
                      </TableCell>
                      <TableCell align="center">
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            history.replace(
                              `/editpenjahit/${row.inboundIdPenjahit}`
                            )
                          }
                        >
                          {row.inboundIdPenjahit}
                        </div>
                      </TableCell>
                      <TableCell align="center">{row.Order.jenis}</TableCell>
                      <TableCell align="center">{row.Order.pakaian}</TableCell>
                      <TableCell align="center">
                        {row.orderfeedback.rating}
                      </TableCell>
                      <TableCell align="center">
                        {row.orderfeedback.description}
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
