import React, { useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import axios from "axios";
// import moment from "moment";
import ProfileInfo from "./ProfileDashboard";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  root: { marginTop: "160px" },
  avatar: {
    height: 80,
    width: 80,
  },
}));

const ProfilePic = ({ className, ...rest }) => {
  const classes = useStyles();

  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://0y5ptr8ar4.execute-api.us-east-1.amazonaws.com/dev/user`
      );
      console.log(response);
      setUser(response);
    }
    getData();
  }, []);

  return (
    <>
      <Card className={clsx(classes.root, className)} {...rest}>
        <CardContent>
          <Box alignItems="center" display="flex" flexDirection="column">
            <Avatar className={classes.avatar} src={user.avatar} />
            <Typography color="textPrimary" gutterBottom variant="h3">
              Luis Lozoya
            </Typography>
            {/* <Typography
            className={classes.dateText}
            color="textSecondary"
            variant="body1"
          >
            {`${moment().format("hh:mm A")} ${user.timezone}`}
          </Typography> */}
          </Box>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="primary" fullWidth variant="text">
            Upload picture
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

// Profile.propTypes = {
//   className: PropTypes.string,
// };

export default ProfilePic;
