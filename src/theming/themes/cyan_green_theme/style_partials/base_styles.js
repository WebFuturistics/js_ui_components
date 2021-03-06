'use strict';

// @flow

// external imports
import {mergeDeepRight} from 'ramda';

// local imports
import type {ColorPaletteType, FontStacksType, BaseStylesType, BaseStylesFuncType} from './../../../../types/theming/';
import {baseStylesFunc as canonicalBaseStylesFunc} from './../../base_theme';

// exports
export const baseStylesFunc: BaseStylesFuncType = (colorPalette: ColorPaletteType, fontStacks: FontStacksType): BaseStylesType => {
    const newBaseStyles: BaseStylesType = mergeDeepRight(canonicalBaseStylesFunc(colorPalette, fontStacks), {
        // accent colors
        accentColorPrimary: colorPalette.materialGreen200,

        // main colors
        mainPrimaryColor: colorPalette.materialCyan900,
        mainSecondaryColor: colorPalette.materialCyan600,
        mainTertiaryColor: colorPalette.materialCyan400,
        mainQuaternaryColor: colorPalette.materialCyan300,

        primaryBGColor: colorPalette.materialCyan600,
    });

    return Object.freeze(newBaseStyles);
};
