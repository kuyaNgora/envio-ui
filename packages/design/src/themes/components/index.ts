import alert from "./alert";
import avatar from "./avatar";
import badge from "./badge";
import button from "./button";
import card from "./card";
import checkbox from "./checkbox";
import input from "./input";
import label from "./label";
import modal from "./modal";
import nav from "./navbar";
import pill from "./pill";
import popover from "./popover";
import rounded from "./rounded";
import skeleton from "./skeleton";
import toast from "./toast";
import tooltip from "./tooltip";
import typography from "./typography";
import wrapper from "./wrapper";
import drawer from "./drawer";
import stepper from "./stepper";
import switchStyle from "./switch";
import progress from "./progress";
import slider from "./slider";
import uploader from "./uploader";

const componentStyles = {
  avatar,
  alert,
  skeleton,
  badge,
  ...button,
  card,
  pill,
  rounded,
  ...typography,
  ...tooltip,
  label,
  ...popover,
  ...toast,
  ...modal,
  ...checkbox,
  ...wrapper,
  ...nav,
  input,
  drawer,
  ...stepper,
  ...switchStyle,
  ...progress,
  ...slider,
  ...uploader,
};

export default componentStyles;
