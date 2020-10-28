import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
  },
  media: {
    height: 0,
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

export default function KayakCardPublic({ kayakCards }) {
  const classes = useStyles();
  console.log(kayakCards);

  async function RentMe() {}

  return (
    <Card className={classes.root}>
      <CardHeader title={kayakCards.title} subheader={kayakCards.rentcost} />
      <CardMedia
        className={classes.media}
        image={kayakCards.s3uuid}
        title={kayakCards.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {kayakCards.description}
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
            onClick={RentMe}
          >
            RENT ME
          </Button>
          <br></br>
        </div>
      </CardContent>
    </Card>
  );
}
