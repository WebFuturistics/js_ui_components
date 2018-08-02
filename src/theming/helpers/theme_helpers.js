'use strict';

// @flow

// external imports
import {always, mergeAll, mergeDeepRight} from 'ramda';

// local imports
import type {
    FontFacesListType,
    FontStacksType,
    ColorPaletteType,
    MaterialDepthLevelsFuncType,
    BaseStylesFuncType,

    FontFacesFuncType,
    FontStacksFuncType,
    ColorPaletteFuncType,
    MaterialDepthLevelsType,
    BaseStylesType,

    LayoutStylesType,
    InputStylesType,
    ButtonStyleType,
    TableStyleType,
    WindowStylesType,

    BaseThemePartialsType,
    AdditionalThemePartialsType,
} from './../../types/theming/';
import type {ThemeType} from './../../types/theme_types';

import {baseTheme} from '../themes/base_theme/';
import FontFaces from './../common_styles/font_faces';

import {
    fontFacesFunc,
    fontStacksFunc,
    colorPaletteFunc,
    materialDepthLevelsFunc,
    baseStylesFunc,

    windowStylesFunc,
    inputStylesFunc,
    buttonStylesFunc,
    tableStylesFunc,
    layoutStylesFunc
} from './../themes/base_theme';

export const extendTheme = (
    newFontFacesFunc: FontFacesFuncType = fontFacesFunc,
    newFontStacksFunc: FontStacksFuncType = fontStacksFunc,
    newColorPaletteFunc: ColorPaletteFuncType = colorPaletteFunc,
    newMaterialDepthLevelsFunc: MaterialDepthLevelsFuncType = materialDepthLevelsFunc,
    newBaseStylesFunc: BaseStylesFuncType = baseStylesFunc
): ThemeType => {
    const fontFaces: FontFacesListType = newFontFacesFunc(FontFaces);
    const fontStacks: FontStacksType = newFontStacksFunc();
    const colorPalette: ColorPaletteType = newColorPaletteFunc();
    const materialDepthLevels: MaterialDepthLevelsType = newMaterialDepthLevelsFunc();
    const baseStyles: BaseStylesType = newBaseStylesFunc(colorPalette);

    const newBaseThemePartials: BaseThemePartialsType = Object.freeze({
        '@font-face': fontFaces,
        fontStacks,

        colorPalette,
        materialDepthLevels,

        baseStyles,
    });

    const layoutStyles: LayoutStylesType = layoutStylesFunc(newBaseThemePartials);
    const inputStyles: InputStylesType = inputStylesFunc(newBaseThemePartials);
    const buttonStyles: ButtonStyleType = buttonStylesFunc(newBaseThemePartials);
    const tableStyles: TableStyleType = tableStylesFunc(newBaseThemePartials);
    const windowStyles: WindowStylesType = windowStylesFunc(newBaseThemePartials);

    const newAdditionalThemePartials: AdditionalThemePartialsType = Object.freeze({
        layoutStyles,
        inputStyles,
        buttonStyles,
        tableStyles,
        windowStyles,
    });

    const newTheme: ThemeType = mergeAll([
        baseTheme,
        newBaseThemePartials,
        newAdditionalThemePartials
    ]);

    return Object.freeze(newTheme);
};