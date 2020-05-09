import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
// import "../../App.css";
import Typography from "@material-ui/core/Typography";

function RoleForm(props) {
  // const name = props.name.notName;
  return (
    <div>
      <Typography className="formTitle">What's your role?</Typography>
      <FormControl margin="normal" className="formInput">
        <InputLabel className="locationInput" htmlFor="zipcode" width="100">
          {props.zip}
        </InputLabel>
        <Input
          disabled={props.nameDisabled}
          onChange={props.handleChange}
          name="location"
          id="zipcode"
          defaultValue={props.zip}
        />
      </FormControl>
      <Button
        className="nameButton"
        onClick={() => props.handleClick("location")}
      >
        <EditIcon />
      </Button>
    </div>
  );
}

export default RoleForm;