import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },

  [theme.breakpoints.down("md")]: {
    postsContainer: {
      display: "block",
      margin: "auto -25%",
    },
  },
  [theme.breakpoints.down("sm")]: {
    postContainer: {
      margin: "auto",
    },
  },
}));
