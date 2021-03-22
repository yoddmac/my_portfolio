import './App.css';
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SendIcon from '@material-ui/icons/Send';
import Modal from "./Modal.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  text: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  categorie: {
    padding: theme.spacing(2),
    textAlign: 'left'
  }
}));


function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}

const dialogue = "Bonjour je m'appelle Théo.\nJe suis un étuidant Epitech Nancy en seconde année a nancy.\nje vous souhaite la bienvenue sur mon portfolio, je vous laisse vous baladez si dessous vous pouvez trouver 3 categorie:"
const contact = "Contact: vous pouvez me contacter pour faire un devis, me posez des questions"
const projet = "Projet: Une vitrine pour vous presentez mes projets perso ou mes projets que j'ai pu réaliser à l'école"
const reseaux = "Reseaux: Pour pouvoir me suivre sur linkdin, Github partager mon profile ou juste le visité"

function App() {
  const classes = useStyles();
  const [display, setDisplay] = useState(false);


  return (
    <div className="App">
    <Card ClassName={classes.title}>
      <CardContent>
        <Paper>
          <Grid ClassName={classes.title} item xs={12} >
            <h1>Mon PortfolioV1</h1>
          </Grid>
        <NewlineText text={dialogue}/>
      <Grid className={classes.categorie}>
        <NewlineText text = {projet}/>
        <NewlineText text = {contact}/>
        <NewlineText text = {reseaux}/>
      </Grid>
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
        startIcon={<GitHubIcon />}
        href="https://github.com/yoddmac" 
        target="_blank"
      ></Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<SendIcon />}
        onClick={() => setDisplay(true)}
      >
      </Button>
      {display &&
      <Modal displaySetter={setDisplay}/>}
        </Paper>
      </CardContent>
    </Card>
    </div>
  );
}

export default App;
