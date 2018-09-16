'use strict';

// @flow

// external imports
import * as React from 'react';
import {Field} from 'redux-form/immutable';
import moment from 'moment';

// local imports
import {FormDateInputComponent} from '../form/form_date_input_component';

// type definitions
type DateType = moment | Date | string;

type PropsTypes = {
    /**
     * Input name
     */

    name: string,

    /**
     * Flag that indicates whether month selector should be shown
     */

    showMonthSelector?: boolean,

    /**
     * Flag that dictates whether component should be readable only
     */

    readOnly?: ?boolean,

    /**
     * Flag that dictates whether component should be disabled
     */

    disabled?: ?boolean,

    /**
     * Placeholder text used as hint for the user of how appropriate data should look like
     */

    placeholder?: ?string,

    /**
     * Input label
     */

    label?: ?string,
};

type StateTypes = {};

/**
 * Wrapper around ['FormDateInputComponent'](#formdateinputcomponent) component for use inside Redux-form.
 * Component is intended to be used as a child component inside Redux-form.
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation
export class ReduxFormDateInputComponentClass extends React.Component<PropsTypes, StateTypes> {
    static displayName = 'ReduxFormDateInputComponent';

    render(): React.Node {
        return <Field type='select' component={FormDateInputComponent} {...this.props}/>;
    }
}

// exports
export const ReduxFormDateInputComponent = ReduxFormDateInputComponentClass;