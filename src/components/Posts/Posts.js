import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
// we need to access the global store to get the posts
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles.js";
const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  const classes = useStyles();

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={`${classes.container}`}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid
          key={post._id}
          item
          sx={12}
          sm={6}
          className={classes.postContainer}
        >
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Posts;
