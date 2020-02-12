'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import {always, equals, isNil, defaultTo, ifElse, clone} from 'ramda';
import {generateRandomIdNumber} from '@webfuturistics/design_components/lib/helpers/general/dom_helpers';

import type {FieldProps} from 'redux-form';

// local imports
import type {ReduxFormFieldComponentMetaDataPropsTypes, ReduxFormFieldComponentInputDataPropsTypes} from './../../types/redux_form_types';

import {MainThemeContext} from './../../theming/providers/main_theme_provider';

// type definitions
type CSSStylesType = {
    [string]: mixed
};

type PropsTypes = FieldProps & {
    /**
     * Flag that dictates whether component should be disabled
     */

    disabled?: ?boolean,

    /**
     * Value that indicates possible appearance of radio button which can be 'small' or 'medium'
     */

    appearance?: 'small' | 'medium',

    /**
     * Radio button label label
     */

    label?: string,

    /**
     * Value that indicates where label should be placed on left side of the radio button or on the right
     */

    labelPosition?: 'left' | 'right',

    /**
     * 'Redux-form' field-component metadata
     *
     * @ignore
     */

    meta?: ?ReduxFormFieldComponentMetaDataPropsTypes,

    /**
     * 'Redux-form' field-component data
     *
     * @ignore
     */

    input?: ?ReduxFormFieldComponentInputDataPropsTypes,

    /**
     * Styles for component container (main outer container) of the form radio input component
     */

    componentContainerStyles?: CSSStylesType,

    /**
     * Alias of 'componentContainerStyles'
     */

    style?: CSSStylesType,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
};

type StateTypes = {};

// styles definition
const styles = theme => ({});

/**
 * Radio button input component styled according to material-UI guidelines.
 * Component is intended to be used as a parameter for ['Redux-form' Field component](#reduxformradiobuttoninputcomponent).
 *
 * @version 1.0.0
 * @author [Sergei Selihov](https://github.com/Error-331)
 *
 */

// component implementation

// $FlowFixMe decorators
@injectSheet(styles)
class FormRadioButtonInputClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'FormRadioButtonInputComponent';

    static defaultProps = {
        disabled: false,

        labelPosition: 'left',
        leftLabel: '',
        rightLabel: '',

        input: {
            name: '',
            value: '',

            onChange: () => {},
            onFocus: () => {},
            onBlur: () => {},
            onDrop: () => {},
            onDragStart: () => {},
            onFocus: () => {},
        },

        classes: {}
    };

    _id: ?string = null;

    // endregion

    // region constructor
    constructor(props: PropsTypes): void {
        super(props);

        this._id = this._createInputId();
    }

    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    _getComponentContainerStyles(): CSSStylesType {
        const componentContainerStyles: CSSStylesType = defaultTo({})(this.props.componentContainerStyles);
        const style: CSSStylesType = defaultTo({})(this.props.style);

        return Object.assign({}, componentContainerStyles, style);
    }

    _getLabelClasses(): string {
        const {disabled, labelPosition, classes: {checkboxLabel, checkboxLeftLabel, checkboxRightLabel}} = this.props;

        return classNames(
            checkboxLabel,
            ifElse(equals('left'), always(checkboxLeftLabel), always(checkboxRightLabel))(labelPosition),
            {'disabled': disabled}
        );
    }

    _getInputClasses(): string {
        const {disabled}: {disabled: ?boolean} = this.props;

        return classNames(
            this.props.classes.inputControl,
            {'disabled': disabled}
        );
    }

    _getInputControlLabelClasses(): string {
        const {disabled}: {disabled: ?boolean} = this.props;

        return classNames(
            this.props.classes.inputControlLabel,
            {'disabled': disabled}
        );
    }

    // endregion

    // region label accessors
    // endregion

    // region state accessors
    _createInputId(): string {
        const {name} = this._getInputData();
        const randomIdNumber: number = generateRandomIdNumber();

        if (isNil(name)) {
            throw new Error('Name cannot be null, cannot create input ID');
        }

        return `radio_button_input_${name}_${randomIdNumber}`;
    }

    // endregion

    // region prop accessors


    _getInputData(): ReduxFormFieldComponentInputDataPropsTypes {
        const {input} = this.props;
        return isNil(input) ? clone(FormRadioButtonInputClass.defaultProps.input) : input;
    }

    // endregion

    // region handlers
    // endregion

    // region render methods
    _renderLabel(): ?React.Node {
        const {labelPosition, label} = this.props;

        if (isNil(labelPosition) || isNil(label)) {
            return null;
        }

        return <div className={this._getLabelClasses()}>
            {label}
        </div>;
    }

    _renderInputIcon(): React.Node {
        return <div className={this.props.classes.inputControlIcon}>
        </div>;
    }

    _renderInputControlLabel(): React.Node {
        return <label htmlFor={this._id} className={this._getInputControlLabelClasses()}>
            {this._renderInputIcon()}
        </label>;
    }

    _renderInput(): React.Node {
        const {disabled}: {disabled: ?boolean} = this.props;
        const {value, name, onChange}: ReduxFormFieldComponentInputDataPropsTypes = this._getInputData();

        const checkedParam: ?string = this._isChecked() ? 'checked' : '';
        const disabledParam: ?string = disabled ? 'disabled' : undefined;

        return <input
            className={this._getInputClasses()}

            disabled={disabledParam}
            checked={checkedParam}

            type='radio'
            value={value}
            name={name}
            id={this._id}

            onChange={onChange}
        />;
    }

    _renderInputContainer(): React.Node {
        const labelPosition: string = this._getLabelPosition();

        return (
            <div
                className={this.props.classes.componentContainer}
                style={this._getComponentContainerStyles()}
            >
                {labelPosition === 'left' ? this._renderLabel() : null}
                {this._renderInput()}
                {this._renderInputControlLabel()}
                {labelPosition === 'right' ? this._renderLabel() : null}
            </div>
        );
    }

    render(): React.Node {
        return this._renderInputContainer();
    }

    // endregion
}

function FormRadioButtonInputComponent(props: PropsTypes) {
    return (
        <MainThemeContext.Consumer>
            {windowDimensions => <FormRadioButtonInputClass {...props} {...windowDimensions} />}
        </MainThemeContext.Consumer>
    );
}

FormRadioButtonInputComponent.displayName = 'FormRadioButtonInputComponent';

// exports
export {FormRadioButtonInputClass, FormRadioButtonInputComponent};
export default FormRadioButtonInputComponent;
