import "../App.css";
import "../index.css";
import "../Button.css";
import DateTime from "../Page1/Time";
import useStyles from "../Page1/Styles"
import ChangeColor from "../Page1/Darkmode";
import React, { useState } from "react";

import DarkModeToggle from "react-dark-mode-toggle";

import {
  Button,
  Typography,
  AppBar,
  Toolbar,
} from "@material-ui/core";

function NewlineText(props) {
  const text = props.text;
  return text.split("\n").map((str) => <p>{str}</p>);
}

function Page2() {
  const classes = useStyles();
  const [bgcolor, setbBgcolor] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <div id="text">
      <AppBar position="static">
        <Toolbar>
          <DateTime></DateTime>
          <Typography variant="h6" className={classes.title}>
            MyProject
          </Typography>
          <Button
            onClick={() => {
              setbBgcolor(!bgcolor);
              ChangeColor(bgcolor);
            }}
          >
            <DarkModeToggle
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={50}
            />
          </Button>
          <Button color="inherit">EN</Button>
          <Button color="inherit">FR</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Page2;
