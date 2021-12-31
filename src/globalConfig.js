exports.url = "http://localhost:4000";

exports.penjahit = [
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

exports.pesanan = [
  {
    id_order: 1,
    name: "Nama Penjahit 1",
    firstName: "Nama Depan",
    lastName: "Nama Belakang",
    jenis: "Kemeja",
    pakaian: "Kemeja",
    catatan: "Potong 2cm",
    waktu_pesan: "2021-21-21",
    status: "pending",
  },
  {
    id_order: 2,
    name: "Nama Penjahit 2",
    firstName: "Nama Depan",
    lastName: "Nama Belakang",
    jenis: "Kemeja",
    pakaian: "Kemeja",
    catatan: "Potong 2cm",
    waktu_pesan: "2021-21-21",
    status: "pending",
  },
  {
    id_order: 3,
    name: "Nama Penjahit 3",
    firstName: "Nama Depan",
    lastName: "Nama Belakang",
    jenis: "Kemeja",
    pakaian: "Kemeja",
    catatan: "Potong 2cm",
    waktu_pesan: "2021-21-21",
    status: "ongoing",
  },
  {
    id_order: 4,
    name: "Nama Penjahit 4",
    firstName: "Nama Depan",
    lastName: "Nama Belakang",
    jenis: "Kemeja",
    pakaian: "Kemeja",
    catatan: "Potong 2cm",
    waktu_pesan: "2021-21-21",
    status: "ongoing",
  },
  {
    id_order: 5,
    name: "Nama Penjahit 5",
    firstName: "Nama Depan",
    lastName: "Nama Belakang",
    jenis: "Kemeja",
    pakaian: "Kemeja",
    catatan: "Potong 2cm",
    waktu_pesan: "2021-21-21",
    status: "ongoing",
  },
  {
    id_order: 6,
    name: "Nama Penjahit 6",
    firstName: "Nama Depan",
    lastName: "Nama Belakang",
    jenis: "Kemeja",
    pakaian: "Kemeja",
    catatan: "Potong 2cm",
    waktu_pesan: "2021-21-21",
    status: "pending",
  },
];

// exports.truncate = (input) =>
//   input.length > 5 ? `${input.substring(0, 5)}...` : input;

exports.truncate = (input, count) => {
  if (input.length > count) {
    return input.substring(0, count) + "...";
  }
  return input;
};
