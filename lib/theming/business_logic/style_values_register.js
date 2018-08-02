'use strict';

// external imports

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ramda = require('ramda');

// constants


// local imports
var MINIMUM_Z_INDEX = 100;

// exports
var styleValuesRegister = Object.seal({
    lastUsedZIndexes: [MINIMUM_Z_INDEX - 1],

    releaseZIndex: function releaseZIndex(oldZIndex) {
        if ((0, _ramda.isNil)(oldZIndex)) {
            return;
        }

        this.lastUsedZIndexes = (0, _ramda.reject)((0, _ramda.equals)(oldZIndex), this.lastUsedZIndexes);
    },


    get zIndex() {
        var newZIndex = (0, _ramda.inc)((0, _ramda.reduce)(_ramda.max, MINIMUM_Z_INDEX - 1, this.lastUsedZIndexes));
        this.lastUsedZIndexes = (0, _ramda.append)(newZIndex, this.lastUsedZIndexes);

        return newZIndex;
    }
});

exports.default = styleValuesRegister;