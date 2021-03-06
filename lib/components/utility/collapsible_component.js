'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollapsibleComponent = CollapsibleComponent;
exports.default = exports.CollapsibleClass = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ramda = require("ramda");

var _utility_helpers = require("@webfuturistics/design_components/lib/helpers/general/utility_helpers");

var _main_theme_provider = require("./../../theming/providers/main_theme_provider");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// styles definition
var styles = function styles(theme) {
  return {
    componentOuterContainer: {
      boxSizing: 'border-box',
      overflow: 'hidden',
      transitionProperty: 'height',
      transitionDuration: '0.2s',
      transitionTimingFunction: 'ease-out',
      '& > $componentInnerContainer': {}
    },
    componentInnerContainer: {}
  };
};
/**
 * Simple utility component used to show/hide content in accordion like way.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */
// component implementation
// $FlowFixMe decorators


var CollapsibleClass = (_dec = (0, _reactJss.default)(styles), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CollapsibleClass, _React$Component);

  _createClass(CollapsibleClass, [{
    key: "_onAccordionTransitionEnd",
    value: function _onAccordionTransitionEnd() {
      var newState = {
        animationStage: this.state.animationStage,
        outerContainerStyles: {}
      };

      if ((0, _ramda.pathSatisfies)(function (stage) {
        return stage === 'open';
      }, ['state', 'animationStage'], this)) {
        newState.outerContainerStyles = this._createOuterContainerStylesObj(true, 'auto', 'none');
      } else {
        newState.outerContainerStyles = this._createOuterContainerStylesObj(false);
      }

      this.setState(newState);
    }
  }, {
    key: "_onSetStateAfterTimeout",
    value: function _onSetStateAfterTimeout() {
      this._animationTimeoutId = null;
    }
  }, {
    key: "_createOuterContainerStylesObj",
    value: function _createOuterContainerStylesObj(shown, newHeight) {
      var newTransitionProperty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'height';
      var state = this.state || {};
      var outerContainerStyles = (0, _utility_helpers.isNotNil)(state.outerContainerStyles) ? state.outerContainerStyles : {};
      var display = (0, _ramda.defaultTo)(outerContainerStyles.display)((0, _utility_helpers.isNotNil)(shown) ? shown ? 'block' : 'none' : undefined);
      var visibility = (0, _ramda.defaultTo)(outerContainerStyles.visibility)((0, _utility_helpers.isNotNil)(shown) ? shown ? 'visible' : 'hidden' : undefined);
      var height = (0, _ramda.defaultTo)(outerContainerStyles.height)(newHeight);
      var transitionProperty = (0, _ramda.defaultTo)(outerContainerStyles.transitionProperty)(newTransitionProperty);
      var styleObject = {
        height: height,
        transitionProperty: transitionProperty
      };
      (0, _ramda.cond)([[(0, _ramda.equals)(false), function () {
        return styleObject.display = display;
      }], [(0, _ramda.equals)(true), function () {
        return styleObject.visibility = visibility;
      }]])(this.props.useVisibility);
      return styleObject;
    }
  }, {
    key: "_preOpenOuterContainer",
    value: function _preOpenOuterContainer() {
      var setStateCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_) {
        return _;
      };
      this.setState({
        animationStage: 'preOpen',
        outerContainerStyles: this._createOuterContainerStylesObj(true, '0px')
      }, setStateCallback);
    }
  }, {
    key: "_preCloseOuterContainer",
    value: function _preCloseOuterContainer() {
      var setStateCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_) {
        return _;
      };
      this.setState({
        animationStage: 'preClose',
        outerContainerStyles: this._createOuterContainerStylesObj(true, this._getInnerContainerHeightString())
      }, setStateCallback);
    }
  }, {
    key: "_openOuterContainer",
    value: function _openOuterContainer(setStateCallback) {
      this.setState({
        animationStage: 'open',
        outerContainerStyles: this._createOuterContainerStylesObj(true, this._getInnerContainerHeightString())
      }, setStateCallback);
    }
  }, {
    key: "_closeOuterContainer",
    value: function _closeOuterContainer(setStateCallback) {
      this.setState({
        animationStage: 'close',
        outerContainerStyles: this._createOuterContainerStylesObj(true, '0px')
      }, setStateCallback);
    }
  }, {
    key: "_getInnerContainerHeightString",
    value: function _getInnerContainerHeightString() {
      var _innerContainer = this._innerContainer;
      return (0, _ramda.isNil)(_innerContainer) ? null : "".concat(_innerContainer.offsetHeight, "px");
    }
  }, {
    key: "_getAnimationStage",
    value: function _getAnimationStage() {
      return this.state.animationStage;
    }
  }, {
    key: "_getComponentInnerContainerClassNames",
    value: function _getComponentInnerContainerClassNames() {
      var componentInnerContainer = this.props.classes.componentInnerContainer;
      var innerContainerClassNames = this.props.innerContainerClassNames ? this.props.innerContainerClassNames : '';
      return (0, _classnames.default)(componentInnerContainer, innerContainerClassNames);
    }
  }, {
    key: "_getComponentOuterContainerClassNames",
    value: function _getComponentOuterContainerClassNames() {
      var componentOuterContainer = this.props.classes.componentOuterContainer;
      var outerContainerClassNames = this.props.outerContainerClassNames ? this.props.outerContainerClassNames : '';
      return (0, _classnames.default)(componentOuterContainer, outerContainerClassNames);
    }
  }, {
    key: "_getOuterContainerStyle",
    value: function _getOuterContainerStyle() {
      var userStyle = (0, _ramda.defaultTo)({})(this.props.outerContainerStyle);
      return Object.assign({}, this.state.outerContainerStyles, userStyle);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      (0, _ramda.cond)([[(0, _ramda.equals)(this.props.open), (0, _ramda.always)(true)], [(0, _ramda.equals)(true), function () {
        return _this2._preOpenOuterContainer();
      }], [(0, _ramda.complement)((0, _ramda.equals)(true)), function () {
        return _this2._preCloseOuterContainer();
      }]])(nextProps.open);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this3 = this;

      var animationStage = this._getAnimationStage();

      var _onSetStateAfterTimeout = this._onSetStateAfterTimeout;
      this._animationTimeoutId = (0, _ramda.cond)([[(0, _ramda.equals)('preOpen'), function () {
        return setTimeout(function () {
          return _this3._openOuterContainer(_onSetStateAfterTimeout);
        }, 100);
      }], [(0, _ramda.equals)('preClose'), function () {
        return setTimeout(function () {
          return _this3._closeOuterContainer(_onSetStateAfterTimeout);
        }, 100);
      }]])(animationStage);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if ((0, _utility_helpers.isNotNil)(this._animationTimeoutId)) {
        clearTimeout(this._animationTimeoutId);
      }

      this._outerContainer ? this._outerContainer.removeEventListener('transitionend', this._onAccordionTransitionEnd, false) : null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._outerContainer) {
        this._outerContainer.addEventListener('transitionend', this._onAccordionTransitionEnd, false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var isContainerNotVisible = this.state.outerContainerStyles.display !== 'block' && this.state.outerContainerStyles.visibility !== 'visible';
      var removeContentOnClose = (0, _ramda.defaultTo)(CollapsibleClass.defaultProps.removeContentOnClose)(this.props.removeContentOnClose);
      var isHideChildren = isContainerNotVisible && removeContentOnClose;
      return React.createElement("div", {
        ref: function ref(outerContainer) {
          return _this4._outerContainer = outerContainer;
        },
        className: this._getComponentOuterContainerClassNames(),
        style: this._getOuterContainerStyle()
      }, React.createElement("div", {
        ref: function ref(innerContainer) {
          return _this4._innerContainer = innerContainer;
        },
        className: this._getComponentInnerContainerClassNames()
      }, isHideChildren ? null : this.props.children));
    }
  }]);

  function CollapsibleClass(props) {
    var _this;

    _classCallCheck(this, CollapsibleClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CollapsibleClass).call(this, props));
    _this._outerContainer = void 0;
    _this._innerContainer = void 0;
    _this._animationTimeoutId = void 0;

    var self = _assertThisInitialized(_this);

    var open = _this.props.open ? _this.props.open : false;
    var isOpen = (0, _ramda.defaultTo)(false);
    var initialState;
    _this._animationTimeoutId = null;

    if (isOpen(open)) {
      initialState = {
        animationStage: 'open',
        outerContainerStyles: _this._createOuterContainerStylesObj(true, 'auto', 'height')
      };
    } else {
      initialState = {
        animationStage: 'close',
        outerContainerStyles: _this._createOuterContainerStylesObj(false, '0px', 'none')
      };
    }

    _this.state = initialState;
    self._onAccordionTransitionEnd = _this._onAccordionTransitionEnd.bind(_assertThisInitialized(_this));
    self._onSetStateAfterTimeout = _this._onSetStateAfterTimeout.bind(_assertThisInitialized(_this));
    return _this;
  }

  return CollapsibleClass;
}(React.Component), _class2.displayName = 'CollapsibleClass', _class2.defaultProps = {
  outerContainerClassNames: '',
  innerContainerClassNames: '',
  open: false,
  useVisibility: false,
  removeContentOnClose: true
}, _temp)) || _class);
exports.CollapsibleClass = CollapsibleClass;

function CollapsibleComponent(props) {
  return React.createElement(_main_theme_provider.MainThemeContext.Consumer, null, function (windowDimensions) {
    return React.createElement(CollapsibleClass, _extends({}, props, windowDimensions));
  });
}

CollapsibleComponent.displayName = 'CollapsibleComponent'; // exports

var _default = CollapsibleComponent;
exports.default = _default;