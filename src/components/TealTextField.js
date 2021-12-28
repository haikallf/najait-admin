import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const TealTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#266679",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#266679",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#266679",
    },
    "&:hover fieldset": {
      borderColor: "#266679",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#266679",
    },
  },
});

export default TealTextField;
