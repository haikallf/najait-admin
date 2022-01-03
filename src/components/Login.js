import React, { useState } from "react";
import "./Login.css";
import { useLocation, useHistory } from "react-router-dom";
import { Alert, Box, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import Logo from "./Logo";
import TealTextField from "./TealTextField";
import { url } from "../globalConfig";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      if (email == null || email == "" || password == null || password == "") {
        alert("Tidak boleh ada field yang kosong!");
        setLoading(false);
      } else {
        setLoading(true);
        axios
          .post(url + `/admin/login`, {
            email: email,
            password: password,
          })
          .then(function (response) {
            localStorage.setItem("token", response.data.accessToken);
            history.replace("/penjahit");
            setLoading(false);
            return response;
          })
          .catch(function (err) {
            setError({
              err: err,
              msg: "Wrong email and password combination!",
            });
            setLoading(false);
          });
      }
    }, 500);
  };

  return (
    <>
      <div className="login">
        <div className="login__formContainer">
          <div className="login__logo" onClick={() => history.replace("/")}>
            <Logo color="black" textColor="#266679" />
          </div>
          {error ? (
            <Box my={2}>
              <Alert severity="error">{error.msg}</Alert>
            </Box>
          ) : null}
          <div className="login__form">
            <TealTextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              autoComplete="off"
              sx={{ my: 2 }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TealTextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              inputProps={{
                autocomplete: "new-password",
                form: {
                  autocomplete: "off",
                },
              }}
              sx={{ my: 2 }}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <div className="login__submitBtn">
              <LoadingButton
                loading={loading}
                variant="contained"
                sx={{
                  backgroundColor: "#266679",
                  "&:hover": { backgroundColor: "#266679" },
                  my: 2,
                }}
                onClick={handleLogin}
              >
                Login
              </LoadingButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
