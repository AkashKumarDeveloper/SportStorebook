// RadioButtonsWithImages.stories.js
import React, { useState } from "react";
import RadioButtonsWithImages from "./RadioButtons.jsx";
import {
  soccerImage,
  baseBallImage,
  cricketImage,
} from "../../../../Assets/Imagesjs/Image.js";

export default {
  title: "Molecule/RadioButtonsWithImages",
  component: RadioButtonsWithImages,
};

const Template = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.selectedValue);

  const handleChange = (value) => {
    setSelectedValue(value);
  };
  console.log("...args>>>>", args);

  return (
    <RadioButtonsWithImages
      {...args}
      selectedValue={selectedValue}
      onChange={handleChange}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: "FootBall", image: soccerImage },
    { value: "Basket Ball", image: baseBallImage },
    { value: "Cricket", image: cricketImage },
  ],
  selectedValue: "FootBall",
};
