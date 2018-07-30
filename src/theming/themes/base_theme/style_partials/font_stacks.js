'use strict';

// @flow

//external imports

// local imports
import type {FontStacksType, FontStacksFuncType} from './../../../../types/theming/font_stack_types';

// exports
export const fontStacksFunc: FontStacksFuncType = (): FontStacksType => {
    return Object.freeze({
        regularFontFamilyStack: '"Roboto-Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
        boldFontFamilyStack: '"Roboto-Bold", "Helvetica Neue", Helvetica, Arial, sans-serif',
    });
};
