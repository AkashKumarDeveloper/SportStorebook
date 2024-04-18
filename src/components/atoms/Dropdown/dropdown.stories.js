import { Children } from "react";
import DropDown from "./dropdown";

export default {
  component: DropDown,
  title: "Atoms/dropdown",
  tags: ["autodocs"],
};

export const Dropdown = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};