'use strict';

// @flow

// external imports
import React, {useState, useEffect, useContext} from 'react';
import {useTheme} from 'react-jss';

import {isNil, addIndex, map, reduce} from 'ramda';

// local imports
import type {ThemeType} from './../../types/theme_types';
import type {StateTypes as ThemContextType} from './../../theming/providers';
import type {
    SectionRowPositionFullDataType,
    SectionsRowPositionDataType,
} from './../../types/common_data_types';

import {MainThemeContext} from './../../theming/providers';

// type definitions

// helper functions implementation
const prepareGroupsAlignmentData: ($controlGroups: Array<HTMLDivElement>, sectionWidth: number, theme: ThemeType) => SectionRowPositionFullDataType=
    ($controlGroups: Array<HTMLDivElement>, sectionWidth: number, theme: ThemeType): SectionRowPositionFullDataType => {
    return addIndex(reduce)(
        (data, $controlGroup: HTMLDivElement, controlGroupIndex: number) => {
            const controlGroupClientRect: ClientRect = $controlGroup.getBoundingClientRect();
            const groupWidth: number = controlGroupClientRect.width;

            if (controlGroupIndex === 0) {
                data.totalWidth += groupWidth;
                data.groupsRowPositionData.push({isFirst: true, rowNum: data.currentRow});

                return data;
            } else {
                const groupWithWithPadding: number = groupWidth + theme.layoutStyles.formHorizontalSpacing;

                const totalWidthWithPaddedGroup: number = groupWithWithPadding + data.totalWidth;
                const totalWidthWithGroup: number = groupWidth + data.totalWidth;

                if (totalWidthWithPaddedGroup <= sectionWidth) {
                    data.totalWidth += groupWithWithPadding;
                    data.groupsRowPositionData.push({isFirst: false, rowNum: data.currentRow});

                    return data;
                } else {
                    if (totalWidthWithGroup <= sectionWidth) {
                        data.groupsRowPositionData[data.groupsRowPositionData.length - 1].isLast = true;
                    }

                    data.totalWidth = groupWidth;
                    data.currentRow = data.currentRow + 1;

                    data.groupsRowPositionData.push({isFirst: true, rowNum: data.currentRow});

                    return data;
                }
            }

        },

        {totalWidth: 0, currentRow: 0, groupsRowPositionData: []},
        $controlGroups,
    );
};

// hooks implementation
// TODO: add memoization
export function useHorizontalSectionsAlignment($containerRef: any): SectionsRowPositionDataType {
    const theme: ThemeType = useTheme();
    const [sectionsAlignmentData, setSectionsAlignmentData] = useState([]);
    const themeContext: ThemContextType = useContext(MainThemeContext);

    useEffect(() => {
        if (isNil($containerRef) || isNil($containerRef.current)) {
            return;
        }

        const $controlSections: Array<HTMLDivElement> = $containerRef.current.children;

        const sectionsFormatData: SectionsRowPositionDataType = map(($controlSection: HTMLDivElement) => {
            const controlSectionClientRect: ClientRect = $controlSection.getBoundingClientRect();
            const $controlGroups: Array<HTMLDivElement> = $controlSection.children;

            const sectionRowPositionData: SectionRowPositionFullDataType = prepareGroupsAlignmentData($controlGroups, controlSectionClientRect.width, theme);
            return sectionRowPositionData.groupsRowPositionData;
        }, $controlSections);

        setSectionsAlignmentData(sectionsFormatData);
    }, [themeContext.windowDimensions.innerWidth]);

    return sectionsAlignmentData;
}
