import { createElement } from 'react';

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
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var iconDefaultProps = {
  size: 24,
  fill: "#313f4e"
};

var _excluded = ["size", "fill"];
var IconAlertCircle = function IconAlertCircle(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 13C13 13.552 12.552 14 12 14C11.448 14 11 13.552 11 13V8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8V13ZM12 17C11.448 17 11 16.552 11 16C11 15.448 11.448 15 12 15C12.552 15 13 15.448 13 16C13 16.552 12.552 17 12 17ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z",
    fill: fill
  }));
};
IconAlertCircle.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1 = ["size", "fill"];
var IconAlertTriangle = function IconAlertTriangle(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.0001 14C13.0001 14.552 12.5521 15 12.0001 15C11.4481 15 11.0001 14.552 11.0001 14V10C11.0001 9.448 11.4481 9 12.0001 9C12.5521 9 13.0001 9.448 13.0001 10V14ZM12.0001 18C11.4481 18 11.0001 17.552 11.0001 17C11.0001 16.448 11.4481 16 12.0001 16C12.5521 16 13.0001 16.448 13.0001 17C13.0001 17.552 12.5521 18 12.0001 18ZM22.5611 17.303L14.8891 4.584C14.2901 3.592 13.2101 3 12.0001 3C10.7901 3 9.71006 3.592 9.11106 4.584L1.43906 17.303C0.871058 18.246 0.854058 19.38 1.39406 20.336C1.97306 21.363 3.09806 22 4.32806 22H19.6721C20.9021 22 22.0271 21.363 22.6061 20.336C23.1461 19.38 23.1291 18.246 22.5611 17.303Z",
    fill: fill
  }));
};
IconAlertTriangle.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2 = ["size", "fill"];
var IconBell = function IconBell(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.0006 18.3408C14.0006 19.2398 13.0846 19.9998 12.0006 19.9998C10.9166 19.9998 10.0006 19.2398 10.0006 18.3408V17.9998H14.0006V18.3408ZM20.5216 15.2068L18.7206 13.4038V8.93577C18.7206 5.45477 16.2186 2.49877 12.8996 2.05877C10.9786 1.80377 9.03864 2.38977 7.58364 3.66577C6.11964 4.94777 5.28064 6.79277 5.28064 8.72677L5.27964 13.4038L3.47964 15.2078C3.01064 15.6768 2.87164 16.3768 3.12564 16.9898C3.38064 17.6028 3.97364 17.9998 4.63764 17.9998H8.00064V18.3408C8.00064 20.3588 9.79464 21.9998 12.0006 21.9998C14.2066 21.9998 16.0006 20.3588 16.0006 18.3408V17.9998H19.3626C20.0266 17.9998 20.6196 17.6038 20.8736 16.9898C21.1286 16.3768 20.9896 15.6768 20.5216 15.2068Z",
    fill: fill
  }));
};
IconBell.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3 = ["size", "fill"];
var IconBellSlash = function IconBellSlash(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.7071 20.7067C20.5121 20.9017 20.2561 20.9997 20.0001 20.9997C19.7441 20.9997 19.4881 20.9017 19.2931 20.7067L16.5861 17.9997L16.0001 17.4137L14.6551 16.0687L14.5861 15.9997L7.28307 8.69671L5.53107 6.94571L3.29307 4.70671C2.90207 4.31571 2.90207 3.68371 3.29307 3.29271C3.68407 2.90171 4.31607 2.90171 4.70707 3.29271L6.42007 5.00571L7.88607 6.47072L17.4141 15.9997L19.4071 17.9927L20.7071 19.2927C21.0981 19.6837 21.0981 20.3157 20.7071 20.7067ZM7.03507 4.20671C7.20707 4.01771 7.38907 3.83671 7.58307 3.66571C9.03807 2.39071 10.9781 1.80371 12.8991 2.05971C16.2181 2.49871 18.7201 5.45571 18.7201 8.93571V13.4037L20.5201 15.2067C20.9891 15.6767 21.1281 16.3767 20.8731 16.9907C20.7721 17.2327 20.6091 17.4277 20.4201 17.5907L20.1141 17.2857L18.1211 15.2927L8.59307 5.76371L7.12707 4.29871L7.03507 4.20671ZM14.0001 18.3407C14.0001 19.2397 13.0841 19.9997 12.0001 19.9997C10.9161 19.9997 10.0001 19.2397 10.0001 18.3407V17.9997H14.0001V18.3407ZM15.8791 18.7067L15.2931 18.1207L13.9481 16.7767L13.8791 16.7067L6.57607 9.40471L5.31107 8.13971C5.29507 8.33471 5.28007 8.52971 5.28007 8.72671L5.27907 13.4037L3.47807 15.2077C3.01007 15.6777 2.87107 16.3767 3.12507 16.9897C3.38007 17.6027 3.97307 17.9997 4.63707 17.9997H8.00007V18.3407C8.00007 20.3587 9.79407 21.9997 12.0001 21.9997C14.0421 21.9997 15.7121 20.5887 15.9511 18.7797L15.8791 18.7067Z",
    fill: fill
  }));
};
IconBellSlash.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4 = ["size", "fill"];
var IconInfo = function IconInfo(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 9C11.448 9 11 8.552 11 8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8C13 8.552 12.552 9 12 9ZM13 16C13 16.552 12.552 17 12 17C11.448 17 11 16.552 11 16V11C11 10.448 11.448 10 12 10C12.552 10 13 10.448 13 11V16ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.522 22 22 17.523 22 12C22 6.477 17.522 2 12 2Z",
    fill: fill
  }));
};
IconInfo.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5 = ["size", "fill"];
var IconQuestionCircle = function IconQuestionCircle(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 12.837V14C13 14.553 12.553 15 12 15C11.447 15 11 14.553 11 14V12C11 11.447 11.447 11 12 11C12.827 11 13.5 10.327 13.5 9.5C13.5 8.673 12.827 8 12 8C11.173 8 10.5 8.673 10.5 9.5C10.5 10.053 10.053 10.5 9.5 10.5C8.947 10.5 8.5 10.053 8.5 9.5C8.5 7.57 10.07 6 12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.08 14.44 12.403 13 12.837ZM12 18C11.447 18 11 17.553 11 17C11 16.447 11.447 16 12 16C12.553 16 13 16.447 13 17C13 17.553 12.553 18 12 18ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconQuestionCircle.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$6 = ["size", "fill"];
var IconStopwatch = function IconStopwatch(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$6);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 15H12C11.448 15 11 14.553 11 14V11C11 10.447 11.448 10 12 10C12.552 10 13 10.447 13 11V13H15C15.552 13 16 13.447 16 14C16 14.553 15.552 15 15 15ZM12.988 5.058C12.99 5.037 13 5.021 13 5V4H14C14.552 4 15 3.553 15 3C15 2.447 14.552 2 14 2H10C9.448 2 9 2.447 9 3C9 3.553 9.448 4 10 4H11V5C11 5.021 11.01 5.037 11.012 5.058C6.513 5.552 3 9.372 3 14C3 18.963 7.038 23 12 23C16.962 23 21 18.963 21 14C21 9.372 17.487 5.552 12.988 5.058Z",
    fill: fill
  }));
};
IconStopwatch.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$7 = ["size", "fill"];
var IconAlertCircle$1 = function IconAlertCircle(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$7);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11 8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8V13C13 13.552 12.552 14 12 14C11.448 14 11 13.552 11 13V8ZM11 16C11 15.448 11.448 15 12 15C12.552 15 13 15.448 13 16C13 16.552 12.552 17 12 17C11.448 17 11 16.552 11 16ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z",
    fill: fill
  }));
};
IconAlertCircle$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$8 = ["size", "fill"];
var IconAlertTriangle$1 = function IconAlertTriangle(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$8);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.9998 10C10.9998 9.448 11.4478 9 11.9998 9C12.5518 9 12.9998 9.448 12.9998 10V14C12.9998 14.552 12.5518 15 11.9998 15C11.4478 15 10.9998 14.552 10.9998 14V10ZM10.9998 17C10.9998 16.448 11.4478 16 11.9998 16C12.5518 16 12.9998 16.448 12.9998 17C12.9998 17.552 12.5518 18 11.9998 18C11.4478 18 10.9998 17.552 10.9998 17ZM20.8645 19.353C20.6355 19.758 20.1895 20 19.6715 20H4.3275C3.8095 20 3.3635 19.758 3.1355 19.353C3.0275 19.163 2.8855 18.776 3.1525 18.336L10.8235 5.618C11.2905 4.844 12.7085 4.844 13.1755 5.618L20.8475 18.336C21.1135 18.776 20.9725 19.163 20.8645 19.353ZM22.5605 17.303L14.8885 4.584C14.2895 3.592 13.2095 3 11.9995 3C10.7895 3 9.7095 3.592 9.1115 4.584L1.4395 17.303C0.8705 18.246 0.8535 19.38 1.3935 20.336C1.9725 21.363 3.0975 22 4.3275 22H19.6715C20.9025 22 22.0265 21.363 22.6065 20.336C23.1465 19.38 23.1295 18.246 22.5605 17.303Z",
    fill: fill
  }));
};
IconAlertTriangle$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$9 = ["size", "fill"];
var IconBell$1 = function IconBell(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$9);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.51552 15.9995L6.69552 14.8175C7.07352 14.4395 7.28152 13.9375 7.28152 13.4035V8.72647C7.28152 7.36947 7.87152 6.07247 8.90152 5.17047C9.93952 4.26047 11.2615 3.86047 12.6385 4.04147C14.9655 4.35047 16.7205 6.45447 16.7205 8.93647V13.4035C16.7205 13.9375 16.9285 14.4395 17.3055 14.8165L18.4865 15.9995H5.51552ZM14.0005 18.3405C14.0005 19.2395 13.0845 19.9995 12.0005 19.9995C10.9165 19.9995 10.0005 19.2395 10.0005 18.3405V17.9995H14.0005V18.3405ZM20.5215 15.2075L18.7205 13.4035V8.93647C18.7205 5.45547 16.2185 2.49847 12.9005 2.05947C10.9785 1.80347 9.03852 2.39047 7.58352 3.66647C6.11952 4.94847 5.28152 6.79247 5.28152 8.72647L5.28052 13.4035L3.47952 15.2075C3.01052 15.6775 2.87152 16.3765 3.12552 16.9895C3.38052 17.6035 3.97352 17.9995 4.63752 17.9995H8.00052V18.3405C8.00052 20.3585 9.79452 21.9995 12.0005 21.9995C14.2065 21.9995 16.0005 20.3585 16.0005 18.3405V17.9995H19.3635C20.0275 17.9995 20.6195 17.6035 20.8735 16.9905C21.1285 16.3765 20.9905 15.6765 20.5215 15.2075Z",
    fill: fill
  }));
};
IconBell$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$a = ["size", "fill"];
var IconBellSlash$1 = function IconBellSlash(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$a);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.7071 19.2927L19.4071 17.9927L17.4141 15.9997L7.8861 6.47071L6.4201 5.00571L4.7071 3.29271C4.3161 2.90171 3.6841 2.90171 3.2931 3.29271C2.9021 3.68371 2.9021 4.31571 3.2931 4.70671L5.5311 6.94571L7.2831 8.69671L14.5861 15.9997L14.6551 16.0687L16.0001 17.4137L16.5861 17.9997L19.2931 20.7067C19.4881 20.9017 19.7441 20.9997 20.0001 20.9997C20.2561 20.9997 20.5121 20.9017 20.7071 20.7067C21.0981 20.3157 21.0981 19.6837 20.7071 19.2927ZM14.0001 18.3407V17.9997H10.0001V18.3407C10.0001 19.2397 10.9161 19.9997 12.0001 19.9997C13.0841 19.9997 14.0001 19.2397 14.0001 18.3407ZM15.1721 17.9997L15.9511 18.7797C15.7121 20.5887 14.0421 21.9997 12.0001 21.9997C9.7941 21.9997 8.0001 20.3587 8.0001 18.3407V17.9997H4.6371C3.9731 17.9997 3.3801 17.6037 3.1251 16.9897C2.8711 16.3767 3.0101 15.6777 3.4781 15.2077L5.2791 13.4037L5.2801 8.72671C5.2801 8.52971 5.2951 8.33471 5.3111 8.13971L7.2801 10.1077V13.4037C7.2801 13.9377 7.0721 14.4397 6.6941 14.8177L5.5151 15.9997H13.1721L14.0291 16.8567L15.1721 17.9997ZM8.4681 5.63971L7.0351 4.20671C7.2071 4.01771 7.3891 3.83671 7.5831 3.66671C9.0391 2.39071 10.9761 1.80371 12.8991 2.05971C16.2181 2.49871 18.7201 5.45571 18.7201 8.93671V13.4037L20.5201 15.2077C20.9891 15.6767 21.1281 16.3767 20.8731 16.9907C20.7721 17.2327 20.6091 17.4277 20.4201 17.5907L16.8151 13.9867C16.7591 13.7997 16.7201 13.6057 16.7201 13.4037V8.93671C16.7201 6.45471 14.9651 4.35071 12.6381 4.04171C11.2621 3.86071 9.9381 4.26071 8.9001 5.17071C8.7381 5.31271 8.6071 5.47971 8.4681 5.63971Z",
    fill: fill
  }));
};
IconBellSlash$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$b = ["size", "fill"];
var IconInfo$1 = function IconInfo(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$b);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11 8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8C13 8.552 12.552 9 12 9C11.448 9 11 8.552 11 8ZM11 11C11 10.448 11.448 10 12 10C12.552 10 13 10.448 13 11V16C13 16.552 12.552 17 12 17C11.448 17 11 16.552 11 16V11ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.522 22 22 17.523 22 12C22 6.477 17.522 2 12 2Z",
    fill: fill
  }));
};
IconInfo$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$c = ["size", "fill"];
var IconQuestionCircle$1 = function IconQuestionCircle(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$c);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.5 9.5C8.5 7.57 10.07 6 12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.08 14.44 12.403 13 12.837V14C13 14.553 12.553 15 12 15C11.447 15 11 14.553 11 14V12C11 11.447 11.447 11 12 11C12.827 11 13.5 10.327 13.5 9.5C13.5 8.673 12.827 8 12 8C11.173 8 10.5 8.673 10.5 9.5C10.5 10.053 10.053 10.5 9.5 10.5C8.947 10.5 8.5 10.053 8.5 9.5ZM11 17C11 16.447 11.447 16 12 16C12.553 16 13 16.447 13 17C13 17.553 12.553 18 12 18C11.447 18 11 17.553 11 17ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconQuestionCircle$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$d = ["size", "fill"];
var IconQuestion = function IconQuestion(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$d);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 4C14.757 4 17 6.243 17 9C17 11.414 15.279 13.435 13 13.898V15C13 15.553 12.553 16 12 16C11.447 16 11 15.553 11 15V13C11 12.447 11.447 12 12 12C13.654 12 15 10.654 15 9C15 7.346 13.654 6 12 6C10.346 6 9 7.346 9 9C9 9.553 8.553 10 8 10C7.447 10 7 9.553 7 9C7 6.243 9.243 4 12 4ZM11 19C11 18.447 11.447 18 12 18C12.553 18 13 18.447 13 19C13 19.553 12.553 20 12 20C11.447 20 11 19.553 11 19Z",
    fill: fill
  }));
};
IconQuestion.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$e = ["size", "fill"];
var IconStopwatch$1 = function IconStopwatch(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$e);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 12.5H13V10.5C13 9.947 12.552 9.5 12 9.5C11.448 9.5 11 9.947 11 10.5V13.5C11 14.053 11.448 14.5 12 14.5H15C15.552 14.5 16 14.053 16 13.5C16 12.947 15.552 12.5 15 12.5ZM12 20.25C8.278 20.25 5.25 17.222 5.25 13.5C5.25 9.778 8.278 6.75 12 6.75C15.722 6.75 18.75 9.778 18.75 13.5C18.75 17.222 15.722 20.25 12 20.25ZM12.988 4.558C12.99 4.537 13 4.521 13 4.5V3.5H14C14.552 3.5 15 3.053 15 2.5C15 1.947 14.552 1.5 14 1.5H10C9.448 1.5 9 1.947 9 2.5C9 3.053 9.448 3.5 10 3.5H11V4.5C11 4.521 11.01 4.537 11.012 4.558C6.513 5.052 3 8.872 3 13.5C3 18.463 7.038 22.5 12 22.5C16.962 22.5 21 18.463 21 13.5C21 8.872 17.487 5.052 12.988 4.558Z",
    fill: fill
  }));
};
IconStopwatch$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$f = ["size", "fill"];
var IconArrowCircleDown = function IconArrowCircleDown(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$f);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.69 13.861L12.69 16.723C12.645 16.766 12.589 16.787 12.539 16.82C12.485 16.856 12.437 16.899 12.377 16.924C12.256 16.973 12.128 17 12 17C11.869 17 11.739 16.973 11.617 16.923C11.495 16.872 11.384 16.799 11.292 16.706L8.293 13.707C7.902 13.316 7.902 12.683 8.293 12.293C8.683 11.902 9.316 11.902 9.707 12.293L11 13.586V8C11 7.447 11.447 7 12 7C12.552 7 13 7.447 13 8V13.663L14.309 12.414C14.709 12.033 15.341 12.047 15.723 12.447C16.105 12.847 16.089 13.48 15.69 13.861ZM12 2C6.485 2 2 6.486 2 12C2 17.514 6.485 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconArrowCircleDown.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$g = ["size", "fill"];
var IconArrowCircleLeft = function IconArrowCircleLeft(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$g);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.139 15.69L7.277 12.69C7.234 12.645 7.213 12.589 7.18 12.539C7.144 12.485 7.101 12.437 7.076 12.377C7.027 12.256 7 12.128 7 12C7 11.869 7.027 11.739 7.077 11.617C7.128 11.495 7.201 11.384 7.294 11.292L10.293 8.293C10.684 7.902 11.317 7.902 11.707 8.293C12.098 8.683 12.098 9.316 11.707 9.707L10.414 11H16C16.553 11 17 11.447 17 12C17 12.552 16.553 13 16 13H10.337L11.586 14.309C11.967 14.709 11.953 15.341 11.553 15.723C11.153 16.105 10.52 16.089 10.139 15.69ZM22 12C22 6.485 17.514 2 12 2C6.486 2 2 6.485 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12Z",
    fill: fill
  }));
};
IconArrowCircleLeft.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$h = ["size", "fill"];
var IconArrowCircleRight = function IconArrowCircleRight(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$h);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.861 8.31L16.723 11.31C16.766 11.355 16.787 11.411 16.82 11.461C16.856 11.515 16.899 11.563 16.924 11.623C16.973 11.744 17 11.872 17 12C17 12.131 16.973 12.261 16.923 12.383C16.872 12.505 16.799 12.616 16.706 12.708L13.707 15.707C13.316 16.098 12.683 16.098 12.293 15.707C11.902 15.317 11.902 14.684 12.293 14.293L13.586 13H8C7.447 13 7 12.553 7 12C7 11.448 7.447 11 8 11H13.663L12.414 9.691C12.033 9.291 12.047 8.659 12.447 8.277C12.847 7.895 13.48 7.911 13.861 8.31ZM2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.486 17.514 2 12 2C6.486 2 2 6.486 2 12Z",
    fill: fill
  }));
};
IconArrowCircleRight.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$i = ["size", "fill"];
var IconArrowCircleUp = function IconArrowCircleUp(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$i);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.31 10.139L11.31 7.277C11.355 7.234 11.411 7.213 11.461 7.18C11.515 7.144 11.563 7.101 11.623 7.076C11.744 7.027 11.872 7 12 7C12.131 7 12.261 7.027 12.383 7.077C12.505 7.128 12.616 7.201 12.708 7.294L15.707 10.293C16.098 10.684 16.098 11.317 15.707 11.707C15.317 12.098 14.684 12.098 14.293 11.707L13 10.414V16C13 16.553 12.553 17 12 17C11.448 17 11 16.553 11 16V10.337L9.691 11.586C9.291 11.967 8.659 11.953 8.277 11.553C7.895 11.153 7.911 10.52 8.31 10.139ZM12 22C17.515 22 22 17.514 22 12C22 6.486 17.515 2 12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22Z",
    fill: fill
  }));
};
IconArrowCircleUp.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$j = ["size", "fill"];
var IconCarretDown = function IconCarretDown(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$j);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 26 25",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 17C12.494 17 12.01 16.767 11.674 16.358L7.46097 11.26C6.95697 10.649 6.85597 9.782 7.20197 9.049C7.50697 8.402 8.11397 8 8.78697 8H17.213C17.886 8 18.493 8.402 18.798 9.049C19.144 9.782 19.043 10.649 18.54 11.259L14.326 16.358C13.99 16.767 13.506 17 13 17Z",
    fill: fill
  }));
};
IconCarretDown.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$k = ["size", "fill"];
var IconCarretLeft = function IconCarretLeft(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$k);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 25 26",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.044 19.0014C14.573 19.0014 14.109 18.8444 13.741 18.5404L8.642 14.3264C8.234 13.9904 8 13.5064 8 13.0004C8 12.4944 8.234 12.0104 8.641 11.6744L13.741 7.46137C14.349 6.95737 15.216 6.85637 15.95 7.20137C16.598 7.50737 17 8.11437 17 8.78737V17.2134C17 17.8864 16.598 18.4934 15.95 18.7994C15.661 18.9354 15.351 19.0014 15.044 19.0014Z",
    fill: fill
  }));
};
IconCarretLeft.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$l = ["size", "fill"];
var IconCarretRight = function IconCarretRight(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$l);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 25 26",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.956 19.0014C9.649 19.0014 9.339 18.9354 9.05 18.7994C8.402 18.4934 8 17.8864 8 17.2134V8.78743C8 8.11443 8.402 7.50743 9.05 7.20143C9.782 6.85643 10.65 6.95743 11.259 7.46043L16.358 11.6744C16.767 12.0104 17 12.4944 17 13.0004C17 13.5064 16.767 13.9904 16.358 14.3264L11.259 18.5394C10.891 18.8444 10.427 19.0014 9.956 19.0014Z",
    fill: fill
  }));
};
IconCarretRight.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$m = ["size", "fill"];
var IconCarretUp = function IconCarretUp(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$m);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 26 25",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.2128 17H8.78684C8.11384 17 7.50684 16.598 7.20184 15.951C6.85684 15.218 6.95684 14.351 7.45984 13.741L11.6738 8.64205C12.3458 7.82505 13.6538 7.82505 14.3258 8.64205L18.5388 13.74C19.0428 14.351 19.1438 15.218 18.7978 15.951C18.4928 16.598 17.8858 17 17.2128 17Z",
    fill: fill
  }));
};
IconCarretUp.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$n = ["size", "fill"];
var IconArrowCircleDown$1 = function IconArrowCircleDown(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$n);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.3096 12.4141L12.9996 13.6641V8.0001C12.9996 7.4481 12.5526 7.0001 11.9996 7.0001C11.4476 7.0001 10.9996 7.4481 10.9996 8.0001V13.5861L9.7066 12.2931C9.3166 11.9021 8.6836 11.9021 8.2926 12.2931C7.9026 12.6841 7.9026 13.3161 8.2926 13.7071L11.2926 16.7061C11.3846 16.7991 11.4956 16.8721 11.6176 16.9231C11.7396 16.9741 11.8696 17.0001 11.9996 17.0001C12.1286 17.0001 12.2566 16.9731 12.3766 16.9241C12.4376 16.8991 12.4856 16.8561 12.5386 16.8201C12.5896 16.7871 12.6456 16.7671 12.6906 16.7241L15.6906 13.8611C16.0896 13.4801 16.1046 12.8471 15.7236 12.4471C15.3416 12.0471 14.7096 12.0331 14.3096 12.4141ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconArrowCircleDown$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$o = ["size", "fill"];
var IconArrowCircleLeft$1 = function IconArrowCircleLeft(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$o);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 11H10.336L11.586 9.69C11.967 9.291 11.952 8.658 11.553 8.276C11.153 7.896 10.521 7.91 10.139 8.31L7.276 11.31C7.238 11.35 7.221 11.4 7.19 11.445C7.149 11.504 7.103 11.558 7.076 11.626C7.039 11.717 7.027 11.812 7.019 11.909C7.016 11.94 7 11.968 7 12C7 12.002 7.001 12.003 7.001 12.005C7.002 12.135 7.027 12.264 7.078 12.386C7.128 12.507 7.202 12.616 7.293 12.708L10.293 15.707C10.488 15.902 10.744 16 11 16C11.256 16 11.512 15.902 11.707 15.707C12.098 15.316 12.098 14.684 11.707 14.293L10.414 13H16C16.552 13 17 12.552 17 12C17 11.448 16.552 11 16 11ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconArrowCircleLeft$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$p = ["size", "fill"];
var IconArrowCircleRight$1 = function IconArrowCircleRight(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$p);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.999 12.0054C16.999 12.0034 17 12.0024 17 12.0004C17 11.9674 16.984 11.9404 16.981 11.9084C16.973 11.8124 16.961 11.7164 16.924 11.6264C16.897 11.5584 16.851 11.5044 16.81 11.4444C16.779 11.4004 16.762 11.3494 16.724 11.3094L13.861 8.3094C13.479 7.9094 12.847 7.8954 12.447 8.2764C12.048 8.6574 12.033 9.2904 12.414 9.6904L13.664 11.0004H8C7.448 11.0004 7 11.4474 7 12.0004C7 12.5524 7.448 13.0004 8 13.0004H13.586L12.293 14.2934C11.902 14.6834 11.902 15.3164 12.293 15.7074C12.488 15.9024 12.744 16.0004 13 16.0004C13.256 16.0004 13.512 15.9024 13.707 15.7074L16.707 12.7074C16.798 12.6164 16.872 12.5064 16.922 12.3854C16.973 12.2644 16.998 12.1354 16.999 12.0054ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconArrowCircleRight$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$q = ["size", "fill"];
var IconArrowCircleUp$1 = function IconArrowCircleUp(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$q);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.7075 7.2935C12.6165 7.2015 12.5065 7.1285 12.3855 7.0785C12.2645 7.0275 12.1355 7.0015 12.0055 7.0015C12.0035 7.0015 12.0015 7.0005 11.9995 7.0005C11.9635 7.0005 11.9335 7.0165 11.8975 7.0205C11.8055 7.0305 11.7135 7.0405 11.6265 7.0755C11.5575 7.1035 11.5015 7.1505 11.4405 7.1925C11.3975 7.2225 11.3485 7.2395 11.3095 7.2765L8.3095 10.1385C7.9105 10.5205 7.8955 11.1525 8.2765 11.5525C8.6585 11.9525 9.2905 11.9665 9.6905 11.5855L10.9995 10.3365V16.0005C10.9995 16.5525 11.4475 17.0005 11.9995 17.0005C12.5525 17.0005 12.9995 16.5525 12.9995 16.0005V10.4145L14.2925 11.7075C14.4885 11.9025 14.7445 12.0005 14.9995 12.0005C15.2555 12.0005 15.5115 11.9025 15.7075 11.7075C16.0975 11.3165 16.0975 10.6835 15.7075 10.2935L12.7075 7.2935ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconArrowCircleUp$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$r = ["size", "fill"];
var IconArrowDownLeft = function IconArrowDownLeft(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$r);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.707 6.29325C17.316 5.90225 16.684 5.90225 16.293 6.29325L8 14.5863V9.00025C8 8.44825 7.553 8.00025 7 8.00025C6.447 8.00025 6 8.44825 6 9.00025V17.0002C6 17.5522 6.447 18.0002 7 18.0002H15C15.553 18.0002 16 17.5522 16 17.0002C16 16.4482 15.553 16.0002 15 16.0002H9.414L17.707 7.70725C18.098 7.31625 18.098 6.68425 17.707 6.29325Z",
    fill: fill
  }));
};
IconArrowDownLeft.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$s = ["size", "fill"];
var IconArrowDown = function IconArrowDown(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$s);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.7682 13.36C18.4142 12.936 17.7842 12.878 17.3602 13.232L13.0002 16.865V5C13.0002 4.448 12.5522 4 12.0002 4C11.4482 4 11.0002 4.448 11.0002 5V16.865L6.64023 13.232C6.21523 12.878 5.58523 12.936 5.23223 13.36C4.87823 13.784 4.93523 14.415 5.36023 14.768L11.3602 19.768C11.4072 19.808 11.4632 19.827 11.5152 19.857C11.5562 19.881 11.5922 19.909 11.6372 19.927C11.7542 19.973 11.8762 20 12.0002 20C12.1242 20 12.2462 19.973 12.3632 19.927C12.4082 19.909 12.4442 19.881 12.4852 19.857C12.5372 19.827 12.5932 19.808 12.6402 19.768L18.6402 14.768C19.0642 14.415 19.1222 13.784 18.7682 13.36Z",
    fill: fill
  }));
};
IconArrowDown.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$t = ["size", "fill"];
var IconArrowDownRight = function IconArrowDownRight(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$t);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.0002 8.00025C16.4473 8.00025 16.0002 8.44825 16.0002 9.00025V14.5863L7.70725 6.29325C7.31625 5.90225 6.68425 5.90225 6.29325 6.29325C5.90225 6.68425 5.90225 7.31625 6.29325 7.70725L14.5863 16.0002H9.00025C8.44725 16.0002 8.00025 16.4482 8.00025 17.0002C8.00025 17.5522 8.44725 18.0002 9.00025 18.0002H17.0002C17.5532 18.0002 18.0002 17.5522 18.0002 17.0002V9.00025C18.0002 8.44825 17.5532 8.00025 17.0002 8.00025Z",
    fill: fill
  }));
};
IconArrowDownRight.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$u = ["size", "fill"];
var IconArrowDownTurnLeft = function IconArrowDownTurnLeft(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$u);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.979 6.95901C19.977 6.40801 19.529 5.96301 18.979 5.96301H18.975C18.423 5.96501 17.977 6.41501 17.979 6.96701L18 11.967C18 12.234 17.898 12.486 17.71 12.675C17.521 12.865 17.271 12.97 17.004 12.971L8.08499 13.008L10.771 9.62201C11.114 9.18901 11.041 8.56001 10.609 8.21701C10.177 7.87401 9.54799 7.94801 9.20399 8.37901L5.22499 13.395C4.93399 13.762 4.93699 14.28 5.22999 14.645L9.24999 19.628C9.44799 19.873 9.73699 20 10.029 20C10.25 20 10.472 19.927 10.657 19.778C11.086 19.432 11.154 18.802 10.807 18.372L8.09299 15.008L17.012 14.971C17.813 14.968 18.565 14.653 19.13 14.084C19.694 13.515 20.003 12.76 20 11.959L19.979 6.95901Z",
    fill: fill
  }));
};
IconArrowDownTurnLeft.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$v = ["size", "fill"];
var IconArrowDownTurnRight = function IconArrowDownTurnRight(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$v);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.281 12.375L15.281 7.375C14.936 6.943 14.306 6.874 13.876 7.219C13.444 7.563 13.374 8.193 13.719 8.624L16.42 12H7.5C6.949 12 6.5 11.551 6.5 11V6C6.5 5.447 6.052 5 5.5 5C4.948 5 4.5 5.447 4.5 6V11C4.5 12.654 5.846 14 7.5 14H16.42L13.719 17.375C13.374 17.806 13.444 18.436 13.876 18.78C14.06 18.928 14.281 19 14.5 19C14.793 19 15.084 18.871 15.281 18.624L19.281 13.624C19.573 13.259 19.573 12.74 19.281 12.375Z",
    fill: fill
  }));
};
IconArrowDownTurnRight.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$w = ["size", "fill"];
var IconArrowLeft = function IconArrowLeft(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$w);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 11H7.135L10.768 6.63997C11.122 6.21597 11.064 5.58497 10.64 5.23197C10.215 4.87797 9.585 4.93597 9.232 5.35997L4.232 11.36C4.193 11.407 4.173 11.462 4.144 11.514C4.12 11.556 4.091 11.592 4.073 11.638C4.028 11.753 4.001 11.874 4.001 11.996C4.001 11.997 4 11.999 4 12C4 12.001 4.001 12.003 4.001 12.004C4.001 12.126 4.028 12.247 4.073 12.362C4.091 12.408 4.12 12.444 4.144 12.486C4.173 12.538 4.193 12.593 4.232 12.64L9.232 18.64C9.43 18.877 9.714 19 10 19C10.226 19 10.453 18.924 10.64 18.768C11.064 18.415 11.122 17.784 10.768 17.36L7.135 13H19C19.552 13 20 12.552 20 12C20 11.448 19.552 11 19 11Z",
    fill: fill
  }));
};
IconArrowLeft.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$x = ["size", "fill"];
var IconArrowLeftTurnDown = function IconArrowLeftTurnDown(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$x);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 4.5H13.0001C11.3461 4.5 10.0001 5.846 10.0001 7.5V16.419L6.62513 13.719C6.19414 13.375 5.56314 13.444 5.21915 13.875C4.87415 14.307 4.94415 14.936 5.37515 15.281L10.3751 19.281C10.5581 19.427 10.7791 19.5 11.0001 19.5C11.2211 19.5 11.4421 19.427 11.6251 19.281L16.625 15.281C17.056 14.936 17.126 14.307 16.781 13.875C16.437 13.444 15.807 13.374 15.375 13.719L12.0001 16.419V7.5C12.0001 6.949 12.4491 6.5 13.0001 6.5H18C18.552 6.5 19 6.052 19 5.5C19 4.948 18.552 4.5 18 4.5Z",
    fill: fill
  }));
};
IconArrowLeftTurnDown.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$y = ["size", "fill"];
var IconArrowLeftTurnUp = function IconArrowLeftTurnUp(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$y);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.0001 17.5H13.0001C12.4491 17.5 12.0001 17.051 12.0001 16.5V7.581L15.3751 10.281C15.5601 10.428 15.7801 10.5 16.0001 10.5C16.2921 10.5 16.5831 10.372 16.7811 10.125C17.1261 9.693 17.0561 9.064 16.6251 8.719L11.6251 4.719C11.2591 4.427 10.7411 4.427 10.3751 4.719L5.37509 8.719C4.94409 9.064 4.87409 9.693 5.21909 10.125C5.56309 10.556 6.19409 10.625 6.62509 10.281L10.0001 7.581V16.5C10.0001 18.154 11.3461 19.5 13.0001 19.5H18.0001C18.5521 19.5 19.0001 19.052 19.0001 18.5C19.0001 17.948 18.5521 17.5 18.0001 17.5Z",
    fill: fill
  }));
};
IconArrowLeftTurnUp.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$z = ["size", "fill"];
var IconArrowMove = function IconArrowMove(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$z);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.709 11.308L18.709 8.295C18.319 7.904 17.685 7.901 17.295 8.292C16.903 8.682 16.901 9.314 17.291 9.706L18.58 11H13V5.409L14.291 6.706C14.486 6.902 14.743 7 15 7C15.255 7 15.511 6.903 15.706 6.709C16.097 6.319 16.099 5.686 15.709 5.295L12.722 2.295C12.533 2.106 12.315 2.009 12.013 2C11.748 2 11.494 2.105 11.307 2.292L8.29401 5.292C7.90301 5.682 7.90101 6.315 8.29101 6.706C8.68001 7.097 9.31301 7.099 9.70601 6.709L11 5.42V11H5.40801L6.70501 9.709C7.09701 9.319 7.09901 8.686 6.70901 8.295C6.31901 7.904 5.68501 7.901 5.29501 8.292L2.29501 11.279C2.10601 11.466 2.00101 11.72 2.00001 11.985C1.99901 12.25 2.10501 12.505 2.29101 12.693L5.29101 15.706C5.48601 15.902 5.74301 16 6.00001 16C6.25501 16 6.51101 15.903 6.70501 15.709C7.09701 15.319 7.09901 14.686 6.70901 14.295L5.42001 13H11V18.592L9.70901 17.295C9.31901 16.903 8.68601 16.901 8.29401 17.292C7.90301 17.682 7.90101 18.315 8.29101 18.706L11.278 21.706C11.466 21.894 11.72 22 11.985 22H11.987C12.252 22 12.506 21.895 12.693 21.709L15.706 18.709C16.097 18.319 16.099 17.686 15.709 17.295C15.319 16.903 14.686 16.901 14.294 17.292L13 18.58V13H18.592L17.295 14.292C16.903 14.682 16.901 15.314 17.291 15.706C17.486 15.902 17.743 16 18 16C18.255 16 18.511 15.903 18.705 15.709L21.705 12.722C21.894 12.535 21.999 12.281 22 12.016C22.001 11.75 21.896 11.496 21.709 11.308Z",
    fill: fill
  }));
};
IconArrowMove.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$A = ["size", "fill"];
var IconArrowRight = function IconArrowRight(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$A);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 13H16.865L13.232 17.36C12.878 17.784 12.936 18.415 13.36 18.768C13.785 19.122 14.415 19.064 14.769 18.64L19.769 12.64C19.808 12.593 19.827 12.538 19.856 12.486C19.88 12.444 19.909 12.408 19.927 12.362C19.972 12.247 19.999 12.126 19.999 12.004C19.999 12.003 20 12.001 20 12C20 11.999 19.999 11.997 19.999 11.996C19.999 11.874 19.972 11.753 19.927 11.638C19.909 11.592 19.88 11.556 19.856 11.514C19.827 11.462 19.808 11.407 19.769 11.36L14.769 5.36C14.57 5.123 14.286 5 14 5C13.774 5 13.547 5.076 13.36 5.232C12.936 5.585 12.878 6.216 13.232 6.64L16.865 11H5C4.448 11 4 11.448 4 12C4 12.552 4.448 13 5 13Z",
    fill: fill
  }));
};
IconArrowRight.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$B = ["size", "fill"];
var IconArrowRightTurnDown = function IconArrowRightTurnDown(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$B);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.7809 13.875C18.4359 13.443 17.8059 13.374 17.3759 13.719L13.9999 16.419V7.5C13.9999 5.845 12.6549 4.5 10.9999 4.5H5.99992C5.44792 4.5 4.99992 4.947 4.99992 5.5C4.99992 6.052 5.44792 6.5 5.99992 6.5H10.9999C11.5519 6.5 11.9999 6.948 11.9999 7.5V16.419L8.62492 13.719C8.19492 13.374 7.56492 13.443 7.21892 13.875C6.87392 14.306 6.94392 14.936 7.37592 15.28L12.3759 19.28C12.5579 19.426 12.7789 19.5 12.9999 19.5C13.2209 19.5 13.4419 19.426 13.6249 19.28L18.6249 15.28C19.0559 14.936 19.1259 14.306 18.7809 13.875Z",
    fill: fill
  }));
};
IconArrowRightTurnDown.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$C = ["size", "fill"];
var IconArrowRightTurnUp = function IconArrowRightTurnUp(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$C);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.6248 8.719L13.6248 4.719C13.2598 4.427 12.7408 4.427 12.3758 4.719L7.37577 8.719C6.94377 9.064 6.87477 9.693 7.21977 10.124C7.56377 10.555 8.19377 10.625 8.62477 10.281L11.9998 7.58V16.5C11.9998 17.051 11.5518 17.5 10.9998 17.5H5.99977C5.44777 17.5 4.99977 17.948 4.99977 18.5C4.99977 19.052 5.44777 19.5 5.99977 19.5H10.9998C12.6548 19.5 13.9998 18.154 13.9998 16.5V7.58L17.3758 10.281C17.5598 10.428 17.7808 10.5 17.9998 10.5C18.2928 10.5 18.5838 10.371 18.7808 10.124C19.1258 9.693 19.0568 9.064 18.6248 8.719Z",
    fill: fill
  }));
};
IconArrowRightTurnUp.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$D = ["size", "fill"];
var IconArrowUpLeft = function IconArrowUpLeft(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$D);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.707 16.293L9.418 8.004L15.001 8C15.553 8 16 7.551 16 6.999C16 6.447 15.552 6 15 6H14.999L7.049 6.006C6.499 6.007 6.054 6.451 6.05 7L6 14.994C5.996 15.546 6.441 15.997 6.994 16H7C7.55 16 7.996 15.556 8 15.006L8.035 9.449L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293Z",
    fill: fill
  }));
};
IconArrowUpLeft.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$E = ["size", "fill"];
var IconArrowUp = function IconArrowUp(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$E);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.23189 10.6401C5.58589 11.0641 6.21589 11.1221 6.63989 10.7681L10.9999 7.13512V19.0001C10.9999 19.5521 11.4479 20.0001 11.9999 20.0001C12.5519 20.0001 12.9999 19.5521 12.9999 19.0001V7.13512L17.3599 10.7681C17.7849 11.1221 18.4149 11.0641 18.7679 10.6401C19.1219 10.2161 19.0649 9.58512 18.6399 9.23212L12.6399 4.23212C12.5929 4.19212 12.5369 4.17312 12.4849 4.14312C12.4439 4.11912 12.4079 4.09112 12.3629 4.07312C12.2459 4.02712 12.1239 4.00012 11.9999 4.00012C11.8759 4.00012 11.7539 4.02712 11.6369 4.07312C11.5919 4.09112 11.5559 4.11912 11.5149 4.14312C11.4629 4.17312 11.4069 4.19212 11.3599 4.23212L5.35989 9.23212C4.93589 9.58512 4.87789 10.2161 5.23189 10.6401Z",
    fill: fill
  }));
};
IconArrowUp.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$F = ["size", "fill"];
var IconArrowUpRight = function IconArrowUpRight(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$F);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.9932 7.04882C17.9932 6.49982 17.5492 6.05282 16.9992 6.04982L9.0062 5.99982H9.0002C8.4502 5.99982 8.0042 6.44382 8.0002 6.99382C7.9962 7.54582 8.4412 7.99682 8.9942 7.99982L14.5522 8.03482L6.2932 16.2928C5.9022 16.6838 5.9022 17.3168 6.2932 17.7068C6.4882 17.9028 6.7442 17.9998 7.0002 17.9998C7.2562 17.9998 7.5122 17.9028 7.7072 17.7068L15.9952 9.41882L16.0002 15.0008C16.0002 15.5528 16.4482 15.9998 17.0002 15.9998H17.0012C17.5532 15.9998 18.0002 15.5508 18.0002 14.9988L17.9932 7.04882Z",
    fill: fill
  }));
};
IconArrowUpRight.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$G = ["size", "fill"];
var IconArrowUpTurnLeft = function IconArrowUpTurnLeft(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$G);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.5 10H7.581L10.281 6.62504C10.626 6.19304 10.556 5.56404 10.125 5.21904C9.694 4.87504 9.064 4.94304 8.719 5.37504L4.719 10.375C4.427 10.741 4.427 11.259 4.719 11.625L8.719 16.625C8.917 16.872 9.207 17 9.5 17C9.72 17 9.94 16.928 10.125 16.781C10.556 16.436 10.626 15.807 10.281 15.375L7.581 12H16.5C17.051 12 17.5 12.449 17.5 13V18C17.5 18.552 17.948 19 18.5 19C19.052 19 19.5 18.552 19.5 18V13C19.5 11.346 18.154 10 16.5 10Z",
    fill: fill
  }));
};
IconArrowUpTurnLeft.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$H = ["size", "fill"];
var IconArrowUpTurnRight = function IconArrowUpTurnRight(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$H);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.281 10.3753L15.281 5.37533C14.934 4.94433 14.306 4.87333 13.875 5.21933C13.444 5.56333 13.374 6.19333 13.719 6.62433L16.42 10.0003H7.5C5.845 10.0003 4.5 11.3453 4.5 13.0003V18.0003C4.5 18.5523 4.948 19.0003 5.5 19.0003C6.052 19.0003 6.5 18.5523 6.5 18.0003V13.0003C6.5 12.4483 6.948 12.0003 7.5 12.0003H16.42L13.719 15.3753C13.374 15.8063 13.444 16.4363 13.875 16.7803C14.059 16.9283 14.28 17.0003 14.499 17.0003C14.793 17.0003 15.083 16.8713 15.281 16.6243L19.281 11.6243C19.573 11.2593 19.573 10.7403 19.281 10.3753Z",
    fill: fill
  }));
};
IconArrowUpTurnRight.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$I = ["size", "fill"];
var IconCarretDown$1 = function IconCarretDown(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$I);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 26 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.09175 9.5L13.0017 14.322L16.9867 9.5H9.09175ZM12.9997 16.5C12.4937 16.5 12.0097 16.267 11.6737 15.858L7.46075 10.76C6.95675 10.149 6.85675 9.282 7.20175 8.549C7.50675 7.902 8.11375 7.5 8.78675 7.5H17.2127C17.8857 7.5 18.4927 7.902 18.7977 8.549C19.1437 9.282 19.0427 10.149 18.5397 10.759L14.3257 15.858C13.9897 16.267 13.5057 16.5 12.9997 16.5Z",
    fill: fill
  }));
};
IconCarretDown$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$J = ["size", "fill"];
var IconCarretLeft$1 = function IconCarretLeft(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$J);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.678 13.0022L14.5 16.9852V9.09225L9.678 13.0022ZM14.544 19.0012C14.073 19.0012 13.609 18.8442 13.241 18.5402L8.141 14.3262C7.734 13.9902 7.5 13.5062 7.5 13.0002C7.5 12.4942 7.734 12.0102 8.141 11.6742L13.241 7.46125C13.849 6.95725 14.716 6.85625 15.45 7.20125C16.097 7.50725 16.5 8.11425 16.5 8.78725V17.2132C16.5 17.8862 16.097 18.4932 15.45 18.7992C15.161 18.9352 14.851 19.0012 14.544 19.0012Z",
    fill: fill
  }));
};
IconCarretLeft$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$K = ["size", "fill"];
var IconCarretRight$1 = function IconCarretRight(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$K);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.5 8.01514V15.9091L14.321 11.9981L9.5 8.01514ZM9.456 18.0011C9.149 18.0011 8.839 17.9351 8.55 17.7991C7.902 17.4941 7.5 16.8861 7.5 16.2131V7.78714C7.5 7.11514 7.902 6.50714 8.55 6.20214C9.282 5.85714 10.15 5.95714 10.759 6.46014L15.858 10.6741C16.267 11.0101 16.5 11.4941 16.5 12.0001C16.5 12.5061 16.267 12.9911 15.858 13.3271L10.759 17.5391C10.391 17.8441 9.927 18.0011 9.456 18.0011Z",
    fill: fill
  }));
};
IconCarretRight$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$L = ["size", "fill"];
var IconCarretUp$1 = function IconCarretUp(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$L);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 26 25",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.01381 14.9998H16.9088L12.9978 10.1778L9.01381 14.9998ZM17.2128 16.9998H8.78681C8.11481 16.9998 7.50681 16.5978 7.20181 15.9508C6.85681 15.2178 6.95681 14.3508 7.45981 13.7408L11.6738 8.6418C12.3458 7.8248 13.6548 7.8248 14.3258 8.6418L18.5388 13.7398C19.0428 14.3508 19.1438 15.2178 18.7978 15.9508C18.4928 16.5978 17.8858 16.9998 17.2128 16.9998Z",
    fill: fill
  }));
};
IconCarretUp$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$M = ["size", "fill"];
var IconChevronDown = function IconChevronDown(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$M);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 15.4997C11.772 15.4997 11.545 15.4227 11.36 15.2677L5.36003 10.2677C4.93603 9.91474 4.87803 9.28374 5.23203 8.85974C5.58503 8.43574 6.21503 8.37874 6.64003 8.73174L12.011 13.2077L17.373 8.89274C17.803 8.54674 18.433 8.61474 18.779 9.04474C19.125 9.47474 19.057 10.1037 18.627 10.4507L12.627 15.2787C12.444 15.4257 12.222 15.4997 12 15.4997Z",
    fill: fill
  }));
};
IconChevronDown.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$N = ["size", "fill"];
var IconChevronLeft = function IconChevronLeft(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$N);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.3287 18.9997C14.0367 18.9997 13.7467 18.8727 13.5487 18.6267L8.72066 12.6267C8.42266 12.2557 8.42666 11.7257 8.73166 11.3597L13.7317 5.35974C14.0847 4.93574 14.7157 4.87874 15.1407 5.23174C15.5647 5.58474 15.6217 6.21574 15.2677 6.63974L10.7927 12.0107L15.1077 17.3727C15.4537 17.8027 15.3857 18.4327 14.9547 18.7787C14.7707 18.9277 14.5487 18.9997 14.3287 18.9997Z",
    fill: fill
  }));
};
IconChevronLeft.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$O = ["size", "fill"];
var IconChevronRight = function IconChevronRight(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$O);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.4994 19C9.2734 19 9.0464 18.924 8.8594 18.768C8.4354 18.415 8.3784 17.784 8.7314 17.36L13.2074 11.989L8.8924 6.62695C8.5464 6.19695 8.6144 5.56695 9.0444 5.22095C9.4754 4.87495 10.1044 4.94295 10.4514 5.37295L15.2794 11.373C15.5774 11.744 15.5734 12.274 15.2684 12.64L10.2684 18.64C10.0704 18.877 9.7864 19 9.4994 19Z",
    fill: fill
  }));
};
IconChevronRight.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$P = ["size", "fill"];
var IconChevronUp = function IconChevronUp(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$P);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.9996 15.5002C17.7736 15.5002 17.5466 15.4242 17.3596 15.2682L11.9886 10.7922L6.62663 15.1072C6.19763 15.4542 5.56763 15.3862 5.22063 14.9552C4.87463 14.5252 4.94263 13.8962 5.37363 13.5492L11.3736 8.72117C11.7436 8.42217 12.2746 8.42617 12.6406 8.73217L18.6406 13.7322C19.0646 14.0852 19.1216 14.7162 18.7686 15.1402C18.5706 15.3772 18.2866 15.5002 17.9996 15.5002Z",
    fill: fill
  }));
};
IconChevronUp.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$Q = ["size", "fill"];
var IconChevronsDown = function IconChevronsDown(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$Q);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 12.0002C11.773 12.0002 11.545 11.9232 11.36 11.7682L5.35995 6.76819C4.93595 6.41419 4.87895 5.78419 5.23195 5.36019C5.58595 4.93519 6.21495 4.87919 6.63995 5.23219L12.011 9.70719L17.373 5.39319C17.803 5.04719 18.434 5.11519 18.779 5.54519C19.126 5.97519 19.057 6.60419 18.627 6.95119L12.627 11.7792C12.444 11.9262 12.222 12.0002 12 12.0002ZM12.0111 16.7077L17.3731 12.3927C17.8031 12.0477 18.4341 12.1157 18.7791 12.5447C19.1251 12.9757 19.0571 13.6047 18.6271 13.9517L12.6271 18.7797C12.4441 18.9267 12.2221 18.9997 12.0001 18.9997C11.7721 18.9997 11.5451 18.9227 11.3601 18.7677L5.36005 13.7677C4.93505 13.4147 4.87805 12.7847 5.23205 12.3597C5.58505 11.9357 6.21505 11.8777 6.64005 12.2317L12.0111 16.7077Z",
    fill: fill
  }));
};
IconChevronsDown.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$R = ["size", "fill"];
var IconChevronsLeft = function IconChevronsLeft(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$R);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.7684 6.63982L14.2924 12.0108L18.6074 17.3728C18.9534 17.8028 18.8854 18.4318 18.4554 18.7788C18.2704 18.9278 18.0484 18.9998 17.8284 18.9998C17.5364 18.9998 17.2464 18.8718 17.0484 18.6268L12.2204 12.6268C11.9224 12.2558 11.9264 11.7248 12.2314 11.3598L17.2314 5.35982C17.5854 4.93482 18.2154 4.87882 18.6404 5.23182C19.0644 5.58482 19.1214 6.21582 18.7684 6.63982ZM10.232 5.35952C10.585 4.93552 11.215 4.87852 11.64 5.23152C12.064 5.58552 12.121 6.21552 11.768 6.63952L7.29204 12.0105L11.607 17.3725C11.953 17.8025 11.885 18.4325 11.455 18.7785C11.27 18.9275 11.049 18.9995 10.828 18.9995C10.536 18.9995 10.246 18.8725 10.049 18.6265L5.22104 12.6265C4.92204 12.2555 4.92704 11.7255 5.23204 11.3595L10.232 5.35952Z",
    fill: fill
  }));
};
IconChevronsLeft.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$S = ["size", "fill"];
var IconChevronsRight = function IconChevronsRight(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$S);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.9513 5.37325L18.7793 11.3732C19.0783 11.7442 19.0733 12.2742 18.7683 12.6402L13.7683 18.6402C13.5703 18.8772 13.2863 19.0002 12.9993 19.0002C12.7743 19.0002 12.5473 18.9242 12.3603 18.7682C11.9353 18.4152 11.8783 17.7842 12.2323 17.3602L16.7083 11.9892L12.3923 6.62725C12.0463 6.19725 12.1143 5.56725 12.5453 5.22125C12.9753 4.87425 13.6043 4.94325 13.9513 5.37325ZM5.54523 5.22125C5.97523 4.87525 6.60423 4.94325 6.95123 5.37325L11.7792 11.3732C12.0772 11.7442 12.0732 12.2742 11.7682 12.6402L6.76823 18.6402C6.57023 18.8772 6.28623 19.0002 5.99923 19.0002C5.77423 19.0002 5.54723 18.9242 5.36023 18.7682C4.93523 18.4152 4.87823 17.7842 5.23223 17.3602L9.70723 11.9892L5.39223 6.62725C5.04623 6.19725 5.11523 5.56725 5.54523 5.22125Z",
    fill: fill
  }));
};
IconChevronsRight.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$T = ["size", "fill"];
var IconChevronsUp = function IconChevronsUp(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$T);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.9891 7.29291L6.62715 11.6079C6.19715 11.9539 5.56815 11.8859 5.22115 11.4559C4.87515 11.0249 4.94315 10.3959 5.37315 10.0489L11.3731 5.22091C11.7441 4.92291 12.2741 4.92591 12.6401 5.23291L18.6401 10.2329C19.0651 10.5859 19.1221 11.2159 18.7681 11.6409C18.5701 11.8779 18.2861 12.0009 18.0001 12.0009C17.7741 12.0009 17.5471 11.9239 17.3601 11.7689L11.9891 7.29291ZM11.3732 12.2214C11.7442 11.9224 12.2742 11.9264 12.6402 12.2324L18.6402 17.2324C19.0642 17.5864 19.1212 18.2164 18.7682 18.6404C18.5702 18.8784 18.2862 19.0004 17.9992 19.0004C17.7742 19.0004 17.5472 18.9244 17.3602 18.7684L11.9892 14.2934L6.62725 18.6074C6.19725 18.9544 5.56825 18.8864 5.22125 18.4554C4.87425 18.0254 4.94325 17.3964 5.37325 17.0494L11.3732 12.2214Z",
    fill: fill
  }));
};
IconChevronsUp.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$U = ["size", "fill"];
var IconCollapse = function IconCollapse(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$U);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.4151 8.99901L19.0001 9.00001C19.5521 9.00001 20.0001 9.44801 20.0001 10.001C19.9991 10.553 19.5511 11 19.0001 11H18.9991L14.0241 10.997C13.4741 10.997 13.0271 10.552 13.0241 10.002L13.0001 5.00501C12.9971 4.45301 13.4421 4.00301 13.9951 4.00001H14.0001C14.5501 4.00001 14.9971 4.44401 15.0001 4.99501L15.0121 7.57301L18.2921 4.29301C18.6831 3.90201 19.3161 3.90201 19.7071 4.29301C20.0971 4.68401 20.0971 5.31601 19.7071 5.70701L16.4151 8.99901ZM5.00412 13.0004L10.0011 13.0254C10.5511 13.0284 10.9961 13.4744 10.9961 14.0244L11.0001 18.9994C11.0001 19.5514 10.5521 20.0004 10.0001 20.0004C9.44712 20.0004 9.00012 19.5524 9.00012 19.0014L8.99812 16.4164L5.70712 19.7074C5.51112 19.9024 5.25512 20.0004 5.00012 20.0004C4.74412 20.0004 4.48812 19.9024 4.29312 19.7074C3.90212 19.3164 3.90212 18.6834 4.29312 18.2934L7.57212 15.0134L4.99512 15.0004C4.44212 14.9974 3.99712 14.5464 4.00012 13.9954C4.00212 13.4444 4.45012 13.0004 5.00012 13.0004H5.00412Z",
    fill: fill
  }));
};
IconCollapse.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$V = ["size", "fill"];
var IconExpand = function IconExpand(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$V);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.0016 4.025C19.5516 4.028 19.9966 4.474 19.9966 5.024L19.9996 9.999C20.0006 10.551 19.5526 11 19.0006 11H18.9996C18.4476 11 18.0006 10.552 17.9996 10.001L17.9976 7.416L14.7066 10.707C14.5116 10.902 14.2556 11 13.9996 11C13.7446 11 13.4886 10.902 13.2926 10.707C12.9026 10.316 12.9026 9.683 13.2926 9.293L16.5726 6.013L13.9956 6C13.4426 5.997 12.9966 5.546 12.9996 4.995C13.0026 4.444 13.4506 4 13.9996 4H14.0046L19.0016 4.025ZM9.29302 13.2926C9.68401 12.9016 10.316 12.9016 10.707 13.2926C11.098 13.6836 11.098 14.3156 10.707 14.7066L7.41501 17.9986L10 17.9996C10.553 17.9996 11 18.4476 11 19.0006C10.999 19.5526 10.552 19.9996 10 19.9996H9.99901L5.02402 19.9966C4.47402 19.9966 4.02802 19.5516 4.02502 19.0016L4.00002 14.0046C3.99702 13.4526 4.44302 13.0026 4.99502 12.9996H5.00002C5.55001 12.9996 5.99701 13.4436 6.00002 13.9946L6.01302 16.5726L9.29302 13.2926Z",
    fill: fill
  }));
};
IconExpand.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$W = ["size", "fill"];
var IconRepeat = function IconRepeat(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$W);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.91413 5.00001H17.9101C19.8891 5.00001 21.5001 6.58301 21.5001 8.52901V11C21.5001 11.553 21.0531 12 20.5001 12C19.9471 12 19.5001 11.553 19.5001 11V8.52901C19.5001 7.68701 18.7871 7.00001 17.9101 7.00001H5.91413L7.20713 8.29301C7.59713 8.68401 7.59713 9.31601 7.20713 9.70701C7.01213 9.90201 6.75613 10 6.50013 10C6.24413 10 5.98813 9.90201 5.79313 9.70701L2.79313 6.70701C2.40213 6.31601 2.40213 5.68401 2.79313 5.29301L5.79313 2.29301C6.18313 1.90201 6.81613 1.90201 7.20713 2.29301C7.59713 2.68401 7.59713 3.31601 7.20713 3.70701L5.91413 5.00001ZM16.7929 14.293C17.1839 13.902 17.8159 13.902 18.2069 14.293L21.2069 17.293C21.5979 17.684 21.5979 18.316 21.2069 18.707L18.2069 21.707C18.0119 21.902 17.7559 22 17.4999 22C17.2439 22 16.9879 21.902 16.7929 21.707C16.4019 21.316 16.4019 20.684 16.7929 20.293L18.0859 19H6.08993C4.10993 19 2.49993 17.417 2.49993 15.471V13C2.49993 12.447 2.94793 12 3.49993 12C4.05193 12 4.49993 12.447 4.49993 13V15.471C4.49993 16.314 5.21293 17 6.08993 17H18.0859L16.7929 15.707C16.4019 15.316 16.4019 14.684 16.7929 14.293Z",
    fill: fill
  }));
};
IconRepeat.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$X = ["size", "fill"];
var IconRightLeft = function IconRightLeft(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$X);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 8.50014H3.99999C3.44799 8.50014 2.99999 8.05314 2.99999 7.50014C2.99999 6.94714 3.44799 6.50014 3.99999 6.50014H17.082L15.524 5.29014C15.088 4.95114 15.009 4.32214 15.348 3.88714C15.687 3.45014 16.316 3.37114 16.751 3.71014L20.613 6.71014C20.86 6.90114 21.002 7.19614 21 7.50914C20.998 7.82014 20.85 8.11314 20.6 8.30014L16.6 11.3001C16.42 11.4351 16.209 11.5001 16.001 11.5001C15.697 11.5001 15.396 11.3621 15.2 11.1001C14.869 10.6581 14.958 10.0311 15.4 9.70014L17 8.50014ZM6.99999 15.5001H20C20.552 15.5001 21 15.9471 21 16.5001C21 17.0531 20.552 17.5001 20 17.5001H6.91799L8.47599 18.7101C8.91199 19.0491 8.99099 19.6781 8.65199 20.1131C8.45499 20.3671 8.15999 20.5001 7.86199 20.5001C7.64699 20.5001 7.43099 20.4321 7.24899 20.2901L3.38699 17.2901C3.13999 17.0991 2.99799 16.8041 2.99999 16.4911C3.00199 16.1801 3.14999 15.8871 3.39999 15.7001L7.39999 12.7001C7.84299 12.3691 8.46899 12.4581 8.79999 12.9001C9.13099 13.3421 9.04199 13.9691 8.59999 14.3001L6.99999 15.5001Z",
    fill: fill
  }));
};
IconRightLeft.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$Y = ["size", "fill"];
var IconRotate = function IconRotate(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$Y);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.6829 10.3261C21.6756 10.3419 21.6683 10.3578 21.6616 10.374C21.6547 10.3908 21.6493 10.4082 21.6439 10.4257C21.6352 10.454 21.6264 10.4822 21.6116 10.507C21.582 10.556 21.5433 10.5972 21.5046 10.6385C21.4935 10.6502 21.4824 10.662 21.4716 10.674C21.4595 10.6865 21.4488 10.7003 21.4381 10.714C21.4231 10.7331 21.4082 10.7523 21.3896 10.768C21.3336 10.8137 21.2688 10.8455 21.2044 10.8772C21.1998 10.8795 21.1952 10.8817 21.1906 10.884C21.1769 10.8906 21.164 10.8989 21.151 10.9073C21.1326 10.9191 21.1141 10.931 21.0936 10.938C20.9856 10.978 20.8706 11 20.7516 11C20.6976 11 20.6416 10.996 20.5866 10.986L16.3366 10.281C15.7916 10.191 15.4236 9.676 15.5136 9.131C15.6036 8.587 16.1176 8.214 16.6636 8.309L18.3076 8.581C17.0626 6.395 14.6856 5 12.0696 5C9.11057 5 6.50357 6.718 5.42657 9.375C5.26957 9.765 4.89457 10 4.49957 10C4.37457 10 4.24757 9.977 4.12457 9.927C3.61257 9.72 3.36557 9.137 3.57357 8.625C4.95757 5.208 8.29257 3 12.0696 3C15.4816 3 18.5826 4.87 20.1476 7.788L20.5166 5.815C20.6186 5.273 21.1426 4.914 21.6836 5.018C22.2266 5.119 22.5846 5.642 22.4826 6.185L21.7336 10.185C21.724 10.236 21.7034 10.281 21.6829 10.3261ZM18.5735 14.6252C18.7805 14.1122 19.3645 13.8662 19.8755 14.0732C20.3875 14.2802 20.6345 14.8632 20.4265 15.3752C19.0425 18.7922 15.7075 21.0002 11.9305 21.0002C8.51847 21.0002 5.41747 19.1302 3.85247 16.2122L3.48247 18.1842C3.39347 18.6652 2.97347 19.0002 2.50047 19.0002C2.43947 19.0002 2.37747 18.9942 2.31547 18.9822C1.77247 18.8812 1.41547 18.3582 1.51747 17.8152L2.26647 13.8152C2.27407 13.7759 2.2909 13.7411 2.30781 13.706C2.3176 13.6858 2.32741 13.6655 2.33547 13.6442C2.34338 13.6243 2.35028 13.6037 2.3572 13.583C2.37216 13.5383 2.38717 13.4935 2.41247 13.4552C2.42723 13.4324 2.44653 13.4142 2.46594 13.3959C2.4781 13.3844 2.4903 13.3729 2.50147 13.3602C2.51028 13.35 2.51899 13.3397 2.52769 13.3295C2.57528 13.2734 2.62244 13.2178 2.68247 13.1772C2.68837 13.1729 2.69541 13.1703 2.70237 13.1678C2.7084 13.1656 2.71437 13.1634 2.71947 13.1602C2.81647 13.0972 2.92047 13.0482 3.03547 13.0232C3.04247 13.0216 3.04977 13.022 3.05704 13.0224C3.06327 13.0228 3.06947 13.0231 3.07547 13.0222C3.18547 13.0042 3.29647 12.9932 3.41347 13.0132L7.66347 13.7192C8.20847 13.8082 8.57647 14.3242 8.48647 14.8692C8.40547 15.3582 7.98147 15.7052 7.50047 15.7052C7.44647 15.7052 7.39147 15.7012 7.33647 15.6912L5.69247 15.4192C6.93747 17.6052 9.31447 19.0002 11.9305 19.0002C14.8895 19.0002 17.4965 17.2822 18.5735 14.6252Z",
    fill: fill
  }));
};
IconRotate.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$Z = ["size", "fill"];
var IconRotateRight = function IconRotateRight(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$Z);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.3029 13.426C19.7769 13.259 19.2149 13.55 19.0469 14.076C18.1099 17.022 15.3519 19 12.1839 19C8.22194 19 4.99994 15.86 4.99994 12C4.99994 8.141 8.22194 5 12.1839 5C13.9119 5 15.5419 5.602 16.8289 6.67L14.6629 6.313C14.1129 6.213 13.6029 6.592 13.5129 7.136C13.4229 7.681 13.7919 8.196 14.3369 8.285L18.5829 8.987C18.6379 8.996 18.6939 9 18.7469 9C18.8659 9 18.9819 8.979 19.0899 8.939C19.1269 8.925 19.1569 8.899 19.1929 8.88C19.2589 8.846 19.3279 8.816 19.3849 8.768C19.4209 8.739 19.4439 8.697 19.4749 8.663C19.5219 8.614 19.5719 8.567 19.6069 8.507C19.6319 8.464 19.6419 8.413 19.6609 8.365C19.6849 8.306 19.7169 8.251 19.7289 8.186L20.4829 4.186C20.5849 3.643 20.2279 3.119 19.6849 3.018C19.1439 2.92 18.6189 3.273 18.5169 3.815L18.2449 5.256C16.5809 3.815 14.4479 3 12.1839 3C7.11994 3 2.99994 7.037 2.99994 12C2.99994 16.963 7.11994 21 12.1839 21C16.2259 21 19.7499 18.461 20.9529 14.682C21.1199 14.156 20.8289 13.594 20.3029 13.426Z",
    fill: fill
  }));
};
IconRotateRight.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$_ = ["size", "fill"];
var IconShuffle2 = function IconShuffle2(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$_);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.709 14.2945C18.319 13.9025 17.685 13.9005 17.295 14.2915C16.903 14.6815 16.901 15.3145 17.291 15.7055L17.584 16.0005H16C13.794 16.0005 12 14.2055 12 12.0005C12 9.79452 13.794 8.00052 16 8.00052H17.588L17.295 8.29152C16.903 8.68152 16.901 9.31452 17.291 9.70552C17.486 9.90152 17.743 10.0005 18 10.0005C18.255 10.0005 18.511 9.90252 18.705 9.70852L20.705 7.71752C20.894 7.53052 20.999 7.27652 21 7.01152C21.001 6.74552 20.896 6.49152 20.709 6.30352L18.709 4.29452C18.319 3.90252 17.685 3.90052 17.295 4.29152C16.903 4.68152 16.901 5.31452 17.291 5.70552L17.584 6.00052H16C13.914 6.00052 12.075 7.07052 11 8.69052C9.925 7.07052 8.086 6.00052 6 6.00052H4C3.447 6.00052 3 6.44752 3 7.00052C3 7.55252 3.447 8.00052 4 8.00052H6C8.206 8.00052 10 9.79452 10 12.0005C10 14.2055 8.206 16.0005 6 16.0005H4C3.447 16.0005 3 16.4475 3 17.0005C3 17.5525 3.447 18.0005 4 18.0005H6C8.086 18.0005 9.925 16.9295 11 15.3095C12.075 16.9295 13.914 18.0005 16 18.0005H17.588L17.295 18.2915C16.903 18.6815 16.901 19.3145 17.291 19.7055C17.486 19.9015 17.743 20.0005 18 20.0005C18.255 20.0005 18.511 19.9025 18.705 19.7085L20.705 17.7175C20.894 17.5305 20.999 17.2765 21 17.0115C21.001 16.7455 20.896 16.4915 20.709 16.3035L18.709 14.2945Z",
    fill: fill
  }));
};
IconShuffle2.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$$ = ["size", "fill"];
var IconShuffle = function IconShuffle(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$$);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.0002 10.308C18.4482 10.308 18.0002 9.86 18.0002 9.308L17.9993 7.415L5.70725 19.707C5.51225 19.902 5.25625 20 5.00025 20C4.74425 20 4.48825 19.902 4.29325 19.707C3.90225 19.316 3.90225 18.683 4.29325 18.293L10.5802 12.006L4.74825 6.175C4.35725 5.784 4.35725 5.151 4.74825 4.761C5.13925 4.37 5.77125 4.37 6.16225 4.761L11.9942 10.592L16.5763 6.009L14.6873 6C14.1353 5.997 13.6892 5.547 13.6923 4.995C13.6953 4.443 14.1693 4.01 14.6973 4L19.0022 4.021C19.5522 4.024 19.9972 4.471 19.9972 5.021L20.0002 9.307C20.0002 9.859 19.5533 10.307 19.0013 10.308H19.0002ZM19.0001 13.6791H19.0051C19.5581 13.6821 20.0031 14.1321 20.0001 14.6841L19.9791 18.8921C20.0112 19.1831 19.9312 19.4841 19.7071 19.7071C19.5121 19.9021 19.2561 20.0001 19.0001 20.0001C18.9849 20.0001 18.97 19.996 18.9551 19.9918C18.9435 19.9886 18.9319 19.9854 18.9201 19.9841L14.6931 19.9871C14.1411 19.9871 13.6931 19.5391 13.6931 18.9871C13.6931 18.4351 14.1402 17.9871 14.6922 17.9871L16.5711 17.9861L13.7931 15.2071C13.4022 14.8161 13.4022 14.1831 13.7931 13.7931C14.1841 13.4021 14.8172 13.4021 15.2071 13.7931L17.9902 16.5761L18.0001 14.6741C18.0031 14.1231 18.4501 13.6791 19.0001 13.6791Z",
    fill: fill
  }));
};
IconShuffle.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$10 = ["size", "fill"];
var IconBriefcase = function IconBriefcase(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$10);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 5.5C10 5.224 10.224 5 10.5 5H13.5C13.776 5 14 5.224 14 5.5V7H10V5.5ZM7 21H17V7H16V5.5C16 4.122 14.878 3 13.5 3H10.5C9.122 3 8 4.122 8 5.5V7H7V21ZM19 7V21C20.654 21 22 19.654 22 18V10C22 8.346 20.654 7 19 7ZM2 10C2 8.346 3.346 7 5 7V21C3.346 21 2 19.654 2 18V10Z",
    fill: fill
  }));
};
IconBriefcase.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$11 = ["size", "fill"];
var IconCreditCard = function IconCreditCard(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$11);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 9H4V8C4 7.449 4.448 7 5 7H19C19.552 7 20 7.449 20 8V9ZM17 15H15C14.45 15 14 14.55 14 14C14 13.45 14.45 13 15 13H17C17.55 13 18 13.45 18 14C18 14.55 17.55 15 17 15ZM11 15H7C6.45 15 6 14.55 6 14C6 13.45 6.45 13 7 13H11C11.55 13 12 13.45 12 14C12 14.55 11.55 15 11 15ZM19 5H5C3.346 5 2 6.346 2 8V16C2 17.654 3.346 19 5 19H19C20.654 19 22 17.654 22 16V8C22 6.346 20.654 5 19 5Z",
    fill: fill
  }));
};
IconCreditCard.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$12 = ["size", "fill"];
var IconGlobe2 = function IconGlobe2(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$12);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.889 18.318C16.717 17.885 16.473 17.507 16.259 17.184C16.151 17.022 16.04 16.857 15.943 16.687C15.554 16.011 15.688 15.737 16.319 14.68L16.421 14.507C16.932 13.646 16.96 12.82 16.986 12.092C16.998 11.734 17.01 11.397 17.079 11.08C17.24 10.348 18.787 10.153 19.746 10.038C19.907 10.667 20 11.322 20 12C20 14.569 18.778 16.853 16.889 18.318ZM12 4C12.616 4 13.211 4.076 13.787 4.208C13.618 4.58 13.357 4.919 13.013 5.188C12.795 5.36 12.55 5.503 12.307 5.648C11.656 6.036 10.919 6.476 10.457 7.322C9.841 8.452 9.841 9.606 9.841 10.624C9.841 11.979 9.797 12.78 8.893 13.487C7.524 14.56 5.429 13.961 4.133 13.416C4.051 12.955 4 12.483 4 12C4 7.589 7.589 4 12 4ZM12 2C6.486 2 2 6.486 2 12C2 17.513 6.486 22 12 22C17.514 22 22 17.513 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconGlobe2.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$13 = ["size", "fill"];
var IconGlobe3 = function IconGlobe3(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$13);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.96188 15.8C5.59788 15.961 6.28688 16.073 6.98788 16.073C8.06788 16.073 9.17088 15.81 10.1249 15.063C11.8409 13.721 11.8409 12.004 11.8409 10.624C11.8409 9.733 11.8409 8.963 12.2129 8.28C12.4129 7.914 12.8389 7.66 13.3319 7.365C13.6339 7.185 13.9459 6.998 14.2469 6.763C14.8899 6.26 15.3679 5.612 15.6639 4.897C17.0639 5.621 18.2239 6.744 18.9889 8.119C17.5619 8.318 15.5339 8.785 15.1259 10.653C15.0179 11.147 15.0009 11.612 14.9869 12.023C14.9669 12.606 14.9499 13.067 14.6999 13.488L14.6009 13.656C13.9539 14.739 13.2219 15.968 14.2089 17.685C14.3279 17.893 14.4609 18.093 14.5919 18.291C14.9359 18.808 15.1049 19.093 15.1059 19.372C14.1499 19.777 13.1009 20 11.9999 20C8.96288 20 6.31588 18.299 4.96188 15.8ZM11.9999 2C6.48588 2 1.99988 6.487 1.99988 12C1.99988 17.514 6.48588 22 11.9999 22C17.5139 22 21.9999 17.514 21.9999 12C21.9999 6.487 17.5139 2 11.9999 2Z",
    fill: fill
  }));
};
IconGlobe3.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$14 = ["size", "fill"];
var IconPieChart = function IconPieChart(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$14);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.2734 8.66676C19.9074 6.11576 17.8844 4.09276 15.3334 3.72676V8.66676H20.2734ZM21.1665 10.3328H14.5004C14.0404 10.3328 13.6664 9.96076 13.6664 9.49976V2.83276C13.6664 2.37276 14.0404 1.99976 14.5004 1.99976C18.6355 1.99976 22.0005 5.36476 22.0005 9.49976C22.0005 9.96076 21.6264 10.3328 21.1665 10.3328ZM12.9344 11.9778H21.0834C21.6254 11.9778 22.0494 12.4498 21.9954 12.9888C21.4514 18.4148 16.5794 22.5668 10.8814 21.9368C6.29645 21.4308 2.56945 17.7038 2.06245 13.1188C1.43445 7.42076 5.58445 2.54776 11.0114 2.00476C11.5514 1.95076 12.0224 2.37376 12.0224 2.91576V11.0668C12.0224 11.5698 12.4304 11.9778 12.9344 11.9778Z",
    fill: fill
  }));
};
IconPieChart.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$15 = ["size", "fill"];
var IconPieChart2 = function IconPieChart2(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$15);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.9346 11.9777H21.0836C21.6256 11.9777 22.0496 12.4497 21.9956 12.9887C21.4516 18.4147 16.5796 22.5667 10.8816 21.9367C6.29663 21.4307 2.56963 17.7037 2.06263 13.1187C1.43463 7.42065 5.58463 2.54765 11.0116 2.00465C11.5516 1.95065 12.0226 2.37365 12.0226 2.91565V11.0667C12.0226 11.5697 12.4306 11.9777 12.9346 11.9777ZM21.1671 10.3332H14.5001C14.0401 10.3332 13.6671 9.96115 13.6671 9.50015V2.83315C13.6671 2.37315 14.0401 2.00015 14.5001 2.00015C18.6351 2.00015 22.0001 5.36415 22.0001 9.50015C22.0001 9.96115 21.6271 10.3332 21.1671 10.3332Z",
    fill: fill
  }));
};
IconPieChart2.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$16 = ["size", "fill"];
var IconPriceTag = function IconPriceTag(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$16);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.561 10.5619C9.97505 11.1479 9.02605 11.1479 8.44005 10.5619C7.85405 9.97595 7.85405 9.02595 8.44005 8.44095C9.02605 7.85495 9.97505 7.85495 10.561 8.44095C11.147 9.02595 11.147 9.97595 10.561 10.5619ZM20.468 10.5829L14.051 4.16595C13.886 4.00095 13.669 3.89895 13.437 3.87795L4.09305 3.00595C3.79605 2.97595 3.50405 3.08295 3.29305 3.29395C3.08205 3.50495 2.97705 3.79795 3.00405 4.09395L3.87605 13.4379C3.89905 13.6699 4.00005 13.8879 4.16505 14.0519L10.582 20.4699C10.937 20.8229 11.402 20.9999 11.867 20.9999C12.332 20.9999 12.797 20.8229 13.152 20.4689L20.468 13.1529C20.811 12.8109 21 12.3539 21 11.8679C21 11.3819 20.811 10.9259 20.468 10.5829Z",
    fill: fill
  }));
};
IconPriceTag.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$17 = ["size", "fill"];
var IconShoppingBag = function IconShoppingBag(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$17);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.41412 7L8.12112 5.293C8.30812 5.107 8.56512 5 8.82812 5H15.1721C15.4351 5 15.6921 5.107 15.8791 5.293L17.5861 7H6.41412ZM12.0001 16C9.79412 16 8.00012 14.206 8.00012 12C8.00012 11.448 8.44712 11 9.00012 11C9.55312 11 10.0001 11.448 10.0001 12C10.0001 13.103 10.8971 14 12.0001 14C13.1021 14 14.0001 13.103 14.0001 12C14.0001 11.448 14.4471 11 15.0001 11C15.5531 11 16.0001 11.448 16.0001 12C16.0001 14.206 14.2061 16 12.0001 16ZM20.1211 6.707L17.2931 3.879C16.7271 3.312 15.9731 3 15.1721 3H8.82812C8.02712 3 7.27312 3.312 6.70712 3.879L3.87912 6.707C3.31212 7.273 3.00012 8.027 3.00012 8.829V18C3.00012 19.654 4.34612 21 6.00012 21H18.0001C19.6541 21 21.0001 19.654 21.0001 18V8.829C21.0001 8.027 20.6871 7.273 20.1211 6.707Z",
    fill: fill
  }));
};
IconShoppingBag.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$18 = ["size", "fill"];
var IconShoppingCart = function IconShoppingCart(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$18);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 25 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.6994 6.94812C21.3324 6.35412 20.6964 6.00012 19.9984 6.00012H7.19836L6.58136 3.73712C6.46236 3.30212 6.06736 3.00012 5.61636 3.00012H3.61636C3.06336 3.00012 2.61636 3.44812 2.61636 4.00012C2.61636 4.55212 3.06336 5.00012 3.61636 5.00012H4.85236L7.65136 15.2631C7.77036 15.6981 8.16536 16.0001 8.61636 16.0001H17.6164C17.9954 16.0001 18.3414 15.7861 18.5114 15.4471L21.7874 8.89412C22.0994 8.26912 22.0664 7.54212 21.6994 6.94812ZM8.11636 17.9999C7.28836 17.9999 6.61636 18.6709 6.61636 19.4999C6.61636 20.3289 7.28836 20.9999 8.11636 20.9999C8.94436 20.9999 9.61636 20.3289 9.61636 19.4999C9.61636 18.6709 8.94436 17.9999 8.11636 17.9999ZM16.6164 19.4999C16.6164 18.6709 17.2884 17.9999 18.1164 17.9999C18.9444 17.9999 19.6164 18.6709 19.6164 19.4999C19.6164 20.3289 18.9444 20.9999 18.1164 20.9999C17.2884 20.9999 16.6164 20.3289 16.6164 19.4999Z",
    fill: fill
  }));
};
IconShoppingCart.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$19 = ["size", "fill"];
var IconBarChart = function IconBarChart(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$19);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 4C11.45 4 11 4.45 11 5V20C11 20.55 11.45 21 12 21C12.55 21 13 20.55 13 20V5C13 4.45 12.55 4 12 4ZM19 12C18.45 12 18 12.45 18 13V20C18 20.55 18.45 21 19 21C19.55 21 20 20.55 20 20V13C20 12.45 19.55 12 19 12ZM4 9C4 8.45 4.45 8 5 8C5.55 8 6 8.45 6 9V20C6 20.55 5.55 21 5 21C4.45 21 4 20.55 4 20V9Z",
    fill: fill
  }));
};
IconBarChart.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1a = ["size", "fill"];
var IconBriefcase$1 = function IconBriefcase(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1a);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 5.5C10 5.224 10.224 5 10.5 5H13.5C13.776 5 14 5.224 14 5.5V7H10V5.5ZM9 19H15V9H9V19ZM20 18C20 18.551 19.551 19 19 19H17V9H19C19.551 9 20 9.449 20 10V18ZM4 10V18C4 18.551 4.449 19 5 19H7V9H5C4.449 9 4 9.449 4 10ZM19 7H16V5.5C16 4.122 14.878 3 13.5 3H10.5C9.122 3 8 4.122 8 5.5V7H5C3.346 7 2 8.346 2 10V18C2 19.654 3.346 21 5 21H19C20.654 21 22 19.654 22 18V10C22 8.346 20.654 7 19 7Z",
    fill: fill
  }));
};
IconBriefcase$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1b = ["size", "fill"];
var IconCreditCard2 = function IconCreditCard2(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1b);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6V9H2V6ZM0 10V6C0 4.34315 1.34315 3 3 3H21C22.6569 3 24 4.34315 24 6V10V18C24 19.6569 22.6569 21 21 21H3C1.34315 21 0 19.6569 0 18V10ZM22 11V18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18V11H22Z",
    fill: fill
  }));
};
IconCreditCard2.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1c = ["size", "fill"];
var IconCreditCard$1 = function IconCreditCard(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1c);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11 15H7C6.45 15 6 14.55 6 14C6 13.45 6.45 13 7 13H11C11.55 13 12 13.45 12 14C12 14.55 11.55 15 11 15ZM17 15H15C14.45 15 14 14.55 14 14C14 13.45 14.45 13 15 13H17C17.55 13 18 13.45 18 14C18 14.55 17.55 15 17 15ZM20 16C20 16.551 19.552 17 19 17H5C4.448 17 4 16.551 4 16V11H20V16ZM4 8C4 7.449 4.448 7 5 7H19C19.552 7 20 7.449 20 8V9H4V8ZM19 5H5C3.346 5 2 6.346 2 8V16C2 17.654 3.346 19 5 19H19C20.654 19 22 17.654 22 16V8C22 6.346 20.654 5 19 5Z",
    fill: fill
  }));
};
IconCreditCard$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1d = ["size", "fill"];
var IconGlobe2$1 = function IconGlobe2(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1d);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.889 18.318C16.717 17.885 16.473 17.507 16.259 17.184C16.151 17.022 16.04 16.857 15.943 16.687C15.554 16.011 15.688 15.737 16.319 14.68L16.421 14.507C16.932 13.646 16.96 12.82 16.986 12.092C16.998 11.734 17.01 11.397 17.079 11.08C17.24 10.348 18.787 10.153 19.746 10.038C19.907 10.667 20 11.322 20 12C20 14.569 18.778 16.853 16.889 18.318ZM4.962 15.799C5.598 15.961 6.287 16.073 6.988 16.073C8.068 16.073 9.171 15.809 10.125 15.062C11.841 13.72 11.841 12.004 11.841 10.624C11.841 9.732 11.841 8.963 12.213 8.28C12.413 7.914 12.839 7.66 13.332 7.365C13.634 7.184 13.947 6.998 14.247 6.762C14.89 6.259 15.368 5.612 15.664 4.896C17.064 5.621 18.224 6.744 18.99 8.119C17.562 8.317 15.535 8.785 15.126 10.652C15.018 11.146 15.001 11.611 14.988 12.022C14.967 12.605 14.951 13.066 14.701 13.488L14.601 13.656C13.954 14.739 13.222 15.967 14.209 17.684C14.328 17.892 14.461 18.092 14.592 18.291C14.936 18.807 15.105 19.092 15.106 19.372C14.151 19.776 13.101 20 12 20C8.963 20 6.317 18.298 4.962 15.799ZM12 4C12.616 4 13.211 4.076 13.787 4.208C13.618 4.58 13.357 4.919 13.013 5.188C12.795 5.36 12.55 5.503 12.307 5.648C11.656 6.036 10.919 6.476 10.457 7.322C9.841 8.452 9.841 9.606 9.841 10.624C9.841 11.979 9.797 12.78 8.893 13.487C7.524 14.56 5.429 13.961 4.133 13.416C4.051 12.955 4 12.483 4 12C4 7.589 7.589 4 12 4ZM12 2C6.486 2 2 6.486 2 12C2 17.513 6.486 22 12 22C17.514 22 22 17.513 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconGlobe2$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1e = ["size", "fill"];
var IconGlobe = function IconGlobe(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1e);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.617 19.552C15.666 18.054 16.757 15.851 16.975 13H19.93C19.547 16.052 17.441 18.57 14.617 19.552ZM4.069 13H7.061C7.267 15.862 8.344 18.056 9.407 19.561C6.57 18.584 4.454 16.061 4.069 13ZM9.438 4.429C8.386 5.927 7.285 8.137 7.065 11H4.069C4.455 7.928 6.586 5.397 9.438 4.429ZM9.079 11C9.385 7.728 11.059 5.45 12.026 4.397C13.026 5.468 14.674 7.725 14.959 11H9.079ZM9.08 13H14.962C14.656 16.277 12.978 18.555 12.012 19.608C10.965 18.498 9.359 16.272 9.08 13ZM19.93 11H16.978C16.773 8.151 15.708 5.964 14.65 4.461C17.458 5.451 19.549 7.96 19.93 11ZM22 12C22 6.496 17.529 2.018 12.028 2.002C12.024 2.002 12.02 2.001 12.015 2.001C12.011 2.001 12.005 2 12 2C6.486 2 2 6.487 2 12C2 17.514 6.486 22 12 22C12.006 22 12.011 21.999 12.015 21.999C12.017 21.999 12.018 22 12.02 22C12.023 22 12.026 21.998 12.028 21.998C17.529 21.983 22 17.504 22 12Z",
    fill: fill
  }));
};
IconGlobe.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1f = ["size", "fill"];
var IconPaperclip = function IconPaperclip(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1f);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.29132 21.5C7.63531 21.5 6.06132 20.834 4.85932 19.625C2.47132 17.222 2.37332 13.412 4.64032 11.131L12.0263 3.701C12.7953 2.927 13.8333 2.5 14.9483 2.5C16.1413 2.5 17.2753 2.979 18.1403 3.849C19.8613 5.58 19.9273 8.331 18.2863 9.981L10.8913 17.41C10.4123 17.893 9.76731 18.158 9.07531 18.158C8.34432 18.158 7.65132 17.866 7.12532 17.337C6.07232 16.276 6.03932 14.585 7.05232 13.565L13.8773 6.71C14.2673 6.318 14.8993 6.316 15.2913 6.706C15.6823 7.096 15.6843 7.729 15.2943 8.12L8.47031 14.976C8.23032 15.218 8.26332 15.645 8.54432 15.927C8.69032 16.074 8.88432 16.158 9.07531 16.158C9.18532 16.158 9.34332 16.131 9.47332 16L16.8683 8.571C17.7353 7.698 17.6703 6.213 16.7223 5.259C15.8153 4.347 14.2763 4.275 13.4443 5.111L6.05832 12.541C4.56432 14.044 4.66232 16.59 6.27832 18.215C7.10132 19.044 8.17132 19.5 9.29132 19.5C10.2923 19.5 11.2203 19.122 11.9023 18.436L19.2893 11.006C19.6783 10.615 20.3113 10.612 20.7033 11.002C21.0943 11.392 21.0963 12.024 20.7073 12.416L13.3203 19.846C12.2603 20.912 10.8293 21.5 9.29132 21.5Z",
    fill: fill
  }));
};
IconPaperclip.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1g = ["size", "fill"];
var IconPaperclipUp = function IconPaperclipUp(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1g);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 22C8.691 22 6 19.443 6 16.302V6.132C6 3.854 7.944 2 10.333 2C12.723 2 14.667 3.854 14.667 6.132L14.661 16.309C14.661 17.723 13.464 18.874 11.994 18.874C10.524 18.874 9.328 17.723 9.328 16.308L9.333 6.917C9.334 6.365 9.782 5.918 10.333 5.918H10.334C10.886 5.918 11.334 6.366 11.333 6.919L11.328 16.309C11.328 16.62 11.626 16.874 11.994 16.874C12.362 16.874 12.661 16.62 12.661 16.308L12.667 6.131C12.667 4.956 11.62 4 10.333 4C9.047 4 8 4.956 8 6.132V16.302C8 18.341 9.794 20 12 20C14.206 20 16 18.341 16 16.302V6.132C16 5.579 16.448 5.132 17 5.132C17.552 5.132 18 5.579 18 6.132V16.302C18 19.443 15.309 22 12 22Z",
    fill: fill
  }));
};
IconPaperclipUp.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1h = ["size", "fill"];
var IconPieChart$1 = function IconPieChart(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1h);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.821 14.0576C20.298 13.8716 19.728 14.1446 19.545 14.6666C18.417 17.8566 15.384 19.9996 12 19.9996C7.589 19.9996 4 16.4116 4 11.9996C4 8.6156 6.143 5.5826 9.333 4.4546C9.854 4.2716 10.127 3.7006 9.943 3.1796C9.759 2.6596 9.188 2.3856 8.667 2.5706C4.679 3.9796 2 7.7686 2 11.9996C2 17.5136 6.486 21.9996 12 21.9996C16.231 21.9996 20.02 19.3216 21.43 15.3326C21.614 14.8126 21.342 14.2416 20.821 14.0576ZM13.9997 10V4.071C17.0607 4.511 19.4887 6.938 19.9287 10H13.9997ZM12.9997 2C12.4477 2 11.9997 2.447 11.9997 3V11C11.9997 11.553 12.4477 12 12.9997 12H20.9997C21.5517 12 21.9997 11.553 21.9997 11C21.9997 6.037 17.9617 2 12.9997 2Z",
    fill: fill
  }));
};
IconPieChart$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1i = ["size", "fill"];
var IconPriceTag$1 = function IconPriceTag(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1i);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.5606 8.44036C11.1466 9.02536 11.1466 9.97636 10.5606 10.5614C9.97458 11.1474 9.02558 11.1474 8.43958 10.5614C7.85358 9.97636 7.85358 9.02536 8.43958 8.44036C9.02558 7.85436 9.97458 7.85436 10.5606 8.44036ZM5.83408 12.8925L11.8661 18.9255L18.9241 11.8675L12.8921 5.83446L5.10708 5.10846L5.83408 12.8925ZM11.8661 20.9995C11.4011 20.9995 10.9371 20.8225 10.5821 20.4695L4.16508 14.0515C4.00008 13.8875 3.89808 13.6695 3.87608 13.4375L3.00408 4.09346C2.97708 3.79746 3.08208 3.50446 3.29308 3.29346C3.50408 3.08246 3.79608 2.97546 4.09308 3.00546L13.4371 3.87746C13.6691 3.89846 13.8861 4.00046 14.0511 4.16546L20.4681 10.5825C20.8111 10.9255 21.0001 11.3815 21.0001 11.8675C21.0001 12.3535 20.8111 12.8095 20.4681 13.1525L13.1511 20.4685C12.7971 20.8225 12.3321 20.9995 11.8661 20.9995Z",
    fill: fill
  }));
};
IconPriceTag$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1j = ["size", "fill"];
var IconShoppingBag$1 = function IconShoppingBag(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1j);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 11C14.447 11 14 11.448 14 12C14 13.103 13.103 14 12 14C10.897 14 10 13.103 10 12C10 11.448 9.553 11 9 11C8.447 11 8 11.448 8 12C8 14.206 9.794 16 12 16C14.206 16 16 14.206 16 12C16 11.448 15.553 11 15 11ZM18 19H6C5.448 19 5 18.551 5 18V9H19V18C19 18.551 18.552 19 18 19ZM8.121 5.293C8.308 5.107 8.565 5 8.828 5H15.172C15.435 5 15.692 5.107 15.879 5.293L17.586 7H6.414L8.121 5.293ZM20.121 6.707L17.293 3.879C16.727 3.312 15.973 3 15.172 3H8.828C8.027 3 7.273 3.312 6.707 3.879L3.879 6.707C3.312 7.273 3 8.027 3 8.829V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V8.829C21 8.027 20.688 7.273 20.121 6.707Z",
    fill: fill
  }));
};
IconShoppingBag$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1k = ["size", "fill"];
var IconShoppingCart$1 = function IconShoppingCart(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1k);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 26 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.3082 19.5C20.3082 20.329 19.6362 21 18.8082 21C17.9802 21 17.3082 20.329 17.3082 19.5C17.3082 18.671 17.9802 18 18.8082 18C19.6362 18 20.3082 18.671 20.3082 19.5ZM10.3082 19.5C10.3082 20.329 9.63617 21 8.80817 21C7.98017 21 7.30817 20.329 7.30817 19.5C7.30817 18.671 7.98017 18 8.80817 18C9.63617 18 10.3082 18.671 10.3082 19.5ZM17.6902 14H10.0722L8.43517 8H20.6902L17.6902 14ZM22.3912 6.948C22.0242 6.354 21.3882 6 20.6902 6H7.89017L7.27317 3.737C7.15417 3.302 6.75917 3 6.30817 3H4.30817C3.75517 3 3.30817 3.448 3.30817 4C3.30817 4.552 3.75517 5 4.30817 5H5.54417L8.34317 15.263C8.46217 15.698 8.85717 16 9.30817 16H18.3082C18.6872 16 19.0332 15.786 19.2032 15.447L22.4792 8.894C22.7912 8.269 22.7582 7.542 22.3912 6.948Z",
    fill: fill
  }));
};
IconShoppingCart$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1l = ["size", "fill"];
var IconTrendingDown = function IconTrendingDown(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1l);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 26 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21 12C21 11.448 20.553 11 20 11C19.447 11 19 11.448 19 12V14.297L14.759 9.349C14.443 8.979 13.905 8.891 13.485 9.143L9.21999 11.702L4.76899 6.36C4.41499 5.937 3.78599 5.877 3.35899 6.232C2.93599 6.585 2.87799 7.216 3.23099 7.64L8.23099 13.64C8.54799 14.019 9.09299 14.112 9.51499 13.857L13.79 11.292L17.826 16H15C14.447 16 14 16.448 14 17C14 17.552 14.447 18 15 18H20C20.124 18 20.247 17.973 20.364 17.926C20.413 17.907 20.451 17.875 20.496 17.85C20.548 17.819 20.604 17.8 20.65 17.759C20.66 17.751 20.664 17.739 20.673 17.73C20.728 17.68 20.766 17.619 20.808 17.558C20.841 17.51 20.88 17.468 20.903 17.416C20.928 17.363 20.936 17.304 20.95 17.247C20.969 17.177 20.99 17.109 20.992 17.037C20.993 17.024 21 17.013 21 17V12Z",
    fill: fill
  }));
};
IconTrendingDown.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1m = ["size", "fill"];
var IconTrendingUp = function IconTrendingUp(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1m);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 26 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.9923 6.963C20.9902 6.891 20.9692 6.823 20.9503 6.754C20.9353 6.696 20.9283 6.637 20.9033 6.584C20.8803 6.532 20.8413 6.49 20.8073 6.442C20.7653 6.381 20.7273 6.32 20.6733 6.27C20.6643 6.261 20.6603 6.249 20.6503 6.241C20.6143 6.21 20.5703 6.199 20.5313 6.174C20.4713 6.135 20.4123 6.095 20.3443 6.069C20.2773 6.045 20.2113 6.039 20.1423 6.029C20.0943 6.022 20.0513 6 20.0003 6H15.0003C14.4473 6 14.0003 6.448 14.0003 7C14.0003 7.552 14.4473 8 15.0003 8H17.8263L13.7903 12.708L9.51425 10.143C9.09125 9.887 8.54725 9.981 8.23125 10.36L3.23125 16.36C2.87825 16.784 2.93525 17.415 3.35925 17.768C3.54725 17.924 3.77325 18 3.99925 18C4.28625 18 4.57025 17.878 4.76825 17.64L9.22025 12.298L13.4853 14.858C13.9043 15.109 14.4423 15.021 14.7593 14.651L19.0003 9.703V12C19.0003 12.552 19.4473 13 20.0003 13C20.5533 13 21.0003 12.552 21.0003 12V7C21.0003 6.987 20.9932 6.976 20.9923 6.963Z",
    fill: fill
  }));
};
IconTrendingUp.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1n = ["size", "fill"];
var IconBookmark = function IconBookmark(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1n);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 20.9996C5.83 20.9996 5.66 20.9566 5.507 20.8696C5.194 20.6926 5 20.3596 5 19.9996V5.33263C5 4.04663 5.987 2.99963 7.2 2.99963H16.8C18.013 2.99963 19 4.04663 19 5.33263V19.9996C19 20.3546 18.811 20.6846 18.504 20.8636C18.197 21.0436 17.818 21.0456 17.508 20.8706L11.836 17.6626L6.515 20.8566C6.356 20.9516 6.178 20.9996 6 20.9996Z",
    fill: fill
  }));
};
IconBookmark.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1o = ["size", "fill"];
var IconCloudDownload = function IconCloudDownload(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1o);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.846 10.8274C21.8673 10.8954 21.8886 10.9635 21.9028 11.0342C21.9648 11.3472 21.9998 11.6692 21.9998 12.0002C21.9998 12.3082 21.9638 12.6112 21.9078 12.9102C21.8954 12.9784 21.8787 13.0437 21.8621 13.1091C21.8545 13.1387 21.847 13.1683 21.8398 13.1982C21.7898 13.3972 21.7308 13.5922 21.6578 13.7832C21.6198 13.8822 21.5808 13.9792 21.5368 14.0752C21.4498 14.2652 21.3488 14.4472 21.2378 14.6262C21.2205 14.654 21.2041 14.6822 21.1877 14.7103C21.1604 14.7573 21.133 14.8042 21.1018 14.8492C21.0927 14.8622 21.0849 14.8757 21.0772 14.889C21.0689 14.9034 21.0607 14.9177 21.0508 14.9312C21.0431 14.9423 21.0323 14.9494 21.0217 14.9563C21.0131 14.962 21.0045 14.9676 20.9978 14.9752C20.0858 16.1972 18.6418 17.0002 16.9998 17.0002H16.9878C16.9638 16.5342 16.7868 16.0752 16.4388 15.7152C16.0648 15.3262 15.5398 15.1032 14.9998 15.1032C14.6438 15.1032 14.3008 15.1962 13.9998 15.3712V12.0002C13.9998 10.8972 13.1028 10.0002 11.9998 10.0002C10.8978 10.0002 9.99979 10.8972 9.99979 12.0002V15.2662C9.69879 15.0932 9.35679 15.0002 8.99979 15.0002C8.46579 15.0002 7.96379 15.2082 7.58579 15.5862C7.19579 15.9752 7.00079 16.4882 7.00079 17.0002H6.99979C5.35779 17.0002 3.91379 16.1972 3.00279 14.9752C2.99578 14.9678 2.98723 14.9623 2.97867 14.9567C2.96768 14.9496 2.95665 14.9425 2.94879 14.9312C2.93821 14.9168 2.92949 14.9014 2.92074 14.8859C2.91376 14.8736 2.90677 14.8612 2.89879 14.8492C2.86687 14.8033 2.83862 14.7553 2.81039 14.7073C2.7944 14.6802 2.77842 14.653 2.76179 14.6262C2.65179 14.4472 2.54979 14.2652 2.46279 14.0752C2.4202 13.9823 2.38324 13.8885 2.34554 13.7928L2.34179 13.7832C2.26979 13.5922 2.20979 13.3972 2.16079 13.1982C2.15446 13.1729 2.14792 13.1478 2.1414 13.1228C2.12318 13.0528 2.10504 12.9831 2.09179 12.9102C2.03679 12.6112 1.99979 12.3082 1.99979 12.0002C1.99979 11.6692 2.03579 11.3472 2.09679 11.0342C2.11136 10.9614 2.13356 10.8913 2.15576 10.8213C2.1686 10.7808 2.18143 10.7403 2.19279 10.6992C2.19697 10.6839 2.20113 10.6685 2.2053 10.6532C2.25297 10.4774 2.30065 10.3017 2.36779 10.1352C2.40401 10.0447 2.44848 9.95996 2.49308 9.87497C2.51252 9.83794 2.53197 9.80087 2.55079 9.76324C2.55719 9.75053 2.56356 9.73783 2.56993 9.72514C2.64021 9.5852 2.70943 9.44736 2.79379 9.31624C2.85756 9.21534 2.9298 9.12226 3.0021 9.0291C3.01936 9.00686 3.03663 8.98461 3.05379 8.96224L3.05733 8.95769C3.15413 8.83323 3.2501 8.70983 3.35779 8.59424C3.45426 8.4902 3.5579 8.39689 3.66276 8.30247C3.66877 8.29707 3.67478 8.29166 3.68079 8.28624C3.79879 8.18024 3.91879 8.07824 4.04679 7.98424C4.16579 7.89624 4.28779 7.81624 4.41479 7.74024C4.55479 7.65424 4.69779 7.57724 4.84579 7.50624C4.97579 7.44324 5.10579 7.38624 5.24179 7.33524C5.40379 7.27324 5.57079 7.22424 5.74079 7.18024C5.87579 7.14424 6.00779 7.10924 6.14779 7.08624C6.17421 7.0814 6.19986 7.07442 6.2255 7.06745C6.25808 7.05858 6.29065 7.04972 6.32479 7.04524C7.14579 4.66124 9.41979 3.00024 11.9998 3.00024C14.5808 3.00024 16.8548 4.66124 17.6748 7.04524C17.709 7.04973 17.7419 7.05862 17.7749 7.0675C17.8007 7.07446 17.8264 7.08141 17.8528 7.08624C17.9918 7.10924 18.1248 7.14424 18.2588 7.18024C18.4288 7.22424 18.5958 7.27324 18.7578 7.33524C18.8938 7.38624 19.0248 7.44324 19.1538 7.50624C19.3018 7.57724 19.4448 7.65424 19.5848 7.74024C19.7118 7.81624 19.8348 7.89624 19.9538 7.98424C20.0808 8.07824 20.2008 8.18024 20.3188 8.28624C20.4308 8.38624 20.5398 8.48424 20.6428 8.59424C20.7518 8.71124 20.8488 8.83624 20.9458 8.96224C20.9585 8.9786 20.9712 8.99489 20.9839 9.01117C21.0612 9.11034 21.1381 9.20887 21.2068 9.31624C21.2899 9.44684 21.3588 9.58411 21.4288 9.72348C21.4354 9.73672 21.4421 9.74997 21.4488 9.76324C21.4676 9.80087 21.4871 9.83794 21.5065 9.87497C21.5511 9.95996 21.5956 10.0447 21.6318 10.1352C21.7 10.3022 21.7479 10.4785 21.7957 10.6548C21.7997 10.6696 21.8038 10.6844 21.8078 10.6992C21.8193 10.7423 21.8326 10.7848 21.846 10.8274ZM13.0002 17.6438L14.3052 16.3838C14.7032 16.0008 15.3362 16.0118 15.7192 16.4088C16.1032 16.8068 16.0922 17.4398 15.6952 17.8228L12.6952 20.7198C12.5002 20.9058 12.2502 20.9998 12.0002 20.9998C11.7442 20.9998 11.4882 20.9028 11.2932 20.7068L8.29319 17.7068C7.90219 17.3168 7.90219 16.6838 8.29319 16.2928C8.68319 15.9028 9.31619 15.9028 9.70719 16.2928L11.0002 17.5858V11.9998C11.0002 11.4468 11.4482 10.9998 12.0002 10.9998C12.5522 10.9998 13.0002 11.4468 13.0002 11.9998V17.6438Z",
    fill: fill
  }));
};
IconCloudDownload.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1p = ["size", "fill"];
var IconCloudUpload = function IconCloudUpload(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1p);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.8462 11.8274C21.8675 11.8954 21.8888 11.9635 21.903 12.0342C21.965 12.3472 22 12.6692 22 13.0002C22 13.3082 21.964 13.6112 21.908 13.9102C21.8956 13.9784 21.879 14.0437 21.8623 14.1091C21.8547 14.1387 21.8472 14.1683 21.84 14.1982C21.79 14.3972 21.731 14.5922 21.658 14.7832C21.62 14.8822 21.581 14.9792 21.537 15.0752C21.45 15.2652 21.349 15.4472 21.238 15.6262C21.2208 15.654 21.2043 15.6822 21.1879 15.7103C21.1606 15.7573 21.1333 15.8042 21.102 15.8492C21.0929 15.8622 21.0851 15.8757 21.0774 15.889C21.0691 15.9034 21.0609 15.9177 21.051 15.9312C21.0433 15.9423 21.0325 15.9494 21.0219 15.9563C21.0133 15.962 21.0047 15.9676 20.998 15.9752C20.086 17.1972 18.642 18.0002 17 18.0002H14V16.7332C14.301 16.9072 14.643 17.0002 15 17.0002C15.534 17.0002 16.036 16.7922 16.414 16.4142C17.194 15.6352 17.194 14.3652 16.414 13.5862L13.414 10.5862C13.038 10.2092 12.536 10.0012 12.002 10.0012C11.483 10.0012 10.99 10.1982 10.614 10.5572L7.611 13.4572C6.818 14.2232 6.796 15.4922 7.562 16.2852C7.938 16.6742 8.462 16.8972 9.002 16.8972C9.357 16.8972 9.699 16.8042 10 16.6302V18.0002H7C5.358 18.0002 3.914 17.1972 3.003 15.9752C2.99599 15.9678 2.98745 15.9623 2.97888 15.9567C2.96789 15.9496 2.95687 15.9425 2.949 15.9312C2.93842 15.9168 2.92971 15.9014 2.92095 15.8859C2.91398 15.8736 2.90698 15.8612 2.899 15.8492C2.86708 15.8033 2.83883 15.7553 2.8106 15.7073C2.79462 15.6802 2.77863 15.653 2.762 15.6262C2.652 15.4472 2.55 15.2652 2.463 15.0752C2.42041 14.9823 2.38345 14.8885 2.34576 14.7928L2.342 14.7832C2.27 14.5922 2.21 14.3972 2.161 14.1982C2.15467 14.1729 2.14814 14.1478 2.14161 14.1228C2.12339 14.0528 2.10526 13.9831 2.092 13.9102C2.037 13.6112 2 13.3082 2 13.0002C2 12.6692 2.036 12.3472 2.097 12.0342C2.11157 11.9614 2.13378 11.8913 2.15598 11.8213C2.16881 11.7808 2.18164 11.7403 2.193 11.6992C2.19718 11.6839 2.20135 11.6685 2.20551 11.6532C2.25319 11.4774 2.30087 11.3017 2.368 11.1352C2.40422 11.0447 2.44869 10.96 2.4933 10.875C2.51273 10.8379 2.53219 10.8009 2.551 10.7632C2.5574 10.7505 2.56378 10.7378 2.57015 10.7251C2.64042 10.5852 2.70965 10.4474 2.794 10.3162C2.85777 10.2153 2.93001 10.1223 3.00231 10.0291C3.01958 10.0069 3.03684 9.98461 3.054 9.96224L3.05754 9.95769C3.15434 9.83323 3.25031 9.70983 3.358 9.59424C3.45448 9.4902 3.55811 9.39689 3.66298 9.30247C3.66898 9.29707 3.67499 9.29166 3.681 9.28624C3.799 9.18024 3.919 9.07824 4.047 8.98424C4.166 8.89624 4.288 8.81624 4.415 8.74024C4.555 8.65424 4.698 8.57724 4.846 8.50624C4.976 8.44324 5.106 8.38624 5.242 8.33524C5.404 8.27324 5.571 8.22424 5.741 8.18024C5.876 8.14424 6.008 8.10924 6.148 8.08624C6.17442 8.0814 6.20007 8.07442 6.22571 8.06745C6.25829 8.05858 6.29086 8.04972 6.325 8.04524C7.146 5.66124 9.42 4.00024 12 4.00024C14.581 4.00024 16.855 5.66124 17.675 8.04524C17.7092 8.04973 17.7422 8.05862 17.7751 8.0675C17.8009 8.07446 17.8266 8.08141 17.853 8.08624C17.992 8.10924 18.125 8.14424 18.259 8.18024C18.429 8.22424 18.596 8.27324 18.758 8.33524C18.894 8.38624 19.025 8.44324 19.154 8.50624C19.302 8.57724 19.445 8.65424 19.585 8.74024C19.712 8.81624 19.835 8.89624 19.954 8.98424C20.081 9.07824 20.201 9.18024 20.319 9.28624C20.431 9.38624 20.54 9.48424 20.643 9.59424C20.752 9.71124 20.849 9.83624 20.946 9.96224C20.9587 9.9786 20.9714 9.99489 20.9841 10.0112C21.0614 10.1103 21.1383 10.2089 21.207 10.3162C21.2901 10.4468 21.359 10.5841 21.429 10.7235C21.4357 10.7367 21.4423 10.75 21.449 10.7632C21.4678 10.8009 21.4873 10.8379 21.5067 10.875C21.5513 10.96 21.5958 11.0447 21.632 11.1352C21.7003 11.3022 21.7481 11.4785 21.7959 11.6548C21.7999 11.6696 21.804 11.6844 21.808 11.6992C21.8195 11.7423 21.8329 11.7848 21.8462 11.8274ZM11.3052 11.28C11.6992 10.904 12.3222 10.907 12.7072 11.293L15.7072 14.293C16.0982 14.684 16.0982 15.316 15.7072 15.707C15.5122 15.902 15.2562 16 15.0002 16C14.7442 16 14.4882 15.902 14.2932 15.707L13.0002 14.414V20C13.0002 20.553 12.5522 21 12.0002 21C11.4482 21 11.0002 20.553 11.0002 20V14.356L9.6952 15.616C9.2982 16.001 8.6652 15.988 8.2812 15.591C7.8972 15.193 7.9082 14.561 8.3052 14.177L11.3052 11.28Z",
    fill: fill
  }));
};
IconCloudUpload.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1q = ["size", "fill"];
var IconCopy = function IconCopy(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1q);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 12V13H5.667C5.299 13 5 12.701 5 12.333V5.667C5 5.299 5.299 5 5.667 5H12.333C12.701 5 13 5.299 13 5.667V9H12C10.346 9 9 10.346 9 12ZM18 9H15V5.667C15 4.196 13.804 3 12.333 3H5.667C4.196 3 3 4.196 3 5.667V12.333C3 13.804 4.196 15 5.667 15H9V18C9 19.654 10.346 21 12 21H18C19.654 21 21 19.654 21 18V12C21 10.346 19.654 9 18 9Z",
    fill: fill
  }));
};
IconCopy.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1r = ["size", "fill"];
var IconCube = function IconCube(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1r);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 10.5033L20.512 6.92525C20.366 6.77625 20.201 6.64325 20.001 6.55025L12.801 3.17625C12.296 2.94125 11.704 2.94125 11.199 3.17625L3.99905 6.55025C3.79905 6.64325 3.63405 6.77625 3.48805 6.92525L12 10.5033ZM11.25 11.8274L3.00005 8.35945V16.0884C2.99505 16.7295 3.37905 17.3174 3.99005 17.6064L11.19 20.9795C11.1998 20.9841 11.21 20.9871 11.2204 20.9902C11.2303 20.9931 11.2403 20.9961 11.25 21.0005V11.8274ZM12.75 20.9974V11.8274L21 8.35945V16.0975C21 16.7365 20.613 17.3214 20.001 17.6064L12.801 20.9795C12.792 20.984 12.7823 20.9869 12.7725 20.9899C12.765 20.9921 12.7574 20.9944 12.75 20.9974Z",
    fill: fill
  }));
};
IconCube.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1s = ["size", "fill"];
var IconFilter = function IconFilter(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1s);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.9033 21C13.6893 21 13.4773 20.932 13.3003 20.797L9.27426 17.752C9.02426 17.563 8.87726 17.268 8.87726 16.955V13.681L4.11126 4.459C3.95126 4.149 3.96426 3.778 4.14626 3.48C4.32726 3.182 4.65126 3 5.00026 3H19.0003C19.3523 3 19.6783 3.185 19.8593 3.488C20.0393 3.79 20.0473 4.166 19.8803 4.475L14.9033 13.69V20C14.9033 20.379 14.6883 20.726 14.3483 20.896C14.2073 20.965 14.0553 21 13.9033 21Z",
    fill: fill
  }));
};
IconFilter.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1t = ["size", "fill"];
var IconSave = function IconSave(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1t);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.2921 3.878L20.1211 8.707C20.6831 9.269 21.0001 10.033 21.0001 10.829V18C21.0001 19.657 19.6571 21 18.0001 21H16.0001V17C16.0001 15.897 15.1021 15 14.0001 15H10.0001C8.89712 15 8.00012 15.897 8.00012 17V21H6.00012C4.34312 21 3.00012 19.657 3.00012 18V6C3.00012 4.343 4.34312 3 6.00012 3H8.00012V10C8.00012 10.552 8.44712 11 9.00012 11H15.0001C15.5531 11 16.0001 10.552 16.0001 10C16.0001 9.448 15.5531 9 15.0001 9H10.0001V3H13.1721C13.9671 3 14.7301 3.316 15.2921 3.878ZM10 17H14L14.001 21H10V17Z",
    fill: fill
  }));
};
IconSave.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1u = ["size", "fill"];
var IconSetting = function IconSetting(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1u);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.0012 10.5C11.1742 10.5 10.5012 11.173 10.5012 12C10.5012 12.827 11.1742 13.5 12.0012 13.5C12.8282 13.5 13.5012 12.827 13.5012 12C13.5012 11.173 12.8282 10.5 12.0012 10.5ZM12.0012 15.5C10.0712 15.5 8.50116 13.93 8.50116 12C8.50116 10.07 10.0712 8.5 12.0012 8.5C13.9312 8.5 15.5012 10.07 15.5012 12C15.5012 13.93 13.9312 15.5 12.0012 15.5ZM21.8932 10.319L21.1062 7.798C20.9182 7.193 20.5082 6.704 19.9532 6.42C19.4122 6.143 18.7972 6.096 18.2212 6.288L17.8812 6.401C17.3452 6.582 16.7472 6.482 16.2882 6.137L16.1812 6.056C15.7442 5.728 15.4852 5.193 15.4872 4.627L15.4892 4.348C15.4912 3.713 15.2492 3.118 14.8062 2.673C14.3772 2.242 13.8102 2.004 13.2082 2.003L10.6612 2H10.6572C9.40316 2 8.37916 3.042 8.37416 4.326L8.37316 4.567C8.37116 5.165 8.09616 5.729 7.64016 6.077L7.51116 6.175C6.99816 6.565 6.33316 6.676 5.73416 6.472C5.17616 6.281 4.57916 6.322 4.05116 6.588C3.51116 6.861 3.11216 7.335 2.92716 7.922L2.11116 10.517C1.72416 11.749 2.37416 13.041 3.59116 13.458L3.75516 13.514C4.27316 13.691 4.69016 14.143 4.87416 14.725L4.92916 14.893C5.14816 15.539 5.07216 16.22 4.69816 16.75C3.97816 17.773 4.19716 19.216 5.18716 19.966L7.25916 21.54C7.65716 21.842 8.12816 22 8.61516 22C8.73016 22 8.84616 21.992 8.96216 21.974C9.57416 21.878 10.1112 21.543 10.4732 21.03L10.7042 20.702C11.0362 20.23 11.5432 19.951 12.1322 19.935C12.7192 19.902 13.2792 20.208 13.6292 20.712L13.7472 20.884C14.1062 21.402 14.6422 21.742 15.2562 21.841C15.8652 21.938 16.4722 21.787 16.9672 21.413L19.0282 19.857C20.0222 19.108 20.2502 17.66 19.5362 16.628L19.2752 16.253C18.9472 15.779 18.8512 15.162 19.0172 14.601C19.1982 13.989 19.6502 13.509 20.2272 13.315L20.4282 13.248C21.6152 12.851 22.2722 11.537 21.8932 10.319Z",
    fill: fill
  }));
};
IconSetting.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1v = ["size", "fill"];
var IconSetting2 = function IconSetting2(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1v);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 10.5C11.173 10.5 10.5 11.173 10.5 12C10.5 12.827 11.173 13.5 12 13.5C12.827 13.5 13.5 12.827 13.5 12C13.5 11.173 12.827 10.5 12 10.5ZM12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5ZM20.317 9.375H19.233C19.086 9.375 18.986 9.258 18.925 9.111C18.879 9 18.867 8.846 18.972 8.741L19.742 7.975C20.06 7.658 20.236 7.235 20.236 6.787C20.236 6.337 20.062 5.915 19.744 5.598L18.403 4.257C17.749 3.601 16.682 3.603 16.026 4.257L15.256 5.028C15.152 5.133 14.998 5.12 14.853 5.06C14.743 5.015 14.625 4.914 14.625 4.767V3.676C14.625 2.752 13.874 2 12.949 2H11.057C10.129 2 9.375 2.755 9.375 3.683V4.767C9.375 4.914 9.258 5.014 9.111 5.075C9 5.122 8.845 5.134 8.741 5.028L7.976 4.259C7.658 3.94 7.236 3.765 6.787 3.765H6.785C6.336 3.765 5.914 3.939 5.597 4.257L4.257 5.597C3.602 6.251 3.602 7.317 4.257 7.974L5.028 8.744C5.132 8.848 5.12 9.003 5.06 9.147C5.015 9.257 4.914 9.375 4.767 9.375H3.676C2.752 9.375 2 10.126 2 11.051V12.943C2 13.871 2.755 14.625 3.683 14.625H4.767C4.914 14.625 5.014 14.742 5.075 14.889C5.121 15 5.133 15.154 5.028 15.259L4.259 16.024C3.94 16.342 3.765 16.764 3.765 17.213C3.764 17.663 3.939 18.085 4.257 18.403L5.597 19.743C6.251 20.399 7.318 20.397 7.974 19.743L8.744 18.972C8.849 18.869 9.003 18.881 9.147 18.94C9.257 18.985 9.375 19.086 9.375 19.233V20.324C9.375 21.248 10.126 22 11.051 22H12.943C13.871 22 14.625 21.245 14.625 20.317V19.233C14.625 19.086 14.742 18.986 14.889 18.925C14.999 18.879 15.154 18.867 15.259 18.972L16.024 19.741C16.342 20.06 16.764 20.235 17.213 20.235H17.215C17.664 20.235 18.086 20.061 18.403 19.743L19.743 18.403C20.398 17.749 20.398 16.683 19.743 16.026L18.972 15.256C18.868 15.152 18.88 14.997 18.927 14.886C18.927 14.884 18.94 14.854 18.94 14.853C18.985 14.743 19.086 14.625 19.233 14.625H20.324C21.248 14.625 22 13.874 22 12.949V11.057C22 10.129 21.245 9.375 20.317 9.375Z",
    fill: fill
  }));
};
IconSetting2.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1w = ["size", "fill"];
var IconWindow = function IconWindow(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1w);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 18C19 18.552 18.551 19 18 19H6C5.449 19 5 18.552 5 18V11H19V18ZM8 6C8.552 6 9 6.447 9 7C9 7.553 8.552 8 8 8C7.448 8 7 7.553 7 7C7 6.447 7.448 6 8 6ZM12 6C12.552 6 13 6.447 13 7C13 7.553 12.552 8 12 8C11.448 8 11 7.553 11 7C11 6.447 11.448 6 12 6ZM18 3H6C4.346 3 3 4.346 3 6V9V11V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V11V9V6C21 4.346 19.654 3 18 3Z",
    fill: fill
  }));
};
IconWindow.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1x = ["size", "fill"];
var IconBookmark$1 = function IconBookmark(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1x);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.821 15.5055C11.99 15.5055 12.16 15.5485 12.313 15.6345L17 18.2855V5.33351C17 5.13251 16.879 4.99951 16.8 4.99951H7.2C7.12 4.99951 7 5.13251 7 5.33351V18.2335L11.306 15.6485C11.465 15.5535 11.643 15.5055 11.821 15.5055ZM6 20.9995C5.83 20.9995 5.66 20.9565 5.507 20.8695C5.194 20.6925 5 20.3595 5 19.9995V5.33351C5 4.04651 5.987 2.99951 7.2 2.99951H16.8C18.013 2.99951 19 4.04651 19 5.33351V19.9995C19 20.3555 18.811 20.6845 18.504 20.8635C18.196 21.0435 17.818 21.0465 17.508 20.8705L11.836 17.6625L6.514 20.8575C6.356 20.9515 6.178 20.9995 6 20.9995Z",
    fill: fill
  }));
};
IconBookmark$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1y = ["size", "fill"];
var IconCast = function IconCast(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1y);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.59937 3H18.4004C19.8344 3 21.0004 4.246 21.0004 5.777V18.223C21.0004 19.754 19.8344 21 18.4004 21H17.0004C16.4474 21 16.0004 20.553 16.0004 20C16.0004 19.447 16.4474 19 17.0004 19H18.4004C18.7254 19 19.0004 18.644 19.0004 18.223V5.777C19.0004 5.356 18.7254 5 18.4004 5H5.59937C5.27437 5 5.00037 5.356 5.00037 5.777V7C5.00037 7.553 4.55237 8 4.00037 8C3.44737 8 3.00037 7.553 3.00037 7V5.777C3.00037 4.246 4.16637 3 5.59937 3ZM3.00927 15.17C2.93327 14.623 3.31627 14.118 3.86327 14.043C5.28327 13.849 6.66927 14.314 7.67727 15.321C9.01427 16.66 9.37727 18.71 8.57827 20.423C8.40827 20.786 8.04827 21 7.67127 21C7.52927 21 7.38527 20.97 7.24927 20.906C6.74927 20.673 6.53227 20.078 6.76527 19.577C7.21027 18.624 7.00927 17.481 6.26327 16.736C5.70127 16.175 4.92727 15.918 4.13627 16.023C3.58327 16.102 3.08427 15.717 3.00927 15.17ZM3.86227 10.0771C3.31527 10.1531 2.93327 10.6581 3.00927 11.2051C3.08527 11.7511 3.58827 12.1341 4.13727 12.0571C6.02827 11.7991 7.88527 12.4171 9.23427 13.7651C10.7903 15.3221 11.3753 17.6041 10.7593 19.7211C10.6053 20.2511 10.9103 20.8061 11.4403 20.9601C11.5343 20.9871 11.6283 21.0001 11.7193 21.0001C12.1533 21.0001 12.5523 20.7171 12.6793 20.2791C13.4993 17.4631 12.7203 14.4251 10.6483 12.3511C8.85327 10.5561 6.38427 9.7261 3.86227 10.0771ZM2.99997 19C2.99997 18.447 3.44697 18 3.99997 18C4.55297 18 4.99997 18.447 4.99997 19C4.99997 19.553 4.55297 20 3.99997 20C3.44697 20 2.99997 19.553 2.99997 19Z",
    fill: fill
  }));
};
IconCast.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1z = ["size", "fill"];
var IconCloudDownload$1 = function IconCloudDownload(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1z);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.9998 2.99988C14.5808 2.99988 16.8548 4.66088 17.6748 7.04488C20.1138 7.37588 21.9998 9.47188 21.9998 11.9999C21.9998 13.2209 21.5558 14.3959 20.7498 15.3089C20.5518 15.5319 20.2768 15.6469 19.9998 15.6469C19.7648 15.6469 19.5288 15.5649 19.3378 15.3969C18.9248 15.0299 18.8848 14.3989 19.2508 13.9839C19.7338 13.4379 19.9998 12.7319 19.9998 11.9999C19.9998 10.3459 18.6538 8.99988 16.9998 8.99988H16.8998C16.4238 8.99988 16.0138 8.66388 15.9198 8.19688C15.5458 6.34488 13.8978 4.99988 11.9998 4.99988C10.1028 4.99988 8.4538 6.34488 8.0808 8.19688C7.9868 8.66388 7.5758 8.99988 7.0998 8.99988H6.9998C5.3458 8.99988 3.9998 10.3459 3.9998 11.9999C3.9998 12.7319 4.2658 13.4379 4.7498 13.9839C5.1148 14.3989 5.0758 15.0299 4.6618 15.3969C4.2468 15.7629 3.6158 15.7219 3.2508 15.3089C2.4438 14.3959 1.9998 13.2209 1.9998 11.9999C1.9998 9.47188 3.8858 7.37588 6.3248 7.04488C7.1458 4.66088 9.4198 2.99988 11.9998 2.99988ZM13.0002 17.6438L14.3052 16.3838C14.7032 16.0008 15.3362 16.0118 15.7192 16.4088C16.1032 16.8068 16.0922 17.4398 15.6952 17.8228L12.6952 20.7198C12.5002 20.9058 12.2502 20.9998 12.0002 20.9998C11.7442 20.9998 11.4882 20.9028 11.2932 20.7068L8.2932 17.7068C7.9022 17.3168 7.9022 16.6838 8.2932 16.2928C8.6832 15.9028 9.3162 15.9028 9.7072 16.2928L11.0002 17.5858V11.9998C11.0002 11.4468 11.4482 10.9998 12.0002 10.9998C12.5522 10.9998 13.0002 11.4468 13.0002 11.9998V17.6438Z",
    fill: fill
  }));
};
IconCloudDownload$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1A = ["size", "fill"];
var IconCloudUpload$1 = function IconCloudUpload(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1A);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.9998 2.99988C14.5808 2.99988 16.8548 4.66088 17.6748 7.04488C20.1138 7.37588 21.9998 9.47188 21.9998 11.9999C21.9998 13.2209 21.5558 14.3959 20.7498 15.3089C20.5518 15.5319 20.2768 15.6469 19.9998 15.6469C19.7648 15.6469 19.5288 15.5649 19.3378 15.3969C18.9248 15.0299 18.8848 14.3989 19.2508 13.9839C19.7338 13.4379 19.9998 12.7319 19.9998 11.9999C19.9998 10.3459 18.6538 8.99988 16.9998 8.99988H16.8998C16.4238 8.99988 16.0138 8.66388 15.9198 8.19688C15.5458 6.34488 13.8978 4.99988 11.9998 4.99988C10.1028 4.99988 8.4538 6.34488 8.0808 8.19688C7.9868 8.66388 7.5758 8.99988 7.0998 8.99988H6.9998C5.3458 8.99988 3.9998 10.3459 3.9998 11.9999C3.9998 12.7319 4.2658 13.4379 4.7498 13.9839C5.1148 14.3989 5.0758 15.0299 4.6618 15.3969C4.2478 15.7629 3.6158 15.7219 3.2508 15.3089C2.4438 14.3959 1.9998 13.2209 1.9998 11.9999C1.9998 9.47188 3.8858 7.37588 6.3248 7.04488C7.1458 4.66088 9.4198 2.99988 11.9998 2.99988ZM11.305 11.28C11.699 10.904 12.322 10.907 12.707 11.293L15.707 14.293C16.098 14.684 16.098 15.316 15.707 15.707C15.512 15.902 15.256 16 15 16C14.744 16 14.488 15.902 14.293 15.707L13 14.414V20C13 20.553 12.552 21 12 21C11.448 21 11 20.553 11 20V14.356L9.695 15.616C9.298 16.001 8.665 15.988 8.281 15.591C7.897 15.193 7.908 14.561 8.305 14.177L11.305 11.28Z",
    fill: fill
  }));
};
IconCloudUpload$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1B = ["size", "fill"];
var IconCodeDownload = function IconCodeDownload(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1B);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.7792 11.3734L16.9512 5.37342C16.6032 4.94342 15.9742 4.87342 15.5452 5.22142C15.1142 5.56742 15.0472 6.19642 15.3922 6.62742L19.7082 11.9894L15.2312 17.3594C14.8782 17.7844 14.9352 18.4154 15.3592 18.7694C15.5472 18.9244 15.7732 19.0004 15.9992 19.0004C16.2862 19.0004 16.5702 18.8784 16.7682 18.6414L21.7682 12.6414C22.0732 12.2744 22.0782 11.7444 21.7792 11.3734ZM4.29191 12.0111L8.76891 6.64112C9.12191 6.21612 9.06391 5.58512 8.64091 5.23212C8.21491 4.87912 7.58591 4.93612 7.23091 5.36012L2.23091 11.3601C1.92691 11.7261 1.92191 12.2561 2.22091 12.6271L7.04891 18.6271C7.24691 18.8721 7.53591 19.0001 7.82891 19.0001C8.04891 19.0001 8.27091 18.9281 8.45491 18.7801C8.88591 18.4331 8.95291 17.8041 8.60691 17.3731L4.29191 12.0111ZM14.3056 11.3846C14.7016 11.0006 15.3366 11.0136 15.7196 11.4096C16.1026 11.8066 16.0916 12.4396 15.6946 12.8236L12.6946 15.7206C12.5006 15.9066 12.2496 16.0006 11.9996 16.0006C11.7436 16.0006 11.4886 15.9026 11.2926 15.7076L8.29261 12.7076C7.90261 12.3166 7.90261 11.6836 8.29261 11.2936C8.68361 10.9026 9.31661 10.9026 9.70661 11.2936L10.9996 12.5856V8.00062C10.9996 7.44762 11.4476 7.00062 11.9996 7.00062C12.5526 7.00062 12.9996 7.44762 12.9996 8.00062V12.6446L14.3056 11.3846Z",
    fill: fill
  }));
};
IconCodeDownload.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1C = ["size", "fill"];
var IconCode = function IconCode(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1C);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.9513 5.37318L21.7793 11.3732C22.0783 11.7442 22.0733 12.2742 21.7683 12.6412L16.7683 18.6412C16.5703 18.8782 16.2863 19.0002 15.9993 19.0002C15.7733 19.0002 15.5473 18.9242 15.3593 18.7692C14.9353 18.4152 14.8783 17.7842 15.2313 17.3592L19.7083 11.9892L15.3923 6.62718C15.0473 6.19618 15.1143 5.56718 15.5453 5.22118C15.9753 4.87318 16.6043 4.94318 16.9513 5.37318ZM7.23164 5.35958C7.58464 4.93558 8.21364 4.87858 8.64064 5.23158C9.06464 5.58558 9.12164 6.21558 8.76864 6.64058L4.29164 12.0106L8.60764 17.3736C8.95264 17.8036 8.88564 18.4326 8.45464 18.7796C8.27064 18.9276 8.04864 19.0006 7.82864 19.0006C7.53664 19.0006 7.24664 18.8726 7.04864 18.6276L2.22064 12.6276C1.92164 12.2556 1.92664 11.7256 2.23164 11.3596L7.23164 5.35958Z",
    fill: fill
  }));
};
IconCode.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1D = ["size", "fill"];
var IconCopy$1 = function IconCopy(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1D);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 13V12C9 10.346 10.346 9 12 9H13V5.667C13 5.299 12.701 5 12.333 5H5.667C5.299 5 5 5.299 5 5.667V12.333C5 12.701 5.299 13 5.667 13H9ZM9 15H5.667C4.196 15 3 13.804 3 12.333V5.667C3 4.196 4.196 3 5.667 3H12.333C13.804 3 15 4.196 15 5.667V9H18C19.654 9 21 10.346 21 12V18C21 19.654 19.654 21 18 21H12C10.346 21 9 19.654 9 18V15ZM11 12C11 11.449 11.449 11 12 11H18C18.552 11 19 11.449 19 12V18C19 18.551 18.552 19 18 19H12C11.449 19 11 18.551 11 18V12Z",
    fill: fill
  }));
};
IconCopy$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1E = ["size", "fill"];
var IconCube$1 = function IconCube(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1E);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.69 16.9628L13 19.6068V12.8908L19 10.1038V16.5388C19 16.7128 18.882 16.8748 18.69 16.9628ZM5.30304 16.9638C5.11404 16.8758 4.99804 16.7138 5.00004 16.5318V10.1038L11 12.8908V19.6088L5.30304 16.9638ZM11.707 6.06379C11.798 6.02079 11.899 5.99979 12 5.99979C12.1 5.99979 12.201 6.02079 12.292 6.06379L17.621 8.53779L12 11.1498L6.37804 8.53779L11.707 6.06379ZM20.656 8.25879C20.653 8.25079 20.654 8.24179 20.65 8.23379C20.647 8.22579 20.639 8.22079 20.634 8.21279C20.588 8.13679 20.532 8.06979 20.479 7.99979C20.448 7.96579 20.423 7.92779 20.389 7.89879C20.154 7.62279 19.877 7.37979 19.533 7.22079L13.133 4.24779C13.132 4.24779 13.131 4.24779 13.131 4.24679C12.412 3.91479 11.587 3.91579 10.866 4.24779L4.46904 7.21979C4.12504 7.37879 3.84704 7.62079 3.61204 7.89679C3.57504 7.92779 3.54804 7.96979 3.51504 8.00679C3.46304 8.07379 3.41004 8.13879 3.36604 8.21079C3.36104 8.21979 3.35304 8.22579 3.34904 8.23379C3.34504 8.24279 3.34604 8.25179 3.34204 8.26079C3.13104 8.62279 3.00004 9.02979 3.00004 9.45779V16.5248C2.99204 17.4748 3.56404 18.3588 4.45804 18.7768L10.857 21.7488C11.219 21.9178 11.607 22.0018 11.996 22.0018C12.384 22.0018 12.772 21.9178 13.133 21.7498L19.53 18.7778C20.422 18.3658 20.999 17.4878 21 16.5398V9.45679C20.999 9.02879 20.868 8.62179 20.656 8.25879Z",
    fill: fill
  }));
};
IconCube$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1F = ["size", "fill"];
var IconDownload = function IconDownload(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1F);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.0028 12.5759C11.001 12.5508 11 12.5255 11 12.5V4.5C11 3.948 11.447 3.5 12 3.5C12.553 3.5 13 3.948 13 4.5V12.4998L15.4 10.7C15.842 10.367 16.469 10.458 16.8 10.9C17.132 11.342 17.042 11.969 16.6 12.3L12.6 15.3C12.423 15.433 12.211 15.5 12 15.5C11.799 15.5 11.598 15.439 11.425 15.318L7.425 12.504C6.973 12.186 6.864 11.562 7.182 11.111C7.5 10.659 8.123 10.55 8.575 10.868L11.0028 12.5759ZM6 17.5V18.5H18V17.5C18 16.95 18.45 16.5 19 16.5C19.55 16.5 20 16.95 20 17.5V19.5C20 20.05 19.55 20.5 19 20.5H5C4.45 20.5 4 20.05 4 19.5V17.5C4 16.95 4.45 16.5 5 16.5C5.55 16.5 6 16.95 6 17.5Z",
    fill: fill
  }));
};
IconDownload.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1G = ["size", "fill"];
var IconExternalLink = function IconExternalLink(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1G);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 18V12C19 11.448 19.447 11 20 11C20.553 11 21 11.448 21 12V18C21 19.654 19.654 21 18 21H6C4.346 21 3 19.654 3 18V6C3 4.346 4.346 3 6 3H12C12.553 3 13 3.448 13 4C13 4.552 12.553 5 12 5H6C5.448 5 5 5.449 5 6V18C5 18.551 5.448 19 6 19H18C18.552 19 19 18.551 19 18ZM17.5781 5.008L15.9951 5C15.4421 4.997 14.9971 4.547 15.0001 3.995C15.0031 3.444 15.4501 3 16.0001 3H16.0051L20.0021 3.02C20.5521 3.023 20.9971 3.469 20.9971 4.019L21.0001 7.999C21.0001 8.552 20.5531 9 20.0011 9H20.0001C19.4481 9 19.0001 8.553 19.0001 8.001L18.9991 6.415L12.7071 12.707C12.5121 12.902 12.2561 13 12.0001 13C11.7441 13 11.4881 12.902 11.2931 12.707C10.9021 12.316 10.9021 11.684 11.2931 11.293L17.5781 5.008Z",
    fill: fill
  }));
};
IconExternalLink.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1H = ["size", "fill"];
var IconFilter$1 = function IconFilter(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1H);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.8772 16.457L12.9032 17.99V13.437C12.9032 13.271 12.9452 13.108 13.0232 12.962L17.3232 5H6.64318L10.7652 12.978C10.8392 13.12 10.8772 13.278 10.8772 13.437V16.457ZM13.9032 21C13.6902 21 13.4772 20.932 13.3002 20.797L9.27418 17.752C9.02418 17.563 8.87718 17.268 8.87718 16.955V13.681L4.11218 4.459C3.95118 4.149 3.96418 3.778 4.14618 3.48C4.32718 3.182 4.65118 3 5.00018 3H19.0002C19.3522 3 19.6782 3.185 19.8592 3.488C20.0392 3.79 20.0472 4.165 19.8802 4.475L14.9032 13.69V20C14.9032 20.379 14.6892 20.726 14.3492 20.895C14.2082 20.965 14.0552 21 13.9032 21Z",
    fill: fill
  }));
};
IconFilter$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1I = ["size", "fill"];
var IconHash = function IconHash(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1I);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.698 13.9999L10.427 9.99994H14.302L13.573 13.9999H9.698ZM20 13.9999H15.698L16.427 9.99994H20C20.55 9.99994 21 9.54994 21 8.99994C21 8.44994 20.55 7.99994 20 7.99994H16.79L17.484 4.18894C17.584 3.64094 17.202 3.11194 16.635 3.01594C16.068 2.91894 15.523 3.28894 15.423 3.83794L14.665 7.99994H10.79L11.484 4.18894C11.584 3.64094 11.202 3.11194 10.635 3.01594C10.068 2.91894 9.523 3.28894 9.423 3.83794L8.665 7.99994H4C3.45 7.99994 3 8.44994 3 8.99994C3 9.54994 3.45 9.99994 4 9.99994H8.302L7.573 13.9999H4C3.45 13.9999 3 14.4499 3 14.9999C3 15.5499 3.45 15.9999 4 15.9999H7.209L6.515 19.8109C6.416 20.3589 6.798 20.8879 7.365 20.9839C7.931 21.0809 8.477 20.7109 8.576 20.1619L9.334 15.9999H13.209L12.515 19.8109C12.416 20.3589 12.798 20.8879 13.365 20.9839C13.931 21.0809 14.477 20.7109 14.576 20.1619L15.334 15.9999H20C20.55 15.9999 21 15.5499 21 14.9999C21 14.4499 20.55 13.9999 20 13.9999Z",
    fill: fill
  }));
};
IconHash.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1J = ["size", "fill"];
var IconMerge = function IconMerge(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1J);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4ZM7.04652 9.86171C8.74809 9.4017 10 7.84705 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 7.86384 3.27477 9.42994 5 9.87398V21C5 21.5523 5.44772 22 6 22C6.55228 22 7 21.5523 7 21V15.0001C7.28228 15.3764 7.59237 15.7345 7.92893 16.0711C9.59483 17.737 11.788 18.7544 14.1162 18.9609C14.5465 20.7059 16.1221 22 18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C16.153 14 14.5983 15.2519 14.1383 16.9535C12.3334 16.758 10.6389 15.9526 9.34315 14.6569C8.04737 13.3611 7.24201 11.6666 7.04652 9.86171ZM16 18C16 19.1046 16.8954 20 18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18Z",
    fill: fill
  }));
};
IconMerge.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1K = ["size", "fill"];
var IconSave$1 = function IconSave(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1K);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 18C19 18.551 18.552 19 18 19H16V16C16 15.448 15.553 15 15 15H9C8.447 15 8 15.448 8 16V19H6C5.448 19 5 18.551 5 18V6C5 5.449 5.448 5 6 5H8V10C8 10.552 8.447 11 9 11H13C13.553 11 14 10.552 14 10C14 9.448 13.553 9 13 9H10V5H13.172C13.435 5 13.692 5.107 13.879 5.293L18.707 10.121C18.896 10.31 19 10.562 19 10.829V18ZM10 19H14V17H10V19ZM20.121 8.707L15.293 3.879C14.727 3.312 13.973 3 13.172 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H9H15H18C19.654 21 21 19.654 21 18V10.829C21 10.027 20.687 9.273 20.121 8.707Z",
    fill: fill
  }));
};
IconSave$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1L = ["size", "fill"];
var IconSetting2$1 = function IconSetting2(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1L);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.375 20H12.626V19.233C12.626 18.298 13.201 17.458 14.09 17.091C15.01 16.708 16.015 16.896 16.677 17.562L17.216 18.103L18.104 17.215L17.559 16.671C16.896 16.009 16.709 15.005 17.082 14.114C17.082 14.114 17.083 14.113 17.083 14.112L17.094 14.084C17.458 13.201 18.299 12.625 19.234 12.625H20V11.375H19.234C18.299 11.375 17.458 10.8 17.092 9.911C16.707 8.991 16.896 7.986 17.562 7.323L18.103 6.784L17.216 5.897L16.671 6.442C16.009 7.104 15.006 7.291 14.115 6.919C13.202 6.542 12.626 5.702 12.626 4.767V4H11.375V4.767C11.375 5.702 10.8 6.542 9.911 6.909C8.992 7.294 7.987 7.105 7.324 6.438L6.785 5.897L5.897 6.785L6.442 7.329C7.104 7.991 7.292 8.995 6.919 9.886C6.543 10.799 5.702 11.375 4.767 11.375H4V12.625H4.767C5.702 12.625 6.543 13.2 6.909 14.089C7.294 15.009 7.105 16.014 6.439 16.677L5.898 17.216L6.785 18.103L7.33 17.558C7.992 16.896 8.995 16.709 9.886 17.081C10.799 17.458 11.375 18.298 11.375 19.233V20ZM12.943 22H11.051C10.127 22 9.375 21.248 9.375 20.324V19.233C9.375 19.086 9.258 18.985 9.148 18.94C9.004 18.881 8.85 18.869 8.744 18.972L7.974 19.743C7.318 20.397 6.252 20.399 5.597 19.743L4.257 18.403C3.939 18.085 3.765 17.663 3.765 17.213C3.766 16.764 3.941 16.342 4.26 16.024L5.028 15.259C5.133 15.154 5.122 15 5.075 14.889C5.015 14.742 4.915 14.625 4.767 14.625H3.683C2.755 14.625 2 13.871 2 12.943V11.051C2 10.126 2.752 9.375 3.677 9.375H4.767C4.914 9.375 5.015 9.257 5.06 9.147C5.12 9.003 5.132 8.848 5.028 8.744L4.257 7.974C3.603 7.317 3.603 6.251 4.257 5.597L5.597 4.257C5.915 3.939 6.336 3.765 6.785 3.765H6.787C7.236 3.765 7.659 3.94 7.976 4.259L8.741 5.028C8.846 5.134 9.001 5.122 9.112 5.075C9.258 5.014 9.375 4.914 9.375 4.767V3.683C9.375 2.755 10.13 2 11.058 2H12.95C13.874 2 14.626 2.752 14.626 3.676V4.767C14.626 4.914 14.743 5.015 14.853 5.06C14.998 5.12 15.152 5.133 15.257 5.028L16.027 4.257C16.683 3.603 17.749 3.601 18.404 4.257L19.745 5.598C20.063 5.915 20.237 6.337 20.236 6.787C20.236 7.235 20.061 7.658 19.742 7.975L18.973 8.741C18.868 8.846 18.879 9 18.926 9.111C18.986 9.258 19.086 9.375 19.234 9.375H20.318C21.246 9.375 22 10.129 22 11.057V12.949C22 13.874 21.249 14.625 20.324 14.625H19.234C19.087 14.625 18.986 14.743 18.941 14.853C18.94 14.854 18.928 14.884 18.927 14.886C18.881 14.997 18.869 15.152 18.973 15.256L19.744 16.026C20.398 16.683 20.398 17.749 19.744 18.403L18.404 19.743C18.086 20.061 17.665 20.235 17.216 20.235H17.214C16.765 20.235 16.342 20.06 16.025 19.741L15.26 18.972C15.155 18.867 14.999 18.879 14.889 18.925C14.743 18.986 14.626 19.086 14.626 19.233V20.317C14.626 21.245 13.871 22 12.943 22ZM12.0005 10.5C11.1735 10.5 10.5005 11.173 10.5005 12C10.5005 12.827 11.1735 13.5 12.0005 13.5C12.8275 13.5 13.5005 12.827 13.5005 12C13.5005 11.173 12.8275 10.5 12.0005 10.5ZM12.0005 15.5C10.0705 15.5 8.5005 13.93 8.5005 12C8.5005 10.07 10.0705 8.5 12.0005 8.5C13.9305 8.5 15.5005 10.07 15.5005 12C15.5005 13.93 13.9305 15.5 12.0005 15.5Z",
    fill: fill
  }));
};
IconSetting2$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1M = ["size", "fill"];
var IconSetting$1 = function IconSetting(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1M);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.40394 11.622C5.51994 12.005 6.40894 12.939 6.78094 14.123L6.82094 14.243C7.24694 15.499 7.07394 16.851 6.35994 17.865C6.22994 18.049 6.25894 18.269 6.39594 18.373L8.46794 19.947C8.54094 20.002 8.61194 20.002 8.65594 19.997C8.70594 19.989 8.77894 19.962 8.83794 19.878L9.06894 19.55C9.75794 18.573 10.8679 17.97 12.0399 17.936C13.3559 17.909 14.5379 18.512 15.2739 19.575L15.3919 19.746C15.4509 19.83 15.5229 19.858 15.5739 19.866C15.6179 19.875 15.6899 19.872 15.7619 19.816L17.8229 18.261C17.9669 18.153 17.9989 17.922 17.8919 17.767L17.6319 17.392C16.9619 16.424 16.7629 15.168 17.0999 14.033C17.4659 12.797 18.3969 11.819 19.5919 11.419L19.7929 11.351C19.9539 11.298 20.0409 11.098 19.9839 10.914L19.1969 8.393C19.1599 8.275 19.0839 8.222 19.0419 8.2C18.9819 8.169 18.9169 8.164 18.8549 8.185L18.5149 8.298C17.3519 8.685 16.0689 8.475 15.0839 7.734L14.9759 7.653C14.0399 6.949 13.4829 5.814 13.4869 4.618L13.4889 4.338C13.4889 4.205 13.4259 4.122 13.3879 4.084C13.3519 4.047 13.2909 4.003 13.2049 4.003L10.6579 4C10.5019 4 10.3749 4.149 10.3739 4.333L10.3729 4.575C10.3679 5.79 9.79894 6.946 8.85094 7.669L8.72194 7.767C7.67894 8.56 6.31894 8.784 5.08694 8.364C5.03994 8.348 4.99594 8.351 4.95394 8.373C4.92194 8.389 4.86394 8.43 4.83594 8.521L4.01894 11.117C3.95994 11.306 4.05694 11.503 4.23994 11.566L4.40394 11.622ZM8.61494 22C8.12894 22 7.65694 21.842 7.25894 21.539L5.18694 19.966C4.19694 19.216 3.97794 17.773 4.69794 16.75C5.07194 16.22 5.14894 15.539 4.92894 14.893L4.87394 14.725C4.69094 14.143 4.27294 13.691 3.75594 13.514H3.75494L3.59194 13.457C2.37394 13.04 1.72394 11.749 2.11094 10.517L2.92694 7.922C3.11194 7.335 3.51094 6.861 4.05094 6.588C4.57894 6.322 5.17594 6.281 5.73394 6.472C6.33294 6.676 6.99794 6.565 7.51094 6.175L7.63994 6.077C8.09594 5.729 8.37094 5.164 8.37294 4.567L8.37394 4.326C8.37894 3.042 9.40394 2 10.6569 2H10.6609L13.2079 2.003C13.8099 2.004 14.3779 2.242 14.8059 2.673C15.2489 3.118 15.4909 3.713 15.4889 4.348L15.4869 4.627C15.4849 5.193 15.7439 5.728 16.1809 6.056L16.2879 6.137C16.7469 6.482 17.3449 6.581 17.8819 6.401L18.2209 6.288C18.7979 6.096 19.4119 6.143 19.9529 6.42C20.5079 6.704 20.9179 7.193 21.1059 7.798L21.8929 10.319C22.2729 11.537 21.6149 12.851 20.4279 13.248L20.2269 13.315C19.6509 13.509 19.1979 13.989 19.0169 14.601C18.8509 15.162 18.9469 15.779 19.2759 16.253L19.5359 16.628C20.2499 17.66 20.0219 19.108 19.0279 19.857L16.9669 21.413C16.4719 21.787 15.8649 21.938 15.2559 21.841C14.6419 21.742 14.1059 21.402 13.7469 20.884L13.6289 20.712C13.2789 20.208 12.7189 19.902 12.1319 19.935C11.5439 19.951 11.0359 20.23 10.7039 20.702L10.4729 21.03C10.1109 21.543 9.57394 21.878 8.96294 21.974C8.84594 21.992 8.72994 22 8.61494 22ZM12.0011 10.4999C11.1741 10.4999 10.5011 11.1729 10.5011 11.9999C10.5011 12.8269 11.1741 13.4999 12.0011 13.4999C12.8281 13.4999 13.5011 12.8269 13.5011 11.9999C13.5011 11.1729 12.8281 10.4999 12.0011 10.4999ZM12.0011 15.4999C10.0711 15.4999 8.50114 13.9299 8.50114 11.9999C8.50114 10.0699 10.0711 8.4999 12.0011 8.4999C13.9311 8.4999 15.5011 10.0699 15.5011 11.9999C15.5011 13.9299 13.9311 15.4999 12.0011 15.4999Z",
    fill: fill
  }));
};
IconSetting$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1N = ["size", "fill"];
var IconSignOut = function IconSignOut(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1N);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.49988 5C7.49988 5.55 7.04988 6 6.49988 6H5.49988V18H6.49988C7.04988 18 7.49988 18.45 7.49988 19C7.49988 19.55 7.04988 20 6.49988 20H4.49988C3.94988 20 3.49988 19.55 3.49988 19V5C3.49988 4.45 3.94988 4 4.49988 4H6.49988C7.04988 4 7.49988 4.45 7.49988 5ZM17.5038 7.4248L20.3178 11.4248C20.5678 11.7788 20.5598 12.2538 20.2998 12.5998L17.2998 16.5998C17.1038 16.8618 16.8028 16.9998 16.4988 16.9998C16.2908 16.9998 16.0798 16.9348 15.8998 16.7998C15.4578 16.4688 15.3688 15.8418 15.6998 15.4008L17.5008 12.9998H17.4998H9.49978C8.94778 12.9998 8.49978 12.5528 8.49978 11.9998C8.49978 11.4468 8.94778 10.9998 9.49978 10.9998H17.4998C17.5163 10.9998 17.5316 11.0044 17.5471 11.0089C17.5596 11.0127 17.5723 11.0165 17.5858 11.0178L15.8678 8.5748C15.5498 8.1238 15.6588 7.4998 16.1108 7.1818C16.5618 6.8628 17.1858 6.9728 17.5038 7.4248Z",
    fill: fill
  }));
};
IconSignOut.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1O = ["size", "fill"];
var IconSignin = function IconSignin(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1O);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.5001 4H19.5001C20.0501 4 20.5001 4.45 20.5001 5V19C20.5001 19.55 20.0501 20 19.5001 20H17.5001C16.9501 20 16.5001 19.55 16.5001 19C16.5001 18.45 16.9501 18 17.5001 18H18.5001V6H17.5001C16.9501 6 16.5001 5.55 16.5001 5C16.5001 4.45 16.9501 4 17.5001 4ZM10.8999 7.2004C11.3439 6.8694 11.9689 6.9594 12.2999 7.4004L15.2999 11.4004C15.5599 11.7464 15.5679 12.2204 15.3179 12.5754L12.5039 16.5754C12.3089 16.8524 11.9999 17.0004 11.6849 17.0004C11.4869 17.0004 11.2859 16.9414 11.1109 16.8184C10.6589 16.5004 10.5499 15.8764 10.8679 15.4244L12.5859 12.9824C12.5724 12.9837 12.5598 12.9875 12.5472 12.9913C12.5318 12.9958 12.5164 13.0004 12.4999 13.0004H4.49991C3.94791 13.0004 3.49991 12.5524 3.49991 12.0004C3.49991 11.4474 3.94791 11.0004 4.49991 11.0004H12.4999H12.5009L10.6999 8.5994C10.3689 8.1584 10.4579 7.5314 10.8999 7.2004Z",
    fill: fill
  }));
};
IconSignin.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1P = ["size", "fill"];
var IconUpload = function IconUpload(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1P);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 3.5H19C19.55 3.5 20 3.95 20 4.5V6.5C20 7.05 19.55 7.5 19 7.5C18.45 7.5 18 7.05 18 6.5V5.5H6V6.5C6 7.05 5.55 7.5 5 7.5C4.45 7.5 4 7.05 4 6.5V4.5C4 3.95 4.45 3.5 5 3.5ZM8.001 13.5C7.696 13.5 7.397 13.362 7.2 13.1C6.868 12.658 6.958 12.031 7.4 11.7L11.4 8.7C11.746 8.44 12.222 8.433 12.575 8.682L16.575 11.496C17.027 11.814 17.136 12.438 16.818 12.889C16.5 13.34 15.877 13.45 15.425 13.132L12.9972 11.4241C12.999 11.4492 13 11.4745 13 11.5V19.5C13 20.052 12.553 20.5 12 20.5C11.447 20.5 11 20.052 11 19.5V11.5002L8.6 13.3C8.42 13.435 8.21 13.5 8.001 13.5Z",
    fill: fill
  }));
};
IconUpload.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1Q = ["size", "fill"];
var IconWindowDock = function IconWindowDock(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1Q);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    d: "M5.25 16.5C4.83579 16.5 4.5 16.8358 4.5 17.25V18.75C4.5 19.1642 4.83579 19.5 5.25 19.5H6.75C7.16421 19.5 7.5 19.1642 7.5 18.75V17.25C7.5 16.8358 7.16421 16.5 6.75 16.5H5.25Z",
    fill: fill
  }), createElement("path", {
    d: "M10.5 17.25C10.5 16.8358 10.8358 16.5 11.25 16.5H12.75C13.1642 16.5 13.5 16.8358 13.5 17.25V18.75C13.5 19.1642 13.1642 19.5 12.75 19.5H11.25C10.8358 19.5 10.5 19.1642 10.5 18.75V17.25Z",
    fill: fill
  }), createElement("path", {
    d: "M17.25 16.5C16.8358 16.5 16.5 16.8358 16.5 17.25V18.75C16.5 19.1642 16.8358 19.5 17.25 19.5H18.75C19.1642 19.5 19.5 19.1642 19.5 18.75V17.25C19.5 16.8358 19.1642 16.5 18.75 16.5H17.25Z",
    fill: fill
  }), createElement("path", {
    d: "M21 1.5C22.6569 1.5 24 2.84315 24 4.5V19.5C24 21.1569 22.6569 22.5 21 22.5H3C1.34315 22.5 0 21.1569 0 19.5V4.5C0 2.84315 1.34315 1.5 3 1.5H21ZM3 21H21C21.8284 21 22.5 20.3284 22.5 19.5V7.5H1.5V19.5C1.5 20.3284 2.17157 21 3 21ZM3 3C2.17157 3 1.5 3.67157 1.5 4.5V6H22.5V4.5C22.5 3.67157 21.8284 3 21 3H3Z",
    fill: fill
  }));
};
IconWindowDock.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1R = ["size", "fill"];
var IconWindow$1 = function IconWindow(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1R);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 7C7 6.447 7.448 6 8 6C8.552 6 9 6.447 9 7C9 7.553 8.552 8 8 8C7.448 8 7 7.553 7 7ZM11 7C11 6.447 11.448 6 12 6C12.552 6 13 6.447 13 7C13 7.553 12.552 8 12 8C11.448 8 11 7.553 11 7ZM5 9V6C5 5.448 5.449 5 6 5H18C18.551 5 19 5.448 19 6V9H5ZM19 18C19 18.552 18.551 19 18 19H6C5.449 19 5 18.552 5 18V11H19V18ZM18 3H6C4.346 3 3 4.346 3 6V9V11V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V11V9V6C21 4.346 19.654 3 18 3Z",
    fill: fill
  }));
};
IconWindow$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1S = ["size", "fill"];
var IconBackward = function IconBackward(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1S);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.95 7.20121C19.216 6.85621 18.349 6.95821 17.741 7.46121L13 11.3772V8.78721C13 8.11421 12.597 7.50721 11.95 7.20121C11.216 6.85621 10.349 6.95821 9.741 7.46121L4.641 11.6742C4.234 12.0102 4 12.4942 4 13.0002C4 13.5062 4.234 13.9902 4.641 14.3262L9.741 18.5402C10.109 18.8442 10.573 19.0012 11.044 19.0012C11.351 19.0012 11.661 18.9342 11.95 18.7992C12.597 18.4932 13 17.8862 13 17.2132V14.6222L17.741 18.5402C18.109 18.8442 18.573 19.0012 19.044 19.0012C19.351 19.0012 19.661 18.9342 19.95 18.7992C20.597 18.4932 21 17.8862 21 17.2132V8.78721C21 8.11421 20.597 7.50721 19.95 7.20121Z",
    fill: fill
  }));
};
IconBackward.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1T = ["size", "fill"];
var IconBackwardStep = function IconBackwardStep(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1T);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.95 7.20121C16.216 6.85621 15.348 6.95821 14.741 7.46121L9.641 11.6742C9.588 11.7182 9.547 11.7692 9.5 11.8182V8.00021C9.5 7.44721 9.052 7.00021 8.5 7.00021C7.948 7.00021 7.5 7.44721 7.5 8.00021V18.0002C7.5 18.5532 7.948 19.0002 8.5 19.0002C9.052 19.0002 9.5 18.5532 9.5 18.0002V14.1812C9.547 14.2302 9.588 14.2822 9.641 14.3262L14.741 18.5402C15.109 18.8442 15.573 19.0012 16.044 19.0012C16.351 19.0012 16.661 18.9342 16.95 18.7992C17.597 18.4932 18 17.8862 18 17.2132V8.78721C18 8.11421 17.597 7.50721 16.95 7.20121Z",
    fill: fill
  }));
};
IconBackwardStep.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1U = ["size", "fill"];
var IconBattery = function IconBattery(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1U);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.16624 6H15.8332C17.0282 6 18.0002 7.089 18.0002 8.429V15.571C18.0002 16.911 17.0282 18 15.8332 18H4.16624C2.97124 18 2.00024 16.911 2.00024 15.571V8.429C2.00024 7.089 2.97124 6 4.16624 6ZM19.9997 10C19.9997 9.448 20.4477 9 20.9997 9C21.5517 9 21.9997 9.448 21.9997 10V14C21.9997 14.552 21.5517 15 20.9997 15C20.4477 15 19.9997 14.552 19.9997 14V10Z",
    fill: fill
  }));
};
IconBattery.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1V = ["size", "fill"];
var IconBatteryBolt = function IconBatteryBolt(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1V);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.2769 13H6.99988C6.64388 13 6.31388 12.81 6.13488 12.502C5.95588 12.194 5.95488 11.813 6.13188 11.504L9.27688 6H4.16688C2.97188 6 1.99988 7.089 1.99988 8.429V15.571C1.99988 16.911 2.97188 18 4.16688 18H8.41988L11.2769 13ZM15.8335 6H11.5805L8.72348 11H13.0005C13.3565 11 13.6865 11.19 13.8645 11.498C14.0435 11.806 14.0445 12.187 13.8685 12.496L10.7235 18H15.8335C17.0285 18 18.0005 16.911 18.0005 15.571V8.429C18.0005 7.089 17.0285 6 15.8335 6ZM20 10C20 9.448 20.448 9 21 9C21.552 9 22 9.448 22 10V14C22 14.552 21.552 15 21 15C20.448 15 20 14.552 20 14V10Z",
    fill: fill
  }));
};
IconBatteryBolt.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1W = ["size", "fill"];
var IconBroadcast = function IconBroadcast(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1W);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.644 16.2341C7.066 16.5911 7.121 17.2221 6.766 17.6441C6.567 17.8791 6.284 18.0001 5.999 18.0001C5.772 18.0001 5.544 17.9231 5.356 17.7661C3.192 15.9441 2 13.5411 2 11.0001C2 8.45915 3.192 6.05615 5.356 4.23415C5.779 3.87915 6.409 3.93415 6.766 4.35615C7.121 4.77815 7.066 5.40915 6.644 5.76615C4.938 7.20015 4 9.05915 4 11.0001C4 12.9411 4.938 14.8001 6.644 16.2341ZM22 11.0001C22 13.5411 20.808 15.9441 18.644 17.7661C18.456 17.9231 18.228 18.0001 18.001 18.0001C17.716 18.0001 17.433 17.8791 17.234 17.6441C16.879 17.2221 16.934 16.5911 17.356 16.2341C19.062 14.8001 20 12.9411 20 11.0001C20 9.05915 19.062 7.20015 17.356 5.76615C16.934 5.40915 16.879 4.77815 17.234 4.35615C17.591 3.93515 18.22 3.88015 18.644 4.23415C20.808 6.05615 22 8.45915 22 11.0001ZM9.144 7.76515C8.084 8.65715 7.5 9.80715 7.5 11.0001C7.5 12.1931 8.084 13.3431 9.144 14.2351C9.566 14.5911 9.621 15.2221 9.265 15.6441C9.067 15.8791 8.784 16.0001 8.499 16.0001C8.272 16.0001 8.044 15.9231 7.856 15.7651C6.337 14.4861 5.5 12.7941 5.5 11.0001C5.5 9.20615 6.337 7.51415 7.856 6.23515C8.28 5.87715 8.91 5.93415 9.265 6.35615C9.621 6.77815 9.566 7.40915 9.144 7.76515ZM16.144 15.7651C17.663 14.4861 18.5 12.7941 18.5 11.0001C18.5 9.20615 17.663 7.51415 16.144 6.23515C15.721 5.87815 15.09 5.93515 14.735 6.35615C14.379 6.77815 14.434 7.40915 14.856 7.76515C15.916 8.65715 16.5 9.80715 16.5 11.0001C16.5 12.1931 15.916 13.3431 14.856 14.2351C14.434 14.5911 14.379 15.2221 14.735 15.6441C14.933 15.8791 15.216 16.0001 15.501 16.0001C15.728 16.0001 15.956 15.9231 16.144 15.7651ZM9 10.9999C9 9.34595 10.346 7.99995 12 7.99995C13.654 7.99995 15 9.34595 15 10.9999C15 12.3139 14.145 13.4219 12.965 13.8259C12.9689 13.847 12.9745 13.8672 12.98 13.8874C12.9901 13.9239 13 13.96 13 13.9999V19.9999C13 20.5529 12.553 20.9999 12 20.9999C11.447 20.9999 11 20.5529 11 19.9999V13.9999C11 13.96 11.0099 13.9239 11.02 13.8874C11.0255 13.8672 11.0311 13.847 11.035 13.8259C9.855 13.4219 9 12.3139 9 10.9999Z",
    fill: fill
  }));
};
IconBroadcast.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1X = ["size", "fill"];
var IconCamera = function IconCamera(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1X);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 12.5C11.173 12.5 10.5 13.173 10.5 14C10.5 14.827 11.173 15.5 12 15.5C12.827 15.5 13.5 14.827 13.5 14C13.5 13.173 12.827 12.5 12 12.5ZM12 17.5C10.07 17.5 8.5 15.93 8.5 14C8.5 12.07 10.07 10.5 12 10.5C13.93 10.5 15.5 12.07 15.5 14C15.5 15.93 13.93 17.5 12 17.5ZM10 5.5C10 5.224 10.225 5 10.5 5H13.5C13.775 5 14 5.224 14 5.5V7H10V5.5ZM19 7H16V5.5C16 4.122 14.879 3 13.5 3H10.5C9.121 3 8 4.122 8 5.5V7H5C3.346 7 2 8.346 2 10V18C2 19.654 3.346 21 5 21H19C20.654 21 22 19.654 22 18V10C22 8.346 20.654 7 19 7Z",
    fill: fill
  }));
};
IconCamera.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1Y = ["size", "fill"];
var IconEnvelop = function IconEnvelop(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1Y);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 6L12.495 10.468C12.188 10.643 11.812 10.643 11.505 10.468L5 6H19ZM19 4H5C3.346 4 2 5.346 2 7V17C2 18.654 3.346 20 5 20H19C20.654 20 22 18.654 22 17V7C22 5.346 20.654 4 19 4Z",
    fill: fill
  }));
};
IconEnvelop.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1Z = ["size", "fill"];
var IconForward = function IconForward(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1Z);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.358 10.6741L15.259 6.46008C14.65 5.95808 13.782 5.85708 13.049 6.20108C12.402 6.50708 12 7.11408 12 7.78708V10.3781L7.259 6.46008C6.65 5.95808 5.781 5.85708 5.049 6.20108C4.402 6.50708 4 7.11408 4 7.78708V16.2131C4 16.8861 4.402 17.4931 5.049 17.7991C5.338 17.9351 5.649 18.0011 5.955 18.0011C6.426 18.0011 6.89 17.8441 7.259 17.5391L12 13.6231V16.2131C12 16.8861 12.402 17.4931 13.049 17.7991C13.338 17.9351 13.649 18.0011 13.955 18.0011C14.426 18.0011 14.89 17.8441 15.259 17.5391L20.358 13.3261C20.766 12.9901 21 12.5061 21 12.0001C21 11.4941 20.766 11.0101 20.358 10.6741Z",
    fill: fill
  }));
};
IconForward.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1_ = ["size", "fill"];
var IconForwardStep = function IconForwardStep(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1_);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 7.00027C16.448 7.00027 16 7.44727 16 8.00027V11.8183C15.953 11.7703 15.912 11.7183 15.858 11.6743L10.759 7.46027C10.15 6.95827 9.282 6.85627 8.55 7.20127C7.902 7.50727 7.5 8.11427 7.5 8.78727V17.2133C7.5 17.8863 7.902 18.4933 8.55 18.7993C8.839 18.9353 9.149 19.0013 9.456 19.0013C9.927 19.0013 10.391 18.8443 10.759 18.5393L15.859 14.3263C15.912 14.2823 15.953 14.2303 16 14.1823V18.0003C16 18.5533 16.448 19.0003 17 19.0003C17.552 19.0003 18 18.5533 18 18.0003V8.00027C18 7.44727 17.552 7.00027 17 7.00027Z",
    fill: fill
  }));
};
IconForwardStep.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$1$ = ["size", "fill"];
var IconHardDrive = function IconHardDrive(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1$);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.61818 11L8.34218 5.553C8.51218 5.212 8.85518 5 9.23618 5H14.7642C15.1452 5 15.4882 5.212 15.6582 5.553L18.3822 11H5.61818ZM16.0002 17H12.0002C11.4502 17 11.0002 16.55 11.0002 16C11.0002 15.45 11.4502 15 12.0002 15H16.0002C16.5502 15 17.0002 15.45 17.0002 16C17.0002 16.55 16.5502 17 16.0002 17ZM8.00018 17C7.45018 17 7.00018 16.55 7.00018 16C7.00018 15.45 7.45018 15 8.00018 15C8.55018 15 9.00018 15.45 9.00018 16C9.00018 16.55 8.55018 17 8.00018 17ZM20.7892 11.342L17.4472 4.658C16.9352 3.636 15.9082 3 14.7642 3H9.23618C8.09218 3 7.06418 3.636 6.55318 4.658L3.21118 11.342C3.07318 11.618 3.00018 11.928 3.00018 12.236V18C3.00018 19.654 4.34618 21 6.00018 21H18.0002C19.6542 21 21.0002 19.654 21.0002 18V12.236C21.0002 11.928 20.9272 11.618 20.7892 11.342Z",
    fill: fill
  }));
};
IconHardDrive.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$20 = ["size", "fill"];
var IconHeadphone = function IconHeadphone(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$20);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3C6.486 3 2 7.65 2 13.366V18C2 20.206 3.794 22 6 22C8.206 22 10 20.206 10 18C10 15.794 8.206 14 6 14C5.268 14 4.591 14.212 4 14.557V13.366C4 8.753 7.589 5 12 5C16.411 5 20 8.753 20 13.366V14.557C19.409 14.212 18.732 14 18 14C15.794 14 14 15.794 14 18C14 20.206 15.794 22 18 22C20.206 22 22 20.206 22 18V13.366C22 7.65 17.514 3 12 3Z",
    fill: fill
  }));
};
IconHeadphone.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$21 = ["size", "fill"];
var IconInbox = function IconInbox(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$21);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.342 5.553C8.511 5.214 8.858 5 9.237 5H14.764C15.143 5 15.489 5.214 15.658 5.553L18.382 11H16C15.448 11 15 11.448 15 12V14C15 14.553 14.552 15 14 15H10C9.448 15 9 14.553 9 14V12C9 11.448 8.552 11 8 11H5.618L8.342 5.553ZM20.789 11.342L17.447 4.658C16.936 3.636 15.908 3 14.764 3H9.236C8.092 3 7.065 3.636 6.553 4.658L3.211 11.342C3.073 11.618 3 11.928 3 12.237V18C3 19.655 4.346 21 6 21H18C19.655 21 21 19.655 21 18V12.237C21 11.928 20.927 11.618 20.789 11.342Z",
    fill: fill
  }));
};
IconInbox.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$22 = ["size", "fill"];
var IconMessageCircle = function IconMessageCircle(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$22);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.9995 12.9996C15.4475 12.9996 14.9995 12.5516 14.9995 11.9996C14.9995 11.4476 15.4475 10.9996 15.9995 10.9996C16.5515 10.9996 16.9995 11.4476 16.9995 11.9996C16.9995 12.5516 16.5515 12.9996 15.9995 12.9996ZM11.9995 12.9996C11.4475 12.9996 10.9995 12.5516 10.9995 11.9996C10.9995 11.4476 11.4475 10.9996 11.9995 10.9996C12.5515 10.9996 12.9995 11.4476 12.9995 11.9996C12.9995 12.5516 12.5515 12.9996 11.9995 12.9996ZM7.99949 12.9996C7.44749 12.9996 6.99949 12.5516 6.99949 11.9996C6.99949 11.4476 7.44749 10.9996 7.99949 10.9996C8.55149 10.9996 8.99949 11.4476 8.99949 11.9996C8.99949 12.5516 8.55149 12.9996 7.99949 12.9996ZM19.0705 4.9286C16.7865 2.6446 13.6255 1.6256 10.3965 2.1246C6.31949 2.7606 2.93949 6.0446 2.17649 10.1116C1.80949 12.0696 2.02049 14.0636 2.78749 15.8766C2.88549 16.1066 2.91549 16.3226 2.87649 16.5156L2.01949 20.8036C1.95349 21.1316 2.05649 21.4706 2.29249 21.7066C2.48149 21.8956 2.73649 21.9996 2.99949 21.9996C3.06449 21.9996 3.13049 21.9936 3.19549 21.9796L7.47849 21.1236C7.72449 21.0766 7.96349 21.1456 8.12249 21.2116C9.93649 21.9786 11.9305 22.1886 13.8875 21.8226C17.9545 21.0596 21.2385 17.6796 21.8745 13.6026C22.3775 10.3746 21.3555 7.2136 19.0705 4.9286Z",
    fill: fill
  }));
};
IconMessageCircle.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$23 = ["size", "fill"];
var IconMessageSquare = function IconMessageSquare(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$23);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 11.5C15.448 11.5 15 11.052 15 10.5C15 9.948 15.448 9.5 16 9.5C16.552 9.5 17 9.948 17 10.5C17 11.052 16.552 11.5 16 11.5ZM12 11.5C11.448 11.5 11 11.052 11 10.5C11 9.948 11.448 9.5 12 9.5C12.552 9.5 13 9.948 13 10.5C13 11.052 12.552 11.5 12 11.5ZM8 11.5C7.448 11.5 7 11.052 7 10.5C7 9.948 7.448 9.5 8 9.5C8.552 9.5 9 9.948 9 10.5C9 11.052 8.552 11.5 8 11.5ZM19 2.5H5C3.346 2.5 2 3.846 2 5.5V20.5C2 20.86 2.194 21.193 2.507 21.37C2.66 21.457 2.83 21.5 3 21.5C3.178 21.5 3.356 21.453 3.515 21.357L8.039 18.643C8.195 18.549 8.373 18.5 8.554 18.5H19C20.654 18.5 22 17.154 22 15.5V5.5C22 3.846 20.654 2.5 19 2.5Z",
    fill: fill
  }));
};
IconMessageSquare.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$24 = ["size", "fill"];
var IconMic = function IconMic(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$24);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 11C16 13.206 14.206 15 12 15C9.794 15 8 13.206 8 11V6C8 3.794 9.794 2 12 2C14.206 2 16 3.794 16 6V11ZM18 10C18.553 10 19 10.448 19 11C19 14.52 16.387 17.432 13 17.92V20H15.105C15.598 20 16 20.402 16 20.895V21.105C16 21.598 15.598 22 15.105 22H8.895C8.402 22 8 21.598 8 21.105V20.895C8 20.402 8.402 20 8.895 20H11V17.92C7.613 17.432 5 14.52 5 11C5 10.448 5.447 10 6 10C6.553 10 7 10.448 7 11C7 13.757 9.243 16 12 16C14.757 16 17 13.757 17 11C17 10.448 17.447 10 18 10Z",
    fill: fill
  }));
};
IconMic.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$25 = ["size", "fill"];
var IconMicOff = function IconMicOff(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$25);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.5789 12.751C15.8399 12.22 15.9999 11.631 15.9999 11V6C15.9999 3.794 14.2059 2 11.9999 2C10.0519 2 8.42986 3.401 8.07586 5.248L15.5789 12.751ZM18.9998 11C18.9998 10.448 18.5528 10 17.9998 10C17.4468 10 16.9998 10.448 16.9998 11C16.9998 11.909 16.7378 12.75 16.3118 13.484L17.7748 14.947C18.5468 13.823 18.9998 12.464 18.9998 11ZM12.0851 14.9918C12.0572 14.9959 12.0291 15 11.9998 15C9.79376 15 7.99976 13.206 7.99976 11V10.828L12.1558 14.984C12.132 14.9849 12.1086 14.9883 12.0851 14.9918ZM20.7068 19.293L4.70676 3.293C4.31576 2.902 3.68376 2.902 3.29276 3.293C2.90176 3.684 2.90176 4.316 3.29276 4.707L19.2928 20.707C19.4878 20.902 19.7438 21 19.9998 21C20.2558 21 20.5118 20.902 20.7068 20.707C21.0978 20.316 21.0978 19.684 20.7068 19.293ZM12.9998 20H14.9998C15.5498 20 15.9998 20.45 15.9998 21C15.9998 21.55 15.5498 22 14.9998 22H8.99976C8.44976 22 7.99976 21.55 7.99976 21C7.99976 20.45 8.44976 20 8.99976 20H10.9998V17.92C7.61276 17.432 4.99976 14.52 4.99976 11C4.99976 10.448 5.44676 10 5.99976 10C6.55276 10 6.99976 10.448 6.99976 11C6.99976 13.757 9.24276 16 11.9998 16C12.3618 16 12.7138 15.957 13.0548 15.883L14.6478 17.476C14.1268 17.69 13.5728 17.836 12.9998 17.919V20Z",
    fill: fill
  }));
};
IconMicOff.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$26 = ["size", "fill"];
var IconMonitor = function IconMonitor(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$26);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 3H19C20.654 3 22 4.346 22 6V11H2V6C2 4.346 3.346 3 5 3ZM5 17C3.346 17 2 15.654 2 14V13H22V14C22 15.654 20.654 17 19 17H13V19H17C17.55 19 18 19.45 18 20C18 20.55 17.55 21 17 21H7C6.45 21 6 20.55 6 20C6 19.45 6.45 19 7 19H11V17H5Z",
    fill: fill
  }));
};
IconMonitor.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$27 = ["size", "fill"];
var IconMovie = function IconMovie(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$27);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 18.256C19 18.666 18.666 19 18.256 19H17V17H19V18.256ZM5 18.256V17H7V19H5.744C5.334 19 5 18.666 5 18.256ZM5.744 5H7V7H5V5.744C5 5.334 5.334 5 5.744 5ZM19 5.744V7H17V5H18.256C18.666 5 19 5.334 19 5.744ZM17 15H19V13H17V15ZM17 11H19V9H17V11ZM5 15H7V13H5V15ZM5 11H7V9H5V11ZM18.256 3H5.744C4.231 3 3 4.232 3 5.744V18.256C3 19.769 4.231 21 5.744 21H18.256C19.769 21 21 19.769 21 18.256V5.744C21 4.232 19.769 3 18.256 3Z",
    fill: fill
  }));
};
IconMovie.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$28 = ["size", "fill"];
var IconPauseCircle = function IconPauseCircle(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$28);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 15C16 15.55 15.55 16 15 16C14.45 16 14 15.55 14 15V9C14 8.45 14.45 8 15 8C15.55 8 16 8.45 16 9V15ZM10 15C10 15.55 9.55 16 9 16C8.45 16 8 15.55 8 15V9C8 8.45 8.45 8 9 8C9.55 8 10 8.45 10 9V15ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.515 22 22 17.514 22 12C22 6.486 17.515 2 12 2Z",
    fill: fill
  }));
};
IconPauseCircle.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$29 = ["size", "fill"];
var IconPhone = function IconPhone(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$29);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.3999 22C8.90788 22 1.99988 15.092 1.99988 6.6C1.99988 4.063 4.06388 2 6.59988 2C6.85988 2 7.11688 2.022 7.36588 2.065C7.60888 2.104 7.85388 2.166 8.09088 2.248C8.41688 2.361 8.66088 2.634 8.73788 2.97L10.1079 8.934C10.1829 9.262 10.0879 9.606 9.85488 9.85C9.71788 9.992 9.71488 9.995 8.47488 10.644C9.47888 12.818 11.2239 14.557 13.3549 15.527C14.0039 14.286 14.0079 14.282 14.1499 14.146C14.3949 13.912 14.7399 13.821 15.0669 13.893L21.0309 15.262C21.3659 15.339 21.6389 15.583 21.7519 15.908C21.8339 16.144 21.8949 16.388 21.9359 16.639C21.9779 16.886 21.9999 17.142 21.9999 17.4C21.9999 19.937 19.9369 22 17.3999 22Z",
    fill: fill
  }));
};
IconPhone.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2a = ["size", "fill"];
var IconPhoneCall = function IconPhoneCall(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2a);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 4C16.859 4 20 7.141 20 11C20 11.553 20.447 12 21 12C21.553 12 22 11.553 22 11C22 6.037 17.963 2 13 2C12.448 2 12 2.447 12 3C12 3.553 12.448 4 13 4ZM13 8C14.654 8 16 9.346 16 11C16 11.553 16.447 12 17 12C17.553 12 18 11.553 18 11C18 8.243 15.757 6 13 6C12.448 6 12 6.447 12 7C12 7.553 12.448 8 13 8ZM21.03 15.2622C21.366 15.3392 21.639 15.5832 21.751 15.9082C21.833 16.1432 21.896 16.3882 21.936 16.6382C21.978 16.8872 22 17.1412 22 17.4002C22 19.9362 19.937 22.0002 17.4 22.0002C8.909 22.0002 2 15.0922 2 6.5992C2 4.0632 4.064 2.0002 6.6 2.0002C6.86 2.0002 7.117 2.0222 7.366 2.0652C7.609 2.1042 7.854 2.1662 8.091 2.2482C8.417 2.3612 8.661 2.6342 8.738 2.9702L10.107 8.9332C10.183 9.2622 10.088 9.6062 9.855 9.8492C9.718 9.9922 9.715 9.9952 8.475 10.6432C9.479 12.8182 11.224 14.5562 13.355 15.5272C14.005 14.2862 14.008 14.2822 14.15 14.1452C14.394 13.9122 14.737 13.8192 15.066 13.8922L21.03 15.2622Z",
    fill: fill
  }));
};
IconPhoneCall.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2b = ["size", "fill"];
var IconPhoneMissed = function IconPhoneMissed(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2b);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.751 15.909C21.833 16.144 21.896 16.389 21.936 16.639C21.978 16.887 22 17.142 22 17.401C22 19.937 19.937 22 17.401 22C8.909 22 2 15.092 2 6.6C2 4.064 4.064 2 6.6 2C6.861 2 7.117 2.023 7.366 2.066C7.609 2.105 7.855 2.166 8.092 2.249C8.417 2.362 8.662 2.634 8.739 2.97L10.108 8.934C10.183 9.262 10.088 9.607 9.855 9.85C9.71819 9.9928 9.71401 9.99499 8.48012 10.6423L8.475 10.645C9.466 12.807 11.215 14.553 13.355 15.528C14.0041 14.2868 14.008 14.283 14.1504 14.1466L14.151 14.146C14.394 13.912 14.738 13.82 15.067 13.893L21.031 15.262C21.367 15.339 21.639 15.583 21.751 15.909ZM17.2683 8.6985C16.8643 9.1005 16.2053 9.1005 15.8023 8.6985C15.4003 8.2955 15.4003 7.6365 15.8023 7.2325L16.5353 6.5005L15.8023 5.7675C15.4003 5.3645 15.4003 4.7055 15.8023 4.3025C16.2053 3.8995 16.8643 3.8995 17.2683 4.3025L18.0003 5.0355L18.7333 4.3025C19.1363 3.8995 19.7953 3.8995 20.1983 4.3025C20.6013 4.7055 20.6013 5.3645 20.1983 5.7675L19.4653 6.5005L20.1983 7.2325C20.6013 7.6365 20.6013 8.2955 20.1983 8.6985C19.7953 9.1005 19.1363 9.1005 18.7333 8.6985L18.0003 7.9655L17.2683 8.6985Z",
    fill: fill
  }));
};
IconPhoneMissed.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2c = ["size", "fill"];
var IconPhoneOff = function IconPhoneOff(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2c);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.27343 12.055C8.97143 11.609 8.70143 11.139 8.47443 10.645C9.71343 9.995 9.71743 9.992 9.85443 9.85C10.0874 9.607 10.1824 9.262 10.1074 8.934L8.73843 2.97C8.66143 2.634 8.41743 2.362 8.09143 2.249C7.85443 2.166 7.60843 2.105 7.36543 2.066C7.11643 2.023 6.86043 2 6.59943 2C4.06343 2 2.00043 4.064 2.00043 6.6C2.00043 10.166 3.22943 13.444 5.27143 16.057L9.27343 12.055ZM21.9355 16.639C21.8955 16.389 21.8325 16.144 21.7505 15.909C21.6385 15.583 21.3665 15.339 21.0305 15.262L15.0665 13.893C14.7375 13.82 14.3935 13.912 14.1505 14.146L14.1499 14.1466C14.0075 14.283 14.0036 14.2867 13.3545 15.528C12.8605 15.303 12.3895 15.033 11.9425 14.729L7.94353 18.729C10.5565 20.771 13.8335 22 17.4005 22C19.9365 22 21.9995 19.937 21.9995 17.401C21.9995 17.142 21.9775 16.887 21.9355 16.639ZM18.4823 4.261C18.8303 3.913 19.3923 3.913 19.7393 4.261C20.0873 4.608 20.0873 5.17 19.7393 5.518L5.51733 19.74C5.17033 20.087 4.60733 20.087 4.26033 19.74C4.08733 19.567 4.00033 19.339 4.00033 19.112C4.00033 18.884 4.08733 18.657 4.26033 18.483L18.4823 4.261Z",
    fill: fill
  }));
};
IconPhoneOff.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2d = ["size", "fill"];
var IconPlayCircle = function IconPlayCircle(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2d);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.5 14.5999L14.309 11.9999L11.5 9.4009V14.5999ZM15.98 13.179L12.338 16.549C12.019 16.845 11.604 17 11.181 17C10.948 17 10.711 16.952 10.488 16.855C9.878 16.589 9.5 16.02 9.5 15.37V8.63C9.5 7.981 9.878 7.411 10.488 7.146C11.114 6.871 11.841 6.991 12.339 7.452L15.98 10.822C16.311 11.127 16.5 11.557 16.5 12C16.5 12.444 16.311 12.873 15.98 13.179ZM12 2C6.486 2 2 6.487 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.487 17.514 2 12 2Z",
    fill: fill
  }));
};
IconPlayCircle.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2e = ["size", "fill"];
var IconPrinter = function IconPrinter(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2e);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.5 19V15H16.5L16.502 19H7.5ZM8.014 5H16V7H8.007L8.014 5ZM19.363 7H18V5C18 3.897 17.178 3 16.167 3H7.833C6.822 3 6 3.897 6 5V7H4.637C3.183 7 2 8.196 2 9.667V16.333C2 17.804 3.183 19 4.637 19H5.5C5.5 20.103 6.397 21 7.5 21H16.5C17.603 21 18.5 20.103 18.5 19H19.363C20.817 19 22 17.804 22 16.333V9.667C22 8.196 20.817 7 19.363 7Z",
    fill: fill
  }));
};
IconPrinter.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2f = ["size", "fill"];
var IconRecording = function IconRecording(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2f);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 8C15.794 8 14 9.794 14 12C14 12.731 14.212 13.409 14.557 14H9.443C9.788 13.409 10 12.731 10 12C10 9.794 8.206 8 6 8C3.794 8 2 9.794 2 12C2 14.206 3.794 16 6 16H18C20.206 16 22 14.206 22 12C22 9.794 20.206 8 18 8Z",
    fill: fill
  }));
};
IconRecording.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2g = ["size", "fill"];
var IconReply = function IconReply(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2g);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.721 21C20.26 21 19.859 20.685 19.749 20.237C18.86 16.588 15.729 13.952 11.954 13.553V14.674C11.954 15.38 11.535 16.009 10.862 16.314C10.13 16.647 9.278 16.527 8.685 16.01L3.618 11.586C3.226 11.242 3 10.755 3 10.25C3 9.74498 3.226 9.25798 3.618 8.91398L8.685 4.48998C9.278 3.97298 10.13 3.85298 10.862 4.18598C11.535 4.49098 11.954 5.11998 11.954 5.82598V7.04398C17.578 7.53698 22 12.15 22 17.75C22 18.56 21.897 19.396 21.693 20.236C21.584 20.685 21.183 21 20.721 21Z",
    fill: fill
  }));
};
IconReply.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2h = ["size", "fill"];
var IconShareNode = function IconShareNode(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2h);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 15C18.183 15 17.443 15.33 16.901 15.861L8.966 12.335C8.979 12.224 9 12.114 9 12C9 11.886 8.979 11.776 8.966 11.665L16.901 8.139C17.443 8.67 18.183 9 19 9C20.654 9 22 7.654 22 6C22 4.346 20.654 3 19 3C17.346 3 16 4.346 16 6C16 6.114 16.021 6.224 16.034 6.335L8.099 9.861C7.557 9.33 6.817 9 6 9C4.346 9 3 10.346 3 12C3 13.654 4.346 15 6 15C6.817 15 7.557 14.67 8.099 14.139L16.034 17.665C16.021 17.776 16 17.886 16 18C16 19.654 17.346 21 19 21C20.654 21 22 19.654 22 18C22 16.346 20.654 15 19 15Z",
    fill: fill
  }));
};
IconShareNode.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2i = ["size", "fill"];
var IconSmartphone = function IconSmartphone(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2i);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.5 8H9.5C8.947 8 8.5 7.553 8.5 7C8.5 6.447 8.947 6 9.5 6H14.5C15.053 6 15.5 6.447 15.5 7C15.5 7.553 15.053 8 14.5 8ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM17 2H7C5.346 2 4 3.346 4 5V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V5C20 3.346 18.654 2 17 2Z",
    fill: fill
  }));
};
IconSmartphone.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2j = ["size", "fill"];
var IconSpeaker = function IconSpeaker(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2j);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 8C13 8.552 12.552 9 12 9C11.448 9 11 8.552 11 8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8ZM10.5 15.5C10.5 14.673 11.173 14 12 14C12.827 14 13.5 14.673 13.5 15.5C13.5 16.327 12.827 17 12 17C11.173 17 10.5 16.327 10.5 15.5ZM12 19C10.07 19 8.5 17.43 8.5 15.5C8.5 13.57 10.07 12 12 12C13.93 12 15.5 13.57 15.5 15.5C15.5 17.43 13.93 19 12 19ZM12 5C13.654 5 15 6.346 15 8C15 9.654 13.654 11 12 11C10.346 11 9 9.654 9 8C9 6.346 10.346 5 12 5ZM17 2H7C5.346 2 4 3.346 4 5V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V5C20 3.346 18.654 2 17 2Z",
    fill: fill
  }));
};
IconSpeaker.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2k = ["size", "fill"];
var IconSquareCircle = function IconSquareCircle(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2k);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 14H14V10H10V14ZM16 14.75C16 15.439 15.439 16 14.75 16H9.25C8.561 16 8 15.439 8 14.75V9.25C8 8.561 8.561 8 9.25 8H14.75C15.439 8 16 8.561 16 9.25V14.75ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconSquareCircle.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2l = ["size", "fill"];
var IconTV = function IconTV(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2l);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 19.0002C19 19.5532 18.553 20.0002 18 20.0002H6C5.447 20.0002 5 19.5532 5 19.0002V12.0002C5 11.4473 5.447 11.0002 6 11.0002H18C18.553 11.0002 19 11.4473 19 12.0002V19.0002ZM18 6.00025H14.414L16.707 3.70725C17.098 3.31625 17.098 2.68425 16.707 2.29325C16.316 1.90225 15.684 1.90225 15.293 2.29325L12 5.58625L8.707 2.29325C8.316 1.90225 7.684 1.90225 7.293 2.29325C6.902 2.68425 6.902 3.31625 7.293 3.70725L9.586 6.00025H6C4.346 6.00025 3 7.34625 3 9.00025V19.0002C3 20.6542 4.346 22.0002 6 22.0002H18C19.654 22.0002 21 20.6542 21 19.0002V9.00025C21 7.34625 19.654 6.00025 18 6.00025Z",
    fill: fill
  }));
};
IconTV.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2m = ["size", "fill"];
var IconVideo = function IconVideo(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2m);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.012 7.146C20.386 6.874 19.66 6.992 19.161 7.452L17 9.452V8C17 6.346 15.655 5 14 5H5C3.346 5 2 6.346 2 8V16C2 17.655 3.346 19 5 19H14C15.655 19 17 17.655 17 16V14.549L19.161 16.548C19.482 16.845 19.897 17 20.32 17C20.553 17 20.788 16.953 21.012 16.855C21.621 16.589 22 16.02 22 15.371V8.63C22 7.981 21.621 7.412 21.012 7.146Z",
    fill: fill
  }));
};
IconVideo.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2n = ["size", "fill"];
var IconVideoOff = function IconVideoOff(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2n);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.0004 13.5863L17.0004 15.5863L20.7074 19.2932C21.0984 19.6842 21.0984 20.3162 20.7074 20.7073C20.5124 20.9023 20.2564 21.0002 20.0004 21.0002C19.7444 21.0002 19.4884 20.9023 19.2934 20.7073L16.3864 17.8003L14.9314 16.3453L5.5864 7.00025L3.8264 5.24025L3.2934 4.70725C2.9024 4.31625 2.9024 3.68425 3.2934 3.29325C3.6844 2.90225 4.3164 2.90225 4.7074 3.29325L6.4144 5.00025L8.4144 7.00025L15.0004 13.5863ZM21.0121 7.14575C20.3861 6.87375 19.6601 6.99175 19.1611 7.45175L17.0001 9.45175V7.99975C17.0001 6.34575 15.6551 4.99975 14.0001 4.99975H7.8281L9.1211 6.29275L15.7071 12.8787L17.7071 14.8787L19.7181 16.8898C19.9101 16.9618 20.1141 16.9998 20.3201 16.9998C20.5531 16.9998 20.7881 16.9527 21.0121 16.8547C21.6211 16.5887 22.0001 16.0198 22.0001 15.3708V8.62975C22.0001 7.98075 21.6211 7.41175 21.0121 7.14575ZM14.224 17.052L4.879 7.70705L3.12 5.94805L2.974 5.80205C2.379 6.35105 2 7.12905 2 8.00005V16C2 17.6551 3.346 19 5 19H14C14.617 19 15.189 18.8131 15.665 18.493L14.224 17.052Z",
    fill: fill
  }));
};
IconVideoOff.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2o = ["size", "fill"];
var IconVolumeHigh = function IconVolumeHigh(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2o);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.4343 3.17548C13.7403 2.96548 14.1373 2.94148 14.4663 3.11548C14.7943 3.28848 15.0003 3.62948 15.0003 4.00048V20.0005C15.0003 20.3715 14.7943 20.7125 14.4663 20.8855C14.3203 20.9625 14.1593 21.0005 14.0003 21.0005C13.8013 21.0005 13.6043 20.9415 13.4343 20.8255L7.0233 16.4285H2.00031C1.44731 16.4285 1.00031 15.9815 1.00031 15.4285V8.57148C1.00031 8.01848 1.44731 7.57148 2.00031 7.57148H7.0233L13.4343 3.17548ZM19.6377 5.22978C19.2127 4.87778 18.5817 4.93678 18.2297 5.36278C17.8777 5.78778 17.9367 6.41778 18.3627 6.77078C20.0627 8.17978 20.9997 10.0368 20.9997 12.0008C20.9997 13.9638 20.0627 15.8208 18.3627 17.2298C17.9367 17.5828 17.8777 18.2128 18.2297 18.6378C18.4277 18.8768 18.7127 19.0008 19.0007 19.0008C19.2247 19.0008 19.4507 18.9248 19.6377 18.7708C21.8057 16.9748 22.9997 14.5698 22.9997 12.0008C22.9997 9.43078 21.8057 7.02578 19.6377 5.22978ZM18.2793 8.37328C17.9323 7.94328 17.3033 7.87628 16.8733 8.22128C16.4433 8.56728 16.3743 9.19628 16.7203 9.62728C17.7563 10.9133 17.7563 13.0873 16.7203 14.3733C16.3743 14.8043 16.4433 15.4333 16.8733 15.7793C17.0583 15.9283 17.2793 16.0003 17.4993 16.0003C17.7913 16.0003 18.0813 15.8723 18.2793 15.6273C19.9153 13.5933 19.9153 10.4073 18.2793 8.37328Z",
    fill: fill
  }));
};
IconVolumeHigh.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2p = ["size", "fill"];
var IconVolumeLow = function IconVolumeLow(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2p);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.428 3.17548C15.734 2.96548 16.131 2.94148 16.46 3.11548C16.788 3.28848 16.994 3.62948 16.994 4.00048V20.0005C16.994 20.3715 16.788 20.7125 16.46 20.8855C16.314 20.9625 16.153 21.0005 15.994 21.0005C15.795 21.0005 15.598 20.9415 15.428 20.8255L9.01702 16.4285H3.99402C3.44102 16.4285 2.99402 15.9815 2.99402 15.4285V8.57148C2.99402 8.01848 3.44102 7.57148 3.99402 7.57148H9.01702L15.428 3.17548ZM19.367 8.22128C19.796 7.87628 20.427 7.94328 20.773 8.37328C22.409 10.4073 22.409 13.5933 20.773 15.6273C20.575 15.8723 20.285 16.0003 19.993 16.0003C19.773 16.0003 19.552 15.9283 19.367 15.7793C18.937 15.4333 18.868 14.8043 19.214 14.3733C20.25 13.0873 20.25 10.9133 19.214 9.62728C18.868 9.19628 18.937 8.56728 19.367 8.22128Z",
    fill: fill
  }));
};
IconVolumeLow.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2q = ["size", "fill"];
var IconVolumeOff = function IconVolumeOff(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2q);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 21.0005C17.802 21.0005 17.604 20.9415 17.435 20.8255L11.023 16.4295H6C5.448 16.4295 5 15.9815 5 15.4295V8.57148C5 8.01948 5.448 7.57148 6 7.57148H11.023L17.435 3.17548C17.74 2.96548 18.137 2.94148 18.466 3.11548C18.794 3.28848 19 3.62948 19 4.00048V20.0005C19 20.3715 18.794 20.7125 18.466 20.8855C18.32 20.9625 18.16 21.0005 18 21.0005Z",
    fill: fill
  }));
};
IconVolumeOff.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2r = ["size", "fill"];
var IconVolumeSlash = function IconVolumeSlash(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2r);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 3.99982V12.1718L9.02596 6.19782L13.435 3.17482C13.74 2.96482 14.137 2.94182 14.466 3.11482C14.794 3.28782 15 3.62882 15 3.99982ZM21 12C21 13.599 20.37 15.121 19.222 16.394L20.637 17.809C22.163 16.155 23 14.137 23 12C23 9.43102 21.806 7.02502 19.638 5.22902C19.212 4.87802 18.582 4.93702 18.23 5.36202C17.877 5.78702 17.937 6.41802 18.362 6.77102C20.063 8.18002 21 10.036 21 12ZM16.9106 14.082L18.3486 15.521C19.9066 13.483 19.8886 10.374 18.2796 8.37302C17.9326 7.94302 17.3036 7.87602 16.8726 8.22102C16.4426 8.56702 16.3746 9.19602 16.7206 9.62702C17.6836 10.823 17.7386 12.778 16.9106 14.082ZM4.74306 7.57132H2.00006C1.44806 7.57132 1.00006 8.01832 1.00006 8.57132V15.4283C1.00006 15.9813 1.44806 16.4283 2.00006 16.4283H7.02306L13.4341 20.8253C13.6041 20.9413 13.8021 21.0003 14.0001 21.0003C14.1601 21.0003 14.3201 20.9623 14.4661 20.8843C14.7941 20.7123 15.0001 20.3713 15.0001 20.0003V17.8283L4.74306 7.57132ZM3.29296 3.29292C3.68396 2.90192 4.31596 2.90192 4.70696 3.29292L20.707 19.2929C21.098 19.6839 21.098 20.3159 20.707 20.7069C20.512 20.9019 20.256 20.9999 20 20.9999C19.744 20.9999 19.488 20.9019 19.293 20.7069L3.29296 4.70692C2.90196 4.31592 2.90196 3.68392 3.29296 3.29292Z",
    fill: fill
  }));
};
IconVolumeSlash.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2s = ["size", "fill"];
var IconAt = function IconAt(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2s);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.1819 15.0939C9.47785 15.0939 8.09085 13.7069 8.09085 12.0029C8.09085 10.2989 9.47785 8.91187 11.1819 8.91187C12.8859 8.91187 14.2729 10.2989 14.2729 12.0029C14.2729 13.7069 12.8859 15.0939 11.1819 15.0939ZM12.9549 2.04687C9.95385 1.76487 7.01885 2.82787 4.90585 4.95587C2.79185 7.08287 1.75085 10.0259 2.05085 13.0289C2.40885 16.6009 4.65985 19.7109 7.92685 21.1439C9.23385 21.7169 10.6199 21.9979 11.9959 21.9979C14.1639 21.9979 16.3089 21.2989 18.0799 19.9429C18.5189 19.6069 18.6019 18.9789 18.2659 18.5399C17.9299 18.1029 17.3029 18.0199 16.8639 18.3549C14.5459 20.1299 11.4299 20.4939 8.72985 19.3119C6.16185 18.1859 4.32285 15.6419 4.04085 12.8289C3.80085 10.4239 4.63285 8.06787 6.32485 6.36487C8.01485 4.66287 10.3669 3.81087 12.7699 4.03887C16.8249 4.41587 19.9999 8.01287 19.9999 12.2279V12.9029C19.9999 13.3709 19.8139 13.8069 19.4749 14.1309C19.1369 14.4549 18.6889 14.6209 18.2219 14.6009C17.3279 14.5619 16.5999 13.7209 16.5999 12.7269V8.40287C16.5999 7.84987 16.1529 7.40287 15.5999 7.40287C15.0909 7.40287 14.6889 7.78587 14.6249 8.27787C13.7169 7.43787 12.5129 6.91187 11.1819 6.91187C8.37485 6.91187 6.09085 9.19687 6.09085 12.0029C6.09085 14.8099 8.37485 17.0939 11.1819 17.0939C12.8819 17.0939 14.3809 16.2479 15.3059 14.9639C15.9509 15.9039 16.9739 16.5479 18.1339 16.5989C19.1469 16.6529 20.1209 16.2809 20.8579 15.5759C21.5949 14.8709 21.9999 13.9219 21.9999 12.9029V12.2279C21.9999 6.99087 18.0279 2.51987 12.9549 2.04687Z",
    fill: fill
  }));
};
IconAt.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2t = ["size", "fill"];
var IconBackward$1 = function IconBackward(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2t);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.5 16.9852L13.678 13.0022L18.5 9.09121V16.9852ZM10.5 16.9852L5.678 13.0022L10.5 9.09121V16.9852ZM19.45 7.20121C18.716 6.85621 17.849 6.95821 17.241 7.46121L12.5 11.3772V8.78721C12.5 8.11421 12.098 7.50621 11.45 7.20121C10.716 6.85621 9.849 6.95821 9.241 7.46121L4.141 11.6732C3.734 12.0092 3.5 12.4942 3.5 13.0002C3.5 13.5062 3.734 13.9902 4.142 14.3262L9.241 18.5402C9.609 18.8432 10.073 19.0012 10.544 19.0012C10.851 19.0012 11.161 18.9342 11.45 18.7982C12.098 18.4932 12.5 17.8852 12.5 17.2132V14.6222L17.241 18.5402C17.609 18.8432 18.073 19.0012 18.544 19.0012C18.851 19.0012 19.161 18.9342 19.45 18.7982C20.098 18.4932 20.5 17.8852 20.5 17.2132V8.78721C20.5 8.11421 20.098 7.50621 19.45 7.20121Z",
    fill: fill
  }));
};
IconBackward$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2u = ["size", "fill"];
var IconBackwardStep$1 = function IconBackwardStep(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2u);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.25 16.9852L10.428 13.0022L15.25 9.09121V16.9852ZM16.2 7.20121C15.466 6.85621 14.599 6.95821 13.991 7.46121L8.891 11.6732C8.838 11.7172 8.797 11.7692 8.75 11.8182V8.00021C8.75 7.44721 8.302 7.00021 7.75 7.00021C7.198 7.00021 6.75 7.44721 6.75 8.00021V18.0002C6.75 18.5522 7.198 19.0002 7.75 19.0002C8.302 19.0002 8.75 18.5522 8.75 18.0002V14.1812C8.797 14.2302 8.838 14.2822 8.892 14.3262L13.991 18.5402C14.359 18.8432 14.823 19.0012 15.294 19.0012C15.601 19.0012 15.911 18.9342 16.2 18.7982C16.848 18.4932 17.25 17.8852 17.25 17.2132V8.78721C17.25 8.11421 16.848 7.50621 16.2 7.20121Z",
    fill: fill
  }));
};
IconBackwardStep$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2v = ["size", "fill"];
var IconBatteryBolt$1 = function IconBatteryBolt(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2v);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.504 19.8676C8.66 19.9576 8.831 19.9996 8.999 19.9996C9.346 19.9996 9.684 19.8186 9.868 19.4956L13.868 12.4956C14.045 12.1866 14.044 11.8056 13.865 11.4976C13.686 11.1896 13.356 10.9996 13 10.9996H8.723L11.868 5.49564C12.142 5.01664 11.976 4.40564 11.496 4.13164C11.018 3.85864 10.406 4.02464 10.132 4.50364L6.132 11.5036C5.955 11.8126 5.956 12.1936 6.135 12.5016C6.314 12.8096 6.644 12.9996 7 12.9996H11.277L8.132 18.5036C7.858 18.9826 8.024 19.5936 8.504 19.8676ZM12.7315 5.99964H15.8335C17.0285 5.99964 18.0005 7.08864 18.0005 8.42864V15.5706C18.0005 16.9106 17.0285 17.9996 15.8335 17.9996H11.8755L13.0175 15.9996H15.8275C15.8795 15.9766 16.0005 15.8236 16.0005 15.5706V8.42864C16.0005 8.16964 15.8745 8.01664 15.8245 7.99864H11.5895L12.7315 5.99964ZM20 9.99964C20 9.44764 20.448 8.99964 21 8.99964C21.552 8.99964 22 9.44764 22 9.99964V13.9996C22 14.5516 21.552 14.9996 21 14.9996C20.448 14.9996 20 14.5516 20 13.9996V9.99964ZM4 15.5709V8.42794C4 8.16994 4.126 8.01594 4.167 7.99994L6.982 7.99894L8.125 5.99994H4.167C2.972 5.99994 2 7.08894 2 8.42794V15.5709C2 16.9099 2.972 17.9999 4.167 17.9999H7.268L8.41 16.0009H4.176C4.126 15.9829 4 15.8289 4 15.5709Z",
    fill: fill
  }));
};
IconBatteryBolt$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2w = ["size", "fill"];
var IconBatteryEmpty = function IconBatteryEmpty(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2w);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 10V14C22 14.552 21.552 15 21 15C20.448 15 20 14.552 20 14V10C20 9.448 20.448 9 21 9C21.552 9 22 9.448 22 10ZM16 15.571C16 15.824 15.879 15.977 15.828 16L4.176 16.001C4.126 15.983 4 15.83 4 15.571V8.429C4 8.17 4.126 8.017 4.167 8L15.824 7.999C15.874 8.017 16 8.17 16 8.429V15.571ZM15.833 6H4.167C2.972 6 2 7.089 2 8.429V15.571C2 16.911 2.972 18 4.167 18H15.833C17.028 18 18 16.911 18 15.571V8.429C18 7.089 17.028 6 15.833 6Z",
    fill: fill
  }));
};
IconBatteryEmpty.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2x = ["size", "fill"];
var IconBluetooth = function IconBluetooth(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2x);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.9999 18.2497V14.1787L15.4669 16.5577L12.9999 18.2497ZM12.9999 5.76066L15.4969 7.49366L12.9999 9.85066V5.76066ZM13.6289 12.0067L17.6439 8.21666C17.8949 7.97866 18.0229 7.64666 17.9969 7.30466C17.9699 6.96166 17.7919 6.65166 17.5069 6.45466L12.8329 3.21066C12.4739 2.95866 12.0079 2.93066 11.6179 3.13366C11.2369 3.33266 10.9999 3.72066 10.9999 4.14566V10.3517L7.80694 6.37466C7.45994 5.94266 6.83194 5.87466 6.40094 6.22066C5.96994 6.56566 5.90094 7.19566 6.24694 7.62566L9.72094 11.9527L6.21594 16.3797C5.87294 16.8127 5.94594 17.4407 6.37894 17.7847C6.56294 17.9297 6.78194 17.9997 6.99994 17.9997C7.29394 17.9997 7.58595 17.8707 7.78394 17.6207L10.9999 13.5597V19.8537C10.9999 20.2777 11.2349 20.6647 11.6129 20.8647C11.7869 20.9557 11.9749 21.0007 12.1629 21.0007C12.3949 21.0007 12.6259 20.9317 12.8269 20.7947L17.4689 17.6087C17.7539 17.4127 17.9339 17.1037 17.9609 16.7617C17.9889 16.4207 17.8629 16.0887 17.6159 15.8517L13.6289 12.0067Z",
    fill: fill
  }));
};
IconBluetooth.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2y = ["size", "fill"];
var IconBroadcast$1 = function IconBroadcast(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2y);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.766 17.1441C7.121 16.7221 7.066 16.0911 6.644 15.7341C4.938 14.3001 4 12.4411 4 10.5001C4 8.55915 4.938 6.70015 6.644 5.26615C7.066 4.90915 7.121 4.27815 6.766 3.85615C6.409 3.43415 5.779 3.37915 5.356 3.73415C3.192 5.55615 2 7.95915 2 10.5001C2 13.0411 3.192 15.4441 5.356 17.2661C5.544 17.4231 5.772 17.5001 5.999 17.5001C6.284 17.5001 6.567 17.3791 6.766 17.1441ZM18.644 17.2661C20.808 15.4441 22 13.0411 22 10.5001C22 7.95915 20.808 5.55615 18.644 3.73415C18.22 3.38015 17.591 3.43515 17.234 3.85615C16.879 4.27815 16.934 4.90915 17.356 5.26615C19.062 6.70015 20 8.55915 20 10.5001C20 12.4411 19.062 14.3001 17.356 15.7341C16.934 16.0911 16.879 16.7221 17.234 17.1441C17.433 17.3791 17.716 17.5001 18.001 17.5001C18.228 17.5001 18.456 17.4231 18.644 17.2661ZM7.5 10.5001C7.5 9.30715 8.084 8.15715 9.144 7.26515C9.566 6.90915 9.621 6.27815 9.265 5.85615C8.91 5.43415 8.28 5.37715 7.856 5.73515C6.337 7.01415 5.5 8.70615 5.5 10.5001C5.5 12.2941 6.337 13.9861 7.856 15.2651C8.044 15.4231 8.272 15.5001 8.499 15.5001C8.784 15.5001 9.067 15.3791 9.265 15.1441C9.621 14.7221 9.566 14.0911 9.144 13.7351C8.084 12.8431 7.5 11.6931 7.5 10.5001ZM18.5 10.5001C18.5 12.2941 17.663 13.9861 16.144 15.2651C15.956 15.4231 15.728 15.5001 15.501 15.5001C15.216 15.5001 14.933 15.3791 14.735 15.1441C14.379 14.7221 14.434 14.0911 14.856 13.7351C15.916 12.8431 16.5 11.6931 16.5 10.5001C16.5 9.30715 15.916 8.15715 14.856 7.26515C14.434 6.90915 14.379 6.27815 14.735 5.85615C15.09 5.43515 15.721 5.37815 16.144 5.73515C17.663 7.01415 18.5 8.70615 18.5 10.5001ZM12 11.4999C11.448 11.4999 11 11.0519 11 10.4999C11 9.94795 11.448 9.49995 12 9.49995C12.552 9.49995 13 9.94795 13 10.4999C13 11.0519 12.552 11.4999 12 11.4999ZM12 7.49995C10.346 7.49995 9 8.84595 9 10.4999C9 11.8139 9.855 12.9219 11.035 13.3259C11.024 13.3849 11 13.4379 11 13.4999V19.4999C11 20.0529 11.447 20.4999 12 20.4999C12.553 20.4999 13 20.0529 13 19.4999V13.4999C13 13.4379 12.976 13.3849 12.965 13.3259C14.145 12.9219 15 11.8139 15 10.4999C15 8.84595 13.654 7.49995 12 7.49995Z",
    fill: fill
  }));
};
IconBroadcast$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2z = ["size", "fill"];
var IconCamera$1 = function IconCamera(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2z);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 15.5C11.173 15.5 10.5 14.827 10.5 14C10.5 13.173 11.173 12.5 12 12.5C12.827 12.5 13.5 13.173 13.5 14C13.5 14.827 12.827 15.5 12 15.5ZM12 10.5C10.07 10.5 8.5 12.07 8.5 14C8.5 15.93 10.07 17.5 12 17.5C13.93 17.5 15.5 15.93 15.5 14C15.5 12.07 13.93 10.5 12 10.5ZM20 18C20 18.551 19.552 19 19 19H5C4.448 19 4 18.551 4 18V10C4 9.449 4.448 9 5 9H19C19.552 9 20 9.449 20 10V18ZM10 5.5C10 5.224 10.225 5 10.5 5H13.5C13.775 5 14 5.224 14 5.5V7H10V5.5ZM19 7H16V5.5C16 4.122 14.879 3 13.5 3H10.5C9.121 3 8 4.122 8 5.5V7H5C3.346 7 2 8.346 2 10V18C2 19.654 3.346 21 5 21H19C20.654 21 22 19.654 22 18V10C22 8.346 20.654 7 19 7Z",
    fill: fill
  }));
};
IconCamera$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2A = ["size", "fill"];
var IconDekstop = function IconDekstop(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2A);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 14C20 14.551 19.552 15 19 15H12.087H11.913H5C4.448 15 4 14.551 4 14V6C4 5.449 4.448 5 5 5H19C19.552 5 20 5.449 20 6V14ZM19 3H5C3.346 3 2 4.346 2 6V14C2 15.654 3.346 17 5 17H11V19H7C6.45 19 6 19.45 6 20C6 20.55 6.45 21 7 21H17C17.55 21 18 20.55 18 20C18 19.45 17.55 19 17 19H13V17H19C20.654 17 22 15.654 22 14V6C22 4.346 20.654 3 19 3Z",
    fill: fill
  }));
};
IconDekstop.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2B = ["size", "fill"];
var IconEnvelop$1 = function IconEnvelop(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2B);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 18H5C4.449 18 4 17.552 4 17V7.25L11.4 12.8C11.578 12.934 11.789 13 12 13C12.211 13 12.422 12.934 12.6 12.8L20 7.25V17C20 17.552 19.551 18 19 18ZM18.333 6L12 10.75L5.667 6H18.333ZM19 4H5C3.346 4 2 5.346 2 7V17C2 18.654 3.346 20 5 20H19C20.654 20 22 18.654 22 17V7C22 5.346 20.654 4 19 4Z",
    fill: fill
  }));
};
IconEnvelop$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2C = ["size", "fill"];
var IconForward$1 = function IconForward(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2C);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5 16.9083V9.01427L18.322 12.9983L13.5 16.9083ZM5.5 16.9083V9.01427L10.322 12.9983L5.5 16.9083ZM19.858 11.6743L14.759 7.46027C14.15 6.95827 13.282 6.85627 12.55 7.20127C11.902 7.50727 11.5 8.11427 11.5 8.78727V11.3783L6.759 7.46027C6.15 6.95827 5.281 6.85627 4.55 7.20127C3.902 7.50727 3.5 8.11427 3.5 8.78727V17.2133C3.5 17.8863 3.902 18.4933 4.55 18.7993C4.839 18.9343 5.149 19.0013 5.456 19.0013C5.927 19.0013 6.391 18.8443 6.759 18.5393L11.5 14.6233V17.2133C11.5 17.8863 11.902 18.4933 12.55 18.7993C12.839 18.9343 13.149 19.0013 13.456 19.0013C13.927 19.0013 14.391 18.8443 14.759 18.5393L19.859 14.3263C20.266 13.9903 20.5 13.5063 20.5 13.0003C20.5 12.4943 20.266 12.0103 19.858 11.6743Z",
    fill: fill
  }));
};
IconForward$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2D = ["size", "fill"];
var IconForwardStep$1 = function IconForwardStep(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2D);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.75 16.9083V9.01427L13.572 12.9983L8.75 16.9083ZM16.25 7.00027C15.698 7.00027 15.25 7.44727 15.25 8.00027V11.8183C15.203 11.7693 15.162 11.7183 15.108 11.6743L10.009 7.46027C9.4 6.95827 8.532 6.85627 7.8 7.20127C7.152 7.50727 6.75 8.11427 6.75 8.78727V17.2133C6.75 17.8863 7.152 18.4933 7.8 18.7993C8.089 18.9343 8.399 19.0013 8.706 19.0013C9.177 19.0013 9.641 18.8443 10.009 18.5393L15.109 14.3263C15.162 14.2823 15.203 14.2303 15.25 14.1813V18.0003C15.25 18.5533 15.698 19.0003 16.25 19.0003C16.802 19.0003 17.25 18.5533 17.25 18.0003V8.00027C17.25 7.44727 16.802 7.00027 16.25 7.00027Z",
    fill: fill
  }));
};
IconForwardStep$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2E = ["size", "fill"];
var IconHardDrive$1 = function IconHardDrive(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2E);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 16C7 15.45 7.45 15 8 15C8.55 15 9 15.45 9 16C9 16.55 8.55 17 8 17C7.45 17 7 16.55 7 16ZM12 15H16C16.55 15 17 15.45 17 16C17 16.55 16.55 17 16 17H12C11.45 17 11 16.55 11 16C11 15.45 11.45 15 12 15ZM18 19H6C5.449 19 5 18.552 5 18V13H19V18C19 18.552 18.551 19 18 19ZM8.342 5.553C8.512 5.212 8.855 5 9.236 5H14.764C15.145 5 15.488 5.212 15.658 5.553L18.382 11H5.618L8.342 5.553ZM20.789 11.342L17.447 4.658C16.936 3.636 15.908 3 14.764 3H9.236C8.092 3 7.064 3.636 6.553 4.658L3.211 11.342C3.073 11.618 3 11.928 3 12.236V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V12.236C21 11.928 20.927 11.618 20.789 11.342Z",
    fill: fill
  }));
};
IconHardDrive$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2F = ["size", "fill"];
var IconHeadphone$1 = function IconHeadphone(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2F);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 19.5C16.897 19.5 16 18.603 16 17.5C16 16.397 16.897 15.5 18 15.5C19.103 15.5 20 16.397 20 17.5C20 18.603 19.103 19.5 18 19.5ZM6 15.5C7.103 15.5 8 16.397 8 17.5C8 18.603 7.103 19.5 6 19.5C4.897 19.5 4 18.603 4 17.5C4 16.397 4.897 15.5 6 15.5ZM12 2.5C6.486 2.5 2 7.15 2 12.866V17.5C2 19.706 3.794 21.5 6 21.5C8.206 21.5 10 19.706 10 17.5C10 15.294 8.206 13.5 6 13.5C5.268 13.5 4.591 13.712 4 14.057V12.866C4 8.253 7.589 4.5 12 4.5C16.411 4.5 20 8.253 20 12.866V14.057C19.409 13.712 18.732 13.5 18 13.5C15.794 13.5 14 15.294 14 17.5C14 19.706 15.794 21.5 18 21.5C20.206 21.5 22 19.706 22 17.5V12.866C22 7.15 17.514 2.5 12 2.5Z",
    fill: fill
  }));
};
IconHeadphone$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2G = ["size", "fill"];
var IconInbox$1 = function IconInbox(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2G);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 19H6C5.449 19 5 18.552 5 18V13H7V16C7 16.553 7.448 17 8 17H16C16.552 17 17 16.553 17 16V13H19V18C19 18.552 18.551 19 18 19ZM8.342 5.553C8.512 5.212 8.855 5 9.236 5H14.764C15.145 5 15.488 5.212 15.658 5.553L18.382 11H16C15.448 11 15 11.447 15 12V15H9V12C9 11.447 8.552 11 8 11H5.618L8.342 5.553ZM20.789 11.342L17.447 4.658C16.936 3.636 15.908 3 14.764 3H9.236C8.092 3 7.064 3.636 6.553 4.658L3.211 11.342C3.073 11.618 3 11.928 3 12.236V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V12.236C21 11.928 20.927 11.618 20.789 11.342Z",
    fill: fill
  }));
};
IconInbox$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2H = ["size", "fill"];
var IconMessageCircle$1 = function IconMessageCircle(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2H);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.99977 12.0001C6.99977 11.4481 7.44777 11.0001 7.99977 11.0001C8.55177 11.0001 8.99977 11.4481 8.99977 12.0001C8.99977 12.5521 8.55177 13.0001 7.99977 13.0001C7.44777 13.0001 6.99977 12.5521 6.99977 12.0001ZM11.9998 11.0001C11.4478 11.0001 10.9998 11.4481 10.9998 12.0001C10.9998 12.5521 11.4478 13.0001 11.9998 13.0001C12.5518 13.0001 12.9998 12.5521 12.9998 12.0001C12.9998 11.4481 12.5518 11.0001 11.9998 11.0001ZM15.9998 11.0001C15.4478 11.0001 14.9998 11.4481 14.9998 12.0001C14.9998 12.5521 15.4478 13.0001 15.9998 13.0001C16.5518 13.0001 16.9998 12.5521 16.9998 12.0001C16.9998 11.4481 16.5518 11.0001 15.9998 11.0001ZM19.8982 13.295C19.3912 16.549 16.7682 19.248 13.5192 19.857C11.9502 20.153 10.3522 19.984 8.90217 19.37C8.49117 19.196 8.06617 19.108 7.64917 19.108C7.45917 19.108 7.27117 19.126 7.08617 19.163L4.27417 19.725L4.83717 16.908C4.95517 16.323 4.88317 15.697 4.63017 15.098C4.01617 13.648 3.84817 12.051 4.14317 10.481C4.75217 7.23203 7.45017 4.60903 10.7052 4.10203C13.2952 3.69903 15.8282 4.51503 17.6562 6.34303C19.4852 8.17203 20.3022 10.706 19.8982 13.295ZM19.0712 4.92903C16.7862 2.64503 13.6262 1.62603 10.3972 2.12503C6.32017 2.76103 2.94017 6.04503 2.17717 10.112C1.80917 12.07 2.02117 14.064 2.78817 15.877C2.88517 16.108 2.91517 16.323 2.87717 16.516L2.01917 20.804C1.95317 21.132 2.05617 21.471 2.29317 21.707C2.48217 21.897 2.73717 22 3.00017 22C3.06517 22 3.13017 21.994 3.19617 21.981L7.47917 21.124C7.72517 21.077 7.96317 21.146 8.12217 21.212C9.93717 21.979 11.9312 22.19 13.8872 21.823C17.9552 21.06 21.2392 17.68 21.8752 13.603C22.3772 10.376 21.3562 7.21403 19.0712 4.92903Z",
    fill: fill
  }));
};
IconMessageCircle$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2I = ["size", "fill"];
var IconMessageSquare$1 = function IconMessageSquare(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2I);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 11C7 10.448 7.448 10 8 10C8.552 10 9 10.448 9 11C9 11.552 8.552 12 8 12C7.448 12 7 11.552 7 11ZM12 10C11.448 10 11 10.448 11 11C11 11.552 11.448 12 12 12C12.552 12 13 11.552 13 11C13 10.448 12.552 10 12 10ZM16 10C15.448 10 15 10.448 15 11C15 11.552 15.448 12 16 12C16.552 12 17 11.552 17 11C17 10.448 16.552 10 16 10ZM20 16C20 16.551 19.551 17 19 17H8.554C8.011 17 7.477 17.148 7.01 17.428L4 19.234V6C4 5.449 4.449 5 5 5H19C19.551 5 20 5.449 20 6V16ZM19 3H5C3.346 3 2 4.346 2 6V21C2 21.36 2.194 21.693 2.507 21.87C2.66 21.957 2.83 22 3 22C3.178 22 3.356 21.953 3.515 21.857L8.039 19.143C8.195 19.049 8.373 19 8.554 19H19C20.654 19 22 17.654 22 16V6C22 4.346 20.654 3 19 3Z",
    fill: fill
  }));
};
IconMessageSquare$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2J = ["size", "fill"];
var IconMicOff$1 = function IconMicOff(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2J);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 6C10 4.897 10.897 4 12 4C13.103 4 14 4.897 14 6V11C14 11.0325 13.9956 11.0636 13.9913 11.0946L13.9913 11.0946L13.9913 11.0946C13.9884 11.115 13.9856 11.1354 13.984 11.156L15.579 12.751C15.84 12.22 16 11.631 16 11V6C16 3.794 14.206 2 12 2C10.052 2 8.43 3.401 8.076 5.248L10 7.172V6ZM19 11C19 10.448 18.553 10 18 10C17.447 10 17 10.448 17 11C17 11.909 16.738 12.75 16.312 13.484L17.775 14.947C18.547 13.823 19 12.464 19 11ZM12.0853 14.9918C12.0574 14.9959 12.0293 15 12 15C9.794 15 8 13.206 8 11V10.828L12.156 14.984C12.1322 14.9849 12.1089 14.9883 12.0853 14.9918ZM20.707 19.293L4.707 3.293C4.316 2.902 3.684 2.902 3.293 3.293C2.902 3.684 2.902 4.316 3.293 4.707L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293ZM13 20H15C15.55 20 16 20.45 16 21C16 21.55 15.55 22 15 22H9C8.45 22 8 21.55 8 21C8 20.45 8.45 20 9 20H11V17.92C7.613 17.432 5 14.52 5 11C5 10.448 5.447 10 6 10C6.553 10 7 10.448 7 11C7 13.757 9.243 16 12 16C12.362 16 12.714 15.957 13.055 15.883L14.648 17.476C14.127 17.69 13.573 17.836 13 17.919V20Z",
    fill: fill
  }));
};
IconMicOff$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2K = ["size", "fill"];
var IconMic$1 = function IconMic(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2K);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 17.9199V19.9999H15.105C15.598 19.9999 16 20.4019 16 20.8949V21.1059C16 21.5979 15.598 21.9999 15.105 21.9999H8.895C8.402 21.9999 8 21.5979 8 21.1059V20.8949C8 20.4019 8.402 19.9999 8.895 19.9999H11V17.9199C7.613 17.4319 5 14.5199 5 10.9999C5 10.4479 5.447 9.99988 6 9.99988C6.553 9.99988 7 10.4479 7 10.9999C7 13.7569 9.243 15.9999 12 15.9999C14.757 15.9999 17 13.7569 17 10.9999C17 10.4479 17.447 9.99988 18 9.99988C18.553 9.99988 19 10.4479 19 10.9999C19 14.5199 16.387 17.4319 13 17.9199ZM10 5.99988C10 4.89688 10.897 3.99988 12 3.99988C13.103 3.99988 14 4.89688 14 5.99988V10.9999C14 12.1029 13.103 12.9999 12 12.9999C10.897 12.9999 10 12.1029 10 10.9999V5.99988ZM12 14.9999C14.206 14.9999 16 13.2059 16 10.9999V5.99988C16 3.79488 14.206 1.99988 12 1.99988C9.794 1.99988 8 3.79488 8 5.99988V10.9999C8 13.2059 9.794 14.9999 12 14.9999Z",
    fill: fill
  }));
};
IconMic$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2L = ["size", "fill"];
var IconMovie$1 = function IconMovie(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2L);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 18.256C19 18.666 18.666 19 18.256 19H17V17H19V18.256ZM5 18.256V17H7V19H5.744C5.334 19 5 18.666 5 18.256ZM5.744 5H7V7H5V5.744C5 5.334 5.334 5 5.744 5ZM19 5.744V7H17V5H18.256C18.666 5 19 5.334 19 5.744ZM17 15H19V13H17V15ZM17 11H19V9H17V11ZM9 19H15V5H9V19ZM5 15H7V13H5V15ZM5 11H7V9H5V11ZM18.256 3H5.744C4.231 3 3 4.232 3 5.744V18.256C3 19.769 4.231 21 5.744 21H18.256C19.769 21 21 19.769 21 18.256V5.744C21 4.232 19.769 3 18.256 3Z",
    fill: fill
  }));
};
IconMovie$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2M = ["size", "fill"];
var IconMusic = function IconMusic(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2M);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.486 17.006C15.663 17.006 14.994 16.337 14.994 15.514C14.994 14.691 15.663 14.022 16.486 14.022C17.207 14.022 17.808 14.534 17.948 15.213V15.214C17.967 15.311 17.978 15.411 17.978 15.514C17.978 16.337 17.309 17.006 16.486 17.006ZM7.514 19C6.691 19 6.022 18.33 6.022 17.507C6.022 16.685 6.691 16.015 7.514 16.015C8.234 16.015 8.836 16.527 8.976 17.206V17.209C8.996 17.305 9.007 17.405 9.007 17.507C9.007 18.33 8.338 19 7.514 19ZM19.925 14.992V3.99997C19.925 3.69597 19.788 3.40897 19.551 3.21897C19.314 3.02997 19.003 2.95797 18.709 3.02397L9.737 5.01697C9.279 5.11897 8.954 5.52497 8.954 5.99297V14.334C8.513 14.134 8.029 14.015 7.514 14.015C5.589 14.015 4.022 15.582 4.022 17.507C4.022 19.433 5.589 21 7.514 21C9.44 21 11.007 19.433 11.007 17.507C11.007 17.329 10.98 17.157 10.954 16.985V6.79597L17.925 5.24597V12.34C17.485 12.14 17.001 12.022 16.486 12.022C14.56 12.022 12.994 13.588 12.994 15.514C12.994 17.44 14.56 19.006 16.486 19.006C18.412 19.006 19.978 17.44 19.978 15.514C19.978 15.335 19.952 15.164 19.925 14.992Z",
    fill: fill
  }));
};
IconMusic.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2N = ["size", "fill"];
var IconPaperPlane = function IconPaperPlane(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2N);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.0019 17.8365L13.1459 12.2695L18.7139 6.70046L15.0019 17.8365ZM17.2999 5.28646L11.7319 10.8545L6.16395 8.99846L17.2999 5.28646ZM21.9919 2.94646C21.9869 2.85346 21.9699 2.76346 21.9389 2.67646C21.9289 2.64546 21.9179 2.61546 21.9039 2.58546C21.8559 2.47846 21.7949 2.37746 21.7089 2.29146C21.6229 2.20546 21.5219 2.14446 21.4139 2.09646C21.3849 2.08246 21.3559 2.07146 21.3249 2.06146C21.2359 2.03046 21.1449 2.01246 21.0499 2.00746C21.0279 2.00646 21.0079 2.00146 20.9849 2.00146C20.8849 2.00346 20.7839 2.01746 20.6859 2.04946L2.68595 8.04946C2.27695 8.18646 2.00195 8.56746 2.00195 8.99847C2.00195 9.42947 2.27695 9.81146 2.68595 9.94746L11.2109 12.7895L14.0539 21.3155C14.1899 21.7235 14.5709 21.9985 15.0019 21.9985C15.4329 21.9985 15.8139 21.7235 15.9499 21.3155L21.9499 3.31546C21.9819 3.21646 21.9969 3.11646 21.9979 3.01646C21.9989 2.99246 21.9929 2.97046 21.9919 2.94646Z",
    fill: fill
  }));
};
IconPaperPlane.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2O = ["size", "fill"];
var IconPauseCircle$1 = function IconPauseCircle(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2O);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 9C8 8.45 8.45 8 9 8C9.55 8 10 8.45 10 9V15C10 15.55 9.55 16 9 16C8.45 16 8 15.55 8 15V9ZM13.9995 9C13.9995 8.45 14.4495 8 14.9995 8C15.5495 8 15.9995 8.45 15.9995 9V15C15.9995 15.55 15.5495 16 14.9995 16C14.4495 16 13.9995 15.55 13.9995 15V9ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconPauseCircle$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2P = ["size", "fill"];
var IconPhoneCall$1 = function IconPhoneCall(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2P);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 17.4C20 17.289 19.993 17.179 19.979 17.072L15.358 16.011C15.267 16.187 15.167 16.379 15.073 16.556C14.618 17.426 14.292 18.058 13.446 17.719C10.14 16.559 7.441 13.86 6.266 10.513C5.909 9.729 6.589 9.373 7.451 8.922C7.626 8.831 7.815 8.732 7.988 8.641L6.928 4.021C6.817 4.006 6.709 4 6.6 4C5.167 4 4 5.166 4 6.599C4 13.988 10.011 20 17.4 20C18.834 20 20 18.834 20 17.4ZM21.936 16.638C21.978 16.886 22 17.141 22 17.4C22 19.936 19.937 22 17.4 22C8.909 22 2 15.091 2 6.599C2 4.063 4.063 2 6.6 2C6.86 2 7.117 2.022 7.366 2.065C7.609 2.104 7.854 2.166 8.091 2.248C8.417 2.361 8.661 2.633 8.738 2.969L10.107 8.933C10.183 9.261 10.088 9.606 9.854 9.849C9.718 9.992 9.715 9.995 8.475 10.643C9.479 12.818 11.224 14.556 13.354 15.527C14.005 14.286 14.008 14.282 14.15 14.145C14.394 13.912 14.737 13.819 15.066 13.892L21.03 15.261C21.366 15.338 21.639 15.583 21.751 15.908C21.833 16.143 21.896 16.388 21.936 16.638ZM13 4C16.859 4 20 7.14 20 11C20 11.552 20.447 12 21 12C21.553 12 22 11.552 22 11C22 6.037 17.963 2 13 2C12.448 2 12 2.447 12 3C12 3.552 12.448 4 13 4ZM12 7C12 6.447 12.448 6 13 6C15.757 6 18 8.243 18 11C18 11.552 17.553 12 17 12C16.447 12 16 11.552 16 11C16 9.345 14.654 8 13 8C12.448 8 12 7.552 12 7Z",
    fill: fill
  }));
};
IconPhoneCall$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2Q = ["size", "fill"];
var IconPhoneMissed$1 = function IconPhoneMissed(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2Q);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.802 7.232L16.535 6.5L15.802 5.767C15.4 5.364 15.4 4.705 15.802 4.301C16.205 3.899 16.864 3.899 17.268 4.301L18 5.035L18.733 4.301C19.136 3.899 19.795 3.899 20.198 4.301C20.601 4.705 20.601 5.364 20.198 5.767L19.465 6.5L20.198 7.232C20.601 7.635 20.601 8.294 20.198 8.698C19.795 9.1 19.136 9.1 18.733 8.698L18 7.964L17.268 8.698C16.864 9.1 16.205 9.1 15.802 8.698C15.4 8.294 15.4 7.635 15.802 7.232ZM17.401 20C10.012 20 4 13.988 4 6.599C4 5.166 5.166 4 6.6 4C6.709 4 6.818 4.006 6.928 4.021L7.989 8.641C7.813 8.733 7.621 8.833 7.444 8.926C6.573 9.381 5.944 9.711 6.266 10.513C7.441 13.86 10.14 16.559 13.447 17.719C14.294 18.058 14.618 17.426 15.073 16.556C15.167 16.378 15.267 16.187 15.359 16.011L19.979 17.072C19.993 17.179 20 17.289 20 17.4C20 18.834 18.834 20 17.401 20ZM21.936 16.638C21.896 16.388 21.833 16.143 21.751 15.908C21.639 15.583 21.366 15.338 21.031 15.261L15.067 13.892C14.738 13.819 14.394 13.912 14.151 14.145C14.008 14.282 14.005 14.285 13.355 15.527C11.215 14.552 9.466 12.806 8.475 10.644C9.714 9.995 9.718 9.992 9.855 9.849C10.088 9.606 10.183 9.261 10.108 8.933L8.739 2.969C8.661 2.633 8.417 2.361 8.092 2.249C7.855 2.166 7.609 2.104 7.365 2.065C7.116 2.022 6.861 2 6.6 2C4.064 2 2 4.063 2 6.599C2 15.091 8.908 22 17.401 22C19.937 22 22 19.936 22 17.4C22 17.141 21.978 16.886 21.936 16.638Z",
    fill: fill
  }));
};
IconPhoneMissed$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2R = ["size", "fill"];
var IconPhoneOff$1 = function IconPhoneOff(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2R);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.69855 14.63C5.01255 12.389 4.00055 9.613 4.00055 6.6C4.00055 5.166 5.16655 4 6.59955 4C6.70955 4 6.81755 4.007 6.92755 4.022L7.98855 8.642L7.81835 8.7308L7.81796 8.731C7.69304 8.79612 7.56526 8.86273 7.44355 8.927C6.57255 9.382 5.94355 9.711 6.26555 10.514C6.64155 11.584 7.18655 12.576 7.84455 13.484L9.27355 12.055C8.97155 11.609 8.70155 11.139 8.47455 10.645C9.71455 9.995 9.71855 9.992 9.85455 9.85C10.0885 9.607 10.1825 9.262 10.1075 8.934L8.73855 2.97C8.66155 2.634 8.41755 2.361 8.09255 2.249C7.85455 2.166 7.60855 2.105 7.36555 2.066C7.11655 2.023 6.86055 2 6.59955 2C4.06355 2 2.00055 4.064 2.00055 6.6C2.00055 10.166 3.22955 13.443 5.27155 16.057L6.69855 14.63ZM19.7396 4.2608C19.3926 3.9128 18.8307 3.9128 18.4826 4.2608L4.26065 18.4828C4.08765 18.6568 4.00065 18.8838 4.00065 19.1118C4.00065 19.3388 4.08765 19.5668 4.26065 19.7398C4.60765 20.0868 5.17065 20.0868 5.51765 19.7398L19.7396 5.5178C20.0877 5.1698 20.0877 4.6078 19.7396 4.2608ZM21.7508 15.9088C21.8328 16.1438 21.8958 16.3888 21.9358 16.6388C21.9778 16.8868 21.9998 17.1418 21.9998 17.4008C21.9998 19.9368 19.9368 21.9998 17.4008 21.9998C13.8338 21.9998 10.5568 20.7708 7.94385 18.7288L9.37085 17.3018C11.6118 18.9878 14.3868 19.9998 17.4008 19.9998C18.8338 19.9998 19.9998 18.8338 19.9998 17.4008C19.9998 17.2888 19.9938 17.1798 19.9788 17.0728L15.3588 16.0118L15.0738 16.5568L15.0692 16.5657C14.6166 17.4311 14.2889 18.0576 13.4468 17.7198C12.3938 17.3508 11.4138 16.8108 10.5128 16.1588L11.9428 14.7288C12.3898 15.0328 12.8608 15.3028 13.3548 15.5278C14.0039 14.2865 14.0078 14.2828 14.1502 14.1464L14.1508 14.1458C14.3938 13.9118 14.7378 13.8198 15.0668 13.8928L21.0308 15.2618C21.3668 15.3388 21.6388 15.5828 21.7508 15.9088Z",
    fill: fill
  }));
};
IconPhoneOff$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2S = ["size", "fill"];
var IconPhone$1 = function IconPhone(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2S);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.60011 4C5.16611 4 4.00011 5.166 4.00011 6.6C4.00011 13.988 10.0111 20 17.4001 20C18.8331 20 20.0001 18.834 20.0001 17.4C20.0001 17.289 19.9931 17.18 19.9791 17.072L15.3591 16.012C15.2671 16.188 15.1661 16.379 15.0741 16.557C14.6181 17.427 14.2881 18.059 13.4461 17.72C10.1401 16.56 7.44111 13.86 6.26611 10.514C5.90911 9.729 6.58911 9.373 7.45111 8.923C7.62611 8.831 7.81511 8.732 7.98811 8.642L6.92811 4.021C6.81711 4.007 6.70911 4 6.60011 4ZM17.4001 22C8.90811 22 2.00011 15.092 2.00011 6.6C2.00011 4.063 4.06311 2 6.60011 2C6.86011 2 7.11711 2.022 7.36611 2.065C7.60911 2.104 7.85311 2.166 8.09111 2.248C8.41611 2.361 8.66111 2.634 8.73811 2.97L10.1071 8.934C10.1831 9.262 10.0881 9.606 9.85411 9.85C9.71811 9.992 9.71511 9.995 8.47511 10.644C9.47911 12.818 11.2241 14.557 13.3541 15.527C14.0041 14.286 14.0081 14.282 14.1501 14.146C14.3941 13.912 14.7401 13.821 15.0661 13.893L21.0311 15.262C21.3661 15.339 21.6391 15.583 21.7511 15.908C21.8331 16.144 21.8951 16.388 21.9361 16.639C21.9781 16.886 22.0001 17.142 22.0001 17.4C22.0001 19.937 19.9361 22 17.4001 22Z",
    fill: fill
  }));
};
IconPhone$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2T = ["size", "fill"];
var IconPlayCircle$1 = function IconPlayCircle(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2T);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.5 14.5996V9.4006L14.309 11.9996L11.5 14.5996ZM12.339 7.4526C11.841 6.9906 11.114 6.8706 10.488 7.1456C9.878 7.4116 9.5 7.9806 9.5 8.6296V15.3706C9.5 16.0196 9.878 16.5886 10.488 16.8546C10.711 16.9526 10.948 16.9996 11.181 16.9996C11.604 16.9996 12.019 16.8446 12.338 16.5486L15.98 13.1786C16.311 12.8726 16.5 12.4436 16.5 11.9996C16.5 11.5566 16.311 11.1266 15.98 10.8216L12.339 7.4526ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconPlayCircle$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2U = ["size", "fill"];
var IconPowerOff = function IconPowerOff(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2U);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.0001 12.4998C13.0001 13.0528 12.5521 13.4998 12.0001 13.4998C11.4481 13.4998 11.0001 13.0528 11.0001 12.4998V2.49976C11.0001 1.94676 11.4481 1.49976 12.0001 1.49976C12.5521 1.49976 13.0001 1.94676 13.0001 2.49976V12.4998ZM15.239 4.04106C15.492 3.55006 16.096 3.35906 16.586 3.61106C19.925 5.33806 22 8.74306 22 12.5001C22 18.0131 17.514 22.5001 12 22.5001C6.486 22.5001 2 18.0131 2 12.5001C2 8.74306 4.075 5.33806 7.415 3.61106C7.904 3.35806 8.508 3.54906 8.762 4.04106C9.016 4.53106 8.823 5.13406 8.333 5.38806C5.66 6.76906 4 9.49406 4 12.5001C4 16.9111 7.589 20.5001 12 20.5001C16.411 20.5001 20 16.9111 20 12.5001C20 9.49406 18.34 6.76906 15.668 5.38806C15.177 5.13406 14.985 4.53106 15.239 4.04106Z",
    fill: fill
  }));
};
IconPowerOff.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2V = ["size", "fill"];
var IconPrinter$1 = function IconPrinter(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2V);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 16.333C20 16.701 19.715 17 19.363 17H18.5V15C18.5 13.897 17.603 13 16.5 13H7.5C6.397 13 5.5 13.897 5.5 15V17H4.637C4.285 17 4 16.701 4 16.333V9.667C4 9.299 4.285 9 4.637 9H6H8H16H18H19.363C19.715 9 20 9.299 20 9.667V16.333ZM7.5 19V15H16.5L16.502 19H7.5ZM8.014 5H16V7H8.007L8.014 5ZM19.363 7H18V5C18 3.897 17.178 3 16.167 3H7.833C6.822 3 6 3.897 6 5V7H4.637C3.183 7 2 8.196 2 9.667V16.333C2 17.804 3.183 19 4.637 19H5.5C5.5 20.103 6.397 21 7.5 21H16.5C17.603 21 18.5 20.103 18.5 19H19.363C20.817 19 22 17.804 22 16.333V9.667C22 8.196 20.817 7 19.363 7Z",
    fill: fill
  }));
};
IconPrinter$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2W = ["size", "fill"];
var IconRecording$1 = function IconRecording(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2W);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 14C16.897 14 16 13.103 16 12C16 10.897 16.897 10 18 10C19.103 10 20 10.897 20 12C20 13.103 19.103 14 18 14ZM4 12C4 10.897 4.897 10 6 10C7.103 10 8 10.897 8 12C8 13.103 7.103 14 6 14C4.897 14 4 13.103 4 12ZM18 8C15.794 8 14 9.794 14 12C14 12.731 14.212 13.409 14.557 14H9.443C9.788 13.409 10 12.731 10 12C10 9.794 8.206 8 6 8C3.794 8 2 9.794 2 12C2 14.206 3.794 16 6 16H18C20.206 16 22 14.206 22 12C22 9.794 20.206 8 18 8Z",
    fill: fill
  }));
};
IconRecording$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2X = ["size", "fill"];
var IconReply$1 = function IconReply(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2X);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.454 11.0002C14.017 11.0002 17.231 12.6342 19.264 15.2592C18.329 11.3902 14.734 8.50023 10.454 8.50023C9.901 8.50023 9.454 8.05323 9.454 7.50023V5.57723L4.63 9.75123L9.454 13.9632V12.0002C9.454 11.4472 9.901 11.0002 10.454 11.0002ZM20.221 20.5002C19.76 20.5002 19.358 20.1852 19.249 19.7372C18.359 16.0882 15.228 13.4522 11.454 13.0532V14.1742C11.454 14.8802 11.035 15.5092 10.361 15.8142C9.63 16.1472 8.777 16.0272 8.184 15.5102L3.118 11.0862C2.725 10.7422 2.5 10.2552 2.5 9.75023C2.5 9.24523 2.725 8.75823 3.118 8.41423L8.184 3.99023C8.777 3.47323 9.63 3.35323 10.361 3.68623C11.035 3.99123 11.454 4.62023 11.454 5.32623V6.54423C17.078 7.03723 21.5 11.6502 21.5 17.2502C21.5 18.0602 21.396 18.8962 21.192 19.7362C21.084 20.1852 20.683 20.5002 20.221 20.5002Z",
    fill: fill
  }));
};
IconReply$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2Y = ["size", "fill"];
var IconShake = function IconShake(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2Y);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 7.642C12.679 7.559 12.347 7.5 12 7.5C11.653 7.5 11.321 7.559 11 7.642V3.5C11 2.947 11.448 2.5 12 2.5C12.552 2.5 13 2.947 13 3.5V7.642ZM5.4995 18.5C5.2715 18.5 5.0435 18.423 4.8555 18.265C2.6915 16.443 1.4995 14.041 1.4995 11.5C1.4995 8.959 2.6915 6.557 4.8555 4.735C5.2775 4.378 5.9085 4.433 6.2655 4.856C6.6205 5.278 6.5665 5.909 6.1445 6.265C4.4385 7.7 3.4995 9.56 3.4995 11.5C3.4995 13.44 4.4385 15.3 6.1445 16.735C6.5665 17.091 6.6205 17.722 6.2655 18.144C6.0675 18.379 5.7845 18.5 5.4995 18.5ZM12 12.5C11.449 12.5 11 12.052 11 11.5C11 10.948 11.449 10.5 12 10.5C12.551 10.5 13 10.948 13 11.5C13 12.052 12.551 12.5 12 12.5ZM12 15.5C11.653 15.5 11.321 15.441 11 15.358V20.5C11 21.053 11.448 21.5 12 21.5C12.552 21.5 13 21.053 13 20.5V15.358C12.679 15.441 12.347 15.5 12 15.5ZM15.2345 16.145C15.4335 16.379 15.7155 16.5 16.0005 16.5C16.2285 16.5 16.4565 16.423 16.6445 16.265C18.1635 14.985 19.0005 13.293 19.0005 11.5C19.0005 9.707 18.1635 8.015 16.6445 6.735C16.2225 6.379 15.5905 6.434 15.2345 6.855C14.8795 7.278 14.9335 7.909 15.3555 8.265C16.4165 9.157 17.0005 10.307 17.0005 11.5C17.0005 12.693 16.4165 13.843 15.3555 14.735C14.9335 15.091 14.8795 15.722 15.2345 16.145ZM7.9995 16.5C7.7715 16.5 7.5435 16.423 7.3555 16.265C5.8365 14.985 4.9995 13.293 4.9995 11.5C4.9995 9.707 5.8365 8.015 7.3555 6.735C7.7775 6.379 8.4085 6.433 8.7655 6.855C9.1205 7.278 9.0665 7.909 8.6445 8.265C7.5835 9.157 6.9995 10.307 6.9995 11.5C6.9995 12.693 7.5835 13.843 8.6445 14.735C9.0665 15.091 9.1205 15.722 8.7655 16.145C8.5675 16.379 8.2845 16.5 7.9995 16.5ZM17.7345 18.144C17.9325 18.379 18.2155 18.5 18.5005 18.5C18.7285 18.5 18.9565 18.423 19.1445 18.265C21.3085 16.443 22.5005 14.041 22.5005 11.5C22.5005 8.959 21.3085 6.557 19.1445 4.735C18.7215 4.379 18.0905 4.433 17.7345 4.856C17.3795 5.278 17.4335 5.909 17.8555 6.265C19.5615 7.7 20.5005 9.56 20.5005 11.5C20.5005 13.44 19.5615 15.3 17.8555 16.735C17.4335 17.091 17.3795 17.722 17.7345 18.144Z",
    fill: fill
  }));
};
IconShake.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2Z = ["size", "fill"];
var IconShareNode$1 = function IconShareNode(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2Z);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.5 19C17.948 19 17.5 18.552 17.5 18C17.5 17.448 17.948 17 18.5 17C19.052 17 19.5 17.448 19.5 18C19.5 18.552 19.052 19 18.5 19ZM5.5 13C4.948 13 4.5 12.552 4.5 12C4.5 11.448 4.948 11 5.5 11C6.052 11 6.5 11.448 6.5 12C6.5 12.552 6.052 13 5.5 13ZM18.5 5C19.052 5 19.5 5.448 19.5 6C19.5 6.552 19.052 7 18.5 7C17.948 7 17.5 6.552 17.5 6C17.5 5.448 17.948 5 18.5 5ZM18.5 15C17.683 15 16.943 15.33 16.401 15.861L8.466 12.335C8.479 12.224 8.5 12.114 8.5 12C8.5 11.886 8.479 11.776 8.466 11.665L16.401 8.139C16.943 8.67 17.683 9 18.5 9C20.154 9 21.5 7.654 21.5 6C21.5 4.346 20.154 3 18.5 3C16.846 3 15.5 4.346 15.5 6C15.5 6.114 15.521 6.224 15.534 6.335L7.599 9.861C7.057 9.33 6.317 9 5.5 9C3.846 9 2.5 10.346 2.5 12C2.5 13.654 3.846 15 5.5 15C6.317 15 7.057 14.67 7.599 14.139L15.534 17.665C15.521 17.776 15.5 17.886 15.5 18C15.5 19.654 16.846 21 18.5 21C20.154 21 21.5 19.654 21.5 18C21.5 16.346 20.154 15 18.5 15Z",
    fill: fill
  }));
};
IconShareNode$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2_ = ["size", "fill"];
var IconSignal = function IconSignal(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2_);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 4C18.45 4 18 4.45 18 5V20C18 20.55 18.45 21 19 21C19.55 21 20 20.55 20 20V5C20 4.45 19.55 4 19 4ZM12 8C11.45 8 11 8.45 11 9V20C11 20.55 11.45 21 12 21C12.55 21 13 20.55 13 20V9C13 8.45 12.55 8 12 8ZM4 13C4 12.45 4.45 12 5 12C5.55 12 6 12.45 6 13V20C6 20.55 5.55 21 5 21C4.45 21 4 20.55 4 20V13Z",
    fill: fill
  }));
};
IconSignal.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$2$ = ["size", "fill"];
var IconSmartphone$1 = function IconSmartphone(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2$);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.5 6H14.5C15.053 6 15.5 6.447 15.5 7C15.5 7.553 15.053 8 14.5 8H9.5C8.947 8 8.5 7.553 8.5 7C8.5 6.447 8.947 6 9.5 6ZM10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18C11.172 18 10.5 17.328 10.5 16.5ZM18 19C18 19.552 17.552 20 17 20H7C6.448 20 6 19.552 6 19V5C6 4.448 6.448 4 7 4H17C17.552 4 18 4.448 18 5V19ZM17 2H7C5.346 2 4 3.346 4 5V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V5C20 3.346 18.654 2 17 2Z",
    fill: fill
  }));
};
IconSmartphone$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$30 = ["size", "fill"];
var IconSpeaker$1 = function IconSpeaker(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$30);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 19C18 19.552 17.552 20 17 20H7C6.448 20 6 19.552 6 19V5C6 4.448 6.448 4 7 4H17C17.552 4 18 4.448 18 5V19ZM17 2H7C5.346 2 4 3.346 4 5V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V5C20 3.346 18.654 2 17 2ZM12 17C11.173 17 10.5 16.327 10.5 15.5C10.5 14.673 11.173 14 12 14C12.827 14 13.5 14.673 13.5 15.5C13.5 16.327 12.827 17 12 17ZM12 12C10.07 12 8.5 13.57 8.5 15.5C8.5 17.43 10.07 19 12 19C13.93 19 15.5 17.43 15.5 15.5C15.5 13.57 13.93 12 12 12ZM12 7C12.552 7 13 7.448 13 8C13 8.552 12.552 9 12 9C11.448 9 11 8.552 11 8C11 7.448 11.448 7 12 7ZM12 11C13.654 11 15 9.654 15 8C15 6.346 13.654 5 12 5C10.346 5 9 6.346 9 8C9 9.654 10.346 11 12 11Z",
    fill: fill
  }));
};
IconSpeaker$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$31 = ["size", "fill"];
var IconSquareCircle$1 = function IconSquareCircle(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$31);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 14H14V10H10V14ZM14.75 8H9.25C8.561 8 8 8.561 8 9.25V14.75C8 15.439 8.561 16 9.25 16H14.75C15.439 16 16 15.439 16 14.75V9.25C16 8.561 15.439 8 14.75 8ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconSquareCircle$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$32 = ["size", "fill"];
var IconTV$1 = function IconTV(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$32);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 19.0002C19 19.5522 18.552 20.0002 18 20.0002H6C5.448 20.0002 5 19.5522 5 19.0002V9.00025C5 8.44825 5.448 8.00025 6 8.00025H18C18.552 8.00025 19 8.44825 19 9.00025V19.0002ZM18 6.00025H14.414L16.707 3.70725C17.098 3.31625 17.098 2.68425 16.707 2.29325C16.316 1.90225 15.684 1.90225 15.293 2.29325L12 5.58625L8.707 2.29325C8.316 1.90225 7.684 1.90225 7.293 2.29325C6.902 2.68425 6.902 3.31625 7.293 3.70725L9.586 6.00025H6C4.346 6.00025 3 7.34625 3 9.00025V19.0002C3 20.6542 4.346 22.0002 6 22.0002H18C19.654 22.0002 21 20.6542 21 19.0002V9.00025C21 7.34625 19.654 6.00025 18 6.00025Z",
    fill: fill
  }));
};
IconTV$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$33 = ["size", "fill"];
var IconVideoOff$1 = function IconVideoOff(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$33);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 9.40049L17.191 12.0005L20 14.5995V9.40049ZM22 8.62949V15.3705C22 16.0195 21.621 16.5885 21.012 16.8545C20.788 16.9525 20.553 17.0005 20.319 17.0005C20.113 17.0005 19.91 16.9625 19.718 16.8895L15 12.1715V8.00049C15 7.44849 14.552 7.00049 14 7.00049H9.828L7.828 5.00049H14C15.654 5.00049 17 6.34549 17 8.00049V9.45149L19.161 7.45149C19.66 6.99149 20.386 6.87349 21.012 7.14549C21.621 7.41149 22 7.98049 22 8.62949ZM14 17.0005H5C4.448 17.0005 4 16.5515 4 16.0005V8.00049C4 7.67949 4.161 7.40749 4.396 7.22349L2.974 5.80149C2.379 6.35049 2 7.12949 2 8.00049V16.0005C2 17.6545 3.346 19.0005 5 19.0005H14C14.616 19.0005 15.188 18.8125 15.665 18.4935L14.143 16.9705C14.094 16.9785 14.051 17.0005 14 17.0005ZM20.707 19.2935C21.098 19.6835 21.098 20.3165 20.707 20.7075C20.512 20.9025 20.256 21.0005 20 21.0005C19.744 21.0005 19.488 20.9025 19.293 20.7075L16.386 17.7995L14.931 16.3445L5.586 7.00049L3.826 5.24049L3.293 4.70749C2.902 4.31649 2.902 3.68349 3.293 3.29349C3.684 2.90249 4.316 2.90249 4.707 3.29349L6.414 5.00049L8.414 7.00049L15 13.5865L17 15.5865L20.707 19.2935Z",
    fill: fill
  }));
};
IconVideoOff$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$34 = ["size", "fill"];
var IconVideo$1 = function IconVideo(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$34);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 14.6L17.191 12L20 9.401V14.6ZM15 16C15 16.552 14.552 17 14 17H5C4.448 17 4 16.552 4 16V8C4 7.449 4.448 7 5 7H14C14.552 7 15 7.449 15 8V16ZM21.012 7.146C20.386 6.873 19.66 6.992 19.161 7.452L17 9.452V8C17 6.346 15.654 5 14 5H5C3.346 5 2 6.346 2 8V16C2 17.655 3.346 19 5 19H14C15.654 19 17 17.655 17 16V14.549L19.161 16.548C19.481 16.845 19.896 17 20.319 17C20.553 17 20.788 16.953 21.012 16.855C21.621 16.589 22 16.02 22 15.371V8.63C22 7.981 21.621 7.412 21.012 7.146Z",
    fill: fill
  }));
};
IconVideo$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$35 = ["size", "fill"];
var IconVolumeHigh$1 = function IconVolumeHigh(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$35);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.25 5.89865L8.149 9.39665C7.982 9.50965 7.785 9.57165 7.583 9.57165H3.25V14.4287H7.583C7.785 14.4287 7.982 14.4907 8.149 14.6037L13.25 18.1017V5.89865ZM15.25 4.00065V20.0007C15.25 20.3717 15.044 20.7117 14.716 20.8847C14.57 20.9617 14.41 21.0007 14.25 21.0007C14.052 21.0007 13.854 20.9417 13.685 20.8257L7.273 16.4287H2.25C1.698 16.4287 1.25 15.9817 1.25 15.4287V8.57165C1.25 8.01865 1.698 7.57165 2.25 7.57165H7.273L13.685 3.17465C13.99 2.96465 14.387 2.94165 14.716 3.11565C15.044 3.28865 15.25 3.62865 15.25 4.00065ZM19.388 5.22965C18.962 4.87765 18.332 4.93665 17.98 5.36265C17.627 5.78765 17.687 6.41865 18.112 6.77065C19.813 8.17965 20.75 10.0367 20.75 12.0007C20.75 13.9637 19.813 15.8207 18.112 17.2297C17.687 17.5827 17.627 18.2127 17.98 18.6377C18.178 18.8777 18.463 19.0007 18.75 19.0007C18.975 19.0007 19.201 18.9247 19.388 18.7707C21.556 16.9747 22.75 14.5697 22.75 12.0007C22.75 9.43065 21.556 7.02565 19.388 5.22965ZM18.029 15.6277C17.832 15.8727 17.542 16.0007 17.25 16.0007C17.029 16.0007 16.808 15.9277 16.623 15.7797C16.193 15.4327 16.125 14.8037 16.471 14.3737C17.506 13.0867 17.506 10.9137 16.471 9.62765C16.125 9.19665 16.193 8.56765 16.623 8.22065C17.053 7.87665 17.683 7.94365 18.029 8.37365C19.666 10.4077 19.666 13.5927 18.029 15.6277Z",
    fill: fill
  }));
};
IconVolumeHigh$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$36 = ["size", "fill"];
var IconVolumeLow$1 = function IconVolumeLow(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$36);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.9932 5.89865L9.89223 9.39665C9.72523 9.50965 9.52823 9.57165 9.32623 9.57165H4.99323V14.4287H9.32623C9.52823 14.4287 9.72523 14.4907 9.89223 14.6037L14.9932 18.1017V5.89865ZM16.9932 4.00065V20.0007C16.9932 20.3717 16.7872 20.7117 16.4592 20.8847C16.3132 20.9617 16.1532 21.0007 15.9932 21.0007C15.7952 21.0007 15.5972 20.9417 15.4282 20.8257L9.01622 16.4287H3.99323C3.44123 16.4287 2.99323 15.9817 2.99323 15.4287V8.57165C2.99323 8.01865 3.44123 7.57165 3.99323 7.57165H9.01622L15.4282 3.17465C15.7342 2.96465 16.1312 2.94165 16.4592 3.11565C16.7872 3.28865 16.9932 3.62865 16.9932 4.00065ZM20.7722 15.6277C20.5752 15.8727 20.2852 16.0007 19.9932 16.0007C19.7722 16.0007 19.5512 15.9277 19.3662 15.7797C18.9362 15.4327 18.8682 14.8037 19.2142 14.3737C20.2492 13.0867 20.2492 10.9137 19.2142 9.62765C18.8682 9.19665 18.9362 8.56765 19.3662 8.22065C19.7962 7.87665 20.4262 7.94365 20.7722 8.37365C22.4092 10.4077 22.4092 13.5927 20.7722 15.6277Z",
    fill: fill
  }));
};
IconVolumeLow$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$37 = ["size", "fill"];
var IconVolumeOff$1 = function IconVolumeOff(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$37);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 14.4291H11.333C11.535 14.4291 11.732 14.4911 11.899 14.6041L17 18.1021V5.89914L11.899 9.39714C11.732 9.51014 11.535 9.57214 11.333 9.57214H7V14.4291ZM18 21.0001C17.802 21.0001 17.604 20.9421 17.435 20.8251L11.023 16.4291H6C5.448 16.4291 5 15.9821 5 15.4291V8.57214C5 8.01914 5.448 7.57214 6 7.57214H11.023L17.435 3.17514C17.74 2.96514 18.137 2.94214 18.466 3.11614C18.794 3.28814 19 3.62914 19 4.00014V20.0001C19 20.3711 18.794 20.7121 18.466 20.8851C18.32 20.9621 18.16 21.0001 18 21.0001Z",
    fill: fill
  }));
};
IconVolumeOff$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$38 = ["size", "fill"];
var IconVolumeSlash$1 = function IconVolumeSlash(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$38);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.25 10.6717V5.89865L10.418 7.83965L8.979 6.40165L13.685 3.17465C13.99 2.96465 14.387 2.94165 14.716 3.11565C15.044 3.28865 15.25 3.62865 15.25 4.00065V12.6717L13.25 10.6717ZM4.457 3.29325C4.066 2.90225 3.434 2.90225 3.043 3.29325C2.652 3.68425 2.652 4.31625 3.043 4.70725L19.043 20.7073C19.238 20.9023 19.494 21.0003 19.75 21.0003C20.006 21.0003 20.262 20.9023 20.457 20.7073C20.848 20.3163 20.848 19.6843 20.457 19.2933L4.457 3.29325ZM16.6606 14.0823L18.0986 15.5213C19.6566 13.4833 19.6386 10.3743 18.0296 8.37325C17.6826 7.94325 17.0536 7.87625 16.6226 8.22125C16.1926 8.56725 16.1246 9.19625 16.4706 9.62725C17.4336 10.8233 17.4886 12.7783 16.6606 14.0823ZM18.972 16.3943C20.12 15.1213 20.75 13.5993 20.75 12.0003C20.75 10.0363 19.813 8.18025 18.112 6.77125C17.687 6.41825 17.627 5.78725 17.98 5.36225C18.332 4.93725 18.962 4.87825 19.388 5.22925C21.556 7.02525 22.75 9.43125 22.75 12.0003C22.75 14.1373 21.913 16.1553 20.387 17.8093L18.972 16.3943ZM13.25 18.1019L8.149 14.6039C7.982 14.4909 7.785 14.4289 7.583 14.4289H3.25V9.57185H6.493L4.493 7.57185H2.25C1.698 7.57185 1.25 8.01885 1.25 8.57185V15.4289C1.25 15.9819 1.698 16.4289 2.25 16.4289H7.273L13.685 20.8259C13.854 20.9419 14.052 20.9999 14.25 20.9999C14.41 20.9999 14.57 20.9619 14.716 20.8849C15.044 20.7119 15.25 20.3719 15.25 19.9999V18.3289L13.25 16.3289V18.1019Z",
    fill: fill
  }));
};
IconVolumeSlash$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$39 = ["size", "fill"];
var IconWifi = function IconWifi(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$39);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.9997 4.00012C15.6477 4.00012 19.1007 5.39512 21.7247 7.92912C22.1217 8.31212 22.1327 8.94612 21.7497 9.34312C21.5537 9.54612 21.2917 9.64812 21.0307 9.64812C20.7807 9.64812 20.5297 9.55512 20.3357 9.36712C18.0857 7.19612 15.1257 6.00012 11.9997 6.00012C8.87375 6.00012 5.91375 7.19612 3.66375 9.36712C3.26875 9.75212 2.63475 9.74112 2.24975 9.34312C1.86775 8.94612 1.87775 8.31212 2.27575 7.92912C4.89975 5.39512 8.35275 4.00012 11.9997 4.00012ZM12.0001 8.99992C9.57215 8.99992 7.21215 10.0009 5.52515 11.7479C5.14315 12.1459 5.15315 12.7789 5.55115 13.1619C5.94715 13.5459 6.58215 13.5349 6.96515 13.1379C8.27615 11.7789 10.1111 10.9999 12.0001 10.9999C13.8891 10.9999 15.7241 11.7789 17.0351 13.1379C17.2311 13.3409 17.4931 13.4429 17.7551 13.4429C18.0051 13.4429 18.2561 13.3499 18.4491 13.1619C18.8471 12.7789 18.8571 12.1459 18.4751 11.7479C16.7881 10.0009 14.4281 8.99992 12.0001 8.99992ZM8.52715 15.4029C9.46415 14.4989 10.6971 13.9999 12.0001 13.9999C13.3031 13.9999 14.5361 14.4989 15.4731 15.4029C15.8701 15.7869 15.8811 16.4199 15.4981 16.8169C15.3021 17.0209 15.0401 17.1229 14.7781 17.1229C14.5281 17.1229 14.2771 17.0289 14.0841 16.8419C12.9591 15.7559 11.0411 15.7559 9.91615 16.8419C9.52115 17.2259 8.88715 17.2149 8.50215 16.8169C8.11915 16.4199 8.13015 15.7869 8.52715 15.4029ZM11.0001 18.9999C11.0001 18.4479 11.4471 17.9999 12.0001 17.9999C12.5531 17.9999 13.0001 18.4479 13.0001 18.9999C13.0001 19.5519 12.5531 19.9999 12.0001 19.9999C11.4471 19.9999 11.0001 19.5519 11.0001 18.9999Z",
    fill: fill
  }));
};
IconWifi.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3a = ["size", "fill"];
var IconWifiSlash = function IconWifiSlash(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3a);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.4366 11.0221L10.5446 9.13013L8.0826 6.66713L6.5316 5.11713L4.7076 3.29313C4.3166 2.90213 3.6836 2.90213 3.2926 3.29313C2.9026 3.68313 2.9026 4.31613 3.2926 4.70713L4.6686 6.08313L6.1296 7.54313L8.3636 9.77713L9.9096 11.3231L12.6486 14.0621L15.4416 16.8551L19.2926 20.7071C19.4886 20.9021 19.7446 21.0001 19.9996 21.0001C20.2556 21.0001 20.5116 20.9021 20.7076 20.7071C21.0976 20.3161 21.0976 19.6831 20.7076 19.2931L12.4366 11.0221ZM12.0001 17.9996C11.4471 17.9996 11.0001 18.4476 11.0001 18.9996C11.0001 19.5516 11.4471 19.9996 12.0001 19.9996C12.5531 19.9996 13.0001 19.5516 13.0001 18.9996C13.0001 18.4476 12.5531 17.9996 12.0001 17.9996ZM11.9997 3.99983C15.6477 3.99983 19.1007 5.39483 21.7247 7.92883C22.1217 8.31183 22.1327 8.94583 21.7497 9.34283C21.5537 9.54583 21.2917 9.64783 21.0307 9.64783C20.7807 9.64783 20.5297 9.55483 20.3357 9.36683C18.0857 7.19583 15.1257 5.99983 11.9997 5.99983C11.0367 5.99983 10.0917 6.12683 9.1757 6.34683L7.5607 4.73183C8.9767 4.25983 10.4687 3.99983 11.9997 3.99983ZM3.8243 6.65243C3.2853 7.04243 2.7623 7.45943 2.2753 7.92843C1.8783 8.31243 1.8673 8.94543 2.2503 9.34243C2.6343 9.74043 3.2693 9.75143 3.6643 9.36743C4.1603 8.88843 4.6963 8.46543 5.2563 8.08343L3.8243 6.65243ZM17.7553 13.4423C17.4933 13.4423 17.2313 13.3403 17.0353 13.1373C16.2433 12.3163 15.2583 11.7113 14.1863 11.3583L11.8373 9.00833C11.8624 9.00786 11.8874 9.00589 11.9126 9.00391C11.9417 9.00162 11.9708 8.99933 12.0003 8.99933C14.4283 8.99933 16.7883 10.0013 18.4743 11.7473C18.8573 12.1453 18.8473 12.7783 18.4493 13.1613C18.2563 13.3493 18.0053 13.4423 17.7553 13.4423ZM7.4317 10.2599C6.7377 10.6679 6.0907 11.1619 5.5257 11.7479C5.1427 12.1449 5.1537 12.7789 5.5507 13.1619C5.9467 13.5459 6.5807 13.5349 6.9647 13.1369C7.5267 12.5549 8.1887 12.0879 8.9057 11.7339L7.4317 10.2599ZM8.5024 16.8169C8.1194 16.4199 8.1304 15.7869 8.5274 15.4029C9.2794 14.6759 10.2264 14.2269 11.2444 14.0719L13.7614 16.5899C12.6194 15.7749 10.9414 15.8519 9.9164 16.8409C9.5204 17.2259 8.8864 17.2149 8.5024 16.8169Z",
    fill: fill
  }));
};
IconWifiSlash.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3b = ["size", "fill"];
var IconArchive = function IconArchive(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3b);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 7H6C5.449 7 5 6.551 5 6C5 5.449 5.449 5 6 5H18C18.552 5 19 5.449 19 6C19 6.551 18.552 7 18 7ZM15 13.134C15 13.61 14.61 14 14.134 14H9.866C9.39 14 9 13.61 9 13.134V12.866C9 12.39 9.39 12 9.866 12H14.134C14.61 12 15 12.39 15 12.866V13.134ZM18 3H6C4.346 3 3 4.346 3 6C3 6.883 3.391 7.67 4 8.22V18C4 19.654 5.346 21 7 21H17C18.654 21 20 19.654 20 18V8.22C20.609 7.67 21 6.883 21 6C21 4.346 19.654 3 18 3Z",
    fill: fill
  }));
};
IconArchive.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3c = ["size", "fill"];
var IconBook = function IconBook(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3c);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 19C6.449 19 6 18.551 6 18C6 17.449 6.449 17 7 17H18V19H7ZM19 3H7C5.346 3 4 4.346 4 6V18C4 19.654 5.346 21 7 21H18H19C19.552 21 20 20.552 20 20V19V17V4C20 3.448 19.552 3 19 3Z",
    fill: fill
  }));
};
IconBook.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3d = ["size", "fill"];
var IconBookOpen = function IconBookOpen(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3d);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 25",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.439 4.95036C20.82 4.85236 21.211 4.93736 21.518 5.17536C21.825 5.41436 22 5.77436 22 6.16136V17.8474C22 18.4184 21.615 18.9164 21.062 19.0584L13.5 20.9994V6.73336L20.439 4.95036ZM4.55837 4.95006L11.5004 6.73306V21.0001L3.93837 19.0581C3.38637 18.9171 3.00037 18.4191 3.00037 17.8471V6.16206C3.00037 5.77406 3.17637 5.41506 3.48237 5.17506C3.78837 4.93806 4.18137 4.85506 4.55837 4.95006Z",
    fill: fill
  }));
};
IconBookOpen.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3e = ["size", "fill"];
var IconCalendar = function IconCalendar(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3e);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 11H5V7C5 6.449 5.449 6 6 6H7V7C7 7.55 7.45 8 8 8C8.55 8 9 7.55 9 7V6H15V7C15 7.55 15.45 8 16 8C16.55 8 17 7.55 17 7V6H18C18.551 6 19 6.449 19 7V11ZM16 17H12C11.45 17 11 16.55 11 16C11 15.45 11.45 15 12 15H16C16.55 15 17 15.45 17 16C17 16.55 16.55 17 16 17ZM8 17C7.45 17 7 16.55 7 16C7 15.45 7.45 15 8 15C8.55 15 9 15.45 9 16C9 16.55 8.55 17 8 17ZM18 4H17V3C17 2.45 16.55 2 16 2C15.45 2 15 2.45 15 3V4H9V3C9 2.45 8.55 2 8 2C7.45 2 7 2.45 7 3V4H6C4.346 4 3 5.346 3 7V19C3 20.654 4.346 22 6 22H18C19.654 22 21 20.654 21 19V7C21 5.346 19.654 4 18 4Z",
    fill: fill
  }));
};
IconCalendar.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3f = ["size", "fill"];
var IconClipboard = function IconClipboard(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3f);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 8H16C16.552 8 17 7.553 17 7V3C17 2.447 16.552 2 16 2H8C7.448 2 7 2.447 7 3V7C7 7.553 7.448 8 8 8ZM18 7V4C19.654 4 21 5.346 21 7V19C21 20.654 19.654 22 18 22H6C4.346 22 3 20.654 3 19V7C3 5.346 4.346 4 6 4V7C6 8.103 6.897 9 8 9H16C17.103 9 18 8.103 18 7Z",
    fill: fill
  }));
};
IconClipboard.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3g = ["size", "fill"];
var IconFile = function IconFile(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3g);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 3.978L17.742 8H14.714C14.32 8 14 7.619 14 7.15V3.978ZM19.741 7.328L15.296 2.328C15.107 2.119 14.838 2 14.556 2H6.556C5.146 2 4 3.122 4 4.5V19.5C4 20.878 5.146 22 6.556 22H17.444C18.854 22 20 20.878 20 19.5V8C20 7.751 19.908 7.512 19.741 7.328Z",
    fill: fill
  }));
};
IconFile.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3h = ["size", "fill"];
var IconFileLines = function IconFileLines(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3h);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.7139 8C14.3199 8 13.9999 7.619 13.9999 7.15V3.978L17.7419 8H14.7139ZM14.9999 18H8.99988C8.44788 18 7.99988 17.552 7.99988 17C7.99988 16.448 8.44788 16 8.99988 16H14.9999C15.5529 16 15.9999 16.448 15.9999 17C15.9999 17.552 15.5529 18 14.9999 18ZM8.99988 12H11.9999C12.5519 12 12.9999 12.448 12.9999 13C12.9999 13.552 12.5519 14 11.9999 14H8.99988C8.44788 14 7.99988 13.552 7.99988 13C7.99988 12.448 8.44788 12 8.99988 12ZM19.7399 7.328L15.2959 2.328C15.1069 2.119 14.8379 2 14.5559 2H6.55588C5.14688 2 3.99988 3.122 3.99988 4.5V19.5C3.99988 20.878 5.14688 22 6.55588 22H17.4439C18.8539 22 19.9999 20.878 19.9999 19.5V8C19.9999 7.751 19.9069 7.512 19.7399 7.328Z",
    fill: fill
  }));
};
IconFileLines.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3i = ["size", "fill"];
var IconFilePlus = function IconFilePlus(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3i);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.7139 8C14.3199 8 13.9999 7.619 13.9999 7.15V3.978L17.7419 8H14.7139ZM13.9999 15H12.9999V16C12.9999 16.552 12.5529 17 11.9999 17C11.4469 17 10.9999 16.552 10.9999 16V15H9.99988C9.44688 15 8.99988 14.552 8.99988 14C8.99988 13.448 9.44688 13 9.99988 13H10.9999V12C10.9999 11.448 11.4469 11 11.9999 11C12.5529 11 12.9999 11.448 12.9999 12V13H13.9999C14.5529 13 14.9999 13.448 14.9999 14C14.9999 14.552 14.5529 15 13.9999 15ZM19.7399 7.328L15.2959 2.328C15.1069 2.119 14.8379 2 14.5559 2H6.55588C5.14688 2 3.99988 3.122 3.99988 4.5V19.5C3.99988 20.878 5.14688 22 6.55588 22H17.4439C18.8539 22 19.9999 20.878 19.9999 19.5V8C19.9999 7.751 19.9069 7.512 19.7399 7.328Z",
    fill: fill
  }));
};
IconFilePlus.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3j = ["size", "fill"];
var IconFolder = function IconFolder(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3j);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.5 21H4.5C3.122 21 2 19.909 2 18.568V6.432C2 5.091 3.122 4 4.5 4H9.101C9.4 4 9.685 4.135 9.875 4.367L12.474 7.546H19.5C20.878 7.546 22 8.637 22 9.978V18.568C22 19.909 20.878 21 19.5 21Z",
    fill: fill
  }));
};
IconFolder.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3k = ["size", "fill"];
var IconFolderMin = function IconFolderMin(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3k);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 15.5H10C9.45 15.5 9 15.05 9 14.5C9 13.95 9.45 13.5 10 13.5H14C14.55 13.5 15 13.95 15 14.5C15 15.05 14.55 15.5 14 15.5ZM19.5 7.546H12.474L9.875 4.367C9.685 4.135 9.4 4 9.101 4H4.5C3.122 4 2 5.091 2 6.432V18.568C2 19.909 3.122 21 4.5 21H19.5C20.878 21 22 19.909 22 18.568V9.978C22 8.637 20.878 7.546 19.5 7.546Z",
    fill: fill
  }));
};
IconFolderMin.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3l = ["size", "fill"];
var IconFolderPlus = function IconFolderPlus(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3l);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 15.5H13V16.5C13 17.05 12.55 17.5 12 17.5C11.45 17.5 11 17.05 11 16.5V15.5H10C9.45 15.5 9 15.05 9 14.5C9 13.95 9.45 13.5 10 13.5H11V12.5C11 11.95 11.45 11.5 12 11.5C12.55 11.5 13 11.95 13 12.5V13.5H14C14.55 13.5 15 13.95 15 14.5C15 15.05 14.55 15.5 14 15.5ZM19.5 7.546H12.474L9.875 4.367C9.685 4.135 9.4 4 9.101 4H4.5C3.122 4 2 5.091 2 6.432V18.568C2 19.909 3.122 21 4.5 21H19.5C20.878 21 22 19.909 22 18.568V9.978C22 8.637 20.878 7.546 19.5 7.546Z",
    fill: fill
  }));
};
IconFolderPlus.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3m = ["size", "fill"];
var IconImage = function IconImage(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3m);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 25",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 10C8.828 10 9.5 9.328 9.5 8.5C9.5 7.672 8.828 7 8 7C7.172 7 6.5 7.672 6.5 8.5C6.5 9.328 7.172 10 8 10ZM6 5H18C18.552 5 19 5.448 19 6V14.364L15.797 11.632C14.807 10.79 13.258 10.79 12.277 11.626L5 17.698V6C5 5.448 5.448 5 6 5ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z",
    fill: fill
  }));
};
IconImage.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3n = ["size", "fill"];
var IconImage2 = function IconImage2(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3n);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 25",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 17.834C19 18.478 18.552 19 18 19H6L13.566 12.183C13.812 11.938 14.258 11.939 14.499 12.182L19 16.66V17.834ZM8 7C8.828 7 9.5 7.672 9.5 8.5C9.5 9.328 8.828 10 8 10C7.172 10 6.5 9.328 6.5 8.5C6.5 7.672 7.172 7 8 7ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z",
    fill: fill
  }));
};
IconImage2.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3o = ["size", "fill"];
var IconMaps = function IconMaps(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3o);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 25",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 17.454L17 16.556V6.54596L19 7.44396V17.454ZM9 6.54596L11 7.44396V17.454L9 16.556V6.54596ZM20.41 5.88596L16.41 4.08796C16.395 4.08096 16.379 4.07996 16.364 4.07396C16.323 4.05796 16.282 4.04696 16.24 4.03596C16.201 4.02596 16.162 4.01696 16.122 4.01296C16.083 4.00796 16.044 4.00696 16.004 4.00696C15.96 4.00696 15.917 4.00796 15.873 4.01296C15.836 4.01696 15.801 4.02596 15.765 4.03496C15.721 4.04596 15.678 4.05796 15.635 4.07396C15.621 4.07996 15.604 4.08096 15.59 4.08796L12 5.70096L8.41 4.08796C8.395 4.08096 8.379 4.07996 8.364 4.07396C8.323 4.05796 8.282 4.04696 8.24 4.03596C8.201 4.02596 8.162 4.01696 8.122 4.01296C8.083 4.00796 8.044 4.00696 8.004 4.00696C7.96 4.00696 7.917 4.00796 7.873 4.01296C7.836 4.01696 7.801 4.02596 7.765 4.03496C7.721 4.04596 7.678 4.05796 7.635 4.07396C7.621 4.07996 7.604 4.08096 7.59 4.08796L3.59 5.88596C3.231 6.04696 3 6.40396 3 6.79796V19C3 19.339 3.172 19.655 3.457 19.84C3.621 19.946 3.81 20 4 20C4.139 20 4.279 19.971 4.41 19.912L8 18.299L11.59 19.912C11.605 19.919 11.621 19.916 11.637 19.922C11.754 19.969 11.875 20 12 20C12.125 20 12.246 19.969 12.363 19.922C12.378 19.916 12.396 19.919 12.41 19.912L16 18.299L19.59 19.912C19.721 19.971 19.861 20 20 20C20.19 20 20.379 19.946 20.543 19.84C20.828 19.655 21 19.339 21 19V6.79796C21 6.40396 20.769 6.04696 20.41 5.88596Z",
    fill: fill
  }));
};
IconMaps.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3p = ["size", "fill"];
var IconPantone = function IconPantone(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3p);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 25",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 8H8.818V5H5V8ZM5 13H8.818V10H5V13ZM8.818 15H5V17.091C5 18.144 5.856 19 6.909 19C7.962 19 8.818 18.144 8.818 17.091V15ZM10.818 17.091C10.818 19.246 9.064 21 6.909 21C4.754 21 3 19.246 3 17.091V4C3 3.447 3.447 3 4 3H9.818C10.371 3 10.818 3.447 10.818 4V17.091ZM18.189 9.3L14.054 5.443C13.86 5.263 13.61 5.153 13.337 5.176C13.072 5.185 12.821 5.299 12.641 5.493L11.818 6.375V9.308V14.668V17.091C11.818 17.286 11.783 17.473 11.761 17.662L18.239 10.713C18.616 10.31 18.594 9.677 18.189 9.3ZM21 14.182V20C21 20.553 20.553 21 20 21H10.017L10.466 20.518L11.881 19L15.44 15.182L17.305 13.182H20C20.553 13.182 21 13.629 21 14.182Z",
    fill: fill
  }));
};
IconPantone.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3q = ["size", "fill"];
var IconArchive$1 = function IconArchive(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3q);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.8662 14H14.1342C14.6102 14 15.0002 13.61 15.0002 13.134V12.866C15.0002 12.39 14.6102 12 14.1342 12H9.8662C9.3892 12 9.0002 12.39 9.0002 12.866V13.134C9.0002 13.61 9.3892 14 9.8662 14ZM18 18C18 18.551 17.552 19 17 19H7C6.449 19 6 18.551 6 18V9H18V18ZM6 5H18C18.552 5 19 5.449 19 6C19 6.551 18.552 7 18 7H6C5.449 7 5 6.551 5 6C5 5.449 5.449 5 6 5ZM21 6C21 4.346 19.654 3 18 3H6C4.346 3 3 4.346 3 6C3 6.883 3.391 7.67 4 8.22V18C4 19.654 5.346 21 7 21H17C18.654 21 20 19.654 20 18V8.22C20.609 7.67 21 6.883 21 6Z",
    fill: fill
  }));
};
IconArchive$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3r = ["size", "fill"];
var IconBookOpen$1 = function IconBookOpen(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3r);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 25",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 16.4025L13 17.7505V7.59747L19 6.25047V16.4025ZM5 6.25047L11 7.59747V17.7505L5 16.4025V6.25047ZM20.625 4.21847C20.387 4.02947 20.077 3.95747 19.78 4.02447L12 5.77247L4.22 4.02447C3.922 3.95647 3.613 4.02947 3.375 4.21847C3.138 4.40947 3 4.69647 3 5.00047V17.2025C3 17.6705 3.324 18.0755 3.78 18.1775L11.78 19.9755C11.854 19.9925 11.927 20.0005 12 20.0005C12.073 20.0005 12.146 19.9925 12.22 19.9755L20.22 18.1775C20.676 18.0755 21 17.6705 21 17.2025V5.00047C21 4.69647 20.862 4.40947 20.625 4.21847Z",
    fill: fill
  }));
};
IconBookOpen$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3s = ["size", "fill"];
var IconBook$1 = function IconBook(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3s);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 19C6.449 19 6 18.551 6 18C6 17.449 6.449 17 7 17H18V19H7ZM7 5H18V15H7C6.647 15 6.314 15.072 6 15.184V6C6 5.449 6.449 5 7 5ZM19 3H7C5.346 3 4 4.346 4 6V18C4 19.654 5.346 21 7 21H18H19C19.552 21 20 20.552 20 20V19V17V4C20 3.448 19.552 3 19 3Z",
    fill: fill
  }));
};
IconBook$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3t = ["size", "fill"];
var IconCalendar$1 = function IconCalendar(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3t);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 16C7 15.45 7.45 15 8 15C8.55 15 9 15.45 9 16C9 16.55 8.55 17 8 17C7.45 17 7 16.55 7 16ZM12 15H16C16.55 15 17 15.45 17 16C17 16.55 16.55 17 16 17H12C11.45 17 11 16.55 11 16C11 15.45 11.45 15 12 15ZM18 20H6C5.449 20 5 19.551 5 19V13H19V19C19 19.551 18.551 20 18 20ZM6 6H7V7C7 7.55 7.45 8 8 8C8.55 8 9 7.55 9 7V6H15V7C15 7.55 15.45 8 16 8C16.55 8 17 7.55 17 7V6H18C18.551 6 19 6.449 19 7V11H5V7C5 6.449 5.449 6 6 6ZM18 4H17V3C17 2.45 16.55 2 16 2C15.45 2 15 2.45 15 3V4H9V3C9 2.45 8.55 2 8 2C7.45 2 7 2.45 7 3V4H6C4.346 4 3 5.346 3 7V19C3 20.654 4.346 22 6 22H18C19.654 22 21 20.654 21 19V7C21 5.346 19.654 4 18 4Z",
    fill: fill
  }));
};
IconCalendar$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3u = ["size", "fill"];
var IconClipboard$1 = function IconClipboard(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3u);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 19C19 19.552 18.551 20 18 20H6C5.449 20 5 19.552 5 19V8C5 7.448 5.449 7 6 7V8C6 9.103 6.897 10 8 10H16C17.103 10 18 9.103 18 8V7C18.551 7 19 7.448 19 8V19ZM8 4L16 4.003V5V8H8V5V4ZM18 5V4C18 2.897 17.103 2 16 2H8C6.897 2 6 2.897 6 4V5C4.346 5 3 6.346 3 8V19C3 20.654 4.346 22 6 22H18C19.654 22 21 20.654 21 19V8C21 6.346 19.654 5 18 5Z",
    fill: fill
  }));
};
IconClipboard$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3v = ["size", "fill"];
var IconFileLines$1 = function IconFileLines(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3v);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.9997 14H8.9997C8.4477 14 7.9997 13.552 7.9997 13C7.9997 12.448 8.4477 12 8.9997 12H11.9997C12.5517 12 12.9997 12.448 12.9997 13C12.9997 13.552 12.5517 14 11.9997 14ZM7.9997 17C7.9997 16.448 8.4477 16 8.9997 16H14.9997C15.5527 16 15.9997 16.448 15.9997 17C15.9997 17.552 15.5527 18 14.9997 18H8.9997C8.4477 18 7.9997 17.552 7.9997 17ZM17.444 20H6.555C6.249 20 6 19.776 6 19.5V4.5C6 4.224 6.249 4 6.555 4H12V7.15C12 8.722 13.217 10 14.714 10H18V19.5C18 19.776 17.751 20 17.444 20ZM14 4.978L16.742 8H14.714C14.32 8 14 7.619 14 7.15V4.978ZM19.74 8.328L14.296 2.328C14.106 2.119 13.838 2 13.555 2H6.555C5.146 2 4 3.122 4 4.5V19.5C4 20.878 5.146 22 6.555 22H17.444C18.853 22 20 20.878 20 19.5V9C20 8.751 19.907 8.512 19.74 8.328Z",
    fill: fill
  }));
};
IconFileLines$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3w = ["size", "fill"];
var IconFileMin = function IconFileMin(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3w);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.9997 13H9.9997C9.4467 13 8.9997 13.448 8.9997 14C8.9997 14.552 9.4467 15 9.9997 15H13.9997C14.5527 15 14.9997 14.552 14.9997 14C14.9997 13.448 14.5527 13 13.9997 13ZM17.444 20H6.555C6.249 20 6 19.776 6 19.5V4.5C6 4.224 6.249 4 6.555 4H12V7.15C12 8.722 13.217 10 14.714 10H18V19.5C18 19.776 17.751 20 17.444 20ZM14 4.978L16.742 8H14.714C14.32 8 14 7.619 14 7.15V4.978ZM19.74 8.328L14.296 2.328C14.106 2.119 13.838 2 13.555 2H6.555C5.146 2 4 3.122 4 4.5V19.5C4 20.878 5.146 22 6.555 22H17.444C18.853 22 20 20.878 20 19.5V9C20 8.751 19.907 8.512 19.74 8.328Z",
    fill: fill
  }));
};
IconFileMin.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3x = ["size", "fill"];
var IconFile$1 = function IconFile(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3x);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.444 20H6.555C6.249 20 6 19.776 6 19.5V4.5C6 4.224 6.249 4 6.555 4H11V8.15C11 9.722 12.217 11 13.714 11H18V19.5C18 19.776 17.75 20 17.444 20ZM17.649 9H13.714C13.32 9 13 8.619 13 8.15V4H13.112L17.649 9ZM19.74 8.328L14.296 2.328C14.107 2.119 13.838 2 13.555 2H6.555C5.146 2 4 3.122 4 4.5V19.5C4 20.878 5.146 22 6.555 22H17.444C18.853 22 20 20.878 20 19.5V9C20 8.751 19.907 8.512 19.74 8.328Z",
    fill: fill
  }));
};
IconFile$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3y = ["size", "fill"];
var IconFilePlus$1 = function IconFilePlus(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3y);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.9997 13H12.9997V12C12.9997 11.448 12.5527 11 11.9997 11C11.4467 11 10.9997 11.448 10.9997 12V13H9.9997C9.4467 13 8.9997 13.448 8.9997 14C8.9997 14.552 9.4467 15 9.9997 15H10.9997V16C10.9997 16.552 11.4467 17 11.9997 17C12.5527 17 12.9997 16.552 12.9997 16V15H13.9997C14.5527 15 14.9997 14.552 14.9997 14C14.9997 13.448 14.5527 13 13.9997 13ZM17.444 20H6.555C6.249 20 6 19.776 6 19.5V4.5C6 4.224 6.249 4 6.555 4H12V7.15C12 8.722 13.217 10 14.714 10H18V19.5C18 19.776 17.751 20 17.444 20ZM14 4.978L16.742 8H14.714C14.32 8 14 7.619 14 7.15V4.978ZM19.74 8.328L14.296 2.328C14.106 2.119 13.838 2 13.555 2H6.555C5.146 2 4 3.122 4 4.5V19.5C4 20.878 5.146 22 6.555 22H17.444C18.853 22 20 20.878 20 19.5V9C20 8.751 19.907 8.512 19.74 8.328Z",
    fill: fill
  }));
};
IconFilePlus$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3z = ["size", "fill"];
var IconFolderMin$1 = function IconFolderMin(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3z);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 12.9996H10C9.45 12.9996 9 13.4496 9 13.9996C9 14.5496 9.45 14.9996 10 14.9996H14C14.55 14.9996 15 14.5496 15 13.9996C15 13.4496 14.55 12.9996 14 12.9996ZM20 18.068C20 18.306 19.776 18.5 19.5 18.5H4.5C4.224 18.5 4 18.306 4 18.068V13.755V5.931C4 5.693 4.224 5.5 4.5 5.5H8.626L11.226 8.678C11.416 8.911 11.7 9.046 12 9.046H19.5C19.776 9.046 20 9.239 20 9.478V18.068ZM19.5 7.046H12.474L9.875 3.867C9.685 3.634 9.4 3.5 9.101 3.5H4.5C3.122 3.5 2 4.59 2 5.931V18.068C2 19.409 3.122 20.5 4.5 20.5H19.5C20.878 20.5 22 19.409 22 18.068V9.478C22 8.136 20.878 7.046 19.5 7.046Z",
    fill: fill
  }));
};
IconFolderMin$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3A = ["size", "fill"];
var IconFolder$1 = function IconFolder(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3A);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 13.755V18.068C4 18.306 4.224 18.5 4.5 18.5H19.5C19.776 18.5 20 18.306 20 18.068V9.478C20 9.239 19.776 9.046 19.5 9.046H12C11.7 9.046 11.416 8.911 11.226 8.678L8.626 5.5H4.5C4.224 5.5 4 5.693 4 5.931V13.755ZM19.5 20.5H4.5C3.122 20.5 2 19.409 2 18.068V5.931C2 4.59 3.122 3.5 4.5 3.5H9.101C9.4 3.5 9.685 3.634 9.875 3.867L12.474 7.046H19.5C20.878 7.046 22 8.136 22 9.478V18.068C22 19.409 20.878 20.5 19.5 20.5Z",
    fill: fill
  }));
};
IconFolder$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3B = ["size", "fill"];
var IconFolderPlus$1 = function IconFolderPlus(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3B);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 12.9996H13V11.9996C13 11.4496 12.55 10.9996 12 10.9996C11.45 10.9996 11 11.4496 11 11.9996V12.9996H10C9.45 12.9996 9 13.4496 9 13.9996C9 14.5496 9.45 14.9996 10 14.9996H11V15.9996C11 16.5496 11.45 16.9996 12 16.9996C12.55 16.9996 13 16.5496 13 15.9996V14.9996H14C14.55 14.9996 15 14.5496 15 13.9996C15 13.4496 14.55 12.9996 14 12.9996ZM20 18.068C20 18.306 19.776 18.5 19.5 18.5H4.5C4.224 18.5 4 18.306 4 18.068V13.755V5.931C4 5.693 4.224 5.5 4.5 5.5H8.626L11.226 8.678C11.416 8.911 11.7 9.046 12 9.046H19.5C19.776 9.046 20 9.239 20 9.478V18.068ZM19.5 7.046H12.474L9.875 3.867C9.685 3.634 9.4 3.5 9.101 3.5H4.5C3.122 3.5 2 4.59 2 5.931V18.068C2 19.409 3.122 20.5 4.5 20.5H19.5C20.878 20.5 22 19.409 22 18.068V9.478C22 8.136 20.878 7.046 19.5 7.046Z",
    fill: fill
  }));
};
IconFolderPlus$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3C = ["size", "fill"];
var IconImage$1 = function IconImage(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3C);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 25",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 10C8.828 10 9.5 9.328 9.5 8.5C9.5 7.672 8.828 7 8 7C7.172 7 6.5 7.672 6.5 8.5C6.5 9.328 7.172 10 8 10ZM18 19H6.561L13.566 13.155C13.812 12.946 14.258 12.947 14.499 13.154L19 16.994V18C19 18.552 18.552 19 18 19ZM6 5H18C18.552 5 19 5.448 19 6V14.364L15.797 11.632C14.807 10.79 13.258 10.79 12.277 11.626L5 17.698V6C5 5.448 5.448 5 6 5ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z",
    fill: fill
  }));
};
IconImage$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3D = ["size", "fill"];
var IconList = function IconList(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3D);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.99975 7C2.99975 6.448 3.44775 6 3.99975 6C4.55175 6 4.99975 6.448 4.99975 7C4.99975 7.552 4.55175 8 3.99975 8C3.44775 8 2.99975 7.552 2.99975 7ZM2.99975 12C2.99975 11.448 3.44775 11 3.99975 11C4.55175 11 4.99975 11.448 4.99975 12C4.99975 12.552 4.55175 13 3.99975 13C3.44775 13 2.99975 12.552 2.99975 12ZM3.99975 16C3.44775 16 2.99975 16.448 2.99975 17C2.99975 17.552 3.44775 18 3.99975 18C4.55175 18 4.99975 17.552 4.99975 17C4.99975 16.448 4.55175 16 3.99975 16ZM7.93525 11H20.0642C20.5792 11 21.0002 11.421 21.0002 11.936V12.064C21.0002 12.579 20.5792 13 20.0642 13H7.93525C7.42025 13 7.00025 12.579 7.00025 12.064V11.936C7.00025 11.421 7.42025 11 7.93525 11ZM20.0642 16H7.93525C7.42025 16 7.00025 16.421 7.00025 16.936V17.064C7.00025 17.579 7.42025 18 7.93525 18H20.0642C20.5792 18 21.0002 17.579 21.0002 17.064V16.936C21.0002 16.421 20.5792 16 20.0642 16ZM7.93525 6H20.0642C20.5792 6 21.0002 6.421 21.0002 6.936V7.064C21.0002 7.579 20.5792 8 20.0642 8H7.93525C7.42025 8 7.00025 7.579 7.00025 7.064V6.936C7.00025 6.421 7.42025 6 7.93525 6Z",
    fill: fill
  }));
};
IconList.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3E = ["size", "fill"];
var IconMaps$1 = function IconMaps(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3E);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 25",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 17.4538L17 16.5558V6.54584L19 7.44384V17.4538ZM13 7.44384L15 6.54584V16.5558L13 17.4538V7.44384ZM9 6.54584L11 7.44384V17.4538L9 16.5558V6.54584ZM5 7.44384L7 6.54584V16.5558L5 17.4538V7.44384ZM20.41 5.88584L16.41 4.08784C16.395 4.08084 16.379 4.07984 16.364 4.07384C16.323 4.05784 16.282 4.04684 16.24 4.03584C16.201 4.02584 16.162 4.01684 16.122 4.01284C16.083 4.00784 16.044 4.00684 16.004 4.00684C15.96 4.00684 15.917 4.00784 15.873 4.01284C15.836 4.01684 15.801 4.02584 15.765 4.03484C15.721 4.04584 15.678 4.05784 15.635 4.07384C15.621 4.07984 15.604 4.08084 15.59 4.08784L12 5.70084L8.41 4.08784C8.395 4.08084 8.379 4.07984 8.364 4.07384C8.323 4.05784 8.282 4.04684 8.24 4.03584C8.201 4.02584 8.162 4.01684 8.122 4.01284C8.083 4.00784 8.044 4.00684 8.004 4.00684C7.96 4.00684 7.917 4.00784 7.873 4.01284C7.836 4.01684 7.801 4.02584 7.765 4.03484C7.721 4.04584 7.678 4.05784 7.635 4.07384C7.621 4.07984 7.604 4.08084 7.59 4.08784L3.59 5.88584C3.231 6.04684 3 6.40384 3 6.79784V18.9998C3 19.3388 3.172 19.6548 3.457 19.8398C3.621 19.9458 3.81 19.9998 4 19.9998C4.139 19.9998 4.279 19.9708 4.41 19.9118L8 18.2988L11.59 19.9118C11.605 19.9188 11.621 19.9158 11.637 19.9218C11.754 19.9688 11.875 19.9998 12 19.9998C12.125 19.9998 12.246 19.9688 12.363 19.9218C12.378 19.9158 12.396 19.9188 12.41 19.9118L16 18.2988L19.59 19.9118C19.721 19.9708 19.861 19.9998 20 19.9998C20.19 19.9998 20.379 19.9458 20.543 19.8398C20.828 19.6548 21 19.3388 21 18.9998V6.79784C21 6.40384 20.769 6.04684 20.41 5.88584Z",
    fill: fill
  }));
};
IconMaps$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3F = ["size", "fill"];
var IconPantone$1 = function IconPantone(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3F);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 25",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 19H10.514L14.073 15.182H19V19ZM5 17.091V15H8.818V17.091C8.818 18.144 7.962 19 6.909 19C5.856 19 5 18.144 5 17.091ZM5 8H8.818V5H5V8ZM5 13H8.818V10H5V13ZM13.422 7.588L16.095 10.081L10.818 15.74V10.381L13.422 7.588ZM20 13.182H15.937L18.239 10.713C18.616 10.31 18.594 9.677 18.189 9.3L14.054 5.443C13.859 5.263 13.611 5.159 13.337 5.176C13.072 5.185 12.821 5.299 12.641 5.493L10.818 7.448V4C10.818 3.447 10.371 3 9.818 3H4C3.447 3 3 3.447 3 4V17.091C3 19.246 4.754 21 6.909 21H20C20.553 21 21 20.553 21 20V14.182C21 13.629 20.553 13.182 20 13.182Z",
    fill: fill
  }));
};
IconPantone$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3G = ["size", "fill"];
var IconText = function IconText(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3G);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 3.5H4C3.447 3.5 3 3.947 3 4.5V7.5C3 8.053 3.447 8.5 4 8.5C4.553 8.5 5 8.053 5 7.5V5.5H11V18.5H9C8.447 18.5 8 18.947 8 19.5C8 20.053 8.447 20.5 9 20.5H15C15.553 20.5 16 20.053 16 19.5C16 18.947 15.553 18.5 15 18.5H13V5.5H19V7.5C19 8.053 19.447 8.5 20 8.5C20.553 8.5 21 8.053 21 7.5V4.5C21 3.947 20.553 3.5 20 3.5Z",
    fill: fill
  }));
};
IconText.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3H = ["size", "fill"];
var IconBackspace = function IconBackspace(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3H);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.7066 13.293C17.0976 13.684 17.0976 14.316 16.7066 14.707C16.5116 14.902 16.2556 15 15.9996 15C15.7436 15 15.4876 14.902 15.2926 14.707L13.9996 13.414L12.7066 14.707C12.5116 14.902 12.2556 15 11.9996 15C11.7436 15 11.4876 14.902 11.2926 14.707C10.9016 14.316 10.9016 13.684 11.2926 13.293L12.5856 12L11.2926 10.707C10.9016 10.316 10.9016 9.684 11.2926 9.293C11.6836 8.902 12.3156 8.902 12.7066 9.293L13.9996 10.586L15.2926 9.293C15.6836 8.902 16.3156 8.902 16.7066 9.293C17.0976 9.684 17.0976 10.316 16.7066 10.707L15.4136 12L16.7066 13.293ZM20.1406 4H10.3696C9.62158 4 8.90458 4.277 8.35158 4.781C8.31258 4.815 8.27758 4.854 8.24558 4.894L2.22158 12.373C1.88958 12.785 1.93558 13.384 2.32658 13.74L8.35158 19.219C8.90458 19.723 9.62158 20 10.3696 20H20.1406C21.1656 20 21.9996 19.185 21.9996 18.182V5.818C21.9996 4.815 21.1656 4 20.1406 4Z",
    fill: fill
  }));
};
IconBackspace.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3I = ["size", "fill"];
var IconCheckCircle2 = function IconCheckCircle2(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3I);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.295 9.605L11.727 15.605C11.539 15.852 11.248 15.998 10.938 16H10.931C10.624 16 10.334 15.858 10.144 15.616L7.712 12.509C7.372 12.075 7.448 11.446 7.883 11.106C8.317 10.765 8.947 10.841 9.287 11.277L10.92 13.363L14.704 8.394C15.038 7.955 15.665 7.869 16.106 8.204C16.545 8.539 16.63 9.166 16.295 9.605ZM12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.477 17.523 2 12 2Z",
    fill: fill
  }));
};
IconCheckCircle2.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3J = ["size", "fill"];
var IconCheckSquare = function IconCheckSquare(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3J);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.295 9.605L11.727 15.605C11.539 15.852 11.248 15.998 10.938 16H10.931C10.624 16 10.334 15.858 10.144 15.616L7.712 12.509C7.372 12.075 7.448 11.446 7.883 11.106C8.318 10.765 8.946 10.841 9.287 11.277L10.92 13.363L14.704 8.394C15.038 7.955 15.666 7.869 16.106 8.204C16.545 8.539 16.63 9.166 16.295 9.605ZM18 3H6C4.345 3 3 4.345 3 6V18C3 19.654 4.345 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.345 19.654 3 18 3Z",
    fill: fill
  }));
};
IconCheckSquare.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3K = ["size", "fill"];
var IconCircleDot = function IconCircleDot(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3K);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 7C9.243 7 7 9.243 7 12C7 14.757 9.243 17 12 17C14.757 17 17 14.757 17 12C17 9.243 14.757 7 12 7ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconCircleDot.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3L = ["size", "fill"];
var IconCircleXmark = function IconCircleXmark(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3L);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.707 13.2929C15.098 13.6839 15.098 14.3159 14.707 14.7069C14.512 14.9019 14.256 14.9999 14 14.9999C13.744 14.9999 13.488 14.9019 13.293 14.7069L12 13.4139L10.707 14.7069C10.512 14.9019 10.256 14.9999 10 14.9999C9.744 14.9999 9.488 14.9019 9.293 14.7069C8.902 14.3159 8.902 13.6839 9.293 13.2929L10.586 11.9999L9.293 10.7069C8.902 10.3159 8.902 9.68388 9.293 9.29288C9.684 8.90188 10.316 8.90188 10.707 9.29288L12 10.5859L13.293 9.29288C13.684 8.90188 14.316 8.90188 14.707 9.29288C15.098 9.68388 15.098 10.3159 14.707 10.7069L13.414 11.9999L14.707 13.2929ZM12 1.99988C6.486 1.99988 2 6.48588 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48588 17.514 1.99988 12 1.99988Z",
    fill: fill
  }));
};
IconCircleXmark.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3M = ["size", "fill"];
var IconEdit = function IconEdit(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3M);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.0197 10.679L13.3247 7.98404L15.2727 6.03504L17.9667 8.72904L16.0197 10.679ZM19.4047 7.33804L19.4037 7.33704L16.6657 4.59904C15.9247 3.86004 14.6517 3.82504 13.9497 4.53004L4.95369 13.526C4.62769 13.851 4.42569 14.283 4.38369 14.74L4.00469 18.91C3.97869 19.205 4.08369 19.497 4.29369 19.707C4.48269 19.896 4.73769 20 5.00069 20C5.03169 20 5.06169 19.999 5.09169 19.996L9.26169 19.617C9.71969 19.575 10.1507 19.374 10.4757 19.049L19.4727 10.052C20.2007 9.32204 20.1697 8.10404 19.4047 7.33804Z",
    fill: fill
  }));
};
IconEdit.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3N = ["size", "fill"];
var IconEdit2 = function IconEdit2(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3N);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 25",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.9657 6.72867L15.2717 4.03467L13.3237 5.98367L16.0187 8.67867L17.9657 6.72867ZM5.09069 17.9957C5.06069 17.9987 5.03069 17.9997 5.00069 17.9997C4.73669 17.9997 4.48169 17.8957 4.29269 17.7067C4.08369 17.4967 3.97769 17.2047 4.00369 16.9097L4.38269 12.7397C4.42469 12.2827 4.62669 11.8507 4.95269 11.5257L13.9487 2.52967C14.6507 1.82467 15.9237 1.85967 16.6647 2.59867L19.4027 5.33667L19.4037 5.33767C20.1687 6.10367 20.1997 7.32167 19.4717 8.05167L10.4747 17.0487C10.1497 17.3737 9.71869 17.5757 9.26069 17.6177L5.09069 17.9957ZM5.00019 20H19.0002C19.5502 20 20.0002 20.45 20.0002 21C20.0002 21.55 19.5502 22 19.0002 22H5.00019C4.45019 22 4.00019 21.55 4.00019 21C4.00019 20.45 4.45019 20 5.00019 20Z",
    fill: fill
  }));
};
IconEdit2.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3O = ["size", "fill"];
var IconEye = function IconEye(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3O);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 10.5007C11.173 10.5007 10.5 11.1737 10.5 12.0007C10.5 12.8277 11.173 13.5007 12 13.5007C12.827 13.5007 13.5 12.8277 13.5 12.0007C13.5 11.1737 12.827 10.5007 12 10.5007ZM12 15.5007C10.07 15.5007 8.5 13.9307 8.5 12.0007C8.5 10.0707 10.07 8.50074 12 8.50074C13.93 8.50074 15.5 10.0707 15.5 12.0007C15.5 13.9307 13.93 15.5007 12 15.5007ZM21.868 11.5027C21.229 10.3907 17.706 4.81674 11.729 5.00374C6.202 5.14474 2.986 10.0147 2.132 11.5027C1.956 11.8117 1.956 12.1897 2.132 12.4987C2.762 13.5957 6.162 19.0007 12.025 19.0007C12.106 19.0007 12.188 18.9997 12.271 18.9977C17.798 18.8567 21.014 13.9867 21.868 12.4987C22.044 12.1897 22.044 11.8117 21.868 11.5027Z",
    fill: fill
  }));
};
IconEye.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3P = ["size", "fill"];
var IconEyeSlash = function IconEyeSlash(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3P);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.407 17.9932L20.707 19.2932C21.098 19.6842 21.098 20.3162 20.707 20.7073C20.512 20.9023 20.256 21.0002 20 21.0002C19.744 21.0002 19.488 20.9023 19.293 20.7073L16.586 18.0002L16 17.4143L14.655 16.0693L14.586 16.0002L12.0837 13.4979C12.056 13.4995 12.0281 13.5002 12 13.5002C11.173 13.5002 10.5 12.8272 10.5 12.0002C10.5 11.9722 10.5008 11.9443 10.5023 11.9166L7.283 8.69725L5.532 6.94625L3.293 4.70725C2.902 4.31625 2.902 3.68425 3.293 3.29325C3.684 2.90225 4.316 2.90225 4.707 3.29325L6.42 5.00625L7.885 6.47125L11.9163 10.5026C11.944 10.501 11.9719 10.5002 12 10.5002C12.827 10.5002 13.5 11.1733 13.5 12.0002C13.5 12.0283 13.4992 12.0562 13.4977 12.0839L17.414 16.0002L19.407 17.9932ZM8.5928 5.76445L11.3898 8.56145C11.5888 8.52645 11.7908 8.50045 11.9998 8.50045C13.9298 8.50045 15.4998 10.0704 15.4998 12.0005C15.4998 12.2094 15.4738 12.4114 15.4388 12.6104L18.1208 15.2934L18.9548 16.1274C20.4768 14.7395 21.4528 13.2205 21.8678 12.4974C22.0438 12.1895 22.0438 11.8105 21.8678 11.5024C21.2298 10.3905 17.7058 4.81645 11.7298 5.00345C10.5458 5.03445 9.4738 5.28945 8.5018 5.67445L8.5928 5.76445ZM13.948 16.7774L15.293 18.1214L15.498 18.3264C14.526 18.7114 13.455 18.9664 12.271 18.9964C12.189 18.9994 12.106 19.0004 12.025 19.0004C6.162 19.0004 2.762 13.5954 2.132 12.4974C1.956 12.1894 1.956 11.8104 2.132 11.5023C2.547 10.7804 3.523 9.26135 5.045 7.87335L6.576 9.40535L8.562 11.3904C8.526 11.5893 8.5 11.7914 8.5 12.0003C8.5 13.9304 10.07 15.5003 12 15.5003C12.209 15.5003 12.411 15.4743 12.61 15.4384L13.879 16.7073L13.948 16.7774Z",
    fill: fill
  }));
};
IconEyeSlash.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3Q = ["size", "fill"];
var IconLayerGroup = function IconLayerGroup(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3Q);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.2407 7.28712L11.7617 11.9231C11.9087 12.0031 12.0907 12.0031 12.2387 11.9231L20.7597 7.28712C21.1027 7.10012 21.0727 6.62212 20.7077 6.47512L12.1877 3.03612C12.0677 2.98812 11.9317 2.98812 11.8117 3.03612L3.2917 6.47512C2.9277 6.62212 2.8977 7.10012 3.2407 7.28712ZM20.708 10.6563L18.878 9.87632L12.239 13.4883C12.091 13.5683 11.909 13.5683 11.761 13.4883L5.122 9.87632L3.292 10.6563C2.927 10.8113 2.897 11.3173 3.241 11.5143L11.761 16.4113C11.909 16.4963 12.091 16.4963 12.239 16.4113L20.759 11.5143C21.103 11.3173 21.073 10.8113 20.708 10.6563ZM19.151 14.4227L20.708 15.0967C21.073 15.2547 21.103 15.7677 20.759 15.9677L12.239 20.9357C12.091 21.0217 11.909 21.0217 11.761 20.9357L3.241 15.9677C2.897 15.7677 2.927 15.2547 3.292 15.0967L4.849 14.4227L11.761 18.1837C11.909 18.2637 12.091 18.2637 12.239 18.1837L19.151 14.4227Z",
    fill: fill
  }));
};
IconLayerGroup.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3R = ["size", "fill"];
var IconLayout = function IconLayout(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3R);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21 8V6C21 4.346 19.654 3 18 3H6C4.346 3 3 4.346 3 6V8H21ZM3 10V18C3 19.654 4.346 21 6 21H11V10H3ZM13 21V10H21V18C21 19.654 19.654 21 18 21H13Z",
    fill: fill
  }));
};
IconLayout.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3S = ["size", "fill"];
var IconMinCircle = function IconMinCircle(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3S);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 13H9C8.45 13 8 12.55 8 12C8 11.45 8.45 11 9 11H15C15.55 11 16 11.45 16 12C16 12.55 15.55 13 15 13ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconMinCircle.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3T = ["size", "fill"];
var IconMinSquare = function IconMinSquare(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3T);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 13H9C8.45 13 8 12.55 8 12C8 11.45 8.45 11 9 11H15C15.55 11 16 11.45 16 12C16 12.55 15.55 13 15 13ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z",
    fill: fill
  }));
};
IconMinSquare.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3U = ["size", "fill"];
var IconPaintBrush = function IconPaintBrush(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3U);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.3757 4.66785C17.1527 3.89085 18.4227 3.75285 19.2617 4.46085C19.7547 4.87785 20.0077 5.46285 19.9997 6.05685C20.0067 6.59385 19.8017 7.12285 19.3977 7.52685L12.9127 14.0178C12.7297 14.2018 12.4317 14.2018 12.2477 14.0178L9.97469 11.7428C9.79069 11.5588 9.79069 11.2598 9.97469 11.0758L16.3757 4.66785ZM4.05399 16.4138C4.08599 14.5778 5.32899 12.9178 7.12399 12.5478C10.047 11.9448 12.462 14.7418 11.167 17.7378C10.583 19.0878 9.19599 19.9148 7.72699 19.9408H7.72499L4.47899 19.9998C4.21299 20.0048 3.99499 19.7868 3.99999 19.5208L4.05399 16.4138Z",
    fill: fill
  }));
};
IconPaintBrush.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3V = ["size", "fill"];
var IconPalette = function IconPalette(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3V);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.7489 7.79903C16.0309 8.21303 15.1139 7.96703 14.6999 7.25003C14.2859 6.53203 14.5319 5.61503 15.2489 5.20103C15.9669 4.78703 16.8839 5.03303 17.2979 5.75003C17.7119 6.46803 17.4659 7.38503 16.7489 7.79903ZM10.999 7.00003C10.1709 7.00003 9.49895 6.32803 9.49895 5.50003C9.49895 4.67203 10.1709 4.00003 10.999 4.00003C11.8269 4.00003 12.499 4.67203 12.499 5.50003C12.499 6.32803 11.8269 7.00003 10.999 7.00003ZM8.29795 9.25003C7.88395 9.96703 6.96695 10.213 6.24895 9.79903C5.53195 9.38503 5.28595 8.46803 5.69995 7.75003C6.11395 7.03303 7.03095 6.78703 7.74895 7.20103C8.46595 7.61503 8.71195 8.53203 8.29795 9.25003ZM6.83795 14.743C6.15095 15.207 5.21895 15.026 4.75595 14.339C4.29195 13.653 4.47395 12.72 5.15995 12.257C5.84695 11.793 6.77895 11.975 7.24195 12.661C7.70595 13.348 7.52395 14.28 6.83795 14.743ZM19.5389 5.08503C17.6159 3.10103 14.8129 1.99303 11.9049 2.00003H11.9039C6.95995 2.04203 2.73995 5.75203 2.09095 10.631C1.70895 13.491 2.56095 16.372 4.42895 18.534C6.29695 20.698 9.00595 21.961 11.8599 22H11.8969C13.0979 22 14.1559 21.213 14.4249 20.114C14.624 19.292 14.417 18.458 13.8569 17.826C13.7759 17.736 13.7289 17.616 13.7289 17.501C13.7289 17.226 13.9539 17.001 14.2289 17.001H15.8799C19.0719 17.001 21.8709 14.403 21.9919 11.329C22.0839 9.02903 21.2129 6.81203 19.5389 5.08503Z",
    fill: fill
  }));
};
IconPalette.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3W = ["size", "fill"];
var IconPencil = function IconPencil(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3W);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.36687 14.9383L11.9459 9.35831L14.6419 12.0543L11.8519 14.8503M19.4029 7.33531L16.6639 4.59631C15.8959 3.82831 14.6779 3.80031 13.9489 4.52831L11.9459 6.53031L10.7079 5.29231C10.3169 4.90131 9.68387 4.90131 9.29387 5.29231C8.90287 5.68231 8.90287 6.31531 9.29387 6.70631L10.5319 7.94431L4.95287 13.5243C4.62787 13.8493 4.42587 14.2813 4.38387 14.7383L4.00487 18.9083C3.97787 19.2043 4.08387 19.4963 4.29387 19.7063C4.48187 19.8943 4.73687 19.9993 5.00087 19.9993C5.03087 19.9993 5.06087 19.9983 5.09187 19.9953L9.26187 19.6163C9.71887 19.5743 10.1499 19.3723 10.4749 19.0463L16.0549 13.4673L17.2939 14.7063C17.4889 14.9013 17.7449 14.9993 18.0009 14.9993C18.2569 14.9993 18.5129 14.9013 18.7079 14.7063C19.0979 14.3153 19.0979 13.6823 18.7079 13.2923L17.4699 12.0533L19.4709 10.0503C20.2009 9.32131 20.1709 8.10331 19.4029 7.33531Z",
    fill: fill
  }));
};
IconPencil.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3X = ["size", "fill"];
var IconPlusCircle = function IconPlusCircle(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3X);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 13H13V15C13 15.55 12.55 16 12 16C11.45 16 11 15.55 11 15V13H9C8.45 13 8 12.55 8 12C8 11.45 8.45 11 9 11H11V9C11 8.45 11.45 8 12 8C12.55 8 13 8.45 13 9V11H15C15.55 11 16 11.45 16 12C16 12.55 15.55 13 15 13ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconPlusCircle.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3Y = ["size", "fill"];
var IconPlusSquare = function IconPlusSquare(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3Y);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 13H13V15C13 15.55 12.55 16 12 16C11.45 16 11 15.55 11 15V13H9C8.45 13 8 12.55 8 12C8 11.45 8.45 11 9 11H11V9C11 8.45 11.45 8 12 8C12.55 8 13 8.45 13 9V11H15C15.55 11 16 11.45 16 12C16 12.55 15.55 13 15 13ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z",
    fill: fill
  }));
};
IconPlusSquare.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3Z = ["size", "fill"];
var IconSliders = function IconSliders(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3Z);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 7.00012H4.185C4.599 8.16112 5.698 9.00012 7 9.00012C8.302 9.00012 9.401 8.16112 9.815 7.00012H21C21.553 7.00012 22 6.55312 22 6.00012C22 5.44712 21.553 5.00012 21 5.00012H9.815C9.401 3.83912 8.302 3.00012 7 3.00012C5.698 3.00012 4.599 3.83912 4.185 5.00012H3C2.447 5.00012 2 5.44712 2 6.00012C2 6.55312 2.447 7.00012 3 7.00012ZM19 9.00012C17.698 9.00012 16.599 9.83912 16.185 11.0001H3C2.447 11.0001 2 11.4471 2 12.0001C2 12.5531 2.447 13.0001 3 13.0001H16.185C16.599 14.1611 17.698 15.0001 19 15.0001C20.654 15.0001 22 13.6541 22 12.0001C22 10.3461 20.654 9.00012 19 9.00012ZM13.815 17.0001H21C21.553 17.0001 22 17.4471 22 18.0001C22 18.5531 21.553 19.0001 21 19.0001H13.815C13.401 20.1611 12.302 21.0001 11 21.0001C9.698 21.0001 8.599 20.1611 8.185 19.0001H3C2.447 19.0001 2 18.5531 2 18.0001C2 17.4471 2.447 17.0001 3 17.0001H8.185C8.599 15.8391 9.698 15.0001 11 15.0001C12.302 15.0001 13.401 15.8391 13.815 17.0001Z",
    fill: fill
  }));
};
IconSliders.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3_ = ["size", "fill"];
var IconSlidersUp = function IconSlidersUp(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3_);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 14.1848V2.99976C7 2.44776 6.553 1.99976 6 1.99976C5.447 1.99976 5 2.44776 5 2.99976V14.1848C3.839 14.5988 3 15.6988 3 16.9998C3 18.3018 3.839 19.4018 5 19.8158V20.9998C5 21.5528 5.447 21.9998 6 21.9998C6.553 21.9998 7 21.5528 7 20.9998V19.8158C8.161 19.4018 9 18.3018 9 16.9998C9 15.6988 8.161 14.5988 7 14.1848ZM21 13.0003C21 11.6983 20.161 10.5993 19 10.1853V3.00026C19 2.44726 18.553 2.00026 18 2.00026C17.447 2.00026 17 2.44726 17 3.00026V10.1853C15.839 10.5993 15 11.6983 15 13.0003C15 14.3023 15.839 15.4013 17 15.8153V21.0003C17 21.5533 17.447 22.0003 18 22.0003C18.553 22.0003 19 21.5533 19 21.0003V15.8153C20.161 15.4013 21 14.3023 21 13.0003ZM12 2.00026C13.654 2.00026 15 3.34626 15 5.00026C15 6.30226 14.161 7.40126 13 7.81526V21.0003C13 21.5533 12.553 22.0003 12 22.0003C11.447 22.0003 11 21.5533 11 21.0003V7.81526C9.839 7.40126 9 6.30226 9 5.00026C9 3.34626 10.346 2.00026 12 2.00026Z",
    fill: fill
  }));
};
IconSlidersUp.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$3$ = ["size", "fill"];
var IconTrash = function IconTrash(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3$);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 4.328C10 4.173 10.214 4 10.5 4H13.5C13.786 4 14 4.173 14 4.328V6H10V4.328ZM21 6H20H16V4.328C16 3.044 14.879 2 13.5 2H10.5C9.121 2 8 3.044 8 4.328V6H4H3C2.45 6 2 6.451 2 7C2 7.55 2.45 8 3 8H4V19C4 20.655 5.346 22 7 22H17C18.654 22 20 20.655 20 19V8H21C21.55 8 22 7.55 22 7C22 6.451 21.55 6 21 6Z",
    fill: fill
  }));
};
IconTrash.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$40 = ["size", "fill"];
var IconTrash2 = function IconTrash2(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$40);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 16C16 16.55 15.55 17 15 17C14.45 17 14 16.55 14 16V12C14 11.45 14.45 11 15 11C15.55 11 16 11.45 16 12V16ZM10 4.328C10 4.173 10.214 4 10.5 4H13.5C13.786 4 14 4.173 14 4.328V6H10V4.328ZM10 16C10 16.55 9.55 17 9 17C8.45 17 8 16.55 8 16V12C8 11.45 8.45 11 9 11C9.55 11 10 11.45 10 12V16ZM21 6H20H16V4.328C16 3.044 14.879 2 13.5 2H10.5C9.121 2 8 3.044 8 4.328V6H4H3C2.45 6 2 6.45 2 7C2 7.55 2.45 8 3 8H4V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V8H21C21.55 8 22 7.55 22 7C22 6.45 21.55 6 21 6Z",
    fill: fill
  }));
};
IconTrash2.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$41 = ["size", "fill"];
var IconXmarkSquare = function IconXmarkSquare(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$41);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.707 13.293C15.098 13.684 15.098 14.316 14.707 14.707C14.512 14.902 14.256 15 14 15C13.744 15 13.488 14.902 13.293 14.707L12 13.414L10.707 14.707C10.512 14.902 10.256 15 10 15C9.744 15 9.488 14.902 9.293 14.707C8.902 14.316 8.902 13.684 9.293 13.293L10.586 12L9.293 10.707C8.902 10.316 8.902 9.684 9.293 9.293C9.684 8.902 10.316 8.902 10.707 9.293L12 10.586L13.293 9.293C13.684 8.902 14.316 8.902 14.707 9.293C15.098 9.684 15.098 10.316 14.707 10.707L13.414 12L14.707 13.293ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z",
    fill: fill
  }));
};
IconXmarkSquare.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$42 = ["size", "fill"];
var IconBackspace$1 = function IconBackspace(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$42);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.2926 14.707C11.4876 14.902 11.7436 15 11.9996 15C12.2556 15 12.5116 14.902 12.7066 14.707L13.9996 13.414L15.2926 14.707C15.4876 14.902 15.7436 15 15.9996 15C16.2556 15 16.5116 14.902 16.7066 14.707C17.0976 14.316 17.0976 13.684 16.7066 13.293L15.4136 12L16.7066 10.707C17.0976 10.316 17.0976 9.684 16.7066 9.293C16.3156 8.902 15.6836 8.902 15.2926 9.293L13.9996 10.586L12.7066 9.293C12.3156 8.902 11.6836 8.902 11.2926 9.293C10.9016 9.684 10.9016 10.316 11.2926 10.707L12.5856 12L11.2926 13.293C10.9016 13.684 10.9016 14.316 11.2926 14.707ZM19.9996 18H10.3696C10.1206 18 9.88158 17.907 9.69658 17.739L4.36858 12.894L9.74558 6.219C9.92258 6.077 10.1426 6 10.3696 6H19.9996V18ZM20.1406 4H10.3696C9.62158 4 8.90458 4.277 8.35158 4.781C8.31258 4.815 8.27758 4.854 8.24558 4.894L2.22158 12.373C1.88958 12.785 1.93558 13.384 2.32658 13.74L8.35158 19.219C8.90458 19.723 9.62158 20 10.3696 20H20.1406C21.1656 20 21.9996 19.185 21.9996 18.182V5.818C21.9996 4.815 21.1656 4 20.1406 4Z",
    fill: fill
  }));
};
IconBackspace$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$43 = ["size", "fill"];
var IconCheckCircle2$1 = function IconCheckCircle2(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$43);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.7046 8.3945L10.9206 13.3635L9.2876 11.2775C8.9476 10.8415 8.3176 10.7655 7.8836 11.1065C7.4486 11.4465 7.3716 12.0755 7.7126 12.5095L10.1436 15.6165C10.3336 15.8585 10.6236 15.9995 10.9316 15.9995H10.9386C11.2476 15.9985 11.5396 15.8525 11.7266 15.6055L16.2956 9.6055C16.6306 9.1655 16.5456 8.5395 16.1056 8.2045C15.6646 7.8695 15.0386 7.9555 14.7046 8.3945ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.477 2 2 6.478 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.478 17.523 2 12 2Z",
    fill: fill
  }));
};
IconCheckCircle2$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$44 = ["size", "fill"];
var IconCheckCircle = function IconCheckCircle(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$44);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.997 10.9741H21C21.551 10.9741 21.999 11.4201 22 11.9711C22.008 14.6421 20.975 17.1571 19.091 19.0511C17.208 20.9451 14.7 21.9921 12.029 22.0001H12C9.339 22.0001 6.836 20.9681 4.949 19.0911C3.055 17.2081 2.008 14.7001 2 12.0291C1.992 9.35712 3.025 6.84312 4.909 4.94912C6.792 3.05512 9.3 2.00812 11.971 2.00012C12.766 2.01212 13.576 2.09212 14.352 2.27812C14.888 2.40812 15.219 2.94812 15.089 3.48512C14.96 4.02112 14.417 4.35112 13.883 4.22312C13.262 4.07312 12.603 4.01012 11.977 4.00012C9.84 4.00612 7.833 4.84412 6.327 6.35912C4.82 7.87412 3.994 9.88612 4 12.0231C4.006 14.1601 4.844 16.1661 6.359 17.6731C7.869 19.1741 9.871 20.0001 12 20.0001H12.023C14.16 19.9941 16.167 19.1561 17.673 17.6411C19.18 16.1251 20.006 14.1141 20 11.9771C19.999 11.4251 20.445 10.9751 20.997 10.9741ZM8.293 11.293C8.684 10.902 9.316 10.902 9.707 11.293L11.951 13.537L18.248 6.34102C18.612 5.92802 19.243 5.88402 19.659 6.24802C20.074 6.61102 20.116 7.24302 19.752 7.65902L12.752 15.659C12.57 15.867 12.31 15.99 12.033 16H12C11.735 16 11.481 15.895 11.293 15.707L8.293 12.707C7.902 12.316 7.902 11.684 8.293 11.293Z",
    fill: fill
  }));
};
IconCheckCircle.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$45 = ["size", "fill"];
var IconCheckDouble = function IconCheckDouble(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$45);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.1161 6.21308C15.6821 5.87108 15.0541 5.94908 14.7131 6.38408L7.65806 15.3921L4.27906 11.1951C3.93106 10.7661 3.30306 10.6961 2.87306 11.0431C2.44206 11.3901 2.37506 12.0201 2.72006 12.4491L6.88906 17.6271C7.08006 17.8631 7.36606 18.0001 7.66906 18.0001H7.67606C7.98006 17.9981 8.26806 17.8571 8.45606 17.6161L16.2871 7.61608C16.6281 7.18208 16.5521 6.55308 16.1161 6.21308ZM21.1161 6.21308C20.6811 5.87108 20.0541 5.94908 19.7131 6.38408L12.6581 15.3921L12.0541 14.6431L10.7891 16.2601L11.8891 17.6271C12.0801 17.8631 12.3661 18.0001 12.6691 18.0001H12.6761C12.9801 17.9981 13.2681 17.8571 13.4561 17.6161L21.2871 7.61608C21.6281 7.18208 21.5521 6.55308 21.1161 6.21308ZM9.47976 11.4447L8.21276 13.0607L7.72076 12.4497C7.37476 12.0197 7.44176 11.3897 7.87276 11.0427C8.30376 10.6967 8.93276 10.7657 9.27876 11.1957L9.47976 11.4447Z",
    fill: fill
  }));
};
IconCheckDouble.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$46 = ["size", "fill"];
var IconCheck = function IconCheck(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$46);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.86329 18C9.58729 18 9.32329 17.886 9.13429 17.685L4.27129 12.506C3.89229 12.104 3.91329 11.471 4.31529 11.093C4.71829 10.715 5.35129 10.735 5.72829 11.137L9.85329 15.528L18.2613 6.32599C18.6353 5.91699 19.2673 5.88999 19.6753 6.26199C20.0823 6.63399 20.1103 7.26699 19.7383 7.67399L10.6013 17.674C10.4143 17.88 10.1483 17.998 9.87029 18H9.86329Z",
    fill: fill
  }));
};
IconCheck.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$47 = ["size", "fill"];
var IconCheckSquare2 = function IconCheckSquare2(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$47);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.7046 8.3945L10.9206 13.3635L9.2876 11.2775C8.9466 10.8415 8.3186 10.7655 7.8836 11.1065C7.4486 11.4465 7.3716 12.0755 7.7126 12.5095L10.1436 15.6165C10.3336 15.8585 10.6236 15.9995 10.9316 15.9995H10.9386C11.2476 15.9985 11.5396 15.8525 11.7266 15.6055L16.2956 9.6055C16.6306 9.1655 16.5456 8.5395 16.1056 8.2045C15.6656 7.8695 15.0376 7.9555 14.7046 8.3945ZM19 18C19 18.552 18.551 19 18 19H6C5.449 19 5 18.552 5 18V6C5 5.448 5.449 5 6 5H18C18.551 5 19 5.448 19 6V18ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z",
    fill: fill
  }));
};
IconCheckSquare2.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$48 = ["size", "fill"];
var IconCheckSquare$1 = function IconCheckSquare(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$48);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 12.833C19 12.281 19.448 11.833 20 11.833C20.552 11.833 21 12.281 21 12.833V18.399C21 19.833 19.833 21 18.4 21H5.6C4.167 21 3 19.833 3 18.399V5.6C3 4.166 4.167 3 5.6 3H15.167C15.719 3 16.167 3.447 16.167 4C16.167 4.552 15.719 5 15.167 5H5.6C5.269 5 5 5.269 5 5.6V18.399C5 18.73 5.269 19 5.6 19H18.4C18.731 19 19 18.73 19 18.399V12.833ZM9.3096 10.946C9.7096 10.564 10.3416 10.58 10.7236 10.979L12.2286 12.557L18.2816 6.304C18.6646 5.908 19.2976 5.896 19.6956 6.281C20.0926 6.665 20.1026 7.298 19.7186 7.695L12.9416 14.695C12.7536 14.89 12.4946 15 12.2236 15H12.2196C11.9476 14.999 11.6876 14.887 11.4996 14.69L9.2766 12.36C8.8946 11.96 8.9106 11.327 9.3096 10.946Z",
    fill: fill
  }));
};
IconCheckSquare$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$49 = ["size", "fill"];
var IconCircleDot$1 = function IconCircleDot(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$49);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 15C10.346 15 9 13.654 9 12C9 10.346 10.346 9 12 9C13.654 9 15 10.346 15 12C15 13.654 13.654 15 12 15ZM12 7C9.243 7 7 9.243 7 12C7 14.757 9.243 17 12 17C14.757 17 17 14.757 17 12C17 9.243 14.757 7 12 7ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconCircleDot$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4a = ["size", "fill"];
var IconCircle = function IconCircle(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4a);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 4C7.589 4 4 7.589 4 12C4 16.411 7.589 20 12 20C16.411 20 20 16.411 20 12C20 7.589 16.411 4 12 4ZM12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22Z",
    fill: fill
  }));
};
IconCircle.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4b = ["size", "fill"];
var IconCircleSlash = function IconCircleSlash(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4b);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 12C4 10.154 4.635 8.458 5.688 7.103L16.897 18.312C15.542 19.366 13.846 20 12 20C7.589 20 4 16.411 4 12ZM20 12C20 13.846 19.365 15.542 18.312 16.897L7.103 5.688C8.458 4.634 10.154 4 12 4C16.411 4 20 7.589 20 12ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconCircleSlash.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4c = ["size", "fill"];
var IconCircleXmark$1 = function IconCircleXmark(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4c);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.707 9.293C14.316 8.902 13.684 8.902 13.293 9.293L12 10.586L10.707 9.293C10.316 8.902 9.684 8.902 9.293 9.293C8.902 9.684 8.902 10.316 9.293 10.707L10.586 12L9.293 13.293C8.902 13.684 8.902 14.316 9.293 14.707C9.488 14.902 9.744 15 10 15C10.256 15 10.512 14.902 10.707 14.707L12 13.414L13.293 14.707C13.488 14.902 13.744 15 14 15C14.256 15 14.512 14.902 14.707 14.707C15.098 14.316 15.098 13.684 14.707 13.293L13.414 12L14.707 10.707C15.098 10.316 15.098 9.684 14.707 9.293ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconCircleXmark$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4d = ["size", "fill"];
var IconCrop = function IconCrop(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4d);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.556 16C8.25 16 8 15.751 8 15.444V8H15.445C15.751 8 16 8.249 16 8.556V16H8.556ZM21 16H18V8.556C18 7.146 16.854 6 15.445 6H8V3C8 2.447 7.553 2 7 2C6.448 2 6 2.447 6 3V6H3C2.448 6 2 6.447 2 7C2 7.553 2.448 8 3 8H6V15.444C6 16.854 7.147 18 8.556 18H16V21C16 21.553 16.448 22 17 22C17.553 22 18 21.553 18 21V18H21C21.553 18 22 17.553 22 17C22 16.447 21.553 16 21 16Z",
    fill: fill
  }));
};
IconCrop.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4e = ["size", "fill"];
var IconEdit2$1 = function IconEdit2(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4e);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.103 15.8848L9.08 15.6138L14.68 10.0088L11.984 7.31181L6.367 12.9288L6.103 15.8848ZM13.324 5.97281L16.019 8.66781L17.966 6.71781L15.272 4.02381L13.324 5.97281ZM4.293 17.6968C4.083 17.4868 3.978 17.1948 4.004 16.8988L4.383 12.7288C4.425 12.2718 4.627 11.8408 4.953 11.5148L13.949 2.51881C14.651 1.81381 15.924 1.84881 16.665 2.58781L19.403 5.32581L19.404 5.32681C20.169 6.09281 20.2 7.31081 19.472 8.04081L10.475 17.0378C10.15 17.3628 9.719 17.5648 9.261 17.6068L5.091 17.9858C5.061 17.9878 5.031 17.9888 5 17.9888C4.737 17.9888 4.482 17.8848 4.293 17.6968ZM20 20.9888C20 21.5388 19.55 21.9888 19 21.9888H5C4.451 21.9888 4 21.5388 4 20.9888C4 20.4398 4.451 19.9888 5 19.9888H19C19.55 19.9888 20 20.4398 20 20.9888Z",
    fill: fill
  }));
};
IconEdit2$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4f = ["size", "fill"];
var IconEdit3 = function IconEdit3(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4f);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    d: "M10.49 5.51457H5.49001C4.95957 5.51457 4.45086 5.72528 4.07579 6.10035C3.70072 6.47543 3.49001 6.98413 3.49001 7.51457V18.5146C3.49001 19.045 3.70072 19.5537 4.07579 19.9288C4.45086 20.3039 4.95957 20.5146 5.49001 20.5146H16.49C17.0204 20.5146 17.5291 20.3039 17.9042 19.9288C18.2793 19.5537 18.49 19.045 18.49 18.5146V13.5146M17.076 4.10057C17.2605 3.90955 17.4812 3.75718 17.7252 3.65236C17.9692 3.54755 18.2316 3.49237 18.4972 3.49007C18.7628 3.48776 19.0261 3.53836 19.2719 3.63892C19.5177 3.73949 19.741 3.88799 19.9288 4.07578C20.1166 4.26356 20.2651 4.48687 20.3656 4.73266C20.4662 4.97845 20.5168 5.24181 20.5145 5.50737C20.5122 5.77293 20.457 6.03537 20.3522 6.27938C20.2474 6.52338 20.095 6.74407 19.904 6.92857L11.318 15.5146H8.49001V12.6866L17.076 4.10057Z",
    stroke: fill,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
IconEdit3.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4g = ["size", "fill"];
var IconEdit$1 = function IconEdit(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4g);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.0197 10.6678L13.3247 7.97281L15.2727 6.02381L17.9667 8.71781L16.0197 10.6678ZM9.0807 17.6138L6.1037 17.8848L6.3677 14.9288L11.9847 9.31181L14.6807 12.0078L9.0807 17.6138ZM19.4047 7.32681L19.4037 7.32581L16.6657 4.58781C15.9247 3.84881 14.6517 3.81381 13.9497 4.51881L4.9537 13.5148C4.6277 13.8398 4.4257 14.2718 4.3837 14.7288L4.0047 18.8988C3.9787 19.1938 4.0837 19.4858 4.2937 19.6958C4.4827 19.8848 4.7377 19.9888 5.0007 19.9888C5.0317 19.9888 5.0617 19.9878 5.0917 19.9848L9.2617 19.6058C9.71971 19.5638 10.1507 19.3628 10.4757 19.0378L19.4727 10.0408C20.2007 9.31081 20.1697 8.09281 19.4047 7.32681Z",
    fill: fill
  }));
};
IconEdit$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4h = ["size", "fill"];
var IconEyeOff = function IconEyeOff(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4h);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.809 12.1455C19.514 10.7285 20.699 8.70347 20.992 6.37447C21.061 5.82747 20.673 5.32747 20.124 5.25847C19.584 5.18447 19.076 5.57747 19.008 6.12547C18.569 9.61747 15.556 12.2505 12 12.2505C8.44401 12.2505 5.43101 9.61747 4.99201 6.12547C4.92401 5.57747 4.41401 5.18847 3.87501 5.25847C3.32701 5.32747 2.93901 5.82747 3.00801 6.37447C3.30101 8.70347 4.48601 10.7285 6.19101 12.1455L3.87901 14.4575C3.49001 14.8465 3.49001 15.4825 3.87901 15.8715C4.26701 16.2605 4.90401 16.2605 5.29301 15.8715L7.89601 13.2685C8.85001 13.7505 9.89701 14.0685 11 14.1895V17.7505C11 18.3005 11.45 18.7505 12 18.7505C12.55 18.7505 13 18.3005 13 17.7505V14.1895C14.102 14.0685 15.15 13.7505 16.103 13.2685L18.707 15.8715C19.096 16.2605 19.732 16.2605 20.121 15.8715C20.51 15.4825 20.51 14.8465 20.121 14.4575L17.809 12.1455Z",
    fill: fill
  }));
};
IconEyeOff.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4i = ["size", "fill"];
var IconEye$1 = function IconEye(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4i);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.0002 13.5008C11.1732 13.5008 10.5002 12.8278 10.5002 12.0008C10.5002 11.1738 11.1732 10.5008 12.0002 10.5008C12.8272 10.5008 13.5002 11.1738 13.5002 12.0008C13.5002 12.8278 12.8272 13.5008 12.0002 13.5008ZM12.0002 8.50075C10.0702 8.50075 8.50017 10.0708 8.50017 12.0008C8.50017 13.9308 10.0702 15.5008 12.0002 15.5008C13.9302 15.5008 15.5002 13.9308 15.5002 12.0008C15.5002 10.0708 13.9302 8.50075 12.0002 8.50075ZM12.2199 16.9984C7.91387 17.0984 5.10487 13.4154 4.17287 11.9964C5.19887 10.3914 7.78287 7.10535 11.7809 7.00335C16.0699 6.89435 18.8949 10.5864 19.8269 12.0054C18.8019 13.6104 16.2169 16.8964 12.2199 16.9984ZM21.8679 11.5034C21.2299 10.3914 17.7059 4.81735 11.7299 5.00435C6.20187 5.14435 2.98687 10.0144 2.13287 11.5034C1.95587 11.8114 1.95587 12.1904 2.13287 12.4984C2.76187 13.5954 6.16187 19.0004 12.0249 19.0004C12.1069 19.0004 12.1889 18.9994 12.2709 18.9974C17.7979 18.8564 21.0139 13.9874 21.8679 12.4984C22.0439 12.1904 22.0439 11.8114 21.8679 11.5034Z",
    fill: fill
  }));
};
IconEye$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4j = ["size", "fill"];
var IconEyeSlash$1 = function IconEyeSlash(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4j);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.8677 12.4979C21.4527 13.2209 20.4767 14.7389 18.9547 16.1269L17.5437 14.7159C18.6037 13.7649 19.3707 12.7189 19.8267 12.0049C18.8947 10.5859 16.0717 6.89387 11.7807 7.00287C11.1807 7.01787 10.6177 7.11187 10.0817 7.25387L8.50172 5.67387C9.47372 5.28987 10.5447 5.03387 11.7297 5.00387C17.7047 4.81687 21.2297 10.3909 21.8677 11.5029C22.0437 11.8109 22.0437 12.1899 21.8677 12.4979ZM13.9177 16.7469L15.4977 18.3269C14.5267 18.7109 13.4547 18.9669 12.2707 18.9969C12.1887 18.9989 12.1067 18.9999 12.0247 18.9999C6.16172 18.9999 2.76172 13.5949 2.13272 12.4979C1.95572 12.1899 1.95572 11.8109 2.13272 11.5029C2.54672 10.7799 3.52272 9.26187 5.04472 7.87287L6.45572 9.28487C5.39572 10.2359 4.62972 11.2819 4.17272 11.9959C5.10472 13.4149 7.91472 17.0979 12.2197 16.9979C12.8197 16.9829 13.3827 16.8889 13.9177 16.7469ZM11.9997 13.4999C11.1727 13.4999 10.4997 12.8279 10.4997 11.9999C10.4997 11.9749 10.5107 11.9519 10.5117 11.9259L12.0747 13.4889C12.0487 13.4899 12.0257 13.4999 11.9997 13.4999ZM4.70672 3.29287C4.31672 2.90287 3.68372 2.90287 3.29272 3.29287C2.90272 3.68387 2.90272 4.31687 3.29272 4.70687L8.92372 10.3379C8.64672 10.8459 8.49972 11.4109 8.49972 11.9999C8.49972 13.9299 10.0707 15.4999 11.9997 15.4999C12.5897 15.4999 13.1547 15.3529 13.6627 15.0769L19.2927 20.7069C19.4887 20.9029 19.7437 20.9999 19.9997 20.9999C20.2557 20.9999 20.5117 20.9029 20.7067 20.7069C21.0977 20.3169 21.0977 19.6839 20.7067 19.2929L4.70672 3.29287Z",
    fill: fill
  }));
};
IconEyeSlash$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4k = ["size", "fill"];
var IconFlip = function IconFlip(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4k);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.2931 7.20701C13.9021 6.81601 13.9021 6.18401 14.2931 5.79301L17.2931 2.79301C17.6841 2.40201 18.3161 2.40201 18.7071 2.79301L21.7071 5.79301C21.9021 5.98801 22.0001 6.24401 22.0001 6.50001C22.0001 6.75601 21.9021 7.01201 21.7071 7.20701C21.3161 7.59801 20.6841 7.59801 20.2931 7.20701L19.0001 5.91401V17.91C19.0001 19.89 17.4171 21.5 15.4711 21.5H13.0001C12.4471 21.5 12.0001 21.053 12.0001 20.5C12.0001 19.947 12.4471 19.5 13.0001 19.5H15.4711C16.3141 19.5 17.0001 18.787 17.0001 17.91V5.91401L15.7071 7.20701C15.3161 7.59801 14.6841 7.59801 14.2931 7.20701ZM5.00012 18.0858V6.08981C5.00012 4.11081 6.58312 2.49981 8.52912 2.49981H11.0001C11.5531 2.49981 12.0001 2.94681 12.0001 3.49981C12.0001 4.05281 11.5531 4.49981 11.0001 4.49981H8.52912C7.68712 4.49981 7.00012 5.21281 7.00012 6.08981V18.0858L8.29312 16.7928C8.68412 16.4028 9.31612 16.4028 9.70712 16.7928C9.90212 16.9878 10.0001 17.2438 10.0001 17.4998C10.0001 17.7558 9.90212 18.0118 9.70712 18.2068L6.70712 21.2068C6.31612 21.5978 5.68412 21.5978 5.29312 21.2068L2.29312 18.2068C1.90212 17.8168 1.90212 17.1838 2.29312 16.7928C2.68412 16.4028 3.31612 16.4028 3.70712 16.7928L5.00012 18.0858Z",
    fill: fill
  }));
};
IconFlip.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4l = ["size", "fill"];
var IconLayerGroup$1 = function IconLayerGroup(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4l);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.7598 15.5402L11.9998 18.8472L6.23984 15.5402L7.93384 14.8193L11.5018 16.8672C11.6558 16.9563 11.8278 17.0002 11.9998 17.0002C12.1718 17.0002 12.3428 16.9563 12.4978 16.8672L16.0658 14.8182L17.7598 15.5402ZM11.5018 12.8673C11.6558 12.9563 11.8278 13.0002 11.9998 13.0002C12.1718 13.0002 12.3428 12.9563 12.4978 12.8673L16.0658 10.8183L17.7598 11.5402L11.9998 14.8472L6.23984 11.5402L7.93384 10.8183L11.5018 12.8673ZM11.9998 5.08725L17.7598 7.54025L11.9998 10.8472L6.23984 7.54025L11.9998 5.08725ZM20.9978 11.3483C20.9748 10.9693 20.7398 10.6363 20.3908 10.4872L18.2388 9.57125L20.4978 8.27425C20.8268 8.08625 21.0198 7.72725 20.9978 7.34825C20.9748 6.97025 20.7398 6.63625 20.3908 6.48725L12.3908 3.08025C12.1408 2.97325 11.8578 2.97325 11.6078 3.08025L3.60784 6.48725C3.25884 6.63625 3.02384 6.97025 3.00184 7.34825C2.97884 7.72725 3.17284 8.08625 3.50184 8.27425L5.75984 9.57125L3.60784 10.4872C3.25884 10.6363 3.02384 10.9693 3.00184 11.3483C2.97884 11.7273 3.17284 12.0863 3.50184 12.2743L5.75984 13.5712L3.60784 14.4873C3.25884 14.6363 3.02384 14.9693 3.00184 15.3483C2.97884 15.7273 3.17284 16.0863 3.50184 16.2743L11.5018 20.8673C11.6558 20.9563 11.8278 21.0002 11.9998 21.0002C12.1718 21.0002 12.3428 20.9563 12.4978 20.8673L20.4978 16.2743C20.8268 16.0863 21.0198 15.7273 20.9978 15.3483C20.9748 14.9703 20.7398 14.6363 20.3918 14.4873L18.2398 13.5702L20.4978 12.2743C20.8268 12.0863 21.0198 11.7273 20.9978 11.3483Z",
    fill: fill
  }));
};
IconLayerGroup$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4m = ["size", "fill"];
var IconLayout$1 = function IconLayout(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4m);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 19H13V10H19V18C19 18.552 18.551 19 18 19ZM5 18V10H11V19H6C5.449 19 5 18.552 5 18ZM6 5H18C18.551 5 19 5.448 19 6V8H5V6C5 5.448 5.449 5 6 5ZM18 3H6C4.346 3 3 4.346 3 6V8.818V9.182V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V9.182V8.818V6C21 4.346 19.654 3 18 3Z",
    fill: fill
  }));
};
IconLayout$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4n = ["size", "fill"];
var IconLink2 = function IconLink2(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4n);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.5267 3.89973C13.7087 1.71273 17.2297 1.31773 19.6617 3.21973C22.5747 5.49773 22.7657 9.74273 20.2347 12.2797L18.8117 13.7047C18.4187 14.0987 17.7827 14.0987 17.3897 13.7047C16.9967 13.3117 16.9967 12.6727 17.3897 12.2797L18.8117 10.8537C20.4667 9.19673 20.3767 6.44173 18.5397 4.90373C16.9127 3.54073 14.4707 3.80073 12.9717 5.30273L11.6987 6.57773C11.3067 6.97173 10.6687 6.97173 10.2767 6.57773C9.88374 6.18473 9.87973 5.54973 10.4537 4.97473L11.5267 3.89973ZM13.2926 9.29303L9.29264 13.293C8.90164 13.684 8.90164 14.316 9.29264 14.707C9.48764 14.902 9.74364 15 9.99964 15C10.2556 15 10.5116 14.902 10.7066 14.707L14.7066 10.707C15.0976 10.316 15.0976 9.68403 14.7066 9.29303C14.3156 8.90203 13.6836 8.90203 13.2926 9.29303ZM12.2799 17.3965L11.0059 18.6675C9.50493 20.1645 7.05794 20.4225 5.42994 19.0655C3.59094 17.5335 3.49994 14.7875 5.15694 13.1345L6.58193 11.7145C6.97494 11.3225 6.97494 10.6865 6.58193 10.2935C6.18893 9.90253 5.55094 9.90253 5.15694 10.2935L3.88194 11.5665C1.70994 13.7325 1.32894 17.2165 3.20694 19.6405C5.47794 22.5735 9.73794 22.7715 12.2799 20.2375L13.7049 18.8175C14.0979 18.4245 14.0979 17.7895 13.7049 17.3965C13.3109 17.0035 12.6739 17.0035 12.2799 17.3965Z",
    fill: fill
  }));
};
IconLink2.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4o = ["size", "fill"];
var IconLink = function IconLink(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4o);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.99966 16H7.20966C5.10366 16 3.20366 14.465 3.01666 12.366C2.80366 9.996 4.67266 8 6.99966 8H8.99966C9.55166 8 9.99966 7.553 9.99966 7C9.99966 6.447 9.55166 6 8.99966 6H7.20866C4.15966 6 1.43866 8.187 1.05066 11.211C0.581663 14.869 3.43166 18 6.99966 18H8.99966C9.55166 18 9.99966 17.553 9.99966 17C9.99966 16.447 9.55166 16 8.99966 16ZM7.99966 12C7.99966 12.553 8.44766 13 8.99966 13H14.9997C15.5517 13 15.9997 12.553 15.9997 12C15.9997 11.447 15.5517 11 14.9997 11H8.99966C8.44766 11 7.99966 11.447 7.99966 12ZM16.7588 6.0002C19.8258 6.0002 22.5778 8.1972 22.9528 11.2422C23.4018 14.8882 20.5578 18.0002 16.9998 18.0002H14.9998C14.4478 18.0002 13.9998 17.5532 13.9998 17.0002C13.9998 16.4472 14.4478 16.0002 14.9998 16.0002H16.9998C19.3268 16.0002 21.1958 14.0042 20.9828 11.6342C20.7958 9.5352 18.8958 8.0002 16.7888 8.0002H14.9998C14.4478 8.0002 13.9998 7.5532 13.9998 7.0002C13.9998 6.4472 14.4428 6.0002 15.2488 6.0002H16.7588Z",
    fill: fill
  }));
};
IconLink.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4p = ["size", "fill"];
var IconMinCircle$1 = function IconMinCircle(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4p);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 11H9C8.45 11 8 11.45 8 12C8 12.55 8.45 13 9 13H15C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconMinCircle$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4q = ["size", "fill"];
var IconMin = function IconMin(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4q);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 13H5C4.448 13 4 12.553 4 12C4 11.447 4.448 11 5 11H19C19.553 11 20 11.447 20 12C20 12.553 19.553 13 19 13Z",
    fill: fill
  }));
};
IconMin.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4r = ["size", "fill"];
var IconMinSquare$1 = function IconMinSquare(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4r);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 11H9C8.45 11 8 11.45 8 12C8 12.55 8.45 13 9 13H15C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11ZM19 18C19 18.551 18.552 19 18 19H6C5.448 19 5 18.551 5 18V6C5 5.449 5.448 5 6 5H18C18.552 5 19 5.449 19 6V18ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z",
    fill: fill
  }));
};
IconMinSquare$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4s = ["size", "fill"];
var IconPaintBrush$1 = function IconPaintBrush(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4s);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.766 7.39297L11.899 13.258C11.748 13.032 11.575 12.818 11.378 12.622C11.181 12.425 10.967 12.253 10.741 12.105L16.61 6.23797C16.916 5.93097 17.458 5.92998 17.767 6.23898C17.92 6.39197 18.003 6.59197 18 6.82798C18.003 7.03898 17.919 7.23898 17.766 7.39297ZM8.24595 17.941L6.01795 17.982L6.05695 15.751C6.07795 14.485 7.12695 13.435 8.39595 13.413C8.40995 13.413 8.42195 13.412 8.43595 13.412C9.01995 13.412 9.56095 13.632 9.96395 14.036C10.377 14.448 10.598 15.004 10.588 15.602C10.567 16.87 9.51595 17.919 8.24595 17.941ZM20 6.82798C20.01 6.07197 19.718 5.35997 19.181 4.82398C18.119 3.76298 16.256 3.75997 15.196 4.82398L8.58295 11.434C8.50795 11.43 8.43595 11.414 8.36095 11.413C6.02695 11.455 4.09595 13.386 4.05695 15.717L3.99995 18.983C3.99495 19.254 4.10195 19.516 4.29295 19.707C4.48095 19.895 4.73595 20 4.99995 20H5.01895L8.28495 19.941C10.617 19.9 12.547 17.969 12.588 15.636C12.589 15.561 12.573 15.49 12.571 15.414L19.18 8.80697C19.718 8.26897 20.01 7.55697 20 6.82798Z",
    fill: fill
  }));
};
IconPaintBrush$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4t = ["size", "fill"];
var IconPalette$1 = function IconPalette(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4t);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.499 6.50003C10.499 5.67203 11.171 5.00003 11.999 5.00003C12.827 5.00003 13.499 5.67203 13.499 6.50003C13.499 7.32803 12.827 8.00003 11.999 8.00003C11.171 8.00003 10.499 7.32803 10.499 6.50003ZM14.7 9.25023C14.286 8.53323 14.532 7.61523 15.249 7.20123C15.967 6.78723 16.884 7.03323 17.298 7.75023C17.712 8.46823 17.466 9.38523 16.749 9.79923C16.031 10.2132 15.114 9.96823 14.7 9.25023ZM8.74902 7.20123C8.03202 6.78723 7.11402 7.03323 6.70002 7.75023C6.28602 8.46823 6.53202 9.38523 7.24902 9.79923C7.96702 10.2132 8.88402 9.96823 9.29802 9.25023C9.71202 8.53323 9.46702 7.61523 8.74902 7.20123ZM5.75612 13.3388C5.29212 12.6528 5.47312 11.7198 6.16012 11.2568C6.84712 10.7928 7.77912 10.9748 8.24212 11.6608C8.70612 12.3478 8.52412 13.2798 7.83812 13.7428C7.15112 14.2068 6.21912 14.0258 5.75612 13.3388ZM15.8799 15.001H14.2299C12.8509 15.001 11.7299 16.122 11.7299 17.501C11.7299 18.107 11.9539 18.694 12.3609 19.154C12.4849 19.294 12.5259 19.459 12.4819 19.642C12.4329 19.847 12.1969 19.98 11.8879 20C9.60492 19.969 7.43792 18.958 5.94192 17.227C4.42692 15.472 3.76292 13.223 4.07292 10.895C4.58392 7.06203 8.03092 4.03303 11.9219 4.00003H11.9969C14.3539 4.00003 16.5749 4.90003 18.1039 6.47803C19.3919 7.80703 20.0639 9.50203 19.9939 11.25C19.9149 13.248 17.9919 15.001 15.8799 15.001ZM19.5389 5.08503C17.6159 3.10103 14.8139 1.99303 11.9049 2.00003H11.9039C6.95992 2.04203 2.73992 5.75203 2.09092 10.631C1.70892 13.491 2.56192 16.372 4.42892 18.534C6.29692 20.698 9.00592 21.961 11.8599 22H11.8979C13.0979 22 14.1559 21.213 14.4249 20.114C14.6239 19.292 14.4169 18.458 13.8579 17.826C13.7759 17.735 13.7299 17.616 13.7299 17.501C13.7299 17.226 13.9539 17.001 14.2299 17.001H15.8799C19.0719 17.001 21.8709 14.403 21.9919 11.329C22.0839 9.02903 21.2129 6.81203 19.5389 5.08503Z",
    fill: fill
  }));
};
IconPalette$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4u = ["size", "fill"];
var IconPencil$1 = function IconPencil(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4u);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.0564 10.6408L13.3604 7.9448L15.2724 6.0338L17.9664 8.7278L16.0564 10.6408ZM9.07945 17.6238L6.10345 17.8948L6.36745 14.9388L11.9464 9.3588L14.6424 12.0548L9.07945 17.6238ZM19.4034 7.3358L16.6634 4.5968C15.8964 3.8288 14.6774 3.8008 13.9494 4.5288L11.9464 6.5308L10.7074 5.2918C10.3174 4.9018 9.68444 4.9018 9.29345 5.2918C8.90345 5.6828 8.90345 6.3158 9.29345 6.7058L10.5324 7.9448L4.95245 13.5248C4.62745 13.8498 4.42545 14.2818 4.38345 14.7388L4.00445 18.9088C3.97845 19.2038 4.08345 19.4958 4.29345 19.7058C4.48245 19.8948 4.73745 19.9988 5.00045 19.9988C5.03145 19.9988 5.06145 19.9978 5.09145 19.9948L9.26145 19.6168C9.71845 19.5748 10.1504 19.3718 10.4754 19.0468L16.0554 13.4678L17.2934 14.7058C17.4894 14.9018 17.7444 14.9988 18.0004 14.9988C18.2564 14.9988 18.5124 14.9018 18.7074 14.7058C19.0984 14.3158 19.0984 13.6828 18.7074 13.2918L17.4694 12.0538L19.4714 10.0508C20.2014 9.3218 20.1704 8.1038 19.4034 7.3358Z",
    fill: fill
  }));
};
IconPencil$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4v = ["size", "fill"];
var IconPlusCircle$1 = function IconPlusCircle(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4v);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 11H13V9C13 8.45 12.55 8 12 8C11.45 8 11 8.45 11 9V11H9C8.45 11 8 11.45 8 12C8 12.55 8.45 13 9 13H11V15C11 15.55 11.45 16 12 16C12.55 16 13 15.55 13 15V13H15C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconPlusCircle$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4w = ["size", "fill"];
var IconPlus = function IconPlus(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4w);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 11H13V5C13 4.447 12.552 4 12 4C11.448 4 11 4.447 11 5V11H5C4.448 11 4 11.447 4 12C4 12.553 4.448 13 5 13H11V19C11 19.553 11.448 20 12 20C12.552 20 13 19.553 13 19V13H19C19.552 13 20 12.553 20 12C20 11.447 19.552 11 19 11Z",
    fill: fill
  }));
};
IconPlus.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4x = ["size", "fill"];
var IconPlusSquare$1 = function IconPlusSquare(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4x);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 11H13V9C13 8.45 12.55 8 12 8C11.45 8 11 8.45 11 9V11H9C8.45 11 8 11.45 8 12C8 12.55 8.45 13 9 13H11V15C11 15.55 11.45 16 12 16C12.55 16 13 15.55 13 15V13H15C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11ZM19 18C19 18.551 18.552 19 18 19H6C5.448 19 5 18.551 5 18V6C5 5.449 5.448 5 6 5H18C18.552 5 19 5.449 19 6V18ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z",
    fill: fill
  }));
};
IconPlusSquare$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4y = ["size", "fill"];
var IconScissors = function IconScissors(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4y);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.2069 18.293C20.5979 18.684 20.5979 19.316 20.2069 19.707C20.0119 19.902 19.7559 20 19.4999 20C19.2439 20 18.9879 19.902 18.7929 19.707L13.7929 14.707C13.4019 14.316 13.4019 13.684 13.7929 13.293C14.1839 12.902 14.8159 12.902 15.2069 13.293L20.2069 18.293ZM6.49988 19C5.94788 19 5.49988 18.551 5.49988 18C5.49988 17.449 5.94788 17 6.49988 17C7.05188 17 7.49988 17.449 7.49988 18C7.49988 18.551 7.05188 19 6.49988 19ZM6.49988 7C5.94788 7 5.49988 6.551 5.49988 6C5.49988 5.449 5.94788 5 6.49988 5C7.05188 5 7.49988 5.449 7.49988 6C7.49988 6.551 7.05188 7 6.49988 7ZM20.2079 5.706C20.5989 5.314 20.5969 4.682 20.2059 4.292C19.8139 3.902 19.1819 3.904 18.7919 4.294L12.5119 10.597L9.20688 7.293C9.20388 7.291 9.20088 7.29 9.19788 7.287C9.38588 6.896 9.49988 6.462 9.49988 6C9.49988 4.346 8.15388 3 6.49988 3C4.84588 3 3.49988 4.346 3.49988 6C3.49988 7.654 4.84588 9 6.49988 9C6.96288 9 7.39488 8.886 7.78688 8.698C7.78988 8.701 7.78988 8.705 7.79288 8.707L11.0999 12.014L7.81088 15.314C7.41288 15.12 6.97288 15 6.49988 15C4.84588 15 3.49988 16.346 3.49988 18C3.49988 19.654 4.84588 21 6.49988 21C8.15388 21 9.49988 19.654 9.49988 18C9.49988 17.549 9.39288 17.125 9.21388 16.74L20.2079 5.706Z",
    fill: fill
  }));
};
IconScissors.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4z = ["size", "fill"];
var IconSliders$1 = function IconSliders(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4z);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11 19C10.448 19 10 18.552 10 18C10 17.448 10.448 17 11 17C11.552 17 12 17.448 12 18C12 18.552 11.552 19 11 19ZM21 17H13.815C13.401 15.839 12.302 15 11 15C9.698 15 8.599 15.839 8.185 17H3C2.447 17 2 17.447 2 18C2 18.553 2.447 19 3 19H8.185C8.599 20.161 9.698 21 11 21C12.302 21 13.401 20.161 13.815 19H21C21.553 19 22 18.553 22 18C22 17.447 21.553 17 21 17ZM19 13C18.448 13 18 12.552 18 12C18 11.448 18.448 11 19 11C19.552 11 20 11.448 20 12C20 12.552 19.552 13 19 13ZM19 9C17.698 9 16.599 9.839 16.185 11H3C2.447 11 2 11.447 2 12C2 12.553 2.447 13 3 13H16.185C16.599 14.161 17.698 15 19 15C20.654 15 22 13.654 22 12C22 10.346 20.654 9 19 9ZM7 5C7.552 5 8 5.448 8 6C8 6.552 7.552 7 7 7C6.448 7 6 6.552 6 6C6 5.448 6.448 5 7 5ZM3 7H4.185C4.599 8.161 5.698 9 7 9C8.302 9 9.401 8.161 9.815 7H21C21.553 7 22 6.553 22 6C22 5.447 21.553 5 21 5H9.815C9.401 3.839 8.302 3 7 3C5.698 3 4.599 3.839 4.185 5H3C2.447 5 2 5.447 2 6C2 6.553 2.447 7 3 7Z",
    fill: fill
  }));
};
IconSliders$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4A = ["size", "fill"];
var IconSlidersUp$1 = function IconSlidersUp(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4A);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 6C11.448 6 11 5.552 11 5C11 4.448 11.448 4 12 4C12.552 4 13 4.448 13 5C13 5.552 12.552 6 12 6ZM15 5C15 3.346 13.654 2 12 2C10.346 2 9 3.346 9 5C9 6.302 9.839 7.401 11 7.815V21C11 21.553 11.447 22 12 22C12.553 22 13 21.553 13 21V7.815C14.161 7.401 15 6.302 15 5ZM6 18C5.448 18 5 17.552 5 17C5 16.448 5.448 16 6 16C6.552 16 7 16.448 7 17C7 17.552 6.552 18 6 18ZM7 14.185V3C7 2.447 6.553 2 6 2C5.447 2 5 2.447 5 3V14.185C3.839 14.599 3 15.698 3 17C3 18.302 3.839 19.401 5 19.815V21C5 21.553 5.447 22 6 22C6.553 22 7 21.553 7 21V19.815C8.161 19.401 9 18.302 9 17C9 15.698 8.161 14.599 7 14.185ZM18 14C17.448 14 17 13.552 17 13C17 12.448 17.448 12 18 12C18.552 12 19 12.448 19 13C19 13.552 18.552 14 18 14ZM21 13C21 11.698 20.161 10.599 19 10.185V3C19 2.447 18.553 2 18 2C17.447 2 17 2.447 17 3V10.185C15.839 10.599 15 11.698 15 13C15 14.302 15.839 15.401 17 15.815V21C17 21.553 17.447 22 18 22C18.553 22 19 21.553 19 21V15.815C20.161 15.401 21 14.302 21 13Z",
    fill: fill
  }));
};
IconSlidersUp$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4B = ["size", "fill"];
var IconSquare = function IconSquare(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4B);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 5C5.449 5 5 5.449 5 6V18C5 18.551 5.449 19 6 19H18C18.551 19 19 18.551 19 18V6C19 5.449 18.551 5 18 5H6ZM18 21H6C4.346 21 3 19.654 3 18V6C3 4.346 4.346 3 6 3H18C19.654 3 21 4.346 21 6V18C21 19.654 19.654 21 18 21Z",
    fill: fill
  }));
};
IconSquare.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4C = ["size", "fill"];
var IconTrash2$1 = function IconTrash2(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4C);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 16C10 16.55 9.55 17 9 17C8.45 17 8 16.55 8 16V12C8 11.45 8.45 11 9 11C9.55 11 10 11.45 10 12V16ZM16 16C16 16.55 15.55 17 15 17C14.45 17 14 16.55 14 16V12C14 11.45 14.45 11 15 11C15.55 11 16 11.45 16 12V16ZM18 19C18 19.551 17.552 20 17 20H7C6.448 20 6 19.551 6 19V8H18V19ZM10 4.328C10 4.173 10.214 4 10.5 4H13.5C13.786 4 14 4.173 14 4.328V6H10V4.328ZM21 6H20H16V4.328C16 3.044 14.879 2 13.5 2H10.5C9.121 2 8 3.044 8 4.328V6H4H3C2.45 6 2 6.45 2 7C2 7.55 2.45 8 3 8H4V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V8H21C21.55 8 22 7.55 22 7C22 6.45 21.55 6 21 6Z",
    fill: fill
  }));
};
IconTrash2$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4D = ["size", "fill"];
var IconTrash$1 = function IconTrash(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4D);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 19C18 19.551 17.552 20 17 20H7C6.448 20 6 19.551 6 19V8H18V19ZM10 4.328C10 4.173 10.214 4 10.5 4H13.5C13.786 4 14 4.173 14 4.328V6H10V4.328ZM21 6H20H16V4.328C16 3.044 14.879 2 13.5 2H10.5C9.121 2 8 3.044 8 4.328V6H4H3C2.45 6 2 6.45 2 7C2 7.55 2.45 8 3 8H4V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V8H21C21.55 8 22 7.55 22 7C22 6.45 21.55 6 21 6Z",
    fill: fill
  }));
};
IconTrash$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4E = ["size", "fill"];
var IconXmark = function IconXmark(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4E);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.414 12L17.707 7.70701C18.098 7.31601 18.098 6.68401 17.707 6.29301C17.316 5.90201 16.684 5.90201 16.293 6.29301L12 10.586L7.70701 6.29301C7.31601 5.90201 6.68401 5.90201 6.29301 6.29301C5.90201 6.68401 5.90201 7.31601 6.29301 7.70701L10.586 12L6.29301 16.293C5.90201 16.684 5.90201 17.316 6.29301 17.707C6.48801 17.902 6.74401 18 7.00001 18C7.25601 18 7.51201 17.902 7.70701 17.707L12 13.414L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293L13.414 12Z",
    fill: fill
  }));
};
IconXmark.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4F = ["size", "fill"];
var IconXmarkSquare$1 = function IconXmarkSquare(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4F);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.707 9.293C14.316 8.902 13.684 8.902 13.293 9.293L12 10.586L10.707 9.293C10.316 8.902 9.684 8.902 9.293 9.293C8.902 9.684 8.902 10.316 9.293 10.707L10.586 12L9.293 13.293C8.902 13.684 8.902 14.316 9.293 14.707C9.488 14.902 9.744 15 10 15C10.256 15 10.512 14.902 10.707 14.707L12 13.414L13.293 14.707C13.488 14.902 13.744 15 14 15C14.256 15 14.512 14.902 14.707 14.707C15.098 14.316 15.098 13.684 14.707 13.293L13.414 12L14.707 10.707C15.098 10.316 15.098 9.684 14.707 9.293ZM19 18C19 18.552 18.552 19 18 19H6C5.448 19 5 18.552 5 18V6C5 5.448 5.448 5 6 5H18C18.552 5 19 5.448 19 6V18ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z",
    fill: fill
  }));
};
IconXmarkSquare$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4G = ["size", "fill"];
var IconThermometer = function IconThermometer(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4G);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 9.54V5C13 4.733 12.897 4.487 12.713 4.306C12.514 4.102 12.267 4 12 4C11.448 4 11 4.449 11 5V9.54H13ZM12 22C9.243 22 7 19.757 7 17C7 15.42 7.754 13.937 9 13.003V5C9 3.346 10.346 2 12 2C12.812 2 13.566 2.317 14.127 2.892C14.684 3.434 15 4.189 15 5V13.003C16.246 13.937 17 15.42 17 17C17 19.757 14.757 22 12 22Z",
    fill: fill
  }));
};
IconThermometer.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4H = ["size", "fill"];
var IconThermometerMin = function IconThermometerMin(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4H);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 5V9.54H15V5C15 4.449 15.448 4 16 4C16.267 4 16.514 4.102 16.713 4.306C16.897 4.487 17 4.733 17 5ZM11 17C11 19.757 13.243 22 16 22C18.757 22 21 19.757 21 17C21 15.42 20.246 13.937 19 13.003V5C19 4.189 18.684 3.434 18.127 2.892C17.566 2.317 16.812 2 16 2C14.346 2 13 3.346 13 5V13.003C11.754 13.937 11 15.42 11 17ZM5 7H9C9.55 7 10 6.55 10 6C10 5.45 9.55 5 9 5H5C4.45 5 4 5.45 4 6C4 6.55 4.45 7 5 7Z",
    fill: fill
  }));
};
IconThermometerMin.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4I = ["size", "fill"];
var IconThermometerPlus = function IconThermometerPlus(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4I);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 9.54V5C17 4.733 16.897 4.487 16.713 4.306C16.514 4.102 16.267 4 16 4C15.448 4 15 4.449 15 5V9.54H17ZM16 22C13.243 22 11 19.757 11 17C11 15.42 11.754 13.937 13 13.003V5C13 3.346 14.346 2 16 2C16.812 2 17.566 2.317 18.127 2.892C18.684 3.434 19 4.189 19 5V13.003C20.246 13.937 21 15.42 21 17C21 19.757 18.757 22 16 22ZM6 7H5C4.45 7 4 6.55 4 6C4 5.45 4.45 5 5 5H6V4C6 3.45 6.45 3 7 3C7.55 3 8 3.45 8 4V5H9C9.55 5 10 5.45 10 6C10 6.55 9.55 7 9 7H8V8C8 8.55 7.55 9 7 9C6.45 9 6 8.55 6 8V7Z",
    fill: fill
  }));
};
IconThermometerPlus.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4J = ["size", "fill"];
var IconWeightScale = function IconWeightScale(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4J);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11 4.172V6C11 6.553 11.448 7 12 7C12.552 7 13 6.553 13 6V4.172C13.923 4.498 14.651 5.267 14.907 6.271C14.97 6.492 15 6.732 15 7C15 8.654 13.654 10 12 10C10.346 10 9 8.654 9 7C9 6.738 9.031 6.505 9.091 6.288C9.094 6.276 9.095 6.265 9.098 6.253L9.102 6.238C9.354 5.256 10.08 4.496 11 4.172ZM18 5H16.578C15.799 3.201 14.017 2 12 2C9.977 2 8.191 3.209 7.42 5H6C4.346 5 3 6.346 3 8V19C3 20.654 4.346 22 6 22H18C19.654 22 21 20.654 21 19V8C21 6.346 19.654 5 18 5Z",
    fill: fill
  }));
};
IconWeightScale.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4K = ["size", "fill"];
var IconHeightScale = function IconHeightScale(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4K);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 4H10C10.55 4 11 4.45 11 5C11 5.55 10.55 6 10 6H3C2.45 6 2 5.55 2 5C2 4.45 2.45 4 3 4ZM6 11H10C10.55 11 11 11.45 11 12C11 12.55 10.55 13 10 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11ZM10 18H8C7.45 18 7 18.45 7 19C7 19.55 7.45 20 8 20H10C10.55 20 11 19.55 11 19C11 18.45 10.55 18 10 18ZM19.0002 16.6438L20.3052 15.3838C20.7032 15.0008 21.3362 15.0118 21.7192 15.4088C22.1032 15.8068 22.0922 16.4398 21.6952 16.8228L18.6952 19.7198C18.5002 19.9058 18.2502 19.9998 18.0002 19.9998C17.7442 19.9998 17.4882 19.9028 17.2932 19.7068L14.2932 16.7068C13.9022 16.3168 13.9022 15.6838 14.2932 15.2928C14.6832 14.9028 15.3162 14.9028 15.7072 15.2928L17.0002 16.5858V7.3568L15.6952 8.6158C15.2982 8.9998 14.6652 8.9878 14.2812 8.5908C13.8972 8.1938 13.9082 7.5608 14.3052 7.1768L17.3052 4.2798C17.6992 3.9038 18.3222 3.9058 18.7072 4.2928L21.7072 7.2928C22.0972 7.6838 22.0972 8.3168 21.7072 8.7068C21.5122 8.9028 21.2562 8.9998 21.0002 8.9998C20.7442 8.9998 20.4882 8.9028 20.2932 8.7068L19.0002 7.4138V16.6438Z",
    fill: fill
  }));
};
IconHeightScale.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4L = ["size", "fill"];
var IconPulse = function IconPulse(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4L);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.329 20.0008C14.262 20.0008 14.193 19.9978 14.124 19.9908C13.244 19.9038 12.554 19.2828 12.364 18.4078L9.681 6.01579L6.918 12.3978C6.759 12.7638 6.398 13.0008 6 13.0008H3C2.447 13.0008 2 12.5528 2 12.0008C2 11.4478 2.447 11.0008 3 11.0008H5.344L7.85 5.21179C8.205 4.39579 8.987 3.92079 9.876 4.00979C10.756 4.09679 11.446 4.71779 11.636 5.59279L14.319 17.9848L17.082 11.6028C17.241 11.2368 17.601 11.0008 18 11.0008H21C21.553 11.0008 22 11.4478 22 12.0008C22 12.5528 21.553 13.0008 21 13.0008H18.656L16.15 18.7888C15.823 19.5418 15.122 20.0008 14.329 20.0008Z",
    fill: fill
  }));
};
IconPulse.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4M = ["size", "fill"];
var IconThermometerMin$1 = function IconThermometerMin(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4M);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.5 5C14.5 4.449 14.948 4 15.5 4C15.767 4 16.014 4.102 16.213 4.306C16.397 4.487 16.5 4.733 16.5 5V13.54C16.5 13.898 16.691 14.229 17.002 14.407C17.926 14.938 18.5 15.932 18.5 17C18.5 18.654 17.154 20 15.5 20C13.846 20 12.5 18.654 12.5 17C12.5 15.932 13.074 14.938 13.998 14.407C14.309 14.229 14.5 13.898 14.5 13.54V5ZM10.5 17C10.5 19.757 12.743 22 15.5 22C18.257 22 20.5 19.757 20.5 17C20.5 15.42 19.746 13.938 18.5 13.003V5C18.5 4.189 18.184 3.434 17.627 2.892C17.066 2.317 16.312 2 15.5 2C13.846 2 12.5 3.346 12.5 5V13.003C11.254 13.938 10.5 15.42 10.5 17ZM4.5 7H8.5C9.05 7 9.5 6.55 9.5 6C9.5 5.45 9.05 5 8.5 5H4.5C3.95 5 3.5 5.45 3.5 6C3.5 6.55 3.95 7 4.5 7Z",
    fill: fill
  }));
};
IconThermometerMin$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4N = ["size", "fill"];
var IconThermometer$1 = function IconThermometer(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4N);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 4C11.448 4 11 4.449 11 5V13.54C11 13.898 10.809 14.229 10.498 14.407C9.574 14.938 9 15.932 9 17C9 18.654 10.346 20 12 20C13.654 20 15 18.654 15 17C15 15.932 14.426 14.938 13.502 14.407C13.191 14.229 13 13.898 13 13.54V5C13 4.733 12.897 4.487 12.713 4.306C12.514 4.102 12.267 4 12 4ZM12 22C9.243 22 7 19.757 7 17C7 15.42 7.754 13.938 9 13.003V5C9 3.346 10.346 2 12 2C12.812 2 13.566 2.317 14.127 2.892C14.684 3.434 15 4.189 15 5V13.003C16.246 13.938 17 15.42 17 17C17 19.757 14.757 22 12 22Z",
    fill: fill
  }));
};
IconThermometer$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4O = ["size", "fill"];
var IconThermometerPlus$1 = function IconThermometerPlus(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4O);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.5 4C14.948 4 14.5 4.449 14.5 5V13.54C14.5 13.898 14.309 14.229 13.998 14.407C13.074 14.938 12.5 15.932 12.5 17C12.5 18.654 13.846 20 15.5 20C17.154 20 18.5 18.654 18.5 17C18.5 15.932 17.926 14.938 17.002 14.407C16.691 14.229 16.5 13.898 16.5 13.54V5C16.5 4.733 16.397 4.487 16.213 4.306C16.014 4.102 15.767 4 15.5 4ZM15.5 22C12.743 22 10.5 19.757 10.5 17C10.5 15.42 11.254 13.938 12.5 13.003V5C12.5 3.346 13.846 2 15.5 2C16.312 2 17.066 2.317 17.627 2.892C18.184 3.434 18.5 4.189 18.5 5V13.003C19.746 13.938 20.5 15.42 20.5 17C20.5 19.757 18.257 22 15.5 22ZM5.5 7H4.5C3.95 7 3.5 6.55 3.5 6C3.5 5.45 3.95 5 4.5 5H5.5V4C5.5 3.45 5.95 3 6.5 3C7.05 3 7.5 3.45 7.5 4V5H8.5C9.05 5 9.5 5.45 9.5 6C9.5 6.55 9.05 7 8.5 7H7.5V8C7.5 8.55 7.05 9 6.5 9C5.95 9 5.5 8.55 5.5 8V7Z",
    fill: fill
  }));
};
IconThermometerPlus$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4P = ["size", "fill"];
var IconWeightScale$1 = function IconWeightScale(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4P);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 19C19 19.552 18.551 20 18 20H6C5.449 20 5 19.552 5 19V8C5 7.448 5.449 7 6 7H7C7 9.757 9.243 12 12 12C14.757 12 17 9.757 17 7H18C18.551 7 19 7.448 19 8V19ZM11 4.172V6C11 6.553 11.448 7 12 7C12.552 7 13 6.553 13 6V4.172C13.923 4.498 14.651 5.267 14.907 6.271C14.97 6.492 15 6.731 15 7C15 8.654 13.654 10 12 10C10.346 10 9 8.654 9 7C9 6.738 9.031 6.505 9.091 6.288C9.094 6.276 9.095 6.265 9.098 6.253L9.102 6.238C9.354 5.256 10.08 4.496 11 4.172ZM18 5H16.578C15.799 3.201 14.017 2 12 2C9.977 2 8.191 3.209 7.42 5H6C4.346 5 3 6.346 3 8V19C3 20.654 4.346 22 6 22H18C19.654 22 21 20.654 21 19V8C21 6.346 19.654 5 18 5Z",
    fill: fill
  }));
};
IconWeightScale$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4Q = ["size", "fill"];
var IconGrid = function IconGrid(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4Q);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 3H9C10.103 3 11 3.897 11 5V9C11 10.103 10.103 11 9 11H5C3.897 11 3 10.103 3 9V5C3 3.897 3.897 3 5 3ZM15 3H19C20.103 3 21 3.897 21 5V9C21 10.103 20.103 11 19 11H15C13.897 11 13 10.103 13 9V5C13 3.897 13.897 3 15 3ZM9 13H5C3.897 13 3 13.897 3 15V19C3 20.103 3.897 21 5 21H9C10.103 21 11 20.103 11 19V15C11 13.897 10.103 13 9 13ZM15 13H19C20.103 13 21 13.897 21 15V19C21 20.103 20.103 21 19 21H15C13.897 21 13 20.103 13 19V15C13 13.897 13.897 13 15 13Z",
    fill: fill
  }));
};
IconGrid.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4R = ["size", "fill"];
var IconGridRound = function IconGridRound(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4R);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 2C3.346 2 2 3.346 2 5C2 6.654 3.346 8 5 8C6.654 8 8 6.654 8 5C8 3.346 6.654 2 5 2ZM12 2C10.346 2 9 3.346 9 5C9 6.654 10.346 8 12 8C13.654 8 15 6.654 15 5C15 3.346 13.654 2 12 2ZM22 5C22 6.654 20.654 8 19 8C17.346 8 16 6.654 16 5C16 3.346 17.346 2 19 2C20.654 2 22 3.346 22 5ZM5 9C3.346 9 2 10.346 2 12C2 13.654 3.346 15 5 15C6.654 15 8 13.654 8 12C8 10.346 6.654 9 5 9ZM9 12C9 10.346 10.346 9 12 9C13.654 9 15 10.346 15 12C15 13.654 13.654 15 12 15C10.346 15 9 13.654 9 12ZM19 9C17.346 9 16 10.346 16 12C16 13.654 17.346 15 19 15C20.654 15 22 13.654 22 12C22 10.346 20.654 9 19 9ZM2 19C2 17.346 3.346 16 5 16C6.654 16 8 17.346 8 19C8 20.654 6.654 22 5 22C3.346 22 2 20.654 2 19ZM12 16C10.346 16 9 17.346 9 19C9 20.654 10.346 22 12 22C13.654 22 15 20.654 15 19C15 17.346 13.654 16 12 16ZM16 19C16 17.346 17.346 16 19 16C20.654 16 22 17.346 22 19C22 20.654 20.654 22 19 22C17.346 22 16 20.654 16 19Z",
    fill: fill
  }));
};
IconGridRound.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4S = ["size", "fill"];
var IconHome = function IconHome(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4S);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 25",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.715 2.30096L20.424 10.185C20.79 10.561 21 11.085 21 11.624V20C21 21.103 20.153 22 19.112 22H16V13C16 12.448 15.553 12 15 12H9C8.447 12 8 12.448 8 13V22H4.889C3.848 22 3 21.103 3 20V11.624C3 11.085 3.21 10.561 3.575 10.186L11.285 2.30096C11.662 1.91596 12.338 1.91596 12.715 2.30096ZM14.0002 21.0004H10.0002V14.0004H14.0002V21.0004Z",
    fill: fill
  }));
};
IconHome.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4T = ["size", "fill"];
var IconElipsis = function IconElipsis(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4T);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 12C3 10.896 3.896 10 5 10C6.104 10 7 10.896 7 12C7 13.104 6.104 14 5 14C3.896 14 3 13.104 3 12ZM12 10C10.896 10 10 10.896 10 12C10 13.104 10.896 14 12 14C13.104 14 14 13.104 14 12C14 10.896 13.104 10 12 10ZM19 10C17.896 10 17 10.896 17 12C17 13.104 17.896 14 19 14C20.104 14 21 13.104 21 12C21 10.896 20.104 10 19 10Z",
    fill: fill
  }));
};
IconElipsis.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4U = ["size", "fill"];
var IconElipsisVertical = function IconElipsisVertical(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4U);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 7C13.104 7 14 6.104 14 5C14 3.896 13.104 3 12 3C10.896 3 10 3.896 10 5C10 6.104 10.896 7 12 7ZM12 10C10.896 10 10 10.896 10 12C10 13.104 10.896 14 12 14C13.104 14 14 13.104 14 12C14 10.896 13.104 10 12 10ZM10 19C10 17.896 10.896 17 12 17C13.104 17 14 17.896 14 19C14 20.104 13.104 21 12 21C10.896 21 10 20.104 10 19Z",
    fill: fill
  }));
};
IconElipsisVertical.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4V = ["size", "fill"];
var IconGrid$1 = function IconGrid(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4V);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 19V15H19L19.001 19H15ZM19 13H15C13.897 13 13 13.897 13 15V19C13 20.103 13.897 21 15 21H19C20.103 21 21 20.103 21 19V15C21 13.897 20.103 13 19 13ZM5 19V15H9L9.001 19H5ZM9 13H5C3.897 13 3 13.897 3 15V19C3 20.103 3.897 21 5 21H9C10.103 21 11 20.103 11 19V15C11 13.897 10.103 13 9 13ZM15 9V5H19L19.001 9H15ZM19 3H15C13.897 3 13 3.897 13 5V9C13 10.103 13.897 11 15 11H19C20.103 11 21 10.103 21 9V5C21 3.897 20.103 3 19 3ZM5 9V5H9L9.001 9H5ZM9 3H5C3.897 3 3 3.897 3 5V9C3 10.103 3.897 11 5 11H9C10.103 11 11 10.103 11 9V5C11 3.897 10.103 3 9 3Z",
    fill: fill
  }));
};
IconGrid$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4W = ["size", "fill"];
var IconGridRound$1 = function IconGridRound(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4W);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 20C18.447 20 18 19.553 18 19C18 18.447 18.447 18 19 18C19.553 18 20 18.447 20 19C20 19.553 19.553 20 19 20ZM19 16C17.346 16 16 17.346 16 19C16 20.654 17.346 22 19 22C20.654 22 22 20.654 22 19C22 17.346 20.654 16 19 16ZM12 20C11.447 20 11 19.553 11 19C11 18.447 11.447 18 12 18C12.553 18 13 18.447 13 19C13 19.553 12.553 20 12 20ZM12 16C10.346 16 9 17.346 9 19C9 20.654 10.346 22 12 22C13.654 22 15 20.654 15 19C15 17.346 13.654 16 12 16ZM5 20C4.447 20 4 19.553 4 19C4 18.447 4.447 18 5 18C5.553 18 6 18.447 6 19C6 19.553 5.553 20 5 20ZM5 16C3.346 16 2 17.346 2 19C2 20.654 3.346 22 5 22C6.654 22 8 20.654 8 19C8 17.346 6.654 16 5 16ZM19 13C18.447 13 18 12.553 18 12C18 11.447 18.447 11 19 11C19.553 11 20 11.447 20 12C20 12.553 19.553 13 19 13ZM19 9C17.346 9 16 10.346 16 12C16 13.654 17.346 15 19 15C20.654 15 22 13.654 22 12C22 10.346 20.654 9 19 9ZM12 13C11.447 13 11 12.553 11 12C11 11.447 11.447 11 12 11C12.553 11 13 11.447 13 12C13 12.553 12.553 13 12 13ZM12 9C10.346 9 9 10.346 9 12C9 13.654 10.346 15 12 15C13.654 15 15 13.654 15 12C15 10.346 13.654 9 12 9ZM5 13C4.447 13 4 12.553 4 12C4 11.447 4.447 11 5 11C5.553 11 6 11.447 6 12C6 12.553 5.553 13 5 13ZM5 9C3.346 9 2 10.346 2 12C2 13.654 3.346 15 5 15C6.654 15 8 13.654 8 12C8 10.346 6.654 9 5 9ZM19 4C19.553 4 20 4.447 20 5C20 5.553 19.553 6 19 6C18.447 6 18 5.553 18 5C18 4.447 18.447 4 19 4ZM19 8C20.654 8 22 6.654 22 5C22 3.346 20.654 2 19 2C17.346 2 16 3.346 16 5C16 6.654 17.346 8 19 8ZM12 6C11.447 6 11 5.552 11 5C11 4.447 11.447 4 12 4C12.553 4 13 4.447 13 5C13 5.552 12.553 6 12 6ZM12 2C10.346 2 9 3.346 9 5C9 6.654 10.346 8 12 8C13.654 8 15 6.654 15 5C15 3.346 13.654 2 12 2ZM5 6C4.447 6 4 5.553 4 5C4 4.447 4.447 4 5 4C5.553 4 6 4.447 6 5C6 5.553 5.553 6 5 6ZM5 2C3.346 2 2 3.346 2 5C2 6.654 3.346 8 5 8C6.654 8 8 6.654 8 5C8 3.346 6.654 2 5 2Z",
    fill: fill
  }));
};
IconGridRound$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4X = ["size", "fill"];
var IconHome$1 = function IconHome(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4X);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 25",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 20H18.99L19 11.624L11.998 4.43196L5.006 11.583L5 20H8V13C8 12.447 8.447 12 9 12H15C15.552 12 16 12.447 16 13V20ZM14 20H10V14H14V20ZM20.424 10.185L12.715 2.30096C12.338 1.91596 11.662 1.91596 11.285 2.30096L3.575 10.186C3.21 10.561 3 11.085 3 11.624V20C3 21.103 3.847 22 4.888 22H9H15H19.111C20.152 22 21 21.103 21 20V11.624C21 11.085 20.79 10.561 20.424 10.185Z",
    fill: fill
  }));
};
IconHome$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4Y = ["size", "fill"];
var IconMenu2 = function IconMenu2(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4Y);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.93526 6H20.0643C20.5793 6 21.0003 6.421 21.0003 6.936V7.064C21.0003 7.579 20.5793 8 20.0643 8H3.93526C3.42026 8 3.00026 7.579 3.00026 7.064V6.936C3.00026 6.421 3.42026 6 3.93526 6ZM4.99976 12C4.99976 12.553 4.55176 13 3.99976 13C3.44776 13 2.99976 12.553 2.99976 12C2.99976 11.447 3.44776 11 3.99976 11C4.55176 11 4.99976 11.447 4.99976 12ZM7.93526 11H20.0643C20.5793 11 21.0003 11.421 21.0003 11.936V12.064C21.0003 12.579 20.5793 13 20.0643 13H7.93526C7.42026 13 7.00026 12.579 7.00026 12.064V11.936C7.00026 11.421 7.42026 11 7.93526 11ZM20.0643 16H3.93526C3.42026 16 3.00026 16.421 3.00026 16.936V17.064C3.00026 17.579 3.42026 18 3.93526 18H20.0643C20.5793 18 21.0003 17.579 21.0003 17.064V16.936C21.0003 16.421 20.5793 16 20.0643 16Z",
    fill: fill
  }));
};
IconMenu2.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4Z = ["size", "fill"];
var IconMenu3 = function IconMenu3(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4Z);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.19774 5H20.3017C20.8227 5 21.2497 5.427 21.2497 5.948V6.052C21.2497 6.573 20.8227 7 20.3017 7H4.19774C3.67674 7 3.24974 6.573 3.24974 6.052V5.948C3.24974 5.427 3.67674 5 4.19774 5ZM20.3017 11H6.16374L7.45674 9.707C7.84774 9.316 7.84774 8.684 7.45674 8.293C7.06674 7.902 6.43374 7.902 6.04274 8.293L3.04274 11.293C2.65274 11.684 2.65274 12.316 3.04274 12.707L6.04274 15.707C6.23874 15.902 6.49374 16 6.74974 16C7.00574 16 7.26174 15.902 7.45674 15.707C7.84774 15.316 7.84774 14.684 7.45674 14.293L6.16374 13H20.3017C20.8227 13 21.2497 12.573 21.2497 12.052V11.948C21.2497 11.427 20.8227 11 20.3017 11ZM20.3017 17H4.19774C3.67674 17 3.24974 17.427 3.24974 17.948V18.052C3.24974 18.573 3.67674 19 4.19774 19H20.3017C20.8227 19 21.2497 18.573 21.2497 18.052V17.948C21.2497 17.427 20.8227 17 20.3017 17Z",
    fill: fill
  }));
};
IconMenu3.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4_ = ["size", "fill"];
var IconMenu = function IconMenu(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4_);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.948 6H20.051C20.573 6 21 6.427 21 6.949V7.051C21 7.573 20.573 8 20.051 8H3.948C3.426 8 3 7.573 3 7.051V6.949C3 6.427 3.426 6 3.948 6ZM20.051 11H3.948C3.426 11 3 11.427 3 11.949V12.051C3 12.573 3.426 13 3.948 13H20.051C20.573 13 21 12.573 21 12.051V11.949C21 11.427 20.573 11 20.051 11ZM20.051 16H3.948C3.426 16 3 16.427 3 16.949V17.051C3 17.573 3.426 18 3.948 18H20.051C20.573 18 21 17.573 21 17.051V16.949C21 16.427 20.573 16 20.051 16Z",
    fill: fill
  }));
};
IconMenu.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$4$ = ["size", "fill"];
var IconPerson = function IconPerson(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$4$);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 7C16 9.206 14.206 11 12 11C9.794 11 8 9.206 8 7C8 4.794 9.794 3 12 3C14.206 3 16 4.794 16 7ZM19 20C19 20.552 18.553 21 18 21H6C5.447 21 5 20.552 5 20C5 16.14 8.141 13 12 13C15.859 13 19 16.14 19 20Z",
    fill: fill
  }));
};
IconPerson.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$50 = ["size", "fill"];
var IconPersonCheck = function IconPersonCheck(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$50);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.99963 11C12.2056 11 13.9996 9.206 13.9996 7C13.9996 4.794 12.2056 3 9.99963 3C7.79363 3 5.99963 4.794 5.99963 7C5.99963 9.206 7.79363 11 9.99963 11ZM21.6559 4.2456C21.2389 3.8836 20.6079 3.9266 20.2449 4.3436L18.3789 6.4886L17.7449 5.7796C17.3779 5.3676 16.7459 5.3326 16.3329 5.7016C15.9219 6.0696 15.8859 6.7026 16.2549 7.1136L17.6439 8.6666C17.8339 8.8786 18.1049 8.9996 18.3889 8.9996H18.3959C18.6829 8.9976 18.9559 8.8726 19.1439 8.6566L21.7549 5.6566C22.1169 5.2396 22.0729 4.6076 21.6559 4.2456ZM16.9996 20C16.9996 20.552 16.5526 21 15.9996 21H3.99963C3.44663 21 2.99963 20.552 2.99963 20C2.99963 16.14 6.14063 13 9.99963 13C13.8586 13 16.9996 16.14 16.9996 20Z",
    fill: fill
  }));
};
IconPersonCheck.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$51 = ["size", "fill"];
var IconPersonMin = function IconPersonMin(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$51);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 11C12.206 11 14 9.206 14 7C14 4.794 12.206 3 10 3C7.794 3 6 4.794 6 7C6 9.206 7.794 11 10 11ZM21 6H17C16.45 6 16 6.45 16 7C16 7.55 16.45 8 17 8H21C21.55 8 22 7.55 22 7C22 6.45 21.55 6 21 6ZM17 20C17 20.552 16.553 21 16 21H4C3.447 21 3 20.552 3 20C3 16.14 6.141 13 10 13C13.859 13 17 16.14 17 20Z",
    fill: fill
  }));
};
IconPersonMin.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$52 = ["size", "fill"];
var IconPersonPlus = function IconPersonPlus(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$52);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 11C12.206 11 14 9.206 14 7C14 4.794 12.206 3 10 3C7.794 3 6 4.794 6 7C6 9.206 7.794 11 10 11ZM21 6H20V5C20 4.45 19.55 4 19 4C18.45 4 18 4.45 18 5V6H17C16.45 6 16 6.45 16 7C16 7.55 16.45 8 17 8H18V9C18 9.55 18.45 10 19 10C19.55 10 20 9.55 20 9V8H21C21.55 8 22 7.55 22 7C22 6.45 21.55 6 21 6ZM17 20C17 20.552 16.553 21 16 21H4C3.447 21 3 20.552 3 20C3 16.14 6.141 13 10 13C13.859 13 17 16.14 17 20Z",
    fill: fill
  }));
};
IconPersonPlus.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$53 = ["size", "fill"];
var IconPersonX = function IconPersonX(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$53);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.4999 11C12.7059 11 14.4999 9.206 14.4999 7C14.4999 4.794 12.7059 3 10.4999 3C8.29394 3 6.49994 4.794 6.49994 7C6.49994 9.206 8.29394 11 10.4999 11ZM20.9647 7.5L21.6977 6.768C22.1007 6.364 22.1007 5.705 21.6977 5.302C21.2947 4.899 20.6357 4.899 20.2327 5.302L19.4997 6.035L18.7677 5.302C18.3637 4.899 17.7047 4.899 17.3017 5.302C16.8997 5.705 16.8997 6.364 17.3017 6.768L18.0347 7.5L17.3017 8.232C16.8997 8.636 16.8997 9.295 17.3017 9.698C17.7047 10.101 18.3637 10.101 18.7677 9.698L19.4997 8.965L20.2327 9.698C20.6357 10.101 21.2947 10.101 21.6977 9.698C22.1007 9.295 22.1007 8.636 21.6977 8.232L20.9647 7.5ZM17.4999 20C17.4999 20.553 17.0529 21 16.4999 21H4.49994C3.94694 21 3.49994 20.553 3.49994 20C3.49994 16.141 6.64094 13 10.4999 13C14.3589 13 17.4999 16.141 17.4999 20Z",
    fill: fill
  }));
};
IconPersonX.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$54 = ["size", "fill"];
var IconPersons = function IconPersons(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$54);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 11C11.206 11 13 9.206 13 7C13 4.794 11.206 3 9 3C6.794 3 5 4.794 5 7C5 9.206 6.794 11 9 11ZM17 13C18.654 13 20 11.654 20 10C20 8.346 18.654 7 17 7C15.346 7 14 8.346 14 10C14 11.654 15.346 13 17 13ZM22 19C22 19.552 21.553 20 21 20H16C16 20.552 15.553 21 15 21H3C2.447 21 2 20.552 2 20C2 16.14 5.141 13 9 13C10.927 13 12.673 13.783 13.94 15.046C14.809 14.374 15.879 14 17 14C19.757 14 22 16.243 22 19Z",
    fill: fill
  }));
};
IconPersons.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$55 = ["size", "fill"];
var IconPersonCheck$1 = function IconPersonCheck(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$55);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.49995 13C5.64095 13 2.49995 16.14 2.49995 20C2.49995 20.552 2.94695 21 3.49995 21C4.05295 21 4.49995 20.552 4.49995 20C4.49995 17.243 6.74295 15 9.49995 15C12.257 15 14.5 17.243 14.5 20C14.5 20.552 14.947 21 15.5 21C16.053 21 16.5 20.552 16.5 20C16.5 16.14 13.359 13 9.49995 13ZM7.49995 7C7.49995 8.103 8.39695 9 9.49995 9C10.603 9 11.5 8.103 11.5 7C11.5 5.897 10.603 5 9.49995 5C8.39695 5 7.49995 5.897 7.49995 7ZM5.49995 7C5.49995 4.794 7.29395 3 9.49995 3C11.706 3 13.5 4.794 13.5 7C13.5 9.206 11.706 11 9.49995 11C7.29395 11 5.49995 9.206 5.49995 7ZM21.255 5.656L18.645 8.656C18.456 8.873 18.184 8.998 17.896 9H17.89C17.605 9 17.334 8.879 17.145 8.667L15.755 7.114C15.387 6.702 15.422 6.07 15.833 5.702C16.246 5.333 16.878 5.368 17.245 5.78L17.879 6.489L19.745 4.344C20.108 3.926 20.739 3.883 21.156 4.246C21.573 4.608 21.617 5.24 21.255 5.656Z",
    fill: fill
  }));
};
IconPersonCheck$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$56 = ["size", "fill"];
var IconPersonMin$1 = function IconPersonMin(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$56);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.5 13C5.641 13 2.5 16.14 2.5 20C2.5 20.552 2.947 21 3.5 21C4.053 21 4.5 20.552 4.5 20C4.5 17.243 6.743 15 9.5 15C12.257 15 14.5 17.243 14.5 20C14.5 20.552 14.947 21 15.5 21C16.053 21 16.5 20.552 16.5 20C16.5 16.14 13.359 13 9.5 13ZM7.5 7C7.5 8.103 8.397 9 9.5 9C10.603 9 11.5 8.103 11.5 7C11.5 5.897 10.603 5 9.5 5C8.397 5 7.5 5.897 7.5 7ZM5.5 7C5.5 4.794 7.294 3 9.5 3C11.706 3 13.5 4.794 13.5 7C13.5 9.206 11.706 11 9.5 11C7.294 11 5.5 9.206 5.5 7ZM21.5 7C21.5 7.55 21.05 8 20.5 8H16.5C15.95 8 15.5 7.55 15.5 7C15.5 6.45 15.95 6 16.5 6H20.5C21.05 6 21.5 6.45 21.5 7Z",
    fill: fill
  }));
};
IconPersonMin$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$57 = ["size", "fill"];
var IconPerson$1 = function IconPerson(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$57);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 20C19 20.552 18.553 21 18 21C17.447 21 17 20.552 17 20C17 17.243 14.757 15 12 15C9.243 15 7 17.243 7 20C7 20.552 6.553 21 6 21C5.447 21 5 20.552 5 20C5 16.14 8.141 13 12 13C15.859 13 19 16.14 19 20ZM12 5C13.103 5 14 5.897 14 7C14 8.103 13.103 9 12 9C10.897 9 10 8.103 10 7C10 5.897 10.897 5 12 5ZM12 11C14.206 11 16 9.206 16 7C16 4.794 14.206 3 12 3C9.794 3 8 4.794 8 7C8 9.206 9.794 11 12 11Z",
    fill: fill
  }));
};
IconPerson$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$58 = ["size", "fill"];
var IconPersonPlus$1 = function IconPersonPlus(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$58);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.5 13C5.641 13 2.5 16.14 2.5 20C2.5 20.552 2.947 21 3.5 21C4.053 21 4.5 20.552 4.5 20C4.5 17.243 6.743 15 9.5 15C12.257 15 14.5 17.243 14.5 20C14.5 20.552 14.947 21 15.5 21C16.053 21 16.5 20.552 16.5 20C16.5 16.14 13.359 13 9.5 13ZM7.5 7C7.5 8.103 8.397 9 9.5 9C10.603 9 11.5 8.103 11.5 7C11.5 5.897 10.603 5 9.5 5C8.397 5 7.5 5.897 7.5 7ZM5.5 7C5.5 4.794 7.294 3 9.5 3C11.706 3 13.5 4.794 13.5 7C13.5 9.206 11.706 11 9.5 11C7.294 11 5.5 9.206 5.5 7ZM21.5 7C21.5 7.55 21.05 8 20.5 8H19.5V9C19.5 9.55 19.05 10 18.5 10C17.95 10 17.5 9.55 17.5 9V8H16.5C15.95 8 15.5 7.55 15.5 7C15.5 6.45 15.95 6 16.5 6H17.5V5C17.5 4.45 17.95 4 18.5 4C19.05 4 19.5 4.45 19.5 5V6H20.5C21.05 6 21.5 6.45 21.5 7Z",
    fill: fill
  }));
};
IconPersonPlus$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$59 = ["size", "fill"];
var IconPersonX$1 = function IconPersonX(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$59);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.74988 13C5.89088 13 2.74988 16.141 2.74988 20C2.74988 20.553 3.19688 21 3.74988 21C4.30288 21 4.74988 20.553 4.74988 20C4.74988 17.243 6.99288 15 9.74988 15C12.5069 15 14.7499 17.243 14.7499 20C14.7499 20.553 15.1969 21 15.7499 21C16.3029 21 16.7499 20.553 16.7499 20C16.7499 16.141 13.6089 13 9.74988 13ZM7.74988 7C7.74988 8.103 8.64688 9 9.74988 9C10.8529 9 11.7499 8.103 11.7499 7C11.7499 5.897 10.8529 5 9.74988 5C8.64688 5 7.74988 5.897 7.74988 7ZM5.74988 7C5.74988 4.794 7.54388 3 9.74988 3C11.9559 3 13.7499 4.794 13.7499 7C13.7499 9.206 11.9559 11 9.74988 11C7.54388 11 5.74988 9.206 5.74988 7ZM20.9479 8.232C21.3509 8.636 21.3509 9.295 20.9479 9.698C20.5449 10.101 19.8859 10.101 19.4819 9.698L18.7499 8.965L18.0179 9.698C17.6139 10.101 16.9549 10.101 16.5519 9.698C16.1489 9.295 16.1489 8.636 16.5519 8.232L17.2849 7.5L16.5519 6.768C16.1489 6.364 16.1489 5.705 16.5519 5.302C16.9549 4.899 17.6139 4.899 18.0179 5.302L18.7499 6.035L19.4819 5.302C19.8859 4.899 20.5449 4.899 20.9479 5.302C21.3509 5.705 21.3509 6.364 20.9479 6.768L20.2149 7.5L20.9479 8.232Z",
    fill: fill
  }));
};
IconPersonX$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5a = ["size", "fill"];
var IconPersons$1 = function IconPersons(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5a);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 19C22 19.552 21.553 20 21 20C20.447 20 20 19.552 20 19C20 17.346 18.654 16 17 16C16.317 16 15.668 16.234 15.144 16.649C15.688 17.645 16 18.787 16 20C16 20.552 15.553 21 15 21C14.447 21 14 20.552 14 20C14 17.243 11.757 15 9 15C6.243 15 4 17.243 4 20C4 20.552 3.553 21 3 21C2.447 21 2 20.552 2 20C2 16.14 5.141 13 9 13C10.927 13 12.673 13.783 13.94 15.046C14.809 14.374 15.879 14 17 14C19.757 14 22 16.243 22 19ZM17 9C17.552 9 18 9.449 18 10C18 10.551 17.552 11 17 11C16.448 11 16 10.551 16 10C16 9.449 16.448 9 17 9ZM17 13C18.654 13 20 11.654 20 10C20 8.346 18.654 7 17 7C15.346 7 14 8.346 14 10C14 11.654 15.346 13 17 13ZM9 5C10.103 5 11 5.897 11 7C11 8.103 10.103 9 9 9C7.897 9 7 8.103 7 7C7 5.897 7.897 5 9 5ZM9 11C11.206 11 13 9.206 13 7C13 4.794 11.206 3 9 3C6.794 3 5 4.794 5 7C5 9.206 6.794 11 9 11Z",
    fill: fill
  }));
};
IconPersons$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5b = ["size", "fill"];
var IconLock = function IconLock(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5b);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 14C11.448 14 11 14.448 11 15C11 15.552 11.448 16 12 16C12.552 16 13 15.552 13 15C13 14.448 12.552 14 12 14ZM12 18C10.346 18 9 16.654 9 15C9 13.346 10.346 12 12 12C13.654 12 15 13.346 15 15C15 16.654 13.654 18 12 18ZM10 6.111C10 4.947 10.897 4 12 4C13.103 4 14 4.947 14 6.111V8H10V6.111ZM17 8H16V6.111C16 3.845 14.206 2 12 2C9.794 2 8 3.845 8 6.111V8H7C5.346 8 4 9.346 4 11V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V11C20 9.346 18.654 8 17 8Z",
    fill: fill
  }));
};
IconLock.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5c = ["size", "fill"];
var IconShield = function IconShield(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5c);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 25",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 22.0001C11.661 22.0001 11.322 21.9161 11.021 21.7461L10.718 21.5751C5.957 18.8971 3 13.8411 3 8.37908V8.23408C3 7.51508 3.39 6.84708 4.018 6.49208L11.02 2.55408C11.625 2.21408 12.376 2.21308 12.979 2.55308L19.98 6.49108C20.61 6.84708 21 7.51508 21 8.23408V8.37908C21 13.8411 18.043 18.8971 13.282 21.5751L12.98 21.7451C12.678 21.9151 12.339 22.0001 12 22.0001Z",
    fill: fill
  }));
};
IconShield.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5d = ["size", "fill"];
var IconShieldSlash = function IconShieldSlash(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5d);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 25",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.8389 16.1602C20.2259 13.8462 20.9999 11.1662 20.9999 8.37921V8.23421C20.9999 7.51421 20.6099 6.84721 19.9809 6.49121L12.9799 2.55321C12.3759 2.21321 11.6249 2.21421 11.0199 2.55421L7.31591 4.63721L18.8389 16.1602ZM3.73141 6.70901C3.28041 7.08501 3.00041 7.63601 3.00041 8.23401V8.37901C3.00041 13.841 5.95741 18.897 10.7174 21.575L11.0204 21.746C11.3224 21.916 11.6614 22 12.0004 22C12.3384 22 12.6774 21.915 12.9804 21.745L13.2824 21.575C14.4044 20.944 15.4214 20.177 16.3294 19.307L3.73141 6.70901ZM3.29301 3.44241C3.68401 3.05141 4.31601 3.05141 4.70701 3.44241L20.707 19.4424C21.098 19.8334 21.098 20.4654 20.707 20.8564C20.512 21.0514 20.256 21.1494 20 21.1494C19.744 21.1494 19.488 21.0514 19.293 20.8564L3.29301 4.85641C2.90201 4.46541 2.90201 3.83341 3.29301 3.44241Z",
    fill: fill
  }));
};
IconShieldSlash.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5e = ["size", "fill"];
var IconUnlock = function IconUnlock(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5e);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 14C11.448 14 11 14.448 11 15C11 15.552 11.448 16 12 16C12.552 16 13 15.552 13 15C13 14.448 12.552 14 12 14ZM12 18C10.346 18 9 16.654 9 15C9 13.346 10.346 12 12 12C13.654 12 15 13.346 15 15C15 16.654 13.654 18 12 18ZM17 8H10V6C10 4.897 10.897 4 12 4C13.103 4 14 4.897 14 6C14 6.553 14.447 7 15 7C15.553 7 16 6.553 16 6C16 3.794 14.206 2 12 2C9.794 2 8 3.794 8 6V8H7C5.346 8 4 9.346 4 11V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V11C20 9.346 18.654 8 17 8Z",
    fill: fill
  }));
};
IconUnlock.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5f = ["size", "fill"];
var IconLock$1 = function IconLock(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5f);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 16C11.448 16 11 15.552 11 15C11 14.448 11.448 14 12 14C12.552 14 13 14.448 13 15C13 15.552 12.552 16 12 16ZM12 12C10.346 12 9 13.346 9 15C9 16.654 10.346 18 12 18C13.654 18 15 16.654 15 15C15 13.346 13.654 12 12 12ZM18 19C18 19.552 17.552 20 17 20H7C6.448 20 6 19.552 6 19V11C6 10.448 6.448 10 7 10H8H10H14H16H17C17.552 10 18 10.448 18 11V19ZM10 6.111C10 4.947 10.897 4 12 4C13.103 4 14 4.947 14 6.111V8H10V6.111ZM17 8H16V6.111C16 3.845 14.206 2 12 2C9.794 2 8 3.845 8 6.111V8H7C5.346 8 4 9.346 4 11V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V11C20 9.346 18.654 8 17 8Z",
    fill: fill
  }));
};
IconLock$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5g = ["size", "fill"];
var IconShield$1 = function IconShield(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5g);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 25",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 4.29584L5 8.23384V8.37884C5 13.1188 7.566 17.5078 11.698 19.8328L12 20.0028L12.302 19.8328C16.434 17.5078 19 13.1188 19 8.37884V8.23384L12 4.29584ZM12 21.9998C11.661 21.9998 11.322 21.9158 11.021 21.7458L10.718 21.5748C5.957 18.8978 3 13.8408 3 8.37884V8.23384C3 7.51484 3.39 6.84684 4.018 6.49184L11.02 2.55384C11.625 2.21384 12.376 2.21284 12.979 2.55284L19.98 6.49084C20.61 6.84684 21 7.51484 21 8.23384V8.37884C21 13.8408 18.043 18.8978 13.282 21.5748L12.98 21.7448C12.678 21.9148 12.339 21.9998 12 21.9998Z",
    fill: fill
  }));
};
IconShield$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5h = ["size", "fill"];
var IconShieldSlash$1 = function IconShieldSlash(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5h);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 25",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.9794 2.55321L19.9804 6.49121C20.6104 6.84621 21.0004 7.51421 21.0004 8.23421V8.37921C21.0004 11.1662 20.2254 13.8452 18.8384 16.1602L17.3734 14.6932C18.4184 12.7882 19.0004 10.6242 19.0004 8.37921V8.23421L12.0004 4.29621L8.78438 6.10521L7.31538 4.63721L11.0194 2.55321C11.6254 2.21421 12.3764 2.21321 12.9794 2.55321ZM4.70688 3.44241C4.31588 3.05141 3.68388 3.05141 3.29288 3.44241C2.90188 3.83341 2.90188 4.46541 3.29288 4.85641L19.2929 20.8564C19.4879 21.0514 19.7439 21.1494 19.9999 21.1494C20.2559 21.1494 20.5119 21.0514 20.7069 20.8564C21.0979 20.4654 21.0979 19.8334 20.7069 19.4424L4.70688 3.44241ZM12.3017 19.833L11.9997 20.003L11.6977 19.833C7.56668 17.508 4.99968 13.119 4.99968 8.37901V8.23401L5.16368 8.14201L3.73168 6.70901C3.28068 7.08501 2.99968 7.63601 2.99968 8.23401V8.37901C2.99968 13.841 5.95668 18.897 10.7177 21.575L11.0207 21.746C11.3227 21.916 11.6607 22 11.9997 22C12.3387 22 12.6777 21.915 12.9807 21.745L13.2817 21.575C14.4047 20.944 15.4217 20.177 16.3287 19.307L14.9147 17.893C14.1357 18.636 13.2627 19.292 12.3017 19.833Z",
    fill: fill
  }));
};
IconShieldSlash$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5i = ["size", "fill"];
var IconUnlock$1 = function IconUnlock(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5i);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 16C11.448 16 11 15.552 11 15C11 14.448 11.448 14 12 14C12.552 14 13 14.448 13 15C13 15.552 12.552 16 12 16ZM12 12C10.346 12 9 13.346 9 15C9 16.654 10.346 18 12 18C13.654 18 15 16.654 15 15C15 13.346 13.654 12 12 12ZM18 19C18 19.552 17.552 20 17 20H7C6.448 20 6 19.552 6 19V11C6 10.448 6.448 10 7 10H17C17.552 10 18 10.448 18 11V19ZM17 8H10V6C10 4.897 10.897 4 12 4C13.103 4 14 4.897 14 6C14 6.553 14.447 7 15 7C15.553 7 16 6.553 16 6C16 3.794 14.206 2 12 2C9.794 2 8 3.794 8 6V8H7C5.346 8 4 9.346 4 11V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V11C20 9.346 18.654 8 17 8Z",
    fill: fill
  }));
};
IconUnlock$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5j = ["size", "fill"];
var IconAward = function IconAward(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5j);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 4C14.206 4 16 5.794 16 8C16 10.206 14.206 12 12 12C9.79399 12 7.99999 10.206 7.99999 8C7.99999 5.794 9.79399 4 12 4ZM18.969 20.751L16.66 11.772C17.496 10.74 18 9.429 18 8C18 4.691 15.309 2 12 2C8.69099 2 5.99999 4.691 5.99999 8C5.99999 9.429 6.50399 10.74 7.33999 11.772L5.03099 20.751C4.93099 21.143 5.07499 21.556 5.39799 21.799C5.72099 22.042 6.15799 22.064 6.50599 21.862L11.836 18.733L17.516 21.875C17.667 21.959 17.834 22 18 22C18.217 22 18.433 21.93 18.612 21.791C18.928 21.547 19.068 21.138 18.969 20.751Z",
    fill: fill
  }));
};
IconAward.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5k = ["size", "fill"];
var IconBolt = function IconBolt(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5k);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.1112 23.0001C10.9972 23.0001 10.8822 22.9801 10.7692 22.9391C10.3372 22.7821 10.0672 22.3501 10.1172 21.8931L10.8852 14.8001H5.00021C4.63121 14.8001 4.29221 14.5971 4.11821 14.2711C3.94421 13.9451 3.96421 13.5511 4.16921 13.2441L12.0572 1.44406C12.3132 1.06106 12.7972 0.90206 13.2302 1.06106C13.6632 1.21806 13.9322 1.65006 13.8822 2.10706L13.1142 9.20006H19.0002C19.3692 9.20006 19.7082 9.40306 19.8822 9.72906C20.0552 10.0551 20.0362 10.4491 19.8312 10.7561L11.9422 22.5561C11.7532 22.8401 11.4372 23.0001 11.1112 23.0001Z",
    fill: fill
  }));
};
IconBolt.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5l = ["size", "fill"];
var IconBoltSlash = function IconBoltSlash(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5l);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.3281 14.5001L19.8311 10.7561C20.0361 10.4491 20.0561 10.0551 19.8821 9.72906C19.7081 9.40306 19.3691 9.20006 19.0001 9.20006H13.1141L13.8831 2.10706C13.9321 1.65006 13.6631 1.21806 13.2301 1.06106C12.7971 0.90206 12.3131 1.06106 12.0571 1.44406L8.93811 6.11006L17.3281 14.5001ZM6.67191 9.50006L4.16891 13.2441C3.96391 13.5511 3.94391 13.9451 4.11791 14.2711C4.29191 14.5971 4.63091 14.8001 4.99991 14.8001H10.8859L10.1169 21.8931C10.0679 22.3501 10.3369 22.7821 10.7699 22.9391C10.8819 22.9801 10.9969 23.0001 11.1109 23.0001C11.4379 23.0001 11.7529 22.8401 11.9429 22.5561L15.0619 17.8901L6.67191 9.50006ZM4.70701 3.29296L20.707 19.293C21.098 19.684 21.098 20.316 20.707 20.707C20.512 20.902 20.256 21 20 21C19.744 21 19.488 20.902 19.293 20.707L3.29301 4.70696C2.90201 4.31596 2.90201 3.68396 3.29301 3.29296C3.68401 2.90196 4.31601 2.90196 4.70701 3.29296Z",
    fill: fill
  }));
};
IconBoltSlash.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5m = ["size", "fill"];
var IconBulb = function IconBulb(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5m);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 5C13 5.553 12.552 6 12 6C11.448 6 11 5.553 11 5V3C11 2.447 11.448 2 12 2C12.552 2 13 2.447 13 3V5ZM7 12C7 9.243 9.243 7 12 7C14.757 7 17 9.243 17 12C17 13.579 16.246 15.062 15 15.996V20C15 21.103 14.103 22 13 22H11C9.897 22 9 21.103 9 20V15.996C7.753 15.062 7 13.579 7 12ZM21 11H19C18.447 11 18 11.447 18 12C18 12.553 18.447 13 19 13H21C21.553 13 22 12.553 22 12C22 11.447 21.553 11 21 11ZM3 11H5C5.552 11 6 11.447 6 12C6 12.553 5.552 13 5 13H3C2.448 13 2 12.553 2 12C2 11.447 2.448 11 3 11ZM7.6597 6.418L6.2207 5.028C5.8237 4.645 5.1917 4.657 4.8067 5.054C4.4227 5.45 4.4337 6.084 4.8307 6.468L6.2697 7.857C6.4647 8.045 6.7147 8.138 6.9647 8.138C7.2267 8.138 7.4877 8.035 7.6837 7.832C8.0677 7.436 8.0567 6.802 7.6597 6.418ZM17.7794 5.0297C18.1754 4.6467 18.8114 4.6577 19.1924 5.0537C19.5764 5.4497 19.5654 6.0837 19.1684 6.4667L17.7294 7.8567C17.5364 8.0437 17.2854 8.1377 17.0354 8.1377C16.7734 8.1377 16.5114 8.0347 16.3164 7.8317C15.9324 7.4357 15.9434 6.8017 16.3404 6.4187L17.7794 5.0297Z",
    fill: fill
  }));
};
IconBulb.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5n = ["size", "fill"];
var IconClockThree = function IconClockThree(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5n);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 13H12C11.448 13 11 12.553 11 12V8C11 7.447 11.448 7 12 7C12.552 7 13 7.447 13 8V11H16C16.553 11 17 11.447 17 12C17 12.553 16.553 13 16 13ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconClockThree.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5o = ["size", "fill"];
var IconCompass = function IconCompass(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5o);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.7966 13.213L12.4886 12.529L13.2026 10.787L11.5106 11.471L10.7966 13.213ZM15.925 9.42L14.179 13.678C14.077 13.928 13.879 14.125 13.629 14.227L9.416 15.928C9.293 15.977 9.166 16 9.042 16C8.771 16 8.517 15.883 8.329 15.69C8.311 15.673 8.292 15.659 8.275 15.642C8.266 15.631 8.26 15.618 8.252 15.607C8.014 15.331 7.926 14.941 8.074 14.58L9.82 10.322C9.922 10.072 10.121 9.875 10.371 9.774L14.584 8.072C14.978 7.916 15.409 8.028 15.683 8.318C15.974 8.594 16.086 9.026 15.925 9.42ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconCompass.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5p = ["size", "fill"];
var IconDroplet = function IconDroplet(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5p);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.0221 20.9997C10.1705 20.9831 8.43691 20.2354 7.13907 18.8914C4.4723 16.1295 4.5083 11.6701 7.21937 8.94892L11.4969 4.65661C11.6714 4.4803 11.9095 4.38246 12.1578 4.3843C12.4061 4.38707 12.6425 4.48861 12.8151 4.66676L17.0234 9.02923C19.6901 11.792 19.6541 16.2523 16.9421 18.9708C15.6231 20.2935 13.8775 21.0145 12.024 20.9997H12.0221Z",
    fill: fill
  }));
};
IconDroplet.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5q = ["size", "fill"];
var IconDropletSlash = function IconDropletSlash(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5q);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.9688 16.1405C20.0018 13.4315 19.4678 10.2345 17.3418 8.03254L12.7828 3.30554C12.5968 3.11354 12.3408 3.00254 12.0718 2.99954C11.8028 2.99754 11.5448 3.10454 11.3548 3.29454L8.74381 5.91554L18.9688 16.1405ZM5.98781 8.81634C3.81181 11.7773 4.01381 16.0013 6.63481 18.7153C8.03981 20.1713 9.91781 20.9823 11.9248 21.0003H11.9268C13.6308 21.0133 15.2478 20.4483 16.5728 19.4013L5.98781 8.81634ZM4.70701 3.29294L20.707 19.2929C21.098 19.6839 21.098 20.3159 20.707 20.7069C20.512 20.9019 20.256 20.9999 20 20.9999C19.744 20.9999 19.488 20.9019 19.293 20.7069L3.29301 4.70694C2.90201 4.31594 2.90201 3.68394 3.29301 3.29294C3.68401 2.90194 4.31601 2.90194 4.70701 3.29294Z",
    fill: fill
  }));
};
IconDropletSlash.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5r = ["size", "fill"];
var IconFire = function IconFire(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5r);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.9592 18.0232C14.2922 18.6602 13.4092 19.0062 12.4712 19.0002H12.4702C11.5332 18.9922 10.6562 18.6312 10.0002 17.9842C8.65124 16.6552 8.66924 14.5072 10.0412 13.1982L12.2042 11.1302C12.2932 11.0452 12.4132 10.9992 12.5392 11.0002C12.6642 11.0012 12.7842 11.0492 12.8712 11.1352L15.0002 13.2362C16.3492 14.5662 16.3312 16.7132 14.9592 18.0232ZM17.8062 7.98615L13.2132 3.29515C12.8312 2.90415 12.1942 2.90415 11.7982 3.28015C11.5842 3.48415 11.4702 3.77315 11.4892 4.06815C11.4982 4.20815 11.4982 4.34615 11.4982 4.49415C11.4982 7.05115 10.8552 8.56315 10.5002 8.93715C10.3492 8.77115 10.0752 8.33515 9.84424 7.44415C9.75424 7.09615 9.48424 6.82315 9.13724 6.72915C8.78824 6.63715 8.41824 6.73615 8.16524 6.99115L7.18124 7.98415C4.27024 10.9512 4.27424 15.7852 7.18924 18.7562C8.60224 20.2022 10.4852 20.9982 12.4922 21.0002H12.5002C14.5092 21.0002 16.3962 20.2042 17.8152 18.7572C20.7322 15.7852 20.7272 10.9512 17.8062 7.98615Z",
    fill: fill
  }));
};
IconFire.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5s = ["size", "fill"];
var IconFlag = function IconFlag(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5s);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.268 4.68C18.806 4.346 18.208 4.251 17.669 4.427C17.093 4.615 16.343 4.714 15.5 4.714C14.376 4.714 13.4 4.331 12.366 3.926C11.204 3.471 10.001 3 8.5 3C5.614 3 4.496 3.952 4.3 4.144C4.109 4.331 4 4.589 4 4.858V12V15.143V20C4 20.553 4.448 21 5 21C5.553 21 6 20.553 6 20V15.702C6.395 15.527 7.173 15.286 8.5 15.286C9.624 15.286 10.601 15.669 11.635 16.075C12.797 16.53 13.999 17 15.5 17C17.309 17 18.423 16.622 19.041 16.305C19.633 15.998 20 15.403 20 14.749V6.106C20 5.546 19.727 5.013 19.268 4.68Z",
    fill: fill
  }));
};
IconFlag.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5t = ["size", "fill"];
var IconGift = function IconGift(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5t);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.4438 21H12.8188V15.272H19.3638V20.091C19.3638 20.593 18.9518 21 18.4438 21ZM4.6371 20.0905V15.2725H11.1821V21.0005H5.5571C5.0491 21.0005 4.6371 20.5925 4.6371 20.0905ZM20.1 7.09076H18.258C18.437 6.71776 18.546 6.30476 18.546 5.86276C18.546 4.28476 17.261 2.99976 15.682 2.99976C13.801 2.99976 12.661 4.31976 12 5.56876C11.339 4.31976 10.2 2.99976 8.319 2.99976C6.74 2.99976 5.454 4.28476 5.454 5.86276C5.454 6.30476 5.564 6.71776 5.743 7.09076H3.901C3.404 7.09076 3 7.67676 3 8.40076V12.3268C3 13.0498 3.404 13.6368 3.901 13.6368H4.637H11.182V7.09076H12.819V13.6368H19.364H20.1C20.597 13.6368 21 13.0498 21 12.3268V8.40076C21 7.67676 20.597 7.09076 20.1 7.09076ZM15.682 7.09076H13.101C13.487 6.07476 14.281 4.63676 15.682 4.63676C16.359 4.63676 16.91 5.18676 16.91 5.86276C16.91 6.53976 16.359 7.09076 15.682 7.09076ZM8.319 7.09076C7.642 7.09076 7.091 6.53976 7.091 5.86276C7.091 5.18676 7.642 4.63676 8.319 4.63676C9.72 4.63676 10.514 6.07476 10.9 7.09076H8.319Z",
    fill: fill
  }));
};
IconGift.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5u = ["size", "fill"];
var IconLove = function IconLove(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5u);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.9999 21C12.7339 21 12.4799 20.895 12.2919 20.706L4.52492 12.926C2.48892 10.886 2.48892 7.567 4.52492 5.527C5.50792 4.543 6.82092 4 8.21992 4C9.61893 4 10.9319 4.543 11.9149 5.527L12.9999 6.614L14.0839 5.528C15.0679 4.543 16.3809 4 17.7799 4C19.1789 4 20.4919 4.543 21.4749 5.527C23.5109 7.567 23.5109 10.886 21.4759 12.926L13.7079 20.707C13.5199 20.895 13.2659 21 12.9999 21Z",
    fill: fill
  }));
};
IconLove.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5v = ["size", "fill"];
var IconMagnifyingGlassMin = function IconMagnifyingGlassMin(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5v);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 12H9C8.45 12 8 11.55 8 11C8 10.45 8.45 10 9 10H13C13.55 10 14 10.45 14 11C14 11.55 13.55 12 13 12ZM20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293Z",
    fill: fill
  }));
};
IconMagnifyingGlassMin.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5w = ["size", "fill"];
var IconMagnifyingGlassPlus = function IconMagnifyingGlassPlus(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5w);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 12H12V13C12 13.55 11.55 14 11 14C10.45 14 10 13.55 10 13V12H9C8.45 12 8 11.55 8 11C8 10.45 8.45 10 9 10H10V9C10 8.45 10.45 8 11 8C11.55 8 12 8.45 12 9V10H13C13.55 10 14 10.45 14 11C14 11.55 13.55 12 13 12ZM20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293Z",
    fill: fill
  }));
};
IconMagnifyingGlassPlus.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5x = ["size", "fill"];
var IconMoon = function IconMoon(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5x);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 25 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.2958 22.0006C12.2638 22.0006 12.2328 22.0006 12.1998 21.9996C9.40583 21.9756 6.79783 20.8546 4.85583 18.8466C1.17883 15.0416 1.06383 8.74455 4.59883 4.80955C5.69983 3.58255 7.04383 2.65955 8.59183 2.06655C8.95683 1.92455 9.37183 2.01255 9.65083 2.28855C9.93083 2.56355 10.0238 2.97655 9.88883 3.34455C8.77083 6.39955 9.53183 9.85555 11.8298 12.1486C14.1268 14.4416 17.5928 15.2026 20.6578 14.0866C21.0258 13.9506 21.4388 14.0466 21.7128 14.3246C21.9878 14.6046 22.0738 15.0196 21.9338 15.3846C21.4098 16.7476 20.6238 17.9576 19.5978 18.9806C17.6448 20.9306 15.0538 22.0006 12.2958 22.0006Z",
    fill: fill
  }));
};
IconMoon.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5y = ["size", "fill"];
var IconMusic$1 = function IconMusic(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5y);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.947 14.992V3.99995C19.947 3.69695 19.809 3.40895 19.573 3.21995C19.336 3.02995 19.024 2.95795 18.73 3.02395L9.75901 5.01695C9.30101 5.11895 8.97501 5.52495 8.97501 5.99295V14.334C8.53501 14.134 8.05101 14.015 7.53601 14.015C5.61001 14.015 4.04401 15.582 4.04401 17.508C4.04401 19.433 5.61001 21 7.53601 21C9.46201 21 11.028 19.433 11.028 17.508C11.028 17.329 11.002 17.158 10.975 16.986V6.79595L17.947 5.24595V12.341C17.507 12.14 17.022 12.022 16.508 12.022C14.582 12.022 13.015 13.588 13.015 15.514C13.015 17.44 14.582 19.006 16.508 19.006C18.433 19.006 20 17.44 20 15.514C20 15.335 19.973 15.164 19.947 14.992Z",
    fill: fill
  }));
};
IconMusic$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5z = ["size", "fill"];
var IconNavigation = function IconNavigation(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5z);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.667 21C14.646 21 14.626 20.999 14.606 20.998C14.154 20.971 13.777 20.643 13.687 20.199L12.149 12.632C12.069 12.238 11.762 11.931 11.368 11.851L3.80104 10.312C3.35704 10.223 3.02904 9.84603 3.00204 9.39403C2.97504 8.94103 3.25404 8.52703 3.68404 8.38503L19.684 3.05203C20.043 2.93003 20.439 3.02403 20.707 3.29303C20.975 3.56103 21.068 3.95703 20.949 4.31603L15.615 20.316C15.479 20.727 15.095 21 14.667 21Z",
    fill: fill
  }));
};
IconNavigation.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5A = ["size", "fill"];
var IconNavigationUp = function IconNavigationUp(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5A);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 21.0003C19.808 21.0003 19.616 20.9453 19.448 20.8343L12.552 16.2673C12.217 16.0453 11.783 16.0453 11.448 16.2673L4.55198 20.8343C4.17398 21.0833 3.67598 21.0493 3.33698 20.7493C2.99798 20.4483 2.90298 19.9583 3.10498 19.5533L11.105 3.55326C11.474 2.81526 12.526 2.81526 12.895 3.55326L20.895 19.5533C21.097 19.9583 21.002 20.4483 20.663 20.7493C20.475 20.9153 20.238 21.0003 20 21.0003Z",
    fill: fill
  }));
};
IconNavigationUp.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5B = ["size", "fill"];
var IconPinLocation = function IconPinLocation(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5B);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 8C11.173 8 10.5 8.673 10.5 9.5C10.5 10.327 11.173 11 12 11C12.827 11 13.5 10.327 13.5 9.5C13.5 8.673 12.827 8 12 8ZM12 13C10.07 13 8.5 11.43 8.5 9.5C8.5 7.57 10.07 6 12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.43 13.93 13 12 13ZM12 2C7.589 2 4 5.554 4 9.923C4 15.397 11.049 21.502 11.349 21.759C11.537 21.92 11.768 22 12 22C12.232 22 12.463 21.92 12.651 21.759C12.951 21.502 20 15.397 20 9.923C20 5.554 16.411 2 12 2Z",
    fill: fill
  }));
};
IconPinLocation.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5C = ["size", "fill"];
var IconStar = function IconStar(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5C);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 25",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.5615 22C17.4035 22 17.2445 21.963 17.0985 21.887L11.9995 19.223L6.9015 21.887C6.5635 22.062 6.1555 22.032 5.8495 21.808C5.5415 21.584 5.3885 21.205 5.4535 20.83L6.4245 15.202L2.3045 11.217C2.0305 10.952 1.9315 10.554 2.0485 10.19C2.1655 9.82804 2.4785 9.56304 2.8565 9.50904L8.5565 8.68104L11.1045 3.55504C11.4425 2.87504 12.5575 2.87504 12.8955 3.55504L15.4435 8.68104L21.1435 9.50904C21.5215 9.56304 21.8345 9.82804 21.9515 10.19C22.0685 10.554 21.9695 10.952 21.6955 11.217L17.5755 15.202L18.5465 20.83C18.6115 21.205 18.4575 21.584 18.1505 21.808C17.9765 21.936 17.7695 22 17.5615 22Z",
    fill: fill
  }));
};
IconStar.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5D = ["size", "fill"];
var IconSun = function IconSun(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5D);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 6C12.552 6 13 5.553 13 5V3C13 2.447 12.552 2 12 2C11.448 2 11 2.447 11 3V5C11 5.553 11.448 6 12 6ZM21 11H19C18.448 11 18 11.447 18 12C18 12.553 18.448 13 19 13H21C21.552 13 22 12.553 22 12C22 11.447 21.552 11 21 11ZM5 11C5.552 11 6 11.447 6 12C6 12.553 5.552 13 5 13H3C2.448 13 2 12.553 2 12C2 11.447 2.448 11 3 11H5ZM6.2207 5.0283C5.8237 4.6453 5.1907 4.6573 4.8067 5.0533C4.4227 5.4503 4.4337 6.0843 4.8307 6.4673L6.2697 7.8573C6.4647 8.0453 6.7147 8.1373 6.9647 8.1373C7.2267 8.1373 7.4877 8.0353 7.6837 7.8323C8.0677 7.4353 8.0567 6.8013 7.6597 6.4183L6.2207 5.0283ZM17.7302 7.8577C17.5352 8.0447 17.2852 8.1377 17.0352 8.1377C16.7732 8.1377 16.5122 8.0347 16.3162 7.8317C15.9322 7.4357 15.9432 6.8017 16.3402 6.4177L17.7792 5.0287C18.1782 4.6457 18.8102 4.6577 19.1932 5.0537C19.5772 5.4497 19.5662 6.0837 19.1692 6.4677L17.7302 7.8577ZM12 18C11.448 18 11 18.447 11 19V21C11 21.553 11.448 22 12 22C12.552 22 13 21.553 13 21V19C13 18.447 12.552 18 12 18ZM16.316 16.1676C16.7 15.7716 17.333 15.7596 17.73 16.1426L19.169 17.5326C19.566 17.9156 19.577 18.5496 19.193 18.9466C18.997 19.1496 18.736 19.2516 18.474 19.2516C18.224 19.2516 17.974 19.1596 17.779 18.9716L16.34 17.5816C15.943 17.1986 15.932 16.5646 16.316 16.1676ZM6.27 16.1426L4.831 17.5326C4.434 17.9156 4.423 18.5496 4.807 18.9466C5.003 19.1496 5.264 19.2516 5.526 19.2516C5.776 19.2516 6.026 19.1596 6.221 18.9716L7.66 17.5816C8.057 17.1986 8.068 16.5646 7.684 16.1676C7.301 15.7716 6.668 15.7596 6.27 16.1426ZM8 12C8 9.794 9.794 8 12 8C14.206 8 16 9.794 16 12C16 14.206 14.206 16 12 16C9.794 16 8 14.206 8 12Z",
    fill: fill
  }));
};
IconSun.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5E = ["size", "fill"];
var IconToogleOff = function IconToogleOff(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5E);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.01612 11.0119C8.46412 11.0119 8.01812 11.4599 8.01912 12.0119C8.01912 12.5629 8.46712 13.0099 9.01912 13.0089C9.57012 13.0079 10.0171 12.5599 10.0161 12.0089C10.0151 11.4569 9.56712 11.0109 9.01612 11.0119ZM9.02102 15.006C7.36902 15.008 6.02302 13.666 6.02102 12.014C6.01902 10.361 7.36102 9.01597 9.01302 9.01397C10.666 9.01197 12.011 10.354 12.013 12.006C12.015 13.658 10.673 15.004 9.02102 15.006ZM15 5.01197L9.00702 5.01997C5.15402 5.02497 2.02102 8.16497 2.02702 12.02C2.03202 15.873 5.17202 19.006 9.02702 19L15.019 18.992C18.873 18.987 22.005 15.847 22 11.992C21.995 8.13897 18.854 5.00597 15 5.01197Z",
    fill: fill
  }));
};
IconToogleOff.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5F = ["size", "fill"];
var IconToogleOn = function IconToogleOn(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5F);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 11C14.448 11 14 11.448 14 12C14 12.552 14.448 13 15 13C15.552 13 16 12.552 16 12C16 11.448 15.552 11 15 11ZM15 15C13.346 15 12 13.654 12 12C12 10.346 13.346 9 15 9C16.654 9 18 10.346 18 12C18 13.654 16.654 15 15 15ZM15 5H9C5.141 5 2 8.141 2 12C2 15.859 5.141 19 9 19H15C18.859 19 22 15.859 22 12C22 8.141 18.859 5 15 5Z",
    fill: fill
  }));
};
IconToogleOn.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5G = ["size", "fill"];
var IconTruck = function IconTruck(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5G);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 18C19 18.552 18.552 19 18 19C17.448 19 17 18.552 17 18C17 17.448 17.448 17 18 17C18.552 17 19 17.448 19 18ZM7 18C7 18.552 6.552 19 6 19C5.448 19 5 18.552 5 18C5 17.448 5.448 17 6 17C6.552 17 7 17.448 7 18ZM20 12.48V15H17V10.081L20 12.48ZM21.625 11.219L17 7.519V5C17 3.897 16.187 3 15.187 3H3.812C2.813 3 2 3.897 2 5V15C2 15.873 2.513 16.609 3.221 16.882C3.081 17.228 3 17.604 3 18C3 19.654 4.346 21 6 21C7.654 21 9 19.654 9 18C9 17.647 8.928 17.314 8.815 17H12H15.185C15.072 17.314 15 17.647 15 18C15 19.654 16.346 21 18 21C19.654 21 21 19.654 21 18C21 17.647 20.928 17.314 20.815 17H21C21.553 17 22 16.553 22 16V12C22 11.696 21.862 11.409 21.625 11.219Z",
    fill: fill
  }));
};
IconTruck.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5H = ["size", "fill"];
var IconUmbrela = function IconUmbrela(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5H);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 2C6.486 2 2 6.486 2 12C2 12.553 2.447 13 3 13H11V19C11 20.654 12.346 22 14 22C15.654 22 17 20.654 17 19C17 18.447 16.553 18 16 18C15.447 18 15 18.447 15 19C15 19.552 14.552 20 14 20C13.448 20 13 19.552 13 19V13H21C21.553 13 22 12.553 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconUmbrela.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5I = ["size", "fill"];
var IconAward$1 = function IconAward(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5I);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.3057 16.707C11.9947 16.536 11.6187 16.539 11.3157 16.72L7.5677 18.92L9.0357 13.21C9.9107 13.71 10.9217 14 11.9997 14C13.0777 14 14.0887 13.71 14.9647 13.21L16.4537 19.002L12.3057 16.707ZM11.9997 4C14.2057 4 15.9997 5.794 15.9997 8C15.9997 10.206 14.2057 12 11.9997 12C9.7937 12 7.9997 10.206 7.9997 8C7.9997 5.794 9.7937 4 11.9997 4ZM18.9687 20.751L16.6597 11.772C17.4957 10.74 17.9997 9.429 17.9997 8C17.9997 4.691 15.3087 2 11.9997 2C8.6917 2 5.9997 4.691 5.9997 8C5.9997 9.429 6.5037 10.74 7.3397 11.772L5.0317 20.751C4.9307 21.143 5.0757 21.556 5.3987 21.799C5.7207 22.042 6.1587 22.064 6.5057 21.862L11.8357 18.733L17.5157 21.875C17.6667 21.959 17.8337 22 17.9997 22C18.2167 22 18.4327 21.93 18.6127 21.791C18.9277 21.547 19.0687 21.138 18.9687 20.751Z",
    fill: fill
  }));
};
IconAward$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5J = ["size", "fill"];
var IconBolt$1 = function IconBolt(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5J);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.8711 12.7997H12.0001C12.2841 12.7997 12.5551 12.9207 12.7441 13.1317C12.9331 13.3427 13.0241 13.6247 12.9941 13.9067L12.5451 18.0567L17.1291 11.1997H12.0001C11.7161 11.1997 11.4451 11.0787 11.2561 10.8677C11.0661 10.6567 10.9751 10.3747 11.0061 10.0927L11.4551 5.94374L6.8711 12.7997ZM11.1111 22.9997C10.9971 22.9997 10.8821 22.9807 10.7691 22.9397C10.3371 22.7817 10.0671 22.3497 10.1171 21.8927L10.8861 14.7997H5.0001C4.6311 14.7997 4.2921 14.5967 4.1181 14.2717C3.9441 13.9457 3.9641 13.5507 4.1691 13.2437L12.0581 1.44474C12.3131 1.06074 12.7971 0.902737 13.2301 1.06074C13.6631 1.21774 13.9331 1.65074 13.8831 2.10774L13.1141 9.19974H19.0001C19.3691 9.19974 19.7081 9.40374 19.8821 9.72874C20.0561 10.0547 20.0361 10.4487 19.8311 10.7557L11.9421 22.5557C11.7531 22.8397 11.4371 22.9997 11.1111 22.9997Z",
    fill: fill
  }));
};
IconBolt$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5K = ["size", "fill"];
var IconBoltSlash$1 = function IconBoltSlash(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5K);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.1931 8.36474L11.4551 5.94374L10.3801 7.55174L8.9381 6.11074L12.0581 1.44474C12.3131 1.06074 12.7981 0.902737 13.2301 1.06074C13.6631 1.21774 13.9331 1.65074 13.8831 2.10774L13.1141 9.20074H19.0001C19.3691 9.20074 19.7081 9.40374 19.8821 9.72874C20.0561 10.0547 20.0361 10.4497 19.8311 10.7557L17.3281 14.5007L15.8871 13.0587L17.1291 11.2007H14.0281L11.1931 8.36474ZM20.707 19.2933L4.707 3.29334C4.316 2.90234 3.684 2.90234 3.293 3.29334C2.902 3.68434 2.902 4.31634 3.293 4.70734L19.293 20.7073C19.488 20.9023 19.744 21.0003 20 21.0003C20.256 21.0003 20.512 20.9023 20.707 20.7073C21.098 20.3163 21.098 19.6843 20.707 19.2933ZM12.5449 18.0569L12.8069 15.6359L9.9719 12.7999H6.8709L8.1129 10.9419L6.6719 9.49994L4.1689 13.2449C3.9639 13.5509 3.9439 13.9459 4.1179 14.2719C4.2919 14.5969 4.6309 14.7999 4.9999 14.7999H10.8859L10.1169 21.8929C10.0669 22.3499 10.3369 22.7829 10.7699 22.9399C10.8819 22.9809 10.9969 22.9999 11.1109 22.9999C11.4379 22.9999 11.7529 22.8399 11.9419 22.5559L15.0619 17.8899L13.6199 16.4489L12.5449 18.0569Z",
    fill: fill
  }));
};
IconBoltSlash$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5L = ["size", "fill"];
var IconBulb$1 = function IconBulb(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5L);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.168 6.46676L17.73 7.85676C17.536 8.04376 17.285 8.13776 17.035 8.13776C16.773 8.13776 16.512 8.03476 16.316 7.83176C15.933 7.43576 15.943 6.80176 16.341 6.41876L17.779 5.02976C18.176 4.64676 18.812 4.65676 19.192 5.05376C19.576 5.44976 19.565 6.08376 19.168 6.46676ZM7.684 7.83176C7.488 8.03476 7.227 8.13776 6.965 8.13776C6.715 8.13776 6.464 8.04476 6.27 7.85776L4.831 6.46776C4.434 6.08376 4.423 5.44976 4.807 5.05376C5.191 4.65676 5.823 4.64476 6.221 5.02876L7.66 6.41776C8.057 6.80176 8.068 7.43576 7.684 7.83176ZM6 11.9998C6 12.5528 5.552 12.9998 5 12.9998H3C2.448 12.9998 2 12.5528 2 11.9998C2 11.4468 2.448 10.9998 3 10.9998H5C5.552 10.9998 6 11.4468 6 11.9998ZM22 11.9998C22 12.5528 21.553 12.9998 21 12.9998H19C18.447 12.9998 18 12.5528 18 11.9998C18 11.4468 18.447 10.9998 19 10.9998H21C21.553 10.9998 22 11.4468 22 11.9998ZM11 4.99976V2.99976C11 2.44676 11.448 1.99976 12 1.99976C12.552 1.99976 13 2.44676 13 2.99976V4.99976C13 5.55276 12.552 5.99976 12 5.99976C11.448 5.99976 11 5.55276 11 4.99976ZM13.501 14.5928C13.191 14.7718 13 15.1028 13 15.4598V19.9998H11V15.4598C11 15.1028 10.809 14.7718 10.499 14.5928C9.574 14.0618 9 13.0678 9 11.9998C9 10.3458 10.346 8.99976 12 8.99976C13.654 8.99976 15 10.3458 15 11.9998C15 13.0678 14.426 14.0618 13.501 14.5928ZM12 6.99976C9.243 6.99976 7 9.24276 7 11.9998C7 13.5788 7.753 15.0618 9 15.9958V19.9998C9 21.1028 9.897 21.9998 11 21.9998H13C14.103 21.9998 15 21.1028 15 19.9998V15.9958C16.246 15.0618 17 13.5788 17 11.9998C17 9.24276 14.757 6.99976 12 6.99976Z",
    fill: fill
  }));
};
IconBulb$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5M = ["size", "fill"];
var IconClockThree$1 = function IconClockThree(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5M);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 11H13V8C13 7.447 12.552 7 12 7C11.448 7 11 7.447 11 8V12C11 12.553 11.448 13 12 13H16C16.553 13 17 12.553 17 12C17 11.447 16.553 11 16 11ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconClockThree$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5N = ["size", "fill"];
var IconCompass$1 = function IconCompass(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5N);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.7969 13.2129L11.5109 11.4709L13.2029 10.7869L12.4889 12.5289L10.7969 13.2129ZM15.6829 8.3179C15.4089 8.0279 14.9789 7.9159 14.5839 8.0719L10.3709 9.7739C10.1209 9.8749 9.9219 10.0719 9.8199 10.3219L8.0749 14.5799C7.9269 14.9409 8.0139 15.3309 8.2529 15.6079C8.2609 15.6179 8.2669 15.6309 8.2759 15.6419C8.2919 15.6589 8.3109 15.6729 8.3289 15.6899C8.5169 15.8829 8.7719 15.9999 9.0419 15.9999C9.1669 15.9999 9.2939 15.9769 9.4159 15.9279L13.6289 14.2269C13.8789 14.1249 14.0779 13.9279 14.1799 13.6779L15.9249 9.4199C16.0869 9.0259 15.9749 8.5939 15.6829 8.3179ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconCompass$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5O = ["size", "fill"];
var IconDroplet$1 = function IconDroplet(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5O);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.5684 5.42878L8.65836 9.35478C6.48236 11.5378 6.45336 15.1138 8.59036 17.3268C9.61936 18.3938 10.9934 18.9878 12.4574 18.9998H12.4594C13.9244 19.0108 15.3084 18.4398 16.3544 17.3898C18.5284 15.2108 18.5574 11.6358 16.4194 9.42078L12.5684 5.42878ZM12.4414 20.9998C10.4344 20.9828 8.55636 20.1718 7.15136 18.7158C4.26236 15.7238 4.30136 10.8928 7.23836 7.94578L11.8714 3.29478C12.0614 3.10478 12.3194 2.99778 12.5884 2.99978C12.8574 3.00278 13.1134 3.11378 13.2994 3.30578L17.8594 8.03278C20.7474 11.0258 20.7084 15.8578 17.7714 18.8018C16.3424 20.2358 14.4504 21.0158 12.4434 20.9998H12.4414Z",
    fill: fill
  }));
};
IconDroplet$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5P = ["size", "fill"];
var IconDropletSlash$1 = function IconDropletSlash(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5P);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.9966 5.42876L15.8806 9.38776C17.2526 10.7848 17.7446 12.7398 17.3716 14.5428L18.9796 16.1518C20.0266 13.4188 19.4706 10.1908 17.3086 7.98776L12.7096 3.29976C12.5216 3.10876 12.2646 2.99976 11.9966 2.99976H11.9956C11.7266 2.99976 11.4696 3.10876 11.2816 3.30076L8.7316 5.90376L10.1456 7.31876L11.9966 5.42876ZM12.0024 19.0001H12.0004C10.5354 19.0001 9.1564 18.4181 8.1184 17.3601C6.2274 15.4341 5.9964 12.4451 7.4254 10.2541L5.9934 8.82206C3.8074 11.8041 4.0344 16.0551 6.6914 18.7611C8.1084 20.2051 9.9934 21.0001 12.0004 21.0001H12.0024C13.6824 20.9991 15.2724 20.4361 16.5784 19.4061L15.1474 17.9761C14.2304 18.6351 13.1454 18.9991 12.0024 19.0001ZM4.707 3.29306L20.707 19.2931C21.098 19.6841 21.098 20.3161 20.707 20.7071C20.512 20.9021 20.256 21.0001 20 21.0001C19.744 21.0001 19.488 20.9021 19.293 20.7071L3.293 4.70706C2.902 4.31606 2.902 3.68406 3.293 3.29306C3.684 2.90206 4.316 2.90206 4.707 3.29306Z",
    fill: fill
  }));
};
IconDropletSlash$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5Q = ["size", "fill"];
var IconFire$1 = function IconFire(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5Q);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.49786 9.51476C6.46586 11.7138 6.50886 15.1998 8.62686 17.3588C9.66086 18.4158 11.0349 18.9988 12.4989 18.9998H12.5039C13.9709 18.9998 15.3499 18.4168 16.3889 17.3588C18.5449 15.1608 18.5409 11.5858 16.3799 9.39076L13.3939 6.33976C13.0919 8.82176 12.1609 10.9998 10.5029 10.9998C9.99486 10.9998 9.16686 10.7738 8.49786 9.51476ZM12.5039 20.9998H12.4969C10.4909 20.9978 8.60886 20.2028 7.19786 18.7578C4.28386 15.7878 4.27986 10.9548 7.18886 7.98976L8.17186 6.99576C8.42586 6.74176 8.79486 6.64376 9.14386 6.73476C9.49086 6.82876 9.76086 7.10176 9.85086 7.44976C10.0809 8.33876 10.3549 8.77576 10.5059 8.94176C10.8609 8.56776 11.5029 7.05676 11.5029 4.49976C11.5029 4.35276 11.5029 4.21376 11.4949 4.07476C11.4759 3.77976 11.5889 3.49076 11.8029 3.28676C12.1999 2.90976 12.8359 2.90976 13.2169 3.30176L17.8069 7.99076C20.7269 10.9548 20.7319 15.7878 17.8169 18.7588C16.3979 20.2048 14.5119 20.9998 12.5039 20.9998Z",
    fill: fill
  }));
};
IconFire$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5R = ["size", "fill"];
var IconGift$1 = function IconGift(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5R);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 19H17.5V15H13V19ZM6.5 19H11V15H6.5V19ZM5 9.2C5 9.117 5.013 9.05 5.026 9H8.143H11V13H5.026C5.013 12.95 5 12.883 5 12.8V9.2ZM7 6C7 5.448 7.513 5 8.143 5C9.4 5 10.17 6.09 10.594 7H8.143C7.513 7 7 6.552 7 6ZM15.857 5C16.487 5 17 5.448 17 6C17 6.552 16.487 7 15.857 7H13.4C13.82 6.09 14.588 5 15.857 5ZM19 9.2V12.8C19 12.883 18.987 12.95 18.974 13H13V9H15.857H18.974C18.987 9.05 19 9.117 19 9.2ZM19.2 7H18.807C18.925 6.686 19 6.353 19 6C19 4.346 17.59 3 15.857 3C13.935 3 12.729 4.199 12 5.397C11.271 4.199 10.065 3 8.143 3C6.41 3 5 4.346 5 6C5 6.353 5.076 6.686 5.193 7H4.8C3.791 7 3 7.967 3 9.2V12.8C3 13.907 3.64 14.793 4.5 14.964V19.333C4.5 20.252 5.313 21 6.312 21H17.687C18.687 21 19.5 20.252 19.5 19.333V14.964C20.36 14.793 21 13.907 21 12.8V9.2C21 7.967 20.209 7 19.2 7Z",
    fill: fill
  }));
};
IconGift$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5S = ["size", "fill"];
var IconLoader = function IconLoader(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5S);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11 3C11 2.447 11.448 2 12 2C12.552 2 13 2.447 13 3V5C13 5.553 12.552 6 12 6C11.448 6 11 5.553 11 5V3ZM19 11H21C21.552 11 22 11.447 22 12C22 12.553 21.552 13 21 13H19C18.448 13 18 12.553 18 12C18 11.447 18.448 11 19 11ZM6 12C6 11.447 5.552 11 5 11H3C2.448 11 2 11.447 2 12C2 12.553 2.448 13 3 13H5C5.552 13 6 12.553 6 12ZM4.8067 5.0533C5.1917 4.6573 5.8237 4.6443 6.2207 5.0283L7.6597 6.4183C8.0567 6.8013 8.0677 7.4353 7.6837 7.8323C7.4877 8.0353 7.2267 8.1373 6.9647 8.1373C6.7147 8.1373 6.4647 8.0453 6.2697 7.8573L4.8307 6.4673C4.4337 6.0843 4.4227 5.4503 4.8067 5.0533ZM17.0352 8.1377C17.2852 8.1377 17.5352 8.0447 17.7302 7.8577L19.1692 6.4677C19.5662 6.0837 19.5772 5.4497 19.1932 5.0537C18.8102 4.6577 18.1782 4.6447 17.7792 5.0287L16.3402 6.4177C15.9432 6.8017 15.9322 7.4357 16.3162 7.8317C16.5122 8.0347 16.7732 8.1377 17.0352 8.1377ZM11 19C11 18.447 11.448 18 12 18C12.552 18 13 18.447 13 19V21C13 21.553 12.552 22 12 22C11.448 22 11 21.553 11 21V19ZM17.73 16.1426C17.333 15.7596 16.7 15.7716 16.316 16.1676C15.932 16.5646 15.943 17.1986 16.34 17.5816L17.779 18.9716C17.974 19.1596 18.224 19.2516 18.474 19.2516C18.736 19.2516 18.997 19.1496 19.193 18.9466C19.577 18.5496 19.566 17.9156 19.169 17.5326L17.73 16.1426ZM4.831 17.5326L6.27 16.1426C6.668 15.7596 7.301 15.7716 7.684 16.1676C8.068 16.5646 8.057 17.1986 7.66 17.5816L6.221 18.9716C6.026 19.1596 5.776 19.2516 5.526 19.2516C5.264 19.2516 5.003 19.1496 4.807 18.9466C4.423 18.5496 4.434 17.9156 4.831 17.5326Z",
    fill: fill
  }));
};
IconLoader.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5T = ["size", "fill"];
var IconLove$1 = function IconLove(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5T);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.21956 5.5C7.35556 5.5 6.54556 5.834 5.93956 6.441C4.68156 7.701 4.68156 9.752 5.94056 11.014L12.9996 18.085L20.0596 11.014C21.3186 9.752 21.3186 7.701 20.0596 6.441C18.8476 5.226 16.7116 5.228 15.4996 6.441L13.7076 8.236C13.3316 8.613 12.6676 8.613 12.2916 8.236L10.4996 6.44C9.89356 5.834 9.08456 5.5 8.21956 5.5ZM12.9996 20.5C12.7346 20.5 12.4796 20.395 12.2926 20.206L4.52456 12.426C2.48856 10.386 2.48856 7.067 4.52456 5.027C5.50856 4.043 6.82056 3.5 8.21956 3.5C9.61856 3.5 10.9316 4.043 11.9146 5.027L12.9996 6.114L14.0846 5.028C15.0686 4.043 16.3806 3.5 17.7806 3.5C19.1786 3.5 20.4916 4.043 21.4746 5.027C23.5116 7.067 23.5116 10.386 21.4756 12.426L13.7076 20.207C13.5196 20.395 13.2656 20.5 12.9996 20.5Z",
    fill: fill
  }));
};
IconLove$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5U = ["size", "fill"];
var IconMagnifyingGlassMin$1 = function IconMagnifyingGlassMin(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5U);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 10H9C8.45 10 8 10.45 8 11C8 11.55 8.45 12 9 12H13C13.55 12 14 11.55 14 11C14 10.45 13.55 10 13 10ZM5 11C5 7.691 7.691 5 11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11ZM20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293Z",
    fill: fill
  }));
};
IconMagnifyingGlassMin$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5V = ["size", "fill"];
var IconMagnifyingGlass = function IconMagnifyingGlass(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5V);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 11C5 7.691 7.691 5 11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11ZM20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293Z",
    fill: fill
  }));
};
IconMagnifyingGlass.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5W = ["size", "fill"];
var IconMagnifyingGlassPlus$1 = function IconMagnifyingGlassPlus(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5W);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 10H12V9C12 8.45 11.55 8 11 8C10.45 8 10 8.45 10 9V10H9C8.45 10 8 10.45 8 11C8 11.55 8.45 12 9 12H10V13C10 13.55 10.45 14 11 14C11.55 14 12 13.55 12 13V12H13C13.55 12 14 11.55 14 11C14 10.45 13.55 10 13 10ZM5 11C5 7.691 7.691 5 11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11ZM20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293Z",
    fill: fill
  }));
};
IconMagnifyingGlassPlus$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5X = ["size", "fill"];
var IconMoon$1 = function IconMoon(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5X);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 25 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.46233 4.91755C6.96233 5.27155 6.50333 5.68155 6.08733 6.14556C3.23833 9.31656 3.33133 14.3906 6.29433 17.4556C7.86033 19.0766 9.96433 19.9806 12.2183 19.9996C12.2433 20.0006 12.2693 20.0006 12.2953 20.0006C14.5203 20.0006 16.6093 19.1376 18.1853 17.5646C18.5133 17.2376 18.8113 16.8866 19.0783 16.5126C15.9323 16.9046 12.7073 15.8506 10.4163 13.5646C8.12633 11.2786 7.06633 8.06055 7.46233 4.91755ZM12.2953 22.0006C12.2633 22.0006 12.2323 22.0006 12.2003 21.9996C9.40633 21.9756 6.79733 20.8556 4.85633 18.8466C1.17933 15.0416 1.06433 8.74455 4.59833 4.80955C5.69933 3.58255 7.04333 2.65955 8.59233 2.06655C8.95733 1.92455 9.37233 2.01255 9.65133 2.28855C9.93033 2.56355 10.0233 2.97655 9.88833 3.34455C8.77033 6.39955 9.53233 9.85555 11.8293 12.1486C14.1273 14.4416 17.5923 15.2026 20.6573 14.0866C21.0253 13.9506 21.4393 14.0466 21.7133 14.3246C21.9873 14.6056 22.0743 15.0196 21.9333 15.3846C21.4093 16.7476 20.6233 17.9576 19.5973 18.9806C17.6443 20.9306 15.0543 22.0006 12.2953 22.0006Z",
    fill: fill
  }));
};
IconMoon$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5Y = ["size", "fill"];
var IconNavigation$1 = function IconNavigation(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5Y);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.86592 9.09946L13.0639 10.1565C13.4579 10.2355 13.7649 10.5425 13.8449 10.9365L14.9009 16.1345L18.4189 5.58146L7.86592 9.09946ZM14.6669 21.0005C14.6459 21.0005 14.6259 20.9995 14.6059 20.9985C14.1539 20.9715 13.7769 20.6435 13.6859 20.2005L12.0169 11.9835L3.80092 10.3135C3.35692 10.2235 3.02892 9.84646 3.00192 9.39446C2.97392 8.94246 3.25392 8.52846 3.68292 8.38546L19.6829 3.05246C20.0429 2.93046 20.4389 3.02546 20.7069 3.29346C20.9749 3.56146 21.0679 3.95746 20.9489 4.31746L15.6149 20.3175C15.4779 20.7275 15.0949 21.0005 14.6669 21.0005Z",
    fill: fill
  }));
};
IconNavigation$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5Z = ["size", "fill"];
var IconNavigationUp$1 = function IconNavigationUp(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5Z);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 13.6797C12.192 13.6797 12.385 13.7357 12.552 13.8457L17.432 17.0767L12 6.21372L6.568 17.0767L11.448 13.8457C11.615 13.7357 11.808 13.6797 12 13.6797ZM20 20.9777C19.808 20.9777 19.616 20.9227 19.448 20.8117L12 15.8787L4.552 20.8117C4.174 21.0607 3.676 21.0267 3.337 20.7267C2.998 20.4257 2.903 19.9357 3.105 19.5307L11.105 3.53072C11.444 2.85272 12.556 2.85272 12.895 3.53072L20.895 19.5307C21.097 19.9357 21.002 20.4257 20.663 20.7267C20.475 20.8927 20.238 20.9777 20 20.9777Z",
    fill: fill
  }));
};
IconNavigationUp$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5_ = ["size", "fill"];
var IconPercent = function IconPercent(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5_);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 25",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.7399 3.76076C19.3929 3.41276 18.8299 3.41276 18.4829 3.76076L4.26088 17.9828C4.08688 18.1568 3.99988 18.3838 3.99988 18.6118C3.99988 18.8388 4.08688 19.0668 4.26088 19.2398C4.60788 19.5868 5.16988 19.5868 5.51788 19.2398L19.7399 5.01776C20.0869 4.66976 20.0869 4.10776 19.7399 3.76076ZM16.0002 18.5001C15.1732 18.5001 14.5002 17.8271 14.5002 17.0001C14.5002 16.1731 15.1732 15.5001 16.0002 15.5001C16.8272 15.5001 17.5002 16.1731 17.5002 17.0001C17.5002 17.8271 16.8272 18.5001 16.0002 18.5001ZM16.0002 13.5001C14.0702 13.5001 12.5002 15.0701 12.5002 17.0001C12.5002 18.9301 14.0702 20.5001 16.0002 20.5001C17.9302 20.5001 19.5002 18.9301 19.5002 17.0001C19.5002 15.0701 17.9302 13.5001 16.0002 13.5001ZM8.00018 5.50006C8.82718 5.50006 9.50018 6.17306 9.50018 7.00006C9.50018 7.82706 8.82718 8.50006 8.00018 8.50006C7.17318 8.50006 6.50018 7.82706 6.50018 7.00006C6.50018 6.17306 7.17318 5.50006 8.00018 5.50006ZM8.00018 10.5001C9.93018 10.5001 11.5002 8.93006 11.5002 7.00006C11.5002 5.07006 9.93018 3.50006 8.00018 3.50006C6.07018 3.50006 4.50018 5.07006 4.50018 7.00006C4.50018 8.93006 6.07018 10.5001 8.00018 10.5001Z",
    fill: fill
  }));
};
IconPercent.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$5$ = ["size", "fill"];
var IconPinLocation$1 = function IconPinLocation(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$5$);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 10.9995C11.173 10.9995 10.5 10.3265 10.5 9.4995C10.5 8.6725 11.173 7.9995 12 7.9995C12.827 7.9995 13.5 8.6725 13.5 9.4995C13.5 10.3265 12.827 10.9995 12 10.9995ZM12 5.9995C10.07 5.9995 8.5 7.5695 8.5 9.4995C8.5 11.4295 10.07 12.9995 12 12.9995C13.93 12.9995 15.5 11.4295 15.5 9.4995C15.5 7.5695 13.93 5.9995 12 5.9995ZM12 19.646C10.325 18.062 6 13.615 6 9.922C6 6.657 8.691 4 12 4C15.309 4 18 6.657 18 9.922C18 13.615 13.675 18.062 12 19.646ZM12 2C7.589 2 4 5.553 4 9.922C4 15.397 11.049 21.501 11.349 21.758C11.537 21.919 11.768 22 12 22C12.232 22 12.463 21.919 12.651 21.758C12.951 21.501 20 15.397 20 9.922C20 5.553 16.411 2 12 2Z",
    fill: fill
  }));
};
IconPinLocation$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$60 = ["size", "fill"];
var IconStar$1 = function IconStar(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$60);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 25",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 17.0947C12.159 17.0947 12.318 17.1327 12.463 17.2077L16.232 19.1777L15.515 15.0207C15.458 14.6947 15.567 14.3627 15.805 14.1317L18.841 11.1957L14.638 10.5837C14.313 10.5367 14.032 10.3337 13.886 10.0397L12 6.24568L10.114 10.0397C9.968 10.3337 9.687 10.5367 9.362 10.5837L5.159 11.1957L8.195 14.1317C8.433 14.3627 8.542 14.6947 8.485 15.0207L7.768 19.1777L11.537 17.2077C11.682 17.1327 11.841 17.0947 12 17.0947ZM17.562 21.9997C17.403 21.9997 17.244 21.9627 17.099 21.8867L12 19.2227L6.901 21.8867C6.563 22.0627 6.155 22.0317 5.85 21.8077C5.542 21.5837 5.389 21.2047 5.453 20.8297L6.425 15.2017L2.305 11.2167C2.03 10.9517 1.932 10.5537 2.049 10.1907C2.165 9.82768 2.479 9.56368 2.856 9.50868L8.557 8.68068L11.104 3.55468C11.442 2.87468 12.558 2.87468 12.896 3.55468L15.443 8.68068L21.144 9.50868C21.521 9.56368 21.835 9.82768 21.951 10.1907C22.068 10.5537 21.97 10.9517 21.695 11.2167L17.575 15.2017L18.547 20.8297C18.611 21.2047 18.458 21.5837 18.15 21.8077C17.977 21.9357 17.77 21.9997 17.562 21.9997Z",
    fill: fill
  }));
};
IconStar$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$61 = ["size", "fill"];
var IconSun$1 = function IconSun(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$61);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 12C14 10.897 13.103 10 12 10C10.897 10 10 10.897 10 12C10 13.103 10.897 14 12 14C13.103 14 14 13.103 14 12ZM16 12C16 14.206 14.206 16 12 16C9.794 16 8 14.206 8 12C8 9.794 9.794 8 12 8C14.206 8 16 9.794 16 12ZM6.27 16.143L4.831 17.532C4.434 17.916 4.423 18.55 4.807 18.946C5.003 19.149 5.264 19.252 5.526 19.252C5.776 19.252 6.026 19.159 6.221 18.972L7.66 17.582C8.057 17.198 8.068 16.564 7.684 16.168C7.301 15.771 6.668 15.76 6.27 16.143ZM17.73 16.143C17.333 15.76 16.7 15.771 16.316 16.168C15.932 16.564 15.943 17.198 16.34 17.582L17.779 18.972C17.974 19.159 18.224 19.252 18.474 19.252C18.736 19.252 18.997 19.149 19.193 18.946C19.577 18.55 19.566 17.916 19.169 17.532L17.73 16.143ZM12 18C11.448 18 11 18.447 11 19V21C11 21.553 11.448 22 12 22C12.552 22 13 21.553 13 21V19C13 18.447 12.552 18 12 18ZM17.035 8.138C17.285 8.138 17.536 8.045 17.73 7.857L19.169 6.468C19.566 6.084 19.577 5.45 19.193 5.054C18.81 4.657 18.178 4.646 17.779 5.028L16.34 6.418C15.943 6.802 15.932 7.436 16.316 7.832C16.512 8.035 16.773 8.138 17.035 8.138ZM6.221 5.028C5.824 4.646 5.191 4.657 4.807 5.054C4.423 5.45 4.434 6.084 4.831 6.468L6.27 7.857C6.464 8.045 6.715 8.138 6.965 8.138C7.227 8.138 7.488 8.035 7.684 7.832C8.068 7.436 8.057 6.802 7.66 6.418L6.221 5.028ZM6 12C6 11.447 5.552 11 5 11H3C2.448 11 2 11.447 2 12C2 12.553 2.448 13 3 13H5C5.552 13 6 12.553 6 12ZM21 11H19C18.448 11 18 11.447 18 12C18 12.553 18.448 13 19 13H21C21.552 13 22 12.553 22 12C22 11.447 21.552 11 21 11ZM11 5V3C11 2.447 11.448 2 12 2C12.552 2 13 2.447 13 3V5C13 5.553 12.552 6 12 6C11.448 6 11 5.553 11 5Z",
    fill: fill
  }));
};
IconSun$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$62 = ["size", "fill"];
var IconToogleOff$1 = function IconToogleOff(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$62);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 13C8.448 13 8 12.552 8 12C8 11.448 8.448 11 9 11C9.552 11 10 11.448 10 12C10 12.552 9.552 13 9 13ZM9 9C7.346 9 6 10.346 6 12C6 13.654 7.346 15 9 15C10.654 15 12 13.654 12 12C12 10.346 10.654 9 9 9ZM15 17H9C6.243 17 4 14.757 4 12C4 9.243 6.243 7 9 7H15C17.757 7 20 9.243 20 12C20 14.757 17.757 17 15 17ZM15 5H9C5.141 5 2 8.141 2 12C2 15.859 5.141 19 9 19H15C18.859 19 22 15.859 22 12C22 8.141 18.859 5 15 5Z",
    fill: fill
  }));
};
IconToogleOff$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$63 = ["size", "fill"];
var IconToogleOn$1 = function IconToogleOn(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$63);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 13C14.448 13 14 12.552 14 12C14 11.448 14.448 11 15 11C15.552 11 16 11.448 16 12C16 12.552 15.552 13 15 13ZM15 9C13.346 9 12 10.346 12 12C12 13.654 13.346 15 15 15C16.654 15 18 13.654 18 12C18 10.346 16.654 9 15 9ZM15 17H9C6.243 17 4 14.757 4 12C4 9.243 6.243 7 9 7H15C17.757 7 20 9.243 20 12C20 14.757 17.757 17 15 17ZM15 5H9C5.141 5 2 8.141 2 12C2 15.859 5.141 19 9 19H15C18.859 19 22 15.859 22 12C22 8.141 18.859 5 15 5Z",
    fill: fill
  }));
};
IconToogleOn$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$64 = ["size", "fill"];
var IconTruck$1 = function IconTruck(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$64);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 18C19 18.552 18.552 19 18 19C17.448 19 17 18.552 17 18C17 17.448 17.448 17 18 17C18.552 17 19 17.448 19 18ZM12 15H4L4.016 5H15L14.984 15H12ZM7 18C7 18.552 6.552 19 6 19C5.448 19 5 18.552 5 18C5 17.448 5.448 17 6 17C6.552 17 7 17.448 7 18ZM20 12.48V15H17V10.081L20 12.48ZM21.625 11.219L17 7.519V5C17 3.897 16.187 3 15.187 3H3.812C2.813 3 2 3.897 2 5V15C2 15.873 2.513 16.609 3.221 16.882C3.081 17.228 3 17.604 3 18C3 19.654 4.346 21 6 21C7.654 21 9 19.654 9 18C9 17.647 8.928 17.314 8.815 17H12H15.185C15.072 17.314 15 17.647 15 18C15 19.654 16.346 21 18 21C19.654 21 21 19.654 21 18C21 17.647 20.928 17.314 20.815 17H21C21.553 17 22 16.553 22 16V12C22 11.696 21.862 11.409 21.625 11.219Z",
    fill: fill
  }));
};
IconTruck$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$65 = ["size", "fill"];
var IconUmbrela$1 = function IconUmbrela(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$65);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.063 11C4.556 7.06 7.928 4 12 4C16.073 4 19.445 7.06 19.938 11H4.063ZM12 2C6.487 2 2 6.486 2 12C2 12.553 2.448 13 3.001 13H11V19C11 20.654 12.346 22 14.001 22C15.655 22 17.001 20.654 17.001 19C17.001 18.447 16.553 18 16.001 18C15.448 18 15.001 18.447 15.001 19C15.001 19.552 14.552 20 14.001 20C13.449 20 13.001 19.552 13.001 19V13H21C21.553 13 22 12.553 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconUmbrela$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$66 = ["size", "fill"];
var IconBehance = function IconBehance(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$66);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.4054 9.6698C10.0104 9.6698 10.3644 9.9948 10.3644 10.5228C10.3644 11.0888 9.9814 11.4088 9.1134 11.4088H8.2604V9.6698H9.4054ZM14.7647 11.1888C14.1387 11.1888 13.7267 11.6668 13.7267 12.2848V12.2938H15.7877V12.2848C15.7877 11.6618 15.3857 11.1888 14.7647 11.1888ZM9.4869 12.304H8.2599V14.238H9.2189C10.2399 14.238 10.6569 13.913 10.6569 13.294C10.6569 12.68 10.2439 12.304 9.4869 12.304ZM17.025 13.054H13.727V13.186C13.727 13.918 14.168 14.382 14.818 14.382C15.327 14.382 15.686 14.146 15.793 13.754H16.977C16.856 14.528 16.186 15.297 14.808 15.297C13.397 15.297 12.475 14.469 12.475 12.991V12.549C12.475 11.134 13.401 10.297 14.755 10.297C16.157 10.297 17.025 11.193 17.025 12.58V13.054ZM13.25 9.703H16.25V9.203H13.25V9.703ZM9.698 15.203H6.975V8.703H9.703C10.873 8.703 11.64 9.309 11.64 10.304C11.64 11.094 11.165 11.571 10.518 11.728V11.784C11.304 11.861 11.975 12.395 11.975 13.37C11.975 14.533 11.026 15.203 9.698 15.203ZM12 2C6.477 2 2 6.478 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.478 17.523 2 12 2Z",
    fill: fill
  }));
};
IconBehance.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$67 = ["size", "fill"];
var IconFacebook = function IconFacebook(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$67);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 3.5C18 3.224 17.775 3 17.5 3H15C12.238 3 10 5.015 10 7.5V10.2H7.5C7.224 10.2 7 10.424 7 10.7V13.3C7 13.576 7.224 13.8 7.5 13.8H10V20.5C10 20.776 10.224 21 10.5 21H13.5C13.775 21 14 20.776 14 20.5V13.8H16.619C16.844 13.8 17.041 13.65 17.102 13.434L17.823 10.834C17.912 10.516 17.672 10.2 17.342 10.2H14V7.5C14 7.003 14.447 6.6 15 6.6H17.5C17.775 6.6 18 6.376 18 6.1V3.5Z",
    fill: fill
  }));
};
IconFacebook.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$68 = ["size", "fill"];
var IconGithub = function IconGithub(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$68);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 2.00024C5.926 2.00024 1 6.82024 1 12.7672C1 17.5222 4.152 21.5582 8.523 22.9812C9.074 23.0802 9.274 22.7482 9.274 22.4622C9.274 22.2072 9.265 21.5292 9.26 20.6322C6.2 21.2822 5.555 19.1882 5.555 19.1882C5.054 17.9442 4.333 17.6132 4.333 17.6132C3.334 16.9452 4.409 16.9592 4.409 16.9592C5.513 17.0352 6.093 18.0682 6.093 18.0682C7.074 19.7142 8.667 19.2382 9.295 18.9632C9.395 18.2682 9.678 17.7932 9.993 17.5232C7.55 17.2522 4.982 16.3282 4.982 12.2032C4.982 11.0282 5.411 10.0672 6.115 9.31424C6.001 9.04224 5.624 7.94724 6.222 6.46524C6.222 6.46524 7.146 6.17624 9.248 7.56824C10.125 7.32924 11.066 7.21124 12.001 7.20624C12.935 7.21124 13.876 7.32924 14.755 7.56824C16.855 6.17624 17.777 6.46524 17.777 6.46524C18.377 7.94724 18 9.04224 17.886 9.31424C18.591 10.0672 19.017 11.0282 19.017 12.2032C19.017 16.3392 16.445 17.2492 13.995 17.5162C14.39 17.8482 14.741 18.5052 14.741 19.5092C14.741 20.9482 14.728 22.1092 14.728 22.4622C14.728 22.7502 14.926 23.0852 15.484 22.9802C19.851 21.5542 23 17.5212 23 12.7672C23 6.82024 18.075 2.00024 12 2.00024Z",
    fill: fill
  }));
};
IconGithub.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$69 = ["size", "fill"];
var IconGoogle = function IconGoogle(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$69);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.4952 13.98C16.8292 16.122 15.1692 17.605 12.9602 17.932C9.58915 18.431 6.27915 15.875 6.01715 12.475C5.74515 8.947 8.52815 6 12.0012 6C12.8042 6 13.5702 6.158 14.2702 6.444C14.5132 6.543 14.7882 6.458 14.9122 6.228L16.3472 3.581C16.4832 3.328 16.3852 3.002 16.1232 2.884C14.8662 2.316 13.4722 2 12.0042 2C6.38215 2 1.84315 6.636 2.00415 12.293C2.15115 17.454 6.41115 21.772 11.5682 21.991C17.1142 22.225 21.7142 17.945 21.9932 12.522C22.0042 12.324 22.0002 11.171 21.9962 10.495C21.9952 10.219 21.7712 10 21.4962 10H12.4972C12.2212 10 11.9972 10.223 11.9972 10.5V13.48C11.9972 13.755 12.2212 13.98 12.4972 13.98H17.4952Z",
    fill: fill
  }));
};
IconGoogle.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$6a = ["size", "fill"];
var IconLinkedin = function IconLinkedin(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$6a);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.00003 5.24976C3.00003 4.00776 4.00803 2.99976 5.25003 2.99976C6.49203 2.99976 7.50003 4.00776 7.50003 5.24976C7.50003 6.49176 6.49203 7.49976 5.25003 7.49976C4.00803 7.49976 3.00003 6.49176 3.00003 5.24976ZM15.1504 8.40016C11.9194 8.40016 9.29943 11.0042 9.29943 14.2142V20.0992C9.29943 20.5962 9.70343 21.0002 10.2004 21.0002H12.2994C12.7964 21.0002 13.2004 20.5962 13.2004 20.0992V14.2142C13.2004 13.0782 14.1844 12.1702 15.3524 12.2872C16.3664 12.3882 17.0994 13.3152 17.0994 14.3342V20.0992C17.0994 20.5962 17.5034 21.0002 18.0004 21.0002H20.0994C20.5964 21.0002 21.0004 20.5962 21.0004 20.0992V14.2142C21.0004 11.0042 18.3804 8.40016 15.1504 8.40016ZM6.59963 9.29956H3.90063C3.40363 9.29956 2.99963 9.70256 2.99963 10.1996V20.0996C2.99963 20.5966 3.40363 20.9996 3.90063 20.9996H6.59963C7.09663 20.9996 7.49963 20.5966 7.49963 20.0996V10.1996C7.49963 9.70256 7.09663 9.29956 6.59963 9.29956Z",
    fill: fill
  }));
};
IconLinkedin.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$6b = ["size", "fill"];
var IconNpm = function IconNpm(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$6b);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H13V11H17V21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z",
    fill: fill
  }));
};
IconNpm.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$6c = ["size", "fill"];
var IconTwitter = function IconTwitter(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$6c);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.07693 20.0003C15.3229 20.0003 19.5149 14.3743 19.5149 9.03528C19.5149 8.88828 20.5449 8.00428 20.9859 6.16128C21.0759 5.78728 20.7119 5.49228 20.3689 5.64928C19.4889 6.05328 18.5959 5.73328 18.2079 5.27328C16.7159 3.64628 14.2209 3.56828 12.6339 5.09828C11.6109 6.08528 11.1769 7.55528 11.4939 8.95828C8.14293 9.19728 5.84193 7.60928 3.94993 5.43228C3.70593 5.14928 3.25293 5.29828 3.20193 5.67228C2.92193 7.75428 2.83393 12.8163 7.84993 15.7233C6.97893 16.9753 5.27393 17.7143 3.37593 18.0313C2.95593 18.1023 2.85593 18.6843 3.23993 18.8723C4.74393 19.6123 6.39693 19.9993 8.07693 19.9973",
    fill: fill
  }));
};
IconTwitter.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$6d = ["size", "fill"];
var IconBehance$1 = function IconBehance(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$6d);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.25 9.703H16.25V9.203H13.25V9.703ZM15.788 12.294H13.727V12.284C13.727 11.666 14.139 11.188 14.765 11.188C15.385 11.188 15.788 11.661 15.788 12.284V12.294ZM14.755 10.297C13.401 10.297 12.475 11.134 12.475 12.549V12.99C12.475 14.469 13.396 15.297 14.808 15.297C16.186 15.297 16.855 14.527 16.977 13.754H15.793C15.686 14.146 15.327 14.382 14.818 14.382C14.168 14.382 13.727 13.918 13.727 13.186V13.054H17.025V12.58C17.025 11.192 16.157 10.297 14.755 10.297ZM9.219 14.237H8.26V12.304H9.487C10.244 12.304 10.657 12.68 10.657 13.294C10.657 13.913 10.24 14.237 9.219 14.237ZM8.26 9.67H9.405C10.01 9.67 10.364 9.994 10.364 10.522C10.364 11.089 9.981 11.408 9.113 11.408H8.26V9.67ZM10.518 11.784V11.728C11.165 11.57 11.64 11.094 11.64 10.304C11.64 9.309 10.873 8.703 9.703 8.703H6.975V15.203H9.698C11.026 15.203 11.975 14.532 11.975 13.37C11.975 12.395 11.304 11.86 10.518 11.784ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z",
    fill: fill
  }));
};
IconBehance$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$6e = ["size", "fill"];
var IconFacebook$1 = function IconFacebook(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$6e);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.5 20H12.5V13.8C12.5 13.247 12.947 12.8 13.5 12.8H15.74L16.185 11.2H13.5C12.947 11.2 12.5 10.753 12.5 10.2V7.5C12.5 6.452 13.397 5.6 14.5 5.6H16.5V4H14.5C12.294 4 10.5 5.57 10.5 7.5V10.2C10.5 10.753 10.053 11.2 9.49997 11.2H7.49997V12.8H9.49997C10.053 12.8 10.5 13.247 10.5 13.8V20ZM13.5 22H9.49997C8.94697 22 8.49997 21.553 8.49997 21V14.8H6.49997C5.94697 14.8 5.49997 14.353 5.49997 13.8V10.2C5.49997 9.647 5.94697 9.2 6.49997 9.2H8.49997V7.5C8.49997 4.468 11.191 2 14.5 2H17.5C18.053 2 18.5 2.447 18.5 3V6.6C18.5 7.152 18.053 7.6 17.5 7.6H14.5V9.2H17.5C17.812 9.2 18.107 9.347 18.296 9.595C18.485 9.844 18.547 10.167 18.464 10.468L17.464 14.067C17.344 14.5 16.949 14.8 16.5 14.8H14.5V21C14.5 21.553 14.053 22 13.5 22Z",
    fill: fill
  }));
};
IconFacebook$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$6f = ["size", "fill"];
var IconGithub$1 = function IconGithub(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$6f);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.2402 22.0006C15.6882 22.0006 15.2402 21.5536 15.2402 21.0006V18.4016C15.2872 17.7386 15.0882 17.1616 14.6972 16.7426C14.4382 16.4666 14.3582 16.0686 14.4882 15.7146C14.6182 15.3596 14.9362 15.1086 15.3122 15.0656C17.7462 14.7836 20.0002 13.9476 20.0002 9.7746C20.0002 8.9746 19.7682 8.2036 19.3292 7.5476C18.9282 6.9496 18.7822 6.2206 18.9162 5.4946C19.0042 5.0216 18.9992 4.5406 18.9042 4.0756C18.5002 4.1956 17.8082 4.4806 16.8112 5.1746C16.5662 5.3446 16.2552 5.3956 15.9692 5.3156C14.1652 4.8086 12.2582 4.8086 10.4532 5.3156C10.1662 5.3956 9.85721 5.3446 9.61221 5.1746C8.62521 4.4876 7.93721 4.2016 7.51721 4.0836C7.42321 4.5446 7.41921 5.0216 7.50621 5.4916C7.63921 6.2136 7.48821 6.9506 7.08021 7.5686C6.64621 8.2276 6.41921 8.9976 6.42321 9.7976C6.42321 13.6916 8.30221 14.7306 11.1232 15.0936C11.4952 15.1416 11.8092 15.3936 11.9372 15.7466C12.0642 16.0996 11.9832 16.4936 11.7272 16.7676C11.3402 17.1826 11.1412 17.7536 11.1802 18.3346L11.1812 19.1226C11.1832 19.1626 11.1832 19.2026 11.1812 19.2426L11.1822 21.0006C11.1822 21.5536 10.7352 22.0006 10.1822 22.0006C9.63021 22.0006 9.18221 21.5536 9.18221 21.0006V20.4296C6.49721 20.7796 4.96721 19.3406 3.90621 18.3406C3.46621 17.9276 3.05221 17.5366 2.74921 17.4576C2.21421 17.3186 1.89321 16.7726 2.03221 16.2386C2.17121 15.7046 2.71721 15.3786 3.25121 15.5216C4.05021 15.7296 4.64621 16.2906 5.27721 16.8846C6.29921 17.8476 7.26921 18.7596 9.18221 18.4046V18.4016C9.14521 17.8726 9.22421 17.3306 9.40721 16.8176C7.35321 16.3056 4.42321 14.8126 4.42321 9.8026C4.41721 8.6106 4.75921 7.4566 5.41021 6.4676C5.53221 6.2826 5.57821 6.0656 5.53921 5.8546C5.33921 4.7716 5.45421 3.6596 5.87421 2.6436C5.98821 2.3676 6.21921 2.1566 6.50421 2.0686C6.83521 1.9666 8.05521 1.7716 10.3662 3.2716C12.2372 2.8226 14.1862 2.8226 16.0562 3.2716C18.3682 1.7716 19.5872 1.9656 19.9182 2.0686C20.2032 2.1566 20.4342 2.3676 20.5482 2.6436C20.9692 3.6616 21.0842 4.7726 20.8832 5.8586C20.8442 6.0676 20.8832 6.2726 20.9912 6.4356C21.6512 7.4226 22.0002 8.5766 22.0002 9.7746C22.0002 14.8386 19.0772 16.3136 17.0202 16.8076C17.2042 17.3366 17.2812 17.9056 17.2372 18.4786L17.2402 21.0006C17.2402 21.5536 16.7922 22.0006 16.2402 22.0006Z",
    fill: fill
  }));
};
IconGithub$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$6g = ["size", "fill"];
var IconGoogle$1 = function IconGoogle(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$6g);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.0031 4.00049C9.82107 4.00049 7.78307 4.86149 6.26307 6.42649C4.74307 7.98949 3.94107 10.0525 4.00407 12.2355C4.12107 16.3395 7.55307 19.8185 11.6531 19.9925C16.0351 20.1655 19.7721 16.7805 19.9951 12.4195C20.0021 12.2915 20.0011 11.7265 19.9991 11.2005H12.9971V12.7825H18.3061L17.9011 14.0805C17.1801 16.3945 15.3521 17.9825 13.0111 18.3285C11.2651 18.5815 9.44607 18.0825 8.02307 16.9455C6.62607 15.8325 5.75007 14.2145 5.61807 12.5055C5.48007 10.6985 6.07707 8.97649 7.30307 7.65349C8.96907 5.85349 11.6621 5.16049 13.9701 5.90949L14.7431 4.48049C13.8681 4.16149 12.9491 4.00049 12.0031 4.00049ZM11.9961 21.9995C11.8551 21.9995 11.7121 21.9965 11.5691 21.9905C6.44107 21.7735 2.15107 17.4235 2.00407 12.2925C1.92707 9.56449 2.92907 6.98649 4.82807 5.03249C6.72907 3.07749 9.27607 2.00049 12.0031 2.00049C13.4371 2.00049 14.8231 2.29849 16.1221 2.88549C16.4831 3.04849 16.7641 3.35849 16.8911 3.73649C17.0201 4.11949 16.9841 4.54349 16.7921 4.89849L15.5001 7.28249C15.1491 7.93449 14.3571 8.21449 13.6651 7.92549C12.0121 7.25249 9.99207 7.69249 8.77007 9.01249C7.92807 9.92149 7.51707 11.1075 7.61207 12.3515C7.70207 13.5095 8.30607 14.6135 9.27007 15.3825C10.2641 16.1755 11.5261 16.5285 12.7181 16.3505C13.8181 16.1875 14.7301 15.6355 15.3501 14.7825H12.4471C11.6481 14.7825 10.9971 14.1325 10.9971 13.3325V10.6505C10.9971 9.85149 11.6481 9.20049 12.4471 9.20049H20.5471C21.3401 9.20049 21.9911 9.84549 21.9971 10.6385C22.0001 11.2695 22.0021 12.3365 21.9931 12.5205C21.7201 17.8325 17.2771 21.9995 11.9961 21.9995Z",
    fill: fill
  }));
};
IconGoogle$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$6h = ["size", "fill"];
var IconLinkedin$1 = function IconLinkedin(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$6h);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.00006 10.4998H3.99806L4.00006 20.4998H6.00006V10.4998H4.00006ZM6.00006 22.4998H4.00006C2.89706 22.4998 2.00006 21.6028 2.00006 20.4998V10.4998C2.00006 9.39676 2.89706 8.49976 4.00006 8.49976H6.00006C7.10306 8.49976 8.00006 9.39676 8.00006 10.4998V20.4998C8.00006 21.6028 7.10306 22.4998 6.00006 22.4998ZM15.505 12.1922C15.658 12.1922 15.813 12.2052 15.966 12.2292C17.316 12.4502 18.333 13.6962 18.333 15.1292V20.5002H20V15.0382C20 12.5362 17.982 10.5002 15.5 10.5002C13.019 10.5002 11 12.5362 11 15.0382V20.5002H12.667V15.0382C12.667 14.1992 13.032 13.4072 13.67 12.8652C14.186 12.4272 14.835 12.1922 15.505 12.1922ZM20 22.5002H18.333C17.231 22.5002 16.333 21.6022 16.333 20.5002V15.1292C16.333 14.6722 16.03 14.2662 15.645 14.2042C15.309 14.1462 15.075 14.2962 14.966 14.3882C14.776 14.5502 14.667 14.7872 14.667 15.0382V20.5002C14.667 21.6022 13.77 22.5002 12.667 22.5002H11C9.89796 22.5002 8.99996 21.6022 8.99996 20.5002V15.0382C8.99996 11.4322 11.916 8.50016 15.5 8.50016C19.084 8.50016 22 11.4322 22 15.0382V20.5002C22 21.6022 21.103 22.5002 20 22.5002ZM5.00006 3.49976C4.44806 3.49976 4.00006 3.94776 4.00006 4.49976C4.00006 5.05176 4.44806 5.49976 5.00006 5.49976C5.55206 5.49976 6.00006 5.05176 6.00006 4.49976C6.00006 3.94776 5.55206 3.49976 5.00006 3.49976ZM5.00006 7.49976C3.34606 7.49976 2.00006 6.15376 2.00006 4.49976C2.00006 2.84576 3.34606 1.49976 5.00006 1.49976C6.65406 1.49976 8.00006 2.84576 8.00006 4.49976C8.00006 6.15376 6.65406 7.49976 5.00006 7.49976Z",
    fill: fill
  }));
};
IconLinkedin$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$6i = ["size", "fill"];
var IconNpm$1 = function IconNpm(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$6i);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 19H16V9H12V19ZM6 5C5.449 5 5 5.449 5 6V18C5 18.551 5.449 19 6 19H18C18.551 19 19 18.551 19 18V6C19 5.449 18.551 5 18 5H6ZM18 21H6C4.346 21 3 19.654 3 18V6C3 4.346 4.346 3 6 3H18C19.654 3 21 4.346 21 6V18C21 19.654 19.654 21 18 21Z",
    fill: fill
  }));
};
IconNpm$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

var _excluded$6j = ["size", "fill"];
var IconTwitter$1 = function IconTwitter(_ref) {
  var size = _ref.size,
    fill = _ref.fill,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$6j);
  return createElement("svg", Object.assign({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.0156 6.65431V6.65631V6.65431ZM8.5126 17.9973C8.5366 17.9973 8.5626 17.9983 8.5866 18.0003C14.2816 17.9633 17.6806 13.6123 17.6806 9.40631C17.6806 9.02431 17.8766 8.77731 18.0506 8.55831C18.2086 8.35831 18.4536 8.05031 18.6716 7.60631C17.8786 7.59831 17.1706 7.24631 16.7586 6.76431C16.3276 6.30331 15.7086 6.02131 15.0406 6.00131C14.3966 5.97531 13.7396 6.22331 13.2516 6.68631C12.6016 7.30331 12.3236 8.23431 12.5256 9.11431L12.7866 10.2533L11.6206 10.3353C8.6046 10.5613 6.5146 9.27031 5.0796 7.93431C5.0856 9.95431 5.7566 12.6493 8.8066 14.3873L9.7646 14.9333L9.1276 15.8343C8.4646 16.7733 7.4666 17.3723 6.4506 17.7553C7.1216 17.9153 7.8116 17.9973 8.4996 17.9973H8.5116H8.5126ZM8.5126 20.0003C8.4866 20.0003 8.4586 19.9993 8.4326 19.9973C6.8296 19.9863 5.2216 19.6133 3.7776 18.9143C3.2346 18.6503 2.9276 18.0723 3.0146 17.4723C3.1026 16.8653 3.5686 16.3893 4.1726 16.2913C5.2176 16.1193 6.0846 15.8133 6.7126 15.4043C2.8356 12.5053 2.9376 8.16531 3.1886 6.32731C3.2626 5.78931 3.6456 5.34031 4.1636 5.18331C4.6896 5.02331 5.2346 5.18331 5.5946 5.59231C7.1306 7.33331 8.6656 8.20831 10.4656 8.34131C10.5176 7.17631 11.0136 6.05331 11.8746 5.23531C12.7516 4.40231 13.8986 3.96631 15.1026 4.00231C16.3076 4.03931 17.4256 4.54731 18.2496 5.43231C18.3336 5.52831 18.6476 5.70231 19.0266 5.53231C19.5236 5.30931 20.0886 5.38331 20.5006 5.72731C20.9116 6.06831 21.0866 6.60531 20.9586 7.12831C20.6356 8.45931 19.9976 9.31731 19.6756 9.72831C19.5076 14.8333 15.3596 20.0003 8.5126 20.0003Z",
    fill: fill
  }));
};
IconTwitter$1.defaultProps = /*#__PURE__*/_extends({}, iconDefaultProps);

export { IconAlertCircle, IconAlertCircle$1 as IconAlertCircleOutline, IconAlertTriangle, IconAlertTriangle$1 as IconAlertTriangleOutline, IconArchive, IconArchive$1 as IconArchiveOutline, IconArrowCircleDown, IconArrowCircleDown$1 as IconArrowCircleDownOutline, IconArrowCircleLeft, IconArrowCircleLeft$1 as IconArrowCircleLeftOutline, IconArrowCircleRight, IconArrowCircleRight$1 as IconArrowCircleRightOutline, IconArrowCircleUp, IconArrowCircleUp$1 as IconArrowCircleUpOutline, IconArrowDownLeft as IconArrowDownLeftOutline, IconArrowDown as IconArrowDownOutline, IconArrowDownRight as IconArrowDownRightOutline, IconArrowDownTurnLeft as IconArrowDownTurnLeftOutline, IconArrowDownTurnRight as IconArrowDownTurnRightOutline, IconArrowLeft as IconArrowLeftOutline, IconArrowLeftTurnDown as IconArrowLeftTurnDownOutline, IconArrowLeftTurnUp as IconArrowLeftTurnUpOutline, IconArrowMove as IconArrowMoveOutline, IconArrowRight as IconArrowRightOutline, IconArrowRightTurnDown as IconArrowRightTurnDownOutline, IconArrowRightTurnUp as IconArrowRightTurnUpOutline, IconArrowUpLeft as IconArrowUpLeftOutline, IconArrowUp as IconArrowUpOutline, IconArrowUpRight as IconArrowUpRightOutline, IconArrowUpTurnLeft as IconArrowUpTurnLeftOutline, IconArrowUpTurnRight as IconArrowUpTurnRightOutline, IconAt as IconAtOutline, IconAward, IconAward$1 as IconAwardOutline, IconBackspace, IconBackspace$1 as IconBackspaceOutline, IconBackward, IconBackward$1 as IconBackwardOutline, IconBackwardStep, IconBackwardStep$1 as IconBackwardStepOutline, IconBarChart as IconBarChartOutline, IconBattery, IconBatteryBolt, IconBatteryBolt$1 as IconBatteryBoltOutline, IconBatteryEmpty as IconBatteryEmptyOutline, IconBehance, IconBehance$1 as IconBehanceOutline, IconBell, IconBell$1 as IconBellOutline, IconBellSlash, IconBellSlash$1 as IconBellSlashOutline, IconBluetooth as IconBluetoothOutline, IconBolt, IconBolt$1 as IconBoltOutline, IconBoltSlash, IconBoltSlash$1 as IconBoltSlashOutline, IconBook, IconBookOpen, IconBookOpen$1 as IconBookOpenOutline, IconBook$1 as IconBookOutline, IconBookmark, IconBookmark$1 as IconBookmarkOutline, IconBriefcase, IconBriefcase$1 as IconBriefcaseOutline, IconBroadcast, IconBroadcast$1 as IconBroadcastOutline, IconBulb, IconBulb$1 as IconBulbOutline, IconCalendar, IconCalendar$1 as IconCalendarOutline, IconCamera, IconCamera$1 as IconCameraOutline, IconCarretDown, IconCarretDown$1 as IconCarretDownOutline, IconCarretLeft, IconCarretLeft$1 as IconCarretLeftOutline, IconCarretRight, IconCarretRight$1 as IconCarretRightOutline, IconCarretUp, IconCarretUp$1 as IconCarretUpOutline, IconCast as IconCastOutline, IconCheckCircle2, IconCheckCircle2$1 as IconCheckCircle2Outline, IconCheckCircle as IconCheckCircleOutline, IconCheckDouble as IconCheckDoubleOutline, IconCheck as IconCheckOutline, IconCheckSquare, IconCheckSquare2 as IconCheckSquare2Outline, IconCheckSquare$1 as IconCheckSquareOutline, IconChevronDown as IconChevronDownOutline, IconChevronLeft as IconChevronLeftOutline, IconChevronRight as IconChevronRightOutline, IconChevronUp as IconChevronUpOutline, IconChevronsDown as IconChevronsDownOutline, IconChevronsLeft as IconChevronsLeftOutline, IconChevronsRight as IconChevronsRightOutline, IconChevronsUp as IconChevronsUpOutline, IconCircleDot, IconCircleDot$1 as IconCircleDotOutline, IconCircle as IconCircleOutline, IconCircleSlash as IconCircleSlashOutline, IconCircleXmark, IconCircleXmark$1 as IconCircleXmarkOutline, IconClipboard, IconClipboard$1 as IconClipboardOutline, IconClockThree, IconClockThree$1 as IconClockThreeOutline, IconCloudDownload, IconCloudDownload$1 as IconCloudDownloadOutline, IconCloudUpload, IconCloudUpload$1 as IconCloudUploadOutline, IconCodeDownload as IconCodeDownloadOutline, IconCode as IconCodeOutline, IconCollapse as IconCollapseOutline, IconCompass, IconCompass$1 as IconCompassOutline, IconCopy, IconCopy$1 as IconCopyOutline, IconCreditCard, IconCreditCard2 as IconCreditCard2Outline, IconCreditCard$1 as IconCreditCardOutline, IconCrop as IconCropOutline, IconCube, IconCube$1 as IconCubeOutline, IconDekstop as IconDekstopOutline, IconDownload as IconDownloadOutline, IconDroplet, IconDroplet$1 as IconDropletOutline, IconDropletSlash, IconDropletSlash$1 as IconDropletSlashOutline, IconEdit, IconEdit2, IconEdit2$1 as IconEdit2Outline, IconEdit3 as IconEdit3Outline, IconEdit$1 as IconEditOutline, IconElipsis as IconElipsisOutline, IconElipsisVertical as IconElipsisVerticalOutline, IconEnvelop, IconEnvelop$1 as IconEnvelopOutline, IconExpand as IconExpandOutline, IconExternalLink as IconExternalLinkOutline, IconEye, IconEyeOff as IconEyeOffOutline, IconEye$1 as IconEyeOutline, IconEyeSlash, IconEyeSlash$1 as IconEyeSlashOutline, IconFacebook, IconFacebook$1 as IconFacebookOutline, IconFile, IconFileLines, IconFileLines$1 as IconFileLinesOutline, IconFileMin as IconFileMinOutline, IconFile$1 as IconFileOutline, IconFilePlus, IconFilePlus$1 as IconFilePlusOutline, IconFilter, IconFilter$1 as IconFilterOutline, IconFire, IconFire$1 as IconFireOutline, IconFlag, IconFlip as IconFlipOutline, IconFolder, IconFolderMin, IconFolderMin$1 as IconFolderMinOutline, IconFolder$1 as IconFolderOutline, IconFolderPlus, IconFolderPlus$1 as IconFolderPlusOutline, IconForward, IconForward$1 as IconForwardOutline, IconForwardStep, IconForwardStep$1 as IconForwardStepOutline, IconGift, IconGift$1 as IconGiftOutline, IconGithub, IconGithub$1 as IconGithubOutline, IconGlobe2, IconGlobe2$1 as IconGlobe2Outline, IconGlobe3, IconGlobe as IconGlobeOutline, IconGoogle, IconGoogle$1 as IconGoogleOutline, IconGrid, IconGrid$1 as IconGridOutline, IconGridRound, IconGridRound$1 as IconGridRoundOutline, IconHardDrive, IconHardDrive$1 as IconHardDriveOutline, IconHash as IconHashOutline, IconHeadphone, IconHeadphone$1 as IconHeadphoneOutline, IconHeightScale as IconHeightScaleOutline, IconHome, IconHome$1 as IconHomeOutline, IconImage, IconImage2, IconImage$1 as IconImageOutline, IconInbox, IconInbox$1 as IconInboxOutline, IconInfo, IconInfo$1 as IconInfoOutline, IconLayerGroup, IconLayerGroup$1 as IconLayerGroupOutline, IconLayout, IconLayout$1 as IconLayoutOutline, IconLink2 as IconLink2Outline, IconLink as IconLinkOutline, IconLinkedin, IconLinkedin$1 as IconLinkedinOutline, IconList as IconListOutline, IconLoader as IconLoaderOutline, IconLock, IconLock$1 as IconLockOutline, IconLove, IconLove$1 as IconLoveOutline, IconMagnifyingGlassMin, IconMagnifyingGlassMin$1 as IconMagnifyingGlassMinOutline, IconMagnifyingGlass as IconMagnifyingGlassOutline, IconMagnifyingGlassPlus, IconMagnifyingGlassPlus$1 as IconMagnifyingGlassPlusOutline, IconMaps, IconMaps$1 as IconMapsOutline, IconMenu2 as IconMenu2Outline, IconMenu3 as IconMenu3Outline, IconMenu as IconMenuOutline, IconMerge as IconMergeOutline, IconMessageCircle, IconMessageCircle$1 as IconMessageCircleOutline, IconMessageSquare, IconMessageSquare$1 as IconMessageSquareOutline, IconMic, IconMicOff, IconMicOff$1 as IconMicOffOutline, IconMic$1 as IconMicOutline, IconMinCircle, IconMinCircle$1 as IconMinCircleOutline, IconMin as IconMinOutline, IconMinSquare, IconMinSquare$1 as IconMinSquareOutline, IconMonitor, IconMoon, IconMoon$1 as IconMoonOutline, IconMovie, IconMovie$1 as IconMovieOutline, IconMusic$1 as IconMusic, IconMusic as IconMusicOutline, IconNavigation, IconNavigation$1 as IconNavigationOutline, IconNavigationUp, IconNavigationUp$1 as IconNavigationUpOutline, IconNpm, IconNpm$1 as IconNpmOutline, IconPaintBrush, IconPaintBrush$1 as IconPaintBrushOutline, IconPalette, IconPalette$1 as IconPaletteOutline, IconPantone, IconPantone$1 as IconPantoneOutline, IconPaperPlane as IconPaperPlaneOutline, IconPaperclip as IconPaperclipOutline, IconPaperclipUp as IconPaperclipUpOutline, IconPauseCircle, IconPauseCircle$1 as IconPauseCircleOutline, IconPencil, IconPencil$1 as IconPencilOutline, IconPercent as IconPercentOutline, IconPerson, IconPersonCheck, IconPersonCheck$1 as IconPersonCheckOutline, IconPersonMin, IconPersonMin$1 as IconPersonMinOutline, IconPerson$1 as IconPersonOutline, IconPersonPlus, IconPersonPlus$1 as IconPersonPlusOutline, IconPersonX, IconPersonX$1 as IconPersonXOutline, IconPersons, IconPersons$1 as IconPersonsOutline, IconPhone, IconPhoneCall, IconPhoneCall$1 as IconPhoneCallOutline, IconPhoneMissed, IconPhoneMissed$1 as IconPhoneMissedOutline, IconPhoneOff, IconPhoneOff$1 as IconPhoneOffOutline, IconPhone$1 as IconPhoneOutline, IconPieChart, IconPieChart2, IconPieChart$1 as IconPieChartOutline, IconPinLocation, IconPinLocation$1 as IconPinLocationOutline, IconPlayCircle, IconPlayCircle$1 as IconPlayCircleOutline, IconPlusCircle, IconPlusCircle$1 as IconPlusCircleOutline, IconPlus as IconPlusOutline, IconPlusSquare, IconPlusSquare$1 as IconPlusSquareOutline, IconPowerOff as IconPowerOffOutline, IconPriceTag, IconPriceTag$1 as IconPriceTagOutline, IconPrinter, IconPrinter$1 as IconPrinterOutline, IconPulse as IconPulseOutline, IconQuestionCircle, IconQuestionCircle$1 as IconQuestionCircleOutline, IconQuestion as IconQuestionOutline, IconRecording, IconRecording$1 as IconRecordingOutline, IconRepeat as IconRepeatOutline, IconReply, IconReply$1 as IconReplyOutline, IconRightLeft as IconRightLeftOutline, IconRotate as IconRotateOutline, IconRotateRight as IconRotateRightOutline, IconSave, IconSave$1 as IconSaveOutline, IconScissors as IconScissorsOutline, IconSetting, IconSetting2, IconSetting2$1 as IconSetting2Outline, IconSetting$1 as IconSettingOutline, IconShake as IconShakeOutline, IconShareNode, IconShareNode$1 as IconShareNodeOutline, IconShield, IconShield$1 as IconShieldOutline, IconShieldSlash, IconShieldSlash$1 as IconShieldSlashOutline, IconShoppingBag, IconShoppingBag$1 as IconShoppingBagOutline, IconShoppingCart, IconShoppingCart$1 as IconShoppingCartOutline, IconShuffle2 as IconShuffle2Outline, IconShuffle as IconShuffleOutline, IconSignOut as IconSignOutOutline, IconSignal as IconSignalOutline, IconSignin as IconSigninOutline, IconSliders, IconSliders$1 as IconSlidersOutline, IconSlidersUp, IconSlidersUp$1 as IconSlidersUpOutline, IconSmartphone, IconSmartphone$1 as IconSmartphoneOutline, IconSpeaker, IconSpeaker$1 as IconSpeakerOutline, IconSquareCircle, IconSquareCircle$1 as IconSquareCircleOutline, IconSquare as IconSquareOutline, IconStar, IconStar$1 as IconStarOutline, IconStopwatch, IconStopwatch$1 as IconStopwatchOutline, IconSun, IconSun$1 as IconSunOutline, IconTV, IconTV$1 as IconTVOutline, IconText as IconTextOutline, IconThermometer, IconThermometerMin, IconThermometerMin$1 as IconThermometerMinOutline, IconThermometer$1 as IconThermometerOutline, IconThermometerPlus, IconThermometerPlus$1 as IconThermometerPlusOutline, IconToogleOff, IconToogleOff$1 as IconToogleOffOutline, IconToogleOn, IconToogleOn$1 as IconToogleOnOutline, IconTrash, IconTrash2, IconTrash2$1 as IconTrash2Outline, IconTrash$1 as IconTrashOutline, IconTrendingDown as IconTrendingDownOutline, IconTrendingUp as IconTrendingUpOutline, IconTruck, IconTruck$1 as IconTruckOutline, IconTwitter, IconTwitter$1 as IconTwitterOutline, IconUmbrela, IconUmbrela$1 as IconUmbrelaOutline, IconUnlock, IconUnlock$1 as IconUnlockOutline, IconUpload as IconUploadOutline, IconVideo, IconVideoOff, IconVideoOff$1 as IconVideoOffOutline, IconVideo$1 as IconVideoOutline, IconVolumeHigh, IconVolumeHigh$1 as IconVolumeHighOutline, IconVolumeLow, IconVolumeLow$1 as IconVolumeLowOutline, IconVolumeOff, IconVolumeOff$1 as IconVolumeOffOutline, IconVolumeSlash, IconVolumeSlash$1 as IconVolumeSlashOutline, IconWeightScale, IconWeightScale$1 as IconWeightScaleOutline, IconWifi as IconWifiOutline, IconWifiSlash as IconWifiSlashOutline, IconWindow, IconWindowDock as IconWindowDockOutline, IconWindow$1 as IconWindowOutline, IconXmark as IconXmarkOutline, IconXmarkSquare, IconXmarkSquare$1 as IconXmarkSquareOutline };
//# sourceMappingURL=icons.esm.js.map
