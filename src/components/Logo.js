import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  logo: {
    width: "54px",
    height: "54px",
  },
  "logo-container": {
    display: "flex",
    alignItems: "center",
  },
});

const Logo = ({ color, textColor }) => {
  const classes = useStyles();
  const imgUrl = "../assets/images/logo-" + color + ".png";
  return (
    <div className={classes["logo-container"]}>
      <img src={imgUrl} alt="logo" className={classes.logo} />
      <Typography
        sx={{ color: textColor, fontFamily: `"Playfair Display", serif` }}
        variant="h5"
        fontWeight="bold"
      >
        Najait
      </Typography>
    </div>
  );
};

export default Logo;
