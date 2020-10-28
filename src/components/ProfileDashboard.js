import React from "react";
import ProfilePic from "../components/ProfilePic";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";

export default function ProfileDashBoard() {

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
                value="Luis"
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                name="Lozoya"
                // onChange={handleChange}
                required
                value="Lozoya"
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
                value="luisloart@gmail.com"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button color="grey" variant="contained">
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
