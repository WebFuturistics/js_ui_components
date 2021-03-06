'use strict'; // external imports

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VacancyCard1Function = VacancyCard1Function;
exports.default = exports.VacancyCard1 = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _moment = _interopRequireDefault(require("moment"));

var _ramda = require("ramda");

var _general_constants = require("./../../../theming/constants/general_constants");

var _elements_row = require("./../../layout/alignment/elements/elements_row");

var _slide_visual_effect = require("./../../visual_effects/slide_visual_effect");

var _grid_generator_component = require("./../../grid/grid_generator_component");

var _regular_card_component = require("./../../layout/structure/regular_card_component");

var _inline_text_block = _interopRequireDefault(require("./../../layout/text/inline_text_block"));

var _inline_header = require("./../../layout/text/inline_header");

var _font_icon = require("./../../layout/icons/font_icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// styles definition
var styles = function styles(theme) {
  return {
    componentContainer: {
      height: '100%',
      '& > $cardBodyContainer': {
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        '& > $overlayContainer': {
          width: '100%',
          height: '100%',
          '& $buttonsContainer': {
            height: '100%',
            alignItems: 'center'
          }
        },
        '& > $contentGridContainer': {
          '& $companyLogoContainer': {
            alignSelf: 'start',
            justifySelf: 'center',
            width: '100%'
          },
          '& > $companyNameContainer': {
            alignSelf: 'center',
            paddingLeft: '10px',
            fontFamily: theme.fontStacks.boldFontFamilyStack,
            fontSize: '16px',
            color: theme.baseStyles.mainPrimaryColor
          },
          '& > $publishDateContainer': {
            alignSelf: 'start',
            textAlign: 'right',
            paddingLeft: '8px',
            fontSize: '10px',
            color: theme.baseStyles.utilityBGColor
          },
          '& > $titleContainer': {
            paddingTop: '8px',
            fontFamily: theme.fontStacks.boldFontFamilyStack,
            fontSize: '18px',
            color: theme.baseStyles.mainPrimaryColor
          },
          '& > $locationContainer': {
            textAlign: 'left',
            fontSize: '14px',
            color: theme.baseStyles.utilityBGColor
          },
          '& > $salaryContainer': {
            fontFamily: theme.fontStacks.boldFontFamilyStack,
            fontSize: '15px',
            textAlign: 'right',
            color: theme.baseStyles.accentColorPrimary
          }
        }
      }
    },
    cardBodyContainer: {},
    overlayContainer: {},
    buttonsContainer: {},
    contentGridContainer: {},
    companyLogoContainer: {},
    companyNameContainer: {},
    publishDateContainer: {},
    titleContainer: {},
    salaryContainer: {},
    locationContainer: {}
  };
};
/**
 * Vacancy card (variant 1).
 * Pre-made card component which represents vacancy.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation


function renderElementsGrid(props) {
  var logoSrc = props.logoSrc,
      date = props.date,
      company = props.company,
      title = props.title,
      location = props.location,
      remote = props.remote,
      salaryMin = props.salaryMin,
      salaryMax = props.salaryMax,
      classes = props.classes;
  var parsedDate = (0, _moment.default)(date);
  var formattedDate = parsedDate.format('LL');
  var currency = props.currency;
  currency = (0, _ramda.defaultTo)('')(currency);
  var salary = '';

  if ((0, _ramda.isNil)(salaryMin) && (0, _ramda.isNil)(salaryMax)) {
    salary = 'Negotiable';
  } else {
    salary = "".concat(currency).concat(salaryMin ? salaryMin : '').concat(salaryMax ? "".concat(salaryMin ? '-' : '').concat(salaryMax) : '');
  }

  var noIconClassName = props.noIconClassName;
  noIconClassName = (0, _ramda.defaultTo)('fas fa-search-dollar')(noIconClassName);
  var companyLogoComponent = logoSrc ? React.createElement("img", {
    src: logoSrc
  }) : React.createElement(_font_icon.FontIcon, {
    size: _general_constants.MEDIUM_SIZE,
    iconClassName: noIconClassName
  });
  var preparedLocation = "".concat(location ? location : '').concat(location && remote ? ',' : '', " ").concat(remote ? 'Remote' : '');
  var bodyItems = [[{
    elm: companyLogoComponent,
    props: {
      className: classes.companyLogoContainer
    }
  }, {
    elm: _inline_text_block.default,
    props: {
      className: classes.companyNameContainer
    },
    children: company
  }, {
    elm: _inline_text_block.default,
    props: {
      className: classes.publishDateContainer
    },
    children: formattedDate
  }], [{
    elm: _inline_header.InlineHeader,
    hspan: 3,
    props: {
      level: 6,
      className: classes.titleContainer
    },
    children: title
  }], [{
    elm: _inline_text_block.default,
    hspan: 2,
    props: {
      className: classes.locationContainer
    },
    children: preparedLocation
  }, {
    elm: _inline_text_block.default,
    props: {
      className: classes.salaryContainer
    },
    children: salary
  }]];
  return React.createElement(_grid_generator_component.GridGeneratorComponent, {
    className: classes.contentGridContainer,
    style: {
      gridTemplateColumns: '35px 1fr max-content',
      gridTemplateRows: 'minMax(35px, max-content) 1fr max-content',
      gridColumnGap: '0px',
      gridRowGap: '0px'
    },
    items: bodyItems
  });
}

function renderButtonsSlider(props, shouldShowOverlay) {
  var children = props.children,
      classes = props.classes;
  return React.createElement(_slide_visual_effect.SlideVisualEffect, {
    direction: "TopToBottom",
    show: shouldShowOverlay,
    className: classes.overlayContainer
  }, React.createElement(_elements_row.ElementsRow, {
    alignment: "center",
    className: classes.buttonsContainer
  }, children));
}

function VacancyCard1Function(props) {
  var classes = props.classes;
  var showButtonsOverlay = props.showButtonsOverlay,
      onClick = props.onClick;
  showButtonsOverlay = (0, _ramda.defaultTo)(false)(showButtonsOverlay);
  onClick = (0, _ramda.defaultTo)(function () {})(onClick);

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      shouldShowOverlay = _React$useState2[0],
      setShouldShowOverlay = _React$useState2[1];

  return React.createElement(_regular_card_component.RegularCardComponent, {
    onClickBody: onClick,
    popOnHover: true,
    maxPopLevel: 3,
    containerClassName: classes.componentContainer,
    bodyClassName: classes.cardBodyContainer,
    onMouseOverContainer: function onMouseOverContainer() {
      return (0, _ramda.unless)((0, _ramda.equals)(true), function () {
        return showButtonsOverlay && setShouldShowOverlay(true);
      })(shouldShowOverlay);
    },
    onMouseLeaveContainer: function onMouseLeaveContainer() {
      return (0, _ramda.unless)((0, _ramda.equals)(false), function () {
        return showButtonsOverlay && setShouldShowOverlay(false);
      })(shouldShowOverlay);
    }
  }, showButtonsOverlay ? renderButtonsSlider(props, shouldShowOverlay) : null, renderElementsGrid(props));
}

VacancyCard1Function.displayName = 'VacancyCard1';
var VacancyCard1 = (0, _reactJss.default)(styles)(VacancyCard1Function); // exports

exports.VacancyCard1 = VacancyCard1;
var _default = VacancyCard1;
exports.default = _default;