import React, { FunctionComponent, useState, useContext } from "react";

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

import { ItemSchema } from "../api/schema";
import { DataContext } from "../helpers/context/dataContext";
import { DELETE, UPVOTE, DOWNVOTE } from "../helpers/reducers/dataReducer";

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

const LinkItem: FunctionComponent<{
  item: ItemSchema;
  onItemDelete: (name: string) => void;
}> = ({ item: { name, url, vote, uuid }, onItemDelete }) => {
  const classes = useStyles();
  const [_, dispatch] = useContext(DataContext);

  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDeleteClick = () => setIsDialogOpen(true);
  const handleDialogClose = () => setIsDialogOpen(false);

  const handleMouseEnter = () => setIsMouseOver(true);
  const handleMouseLeave = () => setIsMouseOver(false);

  const handleUpvoteClick = () => dispatch({ type: UPVOTE, payload: { uuid } });
  const handleDownvoteClick = () =>
    dispatch({ type: DOWNVOTE, payload: { uuid } });

  const handleDeleteConfirm = () => {
    dispatch({ type: DELETE, payload: { uuid } });
    handleDialogClose();
    onItemDelete(name);
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

      {/* confirm dialog */}
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
