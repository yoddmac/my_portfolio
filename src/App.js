import "./App.css";
import "./index.css";
import "./Button.css";
import DateTime from "./Page1/Time";
import useStyles from "./Page1/Styles";
import ChangeColor from "./Page1/Darkmode";
import img_project from "./img_project/prog.png";
import img_contact from "./img_contact/contact.jpg";
import img_res from "./img_res/reseaux.jpg";
import React, { useState } from "react";
import Modal from "./Modal.js";
import { useHistory } from "react-router-dom";

import DarkModeToggle from "react-dark-mode-toggle";

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  AppBar,
  Toolbar,
} from "@material-ui/core";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import SendIcon from "@material-ui/icons/Send";

function NewlineText(props) {
  const text = props.text;
  return text.split("\n").map((str) => <p>{str}</p>);
}

const dialogue =
  "Bonjour je m'appelle Théo.\nJe suis un étuidant Epitech Nancy en seconde année a nancy.\nje vous souhaite la bienvenue sur mon portfolio, je vous laisse vous baladez si dessous vous pouvez trouver 3 categorie:";
const contact =
  "Contact: vous pouvez me contacter pour faire un devis, me posez des questions";
const projet =
  "Projet: Une vitrine pour vous presentez mes projets perso ou mes projets que j'ai pu réaliser à l'école";
const reseaux =
  "Reseaux: Pour pouvoir me suivre sur linkdin, Github partager mon profile ou juste le visité";

function App() {
  const classes = useStyles();
  const [display, setDisplay] = useState(false);
  const [bgcolor, setbBgcolor] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const history = useHistory();
  const goTo = (path) => {
    history.push(path)
  }

  return (
    <div id="text">
      <AppBar position="static">
        <Toolbar>
          <DateTime></DateTime>
          <Typography variant="h6" className={classes.title}>
            MyPortfolio
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
      <NewlineText text={dialogue} />
      <NewlineText text={projet} />
      <NewlineText text={contact} />
      <NewlineText text={reseaux} />
      {/* GITHUB */}
      <div class="card">
        <Card className={classes.root} id="github">
          <CardActionArea onClick={() => goTo('/Project')}>
            <CardMedia
              className={classes.media}
              image={img_project}
              title="My Project"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                Mes Projets
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant="contained"
              color="black"
              className={classes.buttonGit}
              href="https://github.com/yoddmac"
              target="_blank"
            >
              <GitHubIcon />
            </Button>
          </CardActions>
        </Card>

        {/* LINKDIN */}
        <Card className={classes.root} id="linkdin">
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img_contact}
              title="Contact"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                Contact
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant="contained"
              color="black"
              className={classes.buttonGit}
              onClick={() => setDisplay(true)}
            >
              <SendIcon />
            </Button>
            {display && <Modal displaySetter={setDisplay} />}
          </CardActions>
        </Card>

        <Card className={classes.root} id="reseaux">
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img_res}
              title="Reseaux"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                Mes Reseaux
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant="contained"
              color="black"
              className={classes.buttonGit}
              href="https://www.linkedin.com/in/th%C3%A9o-larose/"
              target="_blank"
            >
              <LinkedInIcon />
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default App;
