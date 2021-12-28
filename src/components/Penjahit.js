import * as React from "react";
import "./Penjahit.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Avatar, Button, Modal, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import { truncate } from "../globalConfig";
import { Box } from "@mui/system";
import PenjahitModal from "./PenjahitModal";

const rows = [
  {
    id_penjahit: 1,
    name: "Nama Penjahit 1",
    description: "LorEu quis ex do do ullamco sit cillum.",
    picture: null,
    address: "Jl. Tebet Barat Dalam VA No 31",
    price_range_min: 10000,
    price_range_max: 30000,
  },
  {
    id_penjahit: 2,
    name: "Nama Penjahit 2",
    description:
      "Excepteur excepteur nisi excepteur exercitation eiusmod ullamco do in cillum cupidatat amet.",
    picture: null,
    address: "Jl. Tebet Barat Dalam VA No 31",
    price_range_min: 10000,
    price_range_max: 30000,
  },
  {
    id_penjahit: 3,
    name: "Nama Penjahit 3",
    description:
      "Quis enim nostrud sit excepteur excepteur eu eiusmod tempor eu deserunt eu nulla.",
    picture: null,
    address: "Jl. Tebet Barat Dalam VA No 31",
    price_range_min: 10000,
    price_range_max: 30000,
  },
  {
    id_penjahit: 4,
    name: "Nama Penjahit 4",
    description:
      "Adipisicing labore cillum aliqua aliqua qui est voluptate sint ad exercitation nostrud incididunt sint ex.",
    picture: null,
    address: "Jl. Tebet Barat Dalam VA No 31",
    price_range_min: 10000,
    price_range_max: 30000,
  },
  {
    id_penjahit: 5,
    name: "Nama Penjahit 5",
    description: "Dolore exercitation ipsum ad proident est qui in ea.",
    picture: null,
    address: "Jl. Tebet Barat Dalam VA No 31",
    price_range_min: 10000,
    price_range_max: 30000,
  },
  {
    id_penjahit: 6,
    name: "Nama Penjahit 6",
    description:
      "Excepteur tempor eiusmod quis laborum quis dolor quis non amet magna elit officia ullamco quis.",
    picture: null,
    address: "Jl. Tebet Barat Dalam VA No 31",
    price_range_min: 10000,
    price_range_max: 30000,
  },
];

const avatarThumbnail = (penjahit) => {
  if (penjahit.picture) {
    return <Avatar alt={penjahit.name} src={penjahit.picture} />;
  } else {
    return <Avatar>{penjahit?.name?.substring(0, 1)}</Avatar>;
  }
};

export default function Penjahit() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (index) => {
    setCurrentPenjahit(rows[index]);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [currentPenjahit, setCurrentPenjahit] = React.useState({});

  const history = useHistory();

  const goToTambahPenjahit = () => {
    history.push("/tambahpenjahit");
  };

  const goToEditPenjahit = () => {
    history.push("/editpenjahit");
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
                        <Button
                          variant="outlined"
                          style={{
                            borderColor: "#4abdac",
                            color: "#4abdac",
                            width: "90px",
                            height: "40px",
                          }}
                          onClick={goToEditPenjahit}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outlined"
                          style={{
                            borderColor: "#781D42",
                            color: "#781D42",
                            width: "90px",
                            height: "40px",
                          }}
                          onClick={goToEditPenjahit}
                        >
                          Delete
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
    </>
  );
}
