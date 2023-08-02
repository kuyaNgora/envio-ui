const blue = {
  // Blue
  /** blue-01 - Heart of Ice */
  blue01: "#F5FBFF",
  /** blue-02 - Maritime */
  blue02: "#bcd5ec",
  /** blue-03 - Pastel Blue */
  blue03: "#a7c7e6",
  /** blue-04 - Adrift on the Nile */
  blue04: "#91b9df",
  /** blue-05 - High Seas */
  blue05: "#7babd8",
  /** blue-06 - Blue Bay */
  blue06: "#649dd1",
  /** blue-07 - Canadian Tuxedo */
  blue07: "#4d8fca",
  /** blue-08 - Mykonos */
  blue08: "#3281c3",
  /** blue-09 - French Blue */
  blue09: "#0973BB",
  /** blue-10 - Sea Paint */
  blue10: "#054B7A",
};

const green = {
  // Green
  /** green-01 - Vanishing Point */
  green01: "#daf1db",
  /** green-02 - Delta Mint */
  green02: "#c8e9c8",
  /** green-03 - Celadon */
  green03: "#b5e2b6",
  /** green-04 - Grape Green */
  green04: "#a3daa4",
  /** green-05 - Leek */
  green05: "#8fd392",
  /** green-06 - Emerald Rain */
  green06: "#7bcb80",
  /** green-07 - Mantis */
  green07: "#66c36d",
  /** green-08 - Leapfrog */
  green08: "#4ebb59",
  /** green-09 - Matt Green */
  green09: "#2fb344",
  /** green-10 - Freesia */
  green10: "#208430",
};

const orange = {
  // orange
  /** orange-01 - Blossom */
  orange01: "#ffe9d8",
  /** orange-02 - Coral Kiss */
  orange02: "#ffdec4",
  /** orange-03 - Apricot */
  orange03: "#ffd3b0",
  /** orange-04 - Pastel Orange */
  orange04: "#ffc89b",
  /** orange-05 - Goose Bill */
  orange05: "#ffbc86",
  /** orange-06 - Jambalaya */
  orange06: "#ffb170",
  /** orange-07 - Bittersweet */
  orange07: "#ffa558",
  /** orange-08 - Indian Saffron */
  orange08: "#ff993b",
  /** orange-09 - Dark Orange */
  orange09: "#ff8c02",
  /** orange-10 - Pumpkin Cat */
  orange10: "#de7901",
};

const red = {
  // Red
  /** red-01 - We Peep */
  red01: "#fddad6",
  /** red-02 - Rose Quartz */
  red02: "#fac8c2",
  /** red-03 - Peach Bud */
  red03: "#f7b5ae",
  /** red-04 - Young Crab */
  red04: "#f3a39b",
  /** red-05 - Vinaceous Cinnamon */
  red05: "#ef9087",
  /** red-06 - Salmon Poké Bowl */
  red06: "#e97c74",
  /** red-07 - Lovely Little Rosy */
  red07: "#e46861",
  /** red-08 - Blossoming Dynasty */
  red08: "#dd524d",
  /** red-09 - Chef's Kiss */
  red09: "#d63939",
  /** red-10 - Hot Jazz */
  red10: "#ba3030",
};

const neutral = {
  /** greylight-01 - White */
  greylight01: "#FFFFFF",
  /** greylight-02 - Ghost */
  greylight02: "#FAFBFD",
  /** greylight-03 - Isabeline */
  greylight03: "#F5F6F8",
  /** greylight-04 - Gainsboro */
  greylight04: "#E7E9ED",
  /** greylight-05 - Ash Grey */
  greylight05: "#C6D0DB",
  /** greymed-01 - Crayola */
  greymed01: "#B0B7BF",
  /** greymed-02 - Cadet */
  greymed02: "#949DA7",
  /** greymed-03 - Light state */
  greymed03: "#758495",
  /** greymed-04 - Slate */
  greymed04: "#6A7A8A",
  /** greymed-05 - Electric */
  greymed05: "#62707F",
  /** greydark-01 - Charcoal */
  greydark01: "#3C4D5F",
  /** greydark-02 - Gunmetal */
  greydark02: "#313F4E",
  /** greydark-03 - Raisin */
  greydark03: "#2A3643",
  /** greydark-04 - Rich black */
  greydark04: "#232D38",
  /** greydark-05 - Lead */
  greydark05: "#202020",
};

const yellow = {
  // yellow
  /** yellow-01 - Glamour White */
  yellow01: "#fefbee",
  /** yellow-02 - Hint of Yellow */
  yellow02: "#fdf2cb",
  /** yellow-03 - Colonial White */
  yellow03: "#fdedba",
  /** yellow-04 - Bleached Sunflower */
  yellow04: "#fce8a7",
  /** yellow-05 - Banana Republic */
  yellow05: "#fbe494",
  /** yellow-06 - Pasta Luego */
  yellow06: "#fbdf7f",
  /** yellow-07 - Lighthouse Glow */
  yellow07: "#fad969",
  /** yellow-08 - Tuscan Sun */
  yellow08: "#fad44d",
  /** yellow-09 - Dream of Spring */
  yellow09: "#F9CF24",
  /** yellow-10 - Golden Frame */
  yellow10: "#d9b41e",
};

const systemColors = {
  ...blue,
  ...green,
  ...orange,
  ...red,
  ...neutral,
  ...yellow,
};

/** Color pallette. Contains old Kata Platform colors, experimental colors, and style tokens. */
const colors = {
  white: systemColors.greylight01,
  black: systemColors.greydark05,
  ...systemColors,

  // Core tokens
  bg: systemColors.greylight02,
  "bg-secondary": systemColors.greydark05,
  primary: blue.blue09,
  secondary: neutral.greydark05,
  warning: orange.orange09,
  danger: red.red09,
  info: blue.blue06,
  success: green.green09,
  "ui-hover": systemColors.blue07,
  // 'ui-hover-2': systemColors.indigo01,
  // 'ui-visited': systemColors.turquoise08,

  // Type tokens
  link: systemColors.blue06,
  "link-hover": systemColors.blue07,
  // 'link-visited': systemColors.turquoise08,
  "link-destructive": systemColors.red05,
  text01: systemColors.greydark01,
  text02: systemColors.greydark02,
  text03: systemColors.greydark03,
  text04: systemColors.greydark04,
  text05: systemColors.greydark05,
  "text-success": systemColors.green09,
  "text-warning": systemColors.orange09,
  "text-danger": systemColors.red09,
  "text-inverse": systemColors.greylight01,
};

export type Colors = typeof colors;

export default colors;
