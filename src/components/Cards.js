import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import imgS from "../images/Surf2.jpg";
import imgK from "../images/Kayak2.jpg";
import imgB from "../images/Bike3.jpg";
import { navigate } from "@reach/router";
import Axios from "axios";
import DashBoard from "./DashBoard";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "lightgrey",
    padding: theme.spacing(2, 0, 2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
  },
  cardMedia: {
    // paddingTop: "56.25%", // 16:9
  },
  cardContentS: {
    flexGrow: 1,
    paddingTop: "120px", // 16:9
    backgroundImage: `url(${imgS})`,
    backgroundSize: "cover",
    minHeight: "60vh",
    backgroundPosition: "center",
    backgroundAttachment: "scroll",
  },
  cardContentK: {
    flexGrow: 1,
    paddingTop: "120px", // 16:9
    backgroundImage: `url(${imgK})`,
    backgroundSize: "cover",
    minHeight: "50vh",
    backgroundPosition: "center",
    backgroundAttachment: "scroll",
  },
  cardContentB: {
    flexGrow: 1,
    paddingTop: "120px", // 16:9
    backgroundImage: `url(${imgB})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "scroll",
  },
  typo: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    opacity: 0.6,
    width: "100%",
    color: "white",
  },
  footer: {
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "lightgrey",
    padding: theme.spacing(6),
  },
  icons: {
    fontSize: 30,
    color: "black",
  },
}));

export default function Cards({ card }) {
  const classes = useStyles();

  const [surfboardCards, setSurfboardCards] = useState([]);

  function surfboards() {
    navigate("./dashboard");
  }

  useEffect(() => {
    async function getData() {
      const response = await Axios.get(
        `https://0y5ptr8ar4.execute-api.us-east-1.amazonaws.com/dev/surfboardcards`
      );
      console.log(response);
      setSurfboardCards();
    }
    getData();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Rentals
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Charleston, SC
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid}>
          {/* End hero unit */}
          <Grid container spacing={5}>
            {/* SurfBoard Card */}
            <Grid item xs={4}>
              <Card className={classes.card} onClick={surfboards}>
                <CardMedia className={classes.cardMedia} title="Surfboard" />
                <CardContent className={classes.cardContentS}>
                  <Typography
                    className={classes.typo}
                    gutterBottom
                    variant="h4"
                    component="h2"
                  >
                    Surfboards
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Kayak Card */}
            <Grid item key={card} xs={4}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} title="Kayaks" />
                <CardContent className={classes.cardContentK}>
                  <Typography
                    className={classes.typo}
                    gutterBottom
                    variant="h4"
                    component="h2"
                  >
                    Kayaks
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Bike Card */}
            <Grid item key={card} xs={4}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} title="Bikes" />
                <CardContent className={classes.cardContentB}>
                  <Typography
                    className={classes.typo}
                    gutterBottom
                    variant="h4"
                    component="h2"
                  >
                    Bikes
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <footer className={classes.footer}>
        <div>
          <h4
            style={{
              alignItems: "center",
              display: "flex",
              alignContent: "center",
              flexDirection: "column",
            }}
          >
            <div>Copyright ® 2020 RentMeSports, LLC. All rights reserved.</div>
            <div>Site developed by Luis Lozoya</div>
          </h4>
        </div>
        {/* <Grid container>
          <Grid item xs={12} sm={3}>
            <Link
              href="https://facebook.com"
              target="_blank"
              className={classes.facebook}
            >
              <FacebookIcon className={classes.icons} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className={classes.twitter}
            >
              <TwitterIcon className={classes.icons} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className={classes.instagram}
            >
              <InstagramIcon className={classes.icons} />
            </Link>
          </Grid>
        </Grid> */}
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
