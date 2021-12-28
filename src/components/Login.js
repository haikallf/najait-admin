import React from "react";
import "./Login.css";
import { useLocation, useHistory } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import styled from "@emotion/styled";
import Logo from "./Logo";

function Login() {
  const location = useLocation();
  const history = useHistory();
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

  return (
    <>
      <div className="login">
        <div className="login__formContainer">
          <div className="login__logo" onClick={() => history.push("/")}>
            <Logo color="black" textColor="#266679" />
          </div>
          <div className="login__form">
            <TealTextField
              fullWidth
              label="Username"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              autoComplete="off"
              sx={{ my: 2 }}
            />
            <TealTextField
              fullWidth
              label="Password"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              type="password"
              inputProps={{
                autocomplete: "new-password",
                form: {
                  autocomplete: "off",
                },
              }}
              sx={{ my: 2 }}
            />

            <div className="login__submitBtn">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#266679",
                  "&:hover": { backgroundColor: "#266679" },
                  my: 2,
                }}
                component="span"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
