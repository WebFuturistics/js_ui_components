'use strict';

// @flow

// external imports
import type {InputProps} from 'redux-form/lib/FieldProps.types';

// types definitions
export type ReduxFormFieldComponentValueType = ?(string | number);

export type ReduxFormFieldComponentMetaDataPropsTypes = {
    initial: ?(string | number),

    active: boolean,
    pristine: boolean,
    dirty: boolean,
    touched: boolean,

    error?: string | Array<string>,
    warning?: string | Array<string>,
}

export type ReduxFormFieldComponentInputDataPropsTypes = InputProps & {
    value?: ReduxFormFieldComponentValueType,
}

export type OnSubmitCallbackType = (any) => any;