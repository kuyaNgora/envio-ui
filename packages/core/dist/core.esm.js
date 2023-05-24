import { transparentize } from 'polished';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

var blue = {
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
  blue10: "#054B7A"
};
// const indigo = {
//   // Indigo
//   /** indigo-01 - Soap */
//   indigo01: "#F3F1FD",
//   /** indigo-02 - Steel */
//   indigo02: "#E8E2FB",
//   /** indigo-03 - Ceil */
//   indigo03: "#D0C6F6",
//   /** indigo-04 - Glaucous */
//   indigo04: "#B9A9F2",
//   /** indigo-05 - Pigment */
//   indigo05: "#967FEC",
//   /** indigo-06 - Imperial */
//   indigo06: "#6E4EE4",
//   /** indigo-07 - Indigo */
//   indigo07: "#5F3AE1",
//   /** indigo-08 - Royal */
//   indigo08: "#461FD1",
//   /** indigo-09 - Zaffre */
//   indigo09: "#34179D",
//   /** indigo-10 - Xiketic */
//   indigo10: "#1D0D57"
// };
// const turquoise = {
//   // Turquoise
//   /** turquoise-01 - Bubbles */
//   turquoise01: "#E7FAFD",
//   /** turquoise-02 - Diamond */
//   turquoise02: "#B9F1F9",
//   /** turquoise-03 - Cyan */
//   turquoise03: "#8BE7F5",
//   /** turquoise-04 - Sky */
//   turquoise04: "#5CDEF1",
//   /** turquoise-05 - Surf */
//   turquoise05: "#2ED5ED",
//   /** turquoise-06 - Turquoise */
//   turquoise06: "#00CCE9",
//   /** turquoise-07 - Bondi */
//   turquoise07: "#00A7BF",
//   /** turquoise-08 - Teal */
//   turquoise08: "#008295",
//   /** turquoise-09 - Metallic */
//   turquoise09: "#005D6A",
//   /** turquoise-10 - Jungle */
//   turquoise10: "#003840"
// };
var green = {
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
  green10: "#208430"
};
var orange = {
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
  orange10: "#de7901"
};
var red = {
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
  red10: "#ba3030"
};
var greyLegacy = {
  // Grey (legacy)
  /** grey-01 - White */
  grey01: "#ffffff",
  /** grey-02 - Ghost */
  grey02: "#f7f8f9",
  /** grey-03 - Isabelline */
  grey03: "#ebedef",
  /** grey-04 - Gainsboro */
  grey04: "#d7dbdf",
  /** grey-05 - Ash Grey */
  grey05: "#b0b7bf",
  /** grey-06 - Grey Blue */
  grey06: "#89949f",
  /** grey-07 - Aurometalsaurus */
  grey07: "#62707f",
  /** grey-08 - Outer Space */
  grey08: "#313f4e",
  /** grey-09 - Japanese Indigo */
  grey09: "#253648",
  /** grey-10 - Yankees Blue */
  grey10: "#1e2b3a"
};
var grey = {
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
  greydark05: "#202020"
};
var yellow = {
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
  yellow10: "#d9b41e"
};
var systemColors = /*#__PURE__*/_extends({}, blue, green, orange, red, grey, greyLegacy, yellow);
/** Color pallette. Contains old Kata Platform colors, experimental colors, and style tokens. */
var colors = /*#__PURE__*/_extends({
  white: "#fff",
  black: "#202020"
}, systemColors, {
  // Core tokens
  bg: systemColors.greylight02,
  "bg-secondary": systemColors.greydark05,
  primary: blue.blue09,
  secondary: grey.greydark05,
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
  "text-inverse": systemColors.greylight01
});

var breakpoints = ["576px", "768px", "992px", "1200px", "1400px"];
var mediaQueries = {
  xs: "@media screen and (max-width: " + breakpoints[0] + ")",
  sm: "@media screen and (min-width: " + breakpoints[0] + ")",
  md: "@media screen and (min-width: " + breakpoints[1] + ")",
  lg: "@media screen and (min-width: " + breakpoints[2] + ")",
  xl: "@media screen and (min-width: " + breakpoints[3] + ")",
  xxl: "@media screen and (min-width: " + breakpoints[4] + ")"
};
var responsive = {
  breakpoints: breakpoints,
  mediaQueries: mediaQueries
};

/** Border radiuses */
var rounded = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8
};

var shadowColor = /*#__PURE__*/transparentize(0.68, "#89949F");
/** Custom elevation variant for the Card component. */
var shadows = {
  1: "none",
  2: "0px 2px 4px " + shadowColor,
  3: "0px 4px 8px " + shadowColor,
  4: "0px 8px 16px " + shadowColor,
  5: "0px 16px 32px " + shadowColor
};

/** Space values (in px) mapped by size designators */
var space = {
  /** Equivalent to 2px */
  xxxs: 2,
  /** Equivalent to 4px */
  xxs: 4,
  /** Equivalent to 8px */
  xs: 8,
  /** Equivalent to 12px */
  sm: 12,
  /** Equivalent to 16px */
  md: 16,
  /** Equivalent to 24px */
  lg: 24,
  /** Equivalent to 32px */
  xl: 32,
  /** Equivalent to 40px */
  xxl: 40,
  /** Equivalent to 40px */
  xxxl: 48
};

var fonts = {
  brand: "Inter",
  monospace: "'SF Mono', Inconsolata, Menlo, Monaco, Consolas, 'Courier New', Courier, monospace;"
};
var fontSizes = {
  900: "42px",
  800: "35px",
  700: "29px",
  600: "24px",
  500: "20px",
  400: "16px",
  300: "14px",
  200: "12px",
  100: "12px"
};
var lineHeights = {
  900: "48px",
  800: "40px",
  700: "32px",
  600: "28px",
  500: "24px",
  400: "20px",
  300: "16px",
  200: "16px",
  100: "16px"
};
var letterSpacings = {
  tighter: "-0.2px",
  tight: "-0.05px",
  normal: "0px",
  wide: "0.5px"
};
var typography = {
  fonts: fonts,
  fontSizes: fontSizes,
  lineHeights: lineHeights,
  letterSpacings: letterSpacings
};

/**
 * Default styled-system theme props based on the theme specification.
 *
 * [Theme specification](https://styled-system.com/theme-specification)
 */
var foundations = /*#__PURE__*/_extends({
  colors: colors,
  space: space,
  sizes: space
}, typography, {
  shadows: shadows,
  rounded: rounded
}, responsive);

export { foundations };
//# sourceMappingURL=core.esm.js.map
