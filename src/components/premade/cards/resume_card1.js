'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import moment from  'moment';
import {defaultTo, isNil} from 'ramda';

// local imports
import {SMALL_SIZE, MEDIUM_SIZE} from './../../../theming/constants/general_constants';

import {RegularCardComponent} from './../../layout/structure/regular_card_component';
import {InlineTextBlock} from './../../layout/text/inline_text_block';
import {InlineHeader} from './../../layout/text/inline_header';
import {FontIcon} from './../../layout/icons/font_icon';

// type definitions
type PropsTypes = {
    /**
     * Person's logo image
     */

    personLogoSrc?: string,

    /**
     * Icon class name that is used when path to person logo image is not specified
     */

    noIconClassName?: string,

    /**
     * Person's name
     */

    name: string,

    /**
     * Person's last name
     */

    lastName: string,

    /**
     * Date when vacancy was last updated
     */

    updateDate?: string | Date | moment,

    /**
     * Position which current person is seeking
     */

    position: string,

    /**
     * Specialization in which current person is proficient
     */

    specialization?: string,

    /**
     * Location where current person is living
     */

    currentLocation?: string,

    /**
     * Flag that indicates whether person prefers to work remotely
     */

    remote?: boolean,

    /**
     * Desired wage
     */

    desiredSalary?: number,

    /**
     * Currency (sign) in which desired salary is paid
     */

    currency?: string,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any,
};

type StateTypes = {};

// styles definition
const styles = theme => ({
    componentContainer: {
        height: '100%',

        '& > $regularCardContainer': {
            boxSizing: 'border-box',
            display: 'grid',

            width: '100%',
            height: '100%',

            gridTemplateAreas: `
                "person-logo name     last-name update-date"
                "position    position position  position"
                "location    location location  salary"
            `,

            gridTemplateColumns: '35px max-content 1fr max-content',
            gridTemplateRows: 'minMax(35px, max-content) 1fr max-content',

            cursor: 'pointer',

            '& > $personLogoContainer': {
                boxSizing: 'border-box',

                gridArea: 'person-logo',
                alignSelf: 'start',
                justifySelf: 'center',
            },

            '& > $nameContainer': {
                boxSizing: 'border-box',

                gridArea: 'name',
                alignSelf: 'center',

                paddingLeft: '10px',
                paddingRight: '8px',

                fontFamily: theme.fontStacks.boldFontFamilyStack,
                fontSize: '16px',

                color: theme.baseStyles.mainPrimaryColor
            },

            '& > $lastNameContainer': {
                boxSizing: 'border-box',

                gridArea: 'last-name',
                alignSelf: 'center',

                fontFamily: theme.fontStacks.boldFontFamilyStack,
                fontSize: '16px',

                color: theme.baseStyles.mainPrimaryColor
            },

            '& > $updateDateContainer': {
                boxSizing: 'border-box',

                gridArea: 'update-date',
                textAlign: 'right',

                paddingLeft: '8px',
                fontSize: '10px',
                color: theme.baseStyles.utilityBGColor
            },

            '& > $positionContainer': {
                boxSizing: 'border-box',

                gridArea: 'position',
                paddingTop: '8px',

                fontFamily: theme.fontStacks.boldFontFamilyStack,
                fontSize: '18px',

                color: theme.baseStyles.mainPrimaryColor
            },

            '& > $locationContainer': {
                boxSizing: 'border-box',
                display: 'flex',
                gridArea: 'location',

                flexDirection: 'row',
                justifyСontent: 'flex-start',

                alignItems: 'center',
                alignContent: 'flex-start',

                '& > $currentLocationContainer': {
                    boxSizing: 'border-box',

                    flexBasis: 'auto',
                    flexShrink: '1',
                    flexGrow: '0',

                    textAlign: 'left',
                    fontSize: '14px',

                    color: theme.baseStyles.utilityBGColor
                },

                '& > $desiredLocationLogoContainer': {
                    boxSizing: 'border-box',

                    flexBasis: 'auto',
                    flexShrink: '1',
                    flexGrow: '0',

                    paddingLeft: '8px',
                }
            },

            '& > $salaryContainer': {
                boxSizing: 'border-box',
                gridArea: 'salary',

                fontFamily: theme.fontStacks.boldFontFamilyStack,
                fontSize: '15px',

                textAlign: 'right',
                color: theme.baseStyles.accentColorPrimary,
            },
        }
    },

    regularCardContainer: {},

    personLogoContainer: {},
    nameContainer: {},
    lastNameContainer: {},
    updateDateContainer: {},
    positionContainer: {},

    locationContainer: {},
    currentLocationContainer: {},
    desiredLocationLogoContainer: {},

    salaryContainer: {},
});

/**
 * Resume card (variant 1).
 * Pre-made card component which represents resume.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
export function ResumeCard1Function(props: PropsTypes): React.Node {
    const {personLogoSrc, name, lastName, updateDate, currentLocation, classes} = props;

    const parsedUpdateDate: moment = moment(updateDate);
    const formattedUpdateDate: string = parsedUpdateDate.format('LL');

    let {position, specialization, currency, remote, desiredSalary, noIconClassName} = props;

    position = `${position}${isNil(specialization) ? '' : ` (${specialization.toLowerCase()})`}`;
    currency = defaultTo('')(currency);

    if (isNil(desiredSalary)) {
        desiredSalary = 'Negotiable';
    } else {
        desiredSalary = `${currency}${desiredSalary}`;
    }

    noIconClassName = defaultTo('fas fa-address-card')(noIconClassName);

    remote = defaultTo(false)(remote);
    const locationIcon: string = remote ? 'fas fa-map-marker' : 'fas fa-map-marker-slash';

    return <RegularCardComponent
        popOnHover={true}
        maxPopLevel={3}
        containerClassName={classes.componentContainer}
        bodyClassName={classes.regularCardContainer}
    >
        {
            personLogoSrc ?
                <img src={personLogoSrc} className={classes.personLogoContainer}/> :
                <FontIcon size={MEDIUM_SIZE} iconClassName={noIconClassName} className={classes.personLogoContainer}/>
        }

        <InlineTextBlock className={classes.nameContainer}>{name}</InlineTextBlock>
        <InlineTextBlock className={classes.lastNameContainer}>{lastName}</InlineTextBlock>
        <InlineTextBlock className={classes.updateDateContainer}>{formattedUpdateDate}</InlineTextBlock>

        <InlineHeader level={6} className={classes.positionContainer}>{position}</InlineHeader>

        <div className={classes.locationContainer}>
            <InlineTextBlock className={classes.currentLocationContainer}>{currentLocation}</InlineTextBlock>
            <FontIcon size={SMALL_SIZE} className={classes.desiredLocationLogoContainer} iconClassName={locationIcon}/>
        </div>

        <InlineTextBlock className={classes.salaryContainer}>{desiredSalary}</InlineTextBlock>
    </RegularCardComponent>;
}

ResumeCard1Function.displayName = 'ResumeCard1';

// exports
export const ResumeCard1 = injectSheet(styles)(ResumeCard1Function);