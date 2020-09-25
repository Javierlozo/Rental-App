import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
  },
}));

export default function SurfInfo({ addForm, setAddForm }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Typography
          component="h1"
          variant="h5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          Tell us about your rental!
        </Typography>
        <TextField
          onChange={(e) => setAddForm({ ...addForm, title: e.target.value })}
          id="title"
          label="Title"
          style={{ margin: 8 }}
          placeholder="8' SurfBoard"
          fullWidth
          color="secondary"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={addForm.title}
        />
        <TextField
          onChange={(e) =>
            setAddForm({ ...addForm, description: e.target.value })
          }
          id="description"
          label="Description"
          style={{ margin: 8 }}
          placeholder="Big surfboard for beginners"
          fullWidth
          color="secondary"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={addForm.description}
        />
        <TextField
          onChange={(e) => setAddForm({ ...addForm, rentcost: e.target.value })}
          id="cost"
          label="Cost"
          style={{ margin: 8 }}
          placeholder="$40/day"
          fullWidth
          color="secondary"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </div>
    </div>
  );
}
