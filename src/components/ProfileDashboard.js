import React, { useEffect, useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import ProfilePic from "../components/ProfilePic";
import axios from "axios";
import { navigate } from "@reach/router";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
}));

export default function ProfileDashBoard({ className, ...rest }) {
  const classes = useStyles();

  async function handleGetUser({ user }) {
    async function getCard() {
      return await axios({
        method: "get",
        url: "https://0y5ptr8ar4.execute-api.us-east-1.amazonaws.com/dev/user",
        data: {
          username: user.username,
        },
      });
    }
    try {
      getCard();
      window.location.reload();
      console.log("get card");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ProfilePic />
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="First name"
                name="firstName"
                // onChange={handleChange}
                required
                // value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                // onChange={handleChange}
                required
                // value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                // onChange={handleChange}
                required
                // value={values.email}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button color="primary" variant="contained">
            Save details
          </Button>
        </Box>
      </Card>
    </>
  );
}

// ProfileDetails.propTypes = {
//   className: PropTypes.string,
// };
