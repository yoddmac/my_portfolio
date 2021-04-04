import "./App.css";
import "./index.css";
import img from "./img/prog.png"
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import SendIcon from "@material-ui/icons/Send";
import Modal from "./Modal.js";
import DarkModeToggle from "react-dark-mode-toggle";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 345,
  },
  title: {
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  text: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  categorie: {
    color: "black",
  },
  media: {
    height: 140,
  },
}));

function NewlineText(props) {
  const text = props.text;
  return text.split("\n").map((str) => <p>{str}</p>);
}

function ChangeColor(bgColor) {
  const bodyElt = document.querySelector("body");

  if (bgColor === true) {
    bodyElt.style.backgroundColor = "black";
    document.getElementById("text").style.color = "white";
  } else {
    bodyElt.style.backgroundColor = "white";
    document.getElementById("text").style.color = "black";
  }
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

  return (
    <div id="text">
      <Button
        onClick={() => {
          setbBgcolor(!bgcolor);
          ChangeColor(bgcolor);
        }}
      >
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={80}
        />
      </Button>
      <h1>Mon PortfolioV1</h1>
      <NewlineText text={dialogue} />
      <NewlineText text={projet} />
      <NewlineText text={contact} />
      <NewlineText text={reseaux} />
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Mes Projets
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
        
        variant="contained"
        color="black"
        className={classes.buttonGithub}
        startIcon={<GitHubIcon/>}
        href="https://github.com/yoddmac"
        target="_blank"
      ></Button>
      </CardActions>
    </Card>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<LinkedInIcon />}
        href="https://www.linkedin.com/in/th%C3%A9o-larose/"
        target="_blank"
      ></Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<SendIcon />}
        onClick={() => setDisplay(true)}
      ></Button>
      {display && <Modal displaySetter={setDisplay} />}
    </div>
  );
}

export default App;
