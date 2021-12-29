import React, { useState } from "react";
import "./Login.css";
import { useLocation, useHistory } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import Logo from "./Logo";
import TealTextField from "./TealTextField";
import { url } from "../globalConfig";

function Login() {
  const location = useLocation();
  const history = useHistory();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = () => {
    if (email == null || email == "" || password == null || password == "") {
      alert("Tidak boleh ada field yang kosong!");
    } else {
      axios
        .post(url + `/admin/login`, {
          email: email,
          password: password,
        })
        .then(function (response) {
          console.log(response);
          localStorage.setItem("token", response.data.accessToken);
          history.push("/");
          return response;
        })
        .catch((err) => console.log(err));
    }
  };

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
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#266679",
                  "&:hover": { backgroundColor: "#266679" },
                  my: 2,
                }}
                onClick={handleLogin}
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
