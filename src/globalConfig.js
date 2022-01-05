exports.url = "https://najait-backend.herokuapp.com";

exports.truncate = (input, count) => {
  if (input.length > count) {
    return input.substring(0, count) + "...";
  }
  return input;
};
