'use strict'; // external imports
// local imports

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputStylesFunc = void 0;
// implementation
var checkboxControlLabelWidth = 20; // px

var checkboxControlLabelHeight = 20; // px

var checkboxControlLabelHorizontalSpacing = 4; // px

var checkMarkWidth = checkboxControlLabelWidth - 2 * checkboxControlLabelHorizontalSpacing; // px

var checkMarkHeight = checkMarkWidth / 2; // px

var checkboxControlLabelVerticalSpacing = checkboxControlLabelHeight / 2 - checkMarkWidth / 4 - checkboxControlLabelHeight / 10;
var checkMarkWidthPercentage = checkMarkWidth * 100 / checkboxControlLabelWidth; // %

var checkMarkHeightPercentage = checkMarkHeight * 100 / checkboxControlLabelHeight; // %

var checkMarkTopOffsetPercentage = checkboxControlLabelVerticalSpacing * 100 / checkboxControlLabelHeight; // %

var checkMarkLeftOffsetPercentage = checkboxControlLabelHorizontalSpacing * 100 / checkboxControlLabelWidth; // %
// exports

var inputStylesFunc = function inputStylesFunc(_ref) {
  var baseStyles = _ref.baseStyles;
  return Object.freeze({
    checkboxControlLabelWidth: checkboxControlLabelWidth,
    checkboxControlLabelHeight: checkboxControlLabelHeight,
    checkboxControlLabelHorizontalSpacing: checkboxControlLabelHorizontalSpacing,
    checkMarkWidth: checkMarkWidth,
    checkMarkHeight: checkMarkHeight,
    checkboxControlLabelVerticalSpacing: checkboxControlLabelVerticalSpacing,
    checkMarkWidthPercentage: checkMarkWidthPercentage,
    checkMarkHeightPercentage: checkMarkHeightPercentage,
    checkMarkTopOffsetPercentage: checkMarkTopOffsetPercentage,
    checkMarkLeftOffsetPercentage: checkMarkLeftOffsetPercentage,
    checkMarkLineWidth: 2,
    //px
    fontStack: baseStyles.regularFontStack,
    fontSize: baseStyles.secondaryFontSize,
    // px
    labelActiveFontSize: baseStyles.tertiaryFontSize,
    // px
    labelInactiveFontSize: baseStyles.secondaryFontSize,
    // px
    errorFontSize: baseStyles.tertiaryFontSize,
    // px
    iconFontSize: baseStyles.iconPrimaryFontSize,
    // px
    lineHeight: baseStyles.secondaryFontSize + 4,
    // px
    bgColor: baseStyles.transparentBGColor,
    selectedBGColor: baseStyles.disabledColor,
    attentionColor: baseStyles.accentColorPrimary,
    hoverColor: baseStyles.accentColorPrimary,
    activeColor: baseStyles.mainPrimaryColor,
    inactiveColor: baseStyles.mainSecondaryColor,
    labelColor: baseStyles.mainTertiaryColor,
    readOnlyColor: baseStyles.mainTertiaryColor,
    disabledColor: baseStyles.disabledColor,
    alternateInputColor: baseStyles.noneTransparentBGColor,
    switchSliderInactiveBodyBGColor: baseStyles.utilityBGColor,
    switchSliderActiveBodyBGColor: baseStyles.mainTertiaryColor,
    switchSliderHandleInactive: baseStyles.noneTransparentBGColor,
    switchSliderHandleActive: baseStyles.mainPrimaryColor,
    switchLabelOffset: 5 // px

  });
};

exports.inputStylesFunc = inputStylesFunc;