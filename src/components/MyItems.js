import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import SurfCard from "./SurfCard";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { navigate } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    marginTop: "160px",
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
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function MyItems({ signedInUser }) {
  const classes = useStyles();

  const [surfboardCards, setSurfboardCards] = useState([]);

  useEffect(() => {
    async function getCards() {
      const response = await axios.get(
        `https://0y5ptr8ar4.execute-api.us-east-1.amazonaws.com/dev/cardsbyuser`
      );
      setSurfboardCards(response.data.message);
    }
    getCards();
  }, []);

  function surfboardStepper() {
    navigate("/surfstepper");
  }

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                My items
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button
                      style={{ backgroundColor: "grey" }}
                      variant="contained"
                      color="primary"
                      onClick={surfboardStepper}
                    >
                      Add a rental
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={3}>
              {surfboardCards.map((surfboardCards) => {
                return (
                  <Grid item xs={6}>
                    <SurfCard
                      key={surfboardCards.id}
                      surfboardCards={surfboardCards}
                    ></SurfCard>
                    {/* <KayakCard
                      key={kayakCards.id}
                      kayakCards={kayakCards}
                    ></KayakCard> */}
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </main>
      </React.Fragment>
    </div>
  );
}
