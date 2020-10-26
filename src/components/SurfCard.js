import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import axios from "axios";
import img from "../images/Surf1.jpg";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import InputAdornment from "@material-ui/core/InputAdornment";
import { navigate } from "@reach/router";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
  },
  media: {
    height: 300,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function SurfCard({ surfboardCards }) {
  const classes = useStyles();
  console.log(surfboardCards);

  async function handleDeleteCard() {
    async function deleteCard() {
      return await axios({
        method: "delete",
        url:
          "https://0y5ptr8ar4.execute-api.us-east-1.amazonaws.com/dev/surfboard",
        data: {
          cardid: surfboardCards.id,
        },
      });
    }
    try {
      deleteCard();
      window.location.reload();
      console.log("deleted");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleModifyCard() {
    async function modifyCard() {
      return await axios({
        method: "put",
        url:
          "https://0y5ptr8ar4.execute-api.us-east-1.amazonaws.com/dev/surfboardcard",
        data: {
          cardid: surfboardCards.id,
        },
      });
    }
    try {
      modifyCard();
      navigate("/surfstepper");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        title={surfboardCards.title}
        subheader={surfboardCards.rentcost}
      />
      <CardMedia
        className={classes.media}
        image={surfboardCards.s3uuid}
        title={surfboardCards.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {surfboardCards.description}
        </Typography>
        <br></br>
        {/* <InputAdornment
          position="end"
          fontSize="large"
          onClick={handleDeleteCard}
        >
          <DeleteForeverIcon />
        </InputAdornment> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Button
            style={{ backgroundColor: "green" }}
            variant="contained"
            color="primary"
            onClick={handleModifyCard}
          >
            EDIT
          </Button>
          <br></br>
          <Button
            style={{ backgroundColor: "red" }}
            variant="contained"
            color="primary"
            onClick={handleDeleteCard}
          >
            DELETE CARD
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
