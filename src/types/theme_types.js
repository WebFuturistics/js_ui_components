'use strict';

// @flow

// external imports

// local imports
import type {
    ColorUtilitiesTypes,
    StyleValuesRegisterType,
    StyleSheetRegisterType,

    BaseThemePartialsType,
    AdditionalThemePartialsType,
    FontFamilyUtilitiesType,
} from './theming';

// exports
export type CSSStylesType = {
    [string]: mixed
};

export type ThemeType = BaseThemePartialsType & AdditionalThemePartialsType & {
    colorUtilities: ColorUtilitiesTypes,
    styleValuesRegister: StyleValuesRegisterType,
    styleSheetRegister: StyleSheetRegisterType,
    fontFamilyUtilities: FontFamilyUtilitiesType,
}
