import { danger, primary, secondary, success, warning } from "./button";
import { display, heading, label, text, title } from "./typography";

const variants = {
  text: {
    heading,
    label,
    text,
    display,
    title,
  },
  button: {
    ...primary,
    ...secondary,
    ...danger,
    ...success,
    ...warning,
  },
};

export default variants;
