import React from "react";
import ButtonComponent from "./Button.jsx";
import { action } from '@storybook/addon-actions'; 

export default {
  title: "Atoms/Button",
  component: ButtonComponent,
  argTypes: {
    width: {
      control: "select",
      options: ["auto", "100"],
    },
    label: {
      control: "text",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    borderRadius: {
      control: "text",
    },
    color: {
      control: "color",
    },
    labelColor: {
      control: "color",
    },
  },
};

const Template = (args) => <ButtonComponent {...args} onClick={action('clicked')} />;

export const Default = Template.bind({});
Default.args = {
  width: "auto",
  label: "Default Button",
  size: "large",
  borderRadius: "4px",
  color: "#1976d2",
  labelColor: 'inherit',
};