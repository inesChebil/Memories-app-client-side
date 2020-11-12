import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
  },

  [theme.breakpoints.down("md")]: {
    gridContainer: {
      width: "max-content",
      margin: "auto 10%",
    },
  },
  [theme.breakpoints.down("sm")]: {
    formContainer: {
      transform: "translateX(-17%)",
    },
    mainContainer: {
      // width: "min-content",
      // margin: "15%",
      flexDirection: "column-reverse",
    },
  },
}));
