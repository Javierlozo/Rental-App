import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SurfInfo({ addForm, setAddForm }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    cost: "",
    name: "hai",
  });

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
          onChange={(e) => setAddForm({ ...addForm, username: e.target.value })}
          id="username"
          label="Confirm Username"
          style={{ margin: 8 }}
          // placeholder=""
          fullWidth
          color="secondary"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={addForm.username}
        />
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
        {/* <TextField
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
        /> */}
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">Cost</InputLabel>
          <Select
            onChange={(e) =>
              setAddForm({ ...addForm, rentcost: e.target.value })
            }
            native
            value={state.age}
            label="Cost"
            inputProps={{
              name: "Cost",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={"$20/day"}>$20/day</option>
            <option value={"$30/day"}>$30/day</option>
            <option value={"$40/day"}>$40/day</option>
            <option value={"$50/day"}>$50/day</option>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
