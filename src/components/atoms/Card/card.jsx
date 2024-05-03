import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const CustomRadio = withStyles({
  root: {
    color: '#3f51b5',
    '&$checked': {
      color: '#3f51b5', 
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function CustomRadioGroup(props) {
  const { value, onChange } = props;

  return (
    <>
      <FormControlLabel
        control={<CustomRadio value="football" />}
        label="Football"
        onChange={onChange}
        checked={value === "football"}
      />
      <FormControlLabel
        control={<CustomRadio value="cricket" />}
        label="Cricket"
        onChange={onChange}
        checked={value === "cricket"}
      />
      <FormControlLabel
        control={<CustomRadio value="baseball" />}
        label="Baseball"
        onChange={onChange}
        checked={value === "baseball"}
      />
    </>
  );
}
