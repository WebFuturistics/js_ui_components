'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LinearBufferPreloader = exports.LINEAR_BUFFER_PRELOADER_GRADIENT_BAR_KEYFRAMES_STYLE_NAME = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

var _linear_indeterminate_preloader = require('./linear_indeterminate_preloader');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// local imports


// constants definition


// type definitions
var LINEAR_BUFFER_PRELOADER_GRADIENT_BAR_KEYFRAMES_STYLE_NAME = exports.LINEAR_BUFFER_PRELOADER_GRADIENT_BAR_KEYFRAMES_STYLE_NAME = 'linear_buffer_preloader_gradient_bar_keyframes_style_name';

// styles definition
var barStylesFunc = function barStylesFunc(theme) {
    return {
        position: 'absolute',

        height: '100%',
        width: '100%'
    };
};

var progressBarStylesFunc = function progressBarStylesFunc(theme) {
    return {
        transitionProperty: 'transform',
        transitionDuration: '0.4s',
        transitionTimingFunction: 'linear',
        transitionDelay: '0s',

        transformOrigin: 'left'
    };
};

var styles = function styles(theme) {
    return {
        componentContainer: {
            boxSizing: 'border-box',
            position: 'relative',
            overflow: 'hidden',

            height: '4px',

            backgroundColor: theme.baseStyles.transparentBGColor,

            '& > $mainBar': {
                extend: [barStylesFunc(theme), progressBarStylesFunc(theme)],

                backgroundColor: theme.baseStyles.mainPrimaryColor,
                zIndex: 3
            },

            '& > $subBar': {
                extend: [barStylesFunc(theme), progressBarStylesFunc(theme)],

                backgroundColor: theme.baseStyles.mainSecondaryColor,
                zIndex: 2
            },

            '& > $gradientBar': {
                extend: barStylesFunc(theme),

                animationName: LINEAR_BUFFER_PRELOADER_GRADIENT_BAR_KEYFRAMES_STYLE_NAME,
                animationDuration: '3s',
                animationTimingFunction: 'linear',
                animationDelay: '0s',
                animationIterationCount: 'infinite',
                animationDirection: 'normal',
                animationFillMode: 'none',
                animationPlayState: 'running',

                backgroundSize: '10px 10px',
                backgroundPosition: '0px -23px',
                backgroundImage: 'radial-gradient(' + theme.baseStyles.mainPrimaryColor + ' 0%, ' + theme.baseStyles.mainSecondaryColor + ' 16%,  transparent 42%)',

                zIndex: 1
            }
        },

        mainBar: {},
        subBar: {},
        gradientBar: {}
    };
};

// business logic implementation
var normalizeValue = (0, _ramda.cond)([[(0, _ramda.gt)(_ramda.__, 100), (0, _ramda.always)(100)], [(0, _ramda.lt)(_ramda.__, 0), (0, _ramda.always)(0)], [_ramda.T, _ramda.identity]]);

/**
 * Linear buffer preloader.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function LinearBufferPreloaderFunction(props) {
    var value = props.value,
        valueBuffer = props.valueBuffer;


    value = normalizeValue(value);
    valueBuffer = normalizeValue(valueBuffer);

    var transformValue = value / 100;
    var transformValueBuffer = valueBuffer / 100;

    var mainBarStyle = { transform: 'scaleX(' + transformValue + ')' };
    var subBarStyle = { transform: 'scaleX(' + transformValueBuffer + ')' };

    var classes = props.classes,
        className = props.className,
        style = props.style,
        theme = props.theme;
    var mainBar = classes.mainBar,
        subBar = classes.subBar,
        gradientBar = classes.gradientBar;


    var componentClassNames = (0, _classnames2.default)(classes.componentContainer, className);

    theme.styleSheetRegister.addGlobalStyles(_defineProperty({}, '@keyframes ' + LINEAR_BUFFER_PRELOADER_GRADIENT_BAR_KEYFRAMES_STYLE_NAME, {
        '0%': {
            opacity: 1,
            backgroundPosition: '0px -23px'
        },

        '50%': {
            opacity: 0,
            backgroundPosition: '0px -23px'
        },

        '100%': {
            opacity: 1,
            backgroundPosition: '-200px -23px'
        }
    }), '@keyframes ' + LINEAR_BUFFER_PRELOADER_GRADIENT_BAR_KEYFRAMES_STYLE_NAME);

    return React.createElement(
        'div',
        { className: componentClassNames, style: style },
        React.createElement('div', { className: mainBar, style: mainBarStyle }),
        React.createElement('div', { className: subBar, style: subBarStyle }),
        React.createElement('div', { className: gradientBar })
    );
}

LinearBufferPreloaderFunction.displayName = 'LinearBufferPreloader';

// exports
var LinearBufferPreloader = exports.LinearBufferPreloader = (0, _reactJss2.default)(styles)(LinearBufferPreloaderFunction);