import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
// useDispatch allow us to dispatch an action, THE BEST WAY TO DISPATCH AN ACTion is inside of a useEffect
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles.js";
// in here we are going to keep track of our current id(id of the post), because we need to share
// the current id between the posts and the form
const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    // Container to center everything
    <Container maxidth="lg">
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Typography variant="h2" align="center" className={classes.heading}>
          Memories
        </Typography>
        <img
          src={memories}
          alt="memories"
          height="60"
          className={classes.image}
        />
      </AppBar>
      {/* Grow will do some animation */}
      <Grow in>
        <Container>
          <Grid
            container={true}
            justify="space-between"
            alignItems="stretch"
            className={`${classes.mainContainer}`}
            spacing={3}
          >
            {/* xs "width on extra small devices" */}
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};
export default App;
