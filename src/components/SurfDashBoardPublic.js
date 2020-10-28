import React, { useEffect, useState } from "react";
import SurfCardPublic from "./SurfCardPublic";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    marginTop: "160px",
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "lightgrey",
    padding: theme.spacing(4, 0, 4),
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

export default function SurfDashBoardPublic({ setSignedInUser }) {
  const classes = useStyles();

  const [surfboardCards, setSurfboardCards] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://0y5ptr8ar4.execute-api.us-east-1.amazonaws.com/dev/surfboardcards`
      );
      setSurfboardCards(response.data.message);
    }
    getData();
  }, []);

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
                Surfboards for rent
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center"></Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={3}>
              {surfboardCards.map((surfboardCards) => {
                return (
                  <Grid item xs={6}>
                    <SurfCardPublic
                      key={surfboardCards.id}
                      surfboardCards={surfboardCards}
                    ></SurfCardPublic>
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
