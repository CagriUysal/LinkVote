import React, { FunctionComponent, useState } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import { makeStyles } from "@material-ui/core/styles";

import ISchema from "../api/schema";

const useStyles = makeStyles({
  container: {
    position: "relative",
  },
  vote: {
    fontSize: "3em",
    fontWeight: "bold",
  },
  name: {
    fontSize: "2em",
  },
  deleteIcon: {
    position: "absolute",
    top: 0,
    right: 0,
  },
});

const LinkItem: FunctionComponent<{ item: ISchema }> = ({
  item: { name, url, vote },
}) => {
  const classes = useStyles();
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleUpvoteClick = () => console.log("upvote");
  const handleDownvoteClick = () => console.log("downvote");

  const handleDeleteClick = () => setIsDialogOpen(true);
  const handleDialogClose = () => setIsDialogOpen(false);

  const handleMouseEnter = () => setIsMouseOver(true);
  const handleMouseLeave = () => setIsMouseOver(false);

  const handleDeleteConfirm = () => {
    console.log("delete");

    handleDialogClose();
  };

  return (
    <>
      <Grid
        container
        wrap="nowrap"
        alignItems="center"
        className={classes.container}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* left side (votes) */}
        <Grid item xs={4}>
          <Grid container direction="column" alignItems="center">
            <Typography className={classes.vote}>{vote}</Typography>
            <Typography style={{ textTransform: "uppercase", fontWeight: 500 }}>
              points
            </Typography>
          </Grid>
        </Grid>

        {/* right side(information) */}
        <Grid item xs={8}>
          <Grid container direction="column">
            <Typography className={classes.name}>{name}</Typography>
            <Link href={url}>{`(${url})`}</Link>

            <Grid item>
              <Button onClick={handleUpvoteClick}>
                <ArrowUpwardIcon fontSize="small" />
                upvote
              </Button>
              <Button onClick={handleDownvoteClick}>
                <ArrowDownwardIcon fontSize="small" />
                downvote
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {/* delete button positioned absolutely to the right top corner */}
        <IconButton
          className={classes.deleteIcon}
          style={{ display: isMouseOver ? undefined : "none" }}
          onClick={handleDeleteClick}
        >
          <HighlightOffIcon />
        </IconButton>
      </Grid>

      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle id="alert-dialog-title">
          Do you want to remove: <br /> {name}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleDeleteConfirm} color="primary">
            ok
          </Button>
          <Button onClick={handleDialogClose} color="primary" autoFocus>
            cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LinkItem;
