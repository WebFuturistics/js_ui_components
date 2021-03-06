'use strict';

// @flow

// external imports
import type {Event} from 'redux-form/lib/types';

// local imports
import type {ReduxFormFieldComponentValueType} from './../redux_form_types';

// exports
export type OnChangeHandlerType = (eventOrValue: Event | any) => void;

export type BaseRadioButtonInputPropsTypes = {
    /**
     * Radio button id (used with 'input' tag)
     */

    id?: string,

    /**
     * Radio button form name
     */

    name?: string,

    /**
     * Radio button form value
     */

    value?: ReduxFormFieldComponentValueType,

    /**
     * Flag that indicates whether radio button was checked or not
     */

    checked?: boolean,

    /**
     * Value that indicates possible appearance of radio button which can be 'small' or 'medium'
     */

    appearance?: 'small' | 'medium',

    /**
     * Flag that dictates whether component should be readable only (none selectable)
     */

    readOnly?: ?boolean,

    /**
     * Flag that dictates whether component should be disabled
     */

    disabled?: ?boolean,

    /**
     * Radio button label label
     */

    label?: string,

    /**
     * Value that indicates where label should be placed on left side of the radio button or on the right
     */

    labelPosition?: 'left' | 'right',

    /**
     * Class name which will be applied to outermost container of current component
     */

    className?: string,

    /**
     * Styles for component container (main outer container) of the form radio input component
     */

    style?: CSSStylesType,

    /**
     * Callback function which handles component value change
     */

    onChange?: OnChangeHandlerType,
}