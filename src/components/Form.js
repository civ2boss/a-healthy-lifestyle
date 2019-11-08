import React, { Fragment } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField
} from "@material-ui/core";

function Form({ age, setAge, sex, setSex, pregnant, setPregnant }) {
  return (
    <Fragment>
      <div>
        <TextField
          id="filled-number"
          label="Age"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          variant="filled"
          value={age}
          onChange={event => setAge(event.target.value)}
        />
      </div>
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Sex</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={sex}
            onChange={event => setSex(event.target.value)}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={pregnant}
              onChange={event => setPregnant(event.target.checked)}
              value="true"
            />
          }
          label="Pregnant?"
        />
      </div>
      <div>
        <Button type="submit" variant="contained">
          Search
        </Button>
      </div>
    </Fragment>
  );
}

export default Form;
