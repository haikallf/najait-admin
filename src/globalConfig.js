exports.url = "http://localhost:3001";

// exports.truncate = (input) =>
//   input.length > 5 ? `${input.substring(0, 5)}...` : input;

exports.truncate = (input, count) => {
  if (input.length > 5) {
    return input.substring(0, count) + "...";
  }
  return input;
};
