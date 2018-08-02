'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// styles definition


// local imports

// type definitions
var styles = function styles(theme) {
    var _componentContainer;

    return {
        componentContainer: (_componentContainer = {
            boxSizing: 'border-box',
            display: 'flex',

            flexBasis: 'auto',
            flexGrow: 0,
            flexShrink: 1,

            flexDirection: 'row',
            flexWrap: 'nowrap',

            justifyContent: 'flex-start',
            alignItems: 'stretch',
            alignContent: 'flex-start',

            '&.left': {
                justifyContent: 'flex-start'
            },

            '&.left > div': {
                marginRight: theme.layoutStyles.horizontalSpacing + 'px'
            },

            '&.left > button': {
                marginRight: theme.layoutStyles.horizontalSpacing + 'px'
            },

            '&.left > div:last-child': {
                marginRight: '0px'
            }

        }, _defineProperty(_componentContainer, '&.left > div:last-child', {
            marginRight: '0px'
        }), _defineProperty(_componentContainer, '&.right', {
            justifyContent: 'flex-end'
        }), _defineProperty(_componentContainer, '&.right > div', {
            marginLeft: theme.layoutStyles.horizontalSpacing + 'px'
        }), _defineProperty(_componentContainer, '&.right > button', {
            marginLeft: theme.layoutStyles.horizontalSpacing + 'px'
        }), _defineProperty(_componentContainer, '&.right > div:first-child', {
            marginLeft: '0px'
        }), _defineProperty(_componentContainer, '&.right > button:first-child', {
            marginLeft: '0px'
        }), _defineProperty(_componentContainer, '&.center', {
            justifyContent: 'center'
        }), _defineProperty(_componentContainer, '&.center > div', {
            marginRight: theme.layoutStyles.horizontalSpacing + 'px'
        }), _defineProperty(_componentContainer, '&.center > button', {
            marginRight: theme.layoutStyles.horizontalSpacing + 'px'
        }), _defineProperty(_componentContainer, '&.center > div:last-child', {
            marginRight: '0px'
        }), _defineProperty(_componentContainer, '&.center > button:last-child', {
            marginRight: '0px'
        }), _componentContainer)
    };
};

/**
 * Elements row component.
 * Used to align rows of elements (for example: align buttons at the bottom of the dialog box or at tools panel).
 * Best used with [RegularButtonComponent](#regularbuttoncomponent)
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
function ElementsRow(props) {
    var alignment = props.alignment,
        wrap = props.wrap,
        classes = props.classes,
        style = props.style;


    alignment = (0, _ramda.defaultTo)('left')(alignment);
    wrap = (0, _ramda.defaultTo)(false)(wrap);

    var containerClasses = (0, _classnames2.default)(classes.componentContainer, alignment);

    var flexWrap = wrap ? 'wrap' : 'nowrap';

    return React.createElement(
        'div',
        { className: containerClasses, style: _extends({ flexWrap: flexWrap }, style) },
        props.children
    );
}

// exports
exports.default = (0, _reactJss2.default)(styles)(ElementsRow);