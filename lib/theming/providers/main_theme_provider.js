'use strict'; // external imports

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainThemeProvider = exports.MainThemeContext = void 0;

var React = _interopRequireWildcard(require("react"));

var _ramda = require("ramda");

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _font_size_utilities = require("./../business_logic/font_size_utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// provider implementation
var MainThemeContext = React.createContext();
exports.MainThemeContext = MainThemeContext;

var MainThemeProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainThemeProvider, _React$Component);

  // region static props
  // endregion
  // region private props
  // endregion
  // region constructor
  function MainThemeProvider(props) {
    var _this;

    _classCallCheck(this, MainThemeProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainThemeProvider).call(this, props));
    _this._onWindowResizeBound = null;
    _this.state = {
      windowDimensions: {
        outerHeight: null,
        outerWidth: null,
        innerWidth: null,
        innerHeight: null
      },
      documentDimensions: {}
    };
    _this._onWindowResizeBound = (0, _lodash.default)((0, _ramda.bind)(_this._onWindowResize, _assertThisInitialized(_this)), 150);
    return _this;
  } // endregion
  // region business logic


  _createClass(MainThemeProvider, [{
    key: "_saveDocumentDimensions",
    value: function _saveDocumentDimensions() {
      _font_size_utilities.fontSizeUtilities.parseFontSizePX(getComputedStyle(document.documentElement).fontSize);

      this.setState({
        documentDimensions: {
          fontSize: _font_size_utilities.fontSizeUtilities.parseFontSizePX(getComputedStyle(document.documentElement).fontSize)
        }
      });
    }
  }, {
    key: "_saveWindowDimensions",
    value: function _saveWindowDimensions() {
      var _window = window,
          outerHeight = _window.outerHeight,
          outerWidth = _window.outerWidth,
          innerWidth = _window.innerWidth,
          innerHeight = _window.innerHeight;
      this.setState({
        windowDimensions: {
          outerHeight: outerHeight,
          outerWidth: outerWidth,
          innerWidth: innerWidth,
          innerHeight: innerHeight
        }
      });
    } // endregion
    // region lifecycle methods

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this._onWindowResizeBound);
      window.addEventListener('load', this._onWindowResizeBound);

      this._saveWindowDimensions();

      this._saveDocumentDimensions();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._onWindowResizeBound);
      window.removeEventListener('load', this._onWindowResizeBound);
    } // endregion
    // region style accessors
    // endregion
    // region label accessors
    // endregion
    // region state accessors
    // endregion
    // region prop accessors
    // endregion
    // region handlers

  }, {
    key: "_onWindowResize",
    value: function _onWindowResize() {
      this._saveWindowDimensions();
    } // endregion
    // region render methods

  }, {
    key: "render",
    value: function render() {
      return React.createElement(MainThemeContext.Provider, {
        value: this.state
      }, this.props.children);
    } // endregion

  }]);

  return MainThemeProvider;
}(React.Component); // exports


exports.MainThemeProvider = MainThemeProvider;