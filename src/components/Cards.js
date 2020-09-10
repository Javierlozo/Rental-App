import React from "react";
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

const useStyles = makeStyles((theme) => ({
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "lightgrey",
    padding: theme.spacing(6, 0, 6),
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
}));

export default function Cards({ card }) {
  const classes = useStyles();

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
              Rentals In
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
            {/* Surf Card */}
            <Grid item key={card} xs={4}>
              <Card className={classes.card}>
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
            {/* Surf Card */}
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
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
