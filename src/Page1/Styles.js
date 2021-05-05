import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 345,
    color: "black",
    backgroundColor: "white",
  },
  title: {
    textAlign: "auto" ,
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
    height: 190,
  },
  buttonGit: {
    position: "center",
    right: -130,
    top: -20,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default useStyles;
