'use strict';

// @flow

// external imports
import * as React from 'react';
import injectSheet from 'react-jss';

import {T, is, isNil, isEmpty, always, defaultTo, mergeDeepRight, cond, map} from 'ramda';
import moment from 'moment';

// local imports
import {FormCheckboxVariant2Component} from './../form/form_checkbox_variants/form_checkbox_variant2_component';

// type definitions
type ColumnWidthType = string | number;

type ColumnDataType = void | null | string | number | boolean | moment | React.Element<any>;
type RowDataType = Array<ColumnDataType>;

type ColumnNamesType = Array<string>;
type ColumnWidthsType = Array<ColumnWidthType>;

type DataType = Array<RowDataType>;

type PropsTypes = {
    /**
     * Flag that indicates whether table header should be shown
     */

    showTableHeader?: boolean,

    /**
     * Flag that indicates whether table footer should be shown
     */

    showTableFooter?: boolean,

    /**
     * Array of column names
     */

    columnNames?: ColumnNamesType,

    /**
     * Array of column widths
     */

    columnWidths?: ColumnWidthsType,

    /**
     * Column index (inside data row) which will use data from this column as id and skip its rendering
     */

    idColumnIndex?: number,

    /**
     * Array of data for each cell of the table
     */

    data?: DataType,

    /**
     * JSS inner classes
     *
     * @ignore
     */

    classes: any
};

type StateTypes = {};

// styles definition
const commonCellStylesFunc = (theme) => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    borderBottom: `1px solid ${theme.tableStyles.cellBorderColor}`,

    paddingTop: `${theme.tableStyles.cellPaddingTop}px`,
    paddingBottom: `${theme.tableStyles.cellPaddingBottom}px`,

    paddingLeft: `${theme.tableStyles.cellPaddingLeft}px`,
    paddingRight: `${theme.tableStyles.cellPaddingRight}px`,

    fontFamily: theme.tableStyles.bodyFontStack,
    fontSize: `${theme.tableStyles.cellFontSize}px`,

    textAlign: 'left',

    color: theme.tableStyles.cellFontColor,
    backgroundColor: theme.tableStyles.cellBGColor
});

const thStylesFunc = (theme) => {
    return mergeDeepRight(commonCellStylesFunc(theme), {
        paddingTop: '0px',
    });
};

const styles = theme => ({
    componentContainer: {
        boxSizing: 'border-box',
        overflow: 'hidden',

        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,

        '& > table': {
            boxSizing: 'border-box',
            overflow: 'hidden',

            width: '100%',

            tableLayout: 'fixed',
            borderCollapse: 'collapse',

            '& > thead': {
                '& > tr': {
                    '& th': {
                        extend: thStylesFunc(theme)
                    }
                }
            },

            '& > tfoot': {
                '& > tr': {
                    '& th': {
                        extend: thStylesFunc(theme)
                    }
                }
            },

            '& > tbody': {
                '& tr': {
                    '& td': {
                        extend: commonCellStylesFunc(theme)
                    }
                },

                '& tr:hover': {
                    '& td': {
                        backgroundColor: theme.tableStyles.cellHoverBGColor
                    }
                },

                '& tr:last-child': {
                    '& td': {
                        borderBottom: '0px none'
                    }
                }
            }
        }
    }
});

// component implementation
export class RegularTableComponentClass extends React.Component<PropsTypes, StateTypes> {
    // region static props
    static displayName = 'RegularTableComponent';

    static defaultProps = {
        showTableHeader: true,
        showTableFooter: true,

        columnNames: [],
        columnWidths: [],

        idColumnIndex: null,
        data: undefined
    };

    // endregion

    // region constructor
    // endregion

    // region lifecycle methods
    // endregion

    // region style accessors
    // endregion

    // region label accessors
    // endregion

    // region state accessors
    // endregion

    // region prop accessors
    _getColumnNames(): ColumnNamesType {
        return defaultTo([])(this.props.columnNames);
    }

    _getColumnWidths(): ColumnWidthsType {
        return defaultTo([])(this.props.columnWidths);
    }

    _getColumnWidth(columnIndex: number): ColumnWidthType {
        const columnWidth: ColumnWidthType = this._getColumnWidths()[columnIndex];

        return cond([
            [isNil, always('auto')],
            [is(Number), columnWidth => `${columnWidth}px`],
            [is(String), always(columnWidth)]
        ])
        (columnWidth);
    }

    _getData(): DataType {
        return defaultTo([])(this.props.data);
    }

    _getDataRow(dataRow: RowDataType): RowDataType {
        return defaultTo([])(dataRow);
    }

    _getDataColumn(dataColumn: ColumnDataType): ColumnDataType {
        return defaultTo(null)(dataColumn);
    }

    _isIdColumn(columnIndex: number): boolean {
        const {idColumnIndex} = this.props;

        if (isNil(idColumnIndex)) {
            return false;
        }

        return columnIndex === idColumnIndex;
    }

    // endregion

    // region handlers
    // endregion

    // region render methods

    _renderTableBodyColumn(columnData: ColumnDataType, columnIndex: number): React.Node {
        columnData = cond([
            [(columnData: ColumnDataType) => moment.isMoment(columnData), (columnData: moment) => columnData.format('YYYY-M-d H:mm:ss')],
            [is(Date), (columnData: moment) => moment(columnData).format('YYYY-M-d H:mm:ss')],
            [is(Boolean), (columnData: ColumnDataType) => <FormCheckboxVariant2Component forceCheck={columnData}/>],
            [T, always(columnData)]
        ])(columnData);

        return <td key={`column_${columnIndex}`}>{columnData}</td>;
    }

    _renderTableBodyColumns(rowData: RowDataType): React.Node {
        let columnIndex: number = -1;

        return map((columnData: ColumnDataType) => {
            ++columnIndex;

            if (this._isIdColumn(columnIndex)) {
                return null;
            }

            return this._renderTableBodyColumn(this._getDataColumn(columnData), columnIndex);
        }, rowData);
    }

    _renderTableBodyRows(): React.Node {
        let rowIndex: number = -1;

        return map((rowData: RowDataType) => {
            ++rowIndex;
            rowData = this._getDataRow(rowData);

            return <tr key={`row_${rowIndex}`}>{this._renderTableBodyColumns(rowData)}</tr>;
        }, this._getData());
    }

    _renderTableBody(): React.Node {
        const {data} = this.props;
        const renderedData = (isNil(data) || isEmpty(data)) ? null : this._renderTableBodyRows();

        return <tbody>{renderedData}</tbody>;
    }

    _renderTableHeaderCells(): React.Node {
        let columnIndex: number = -1;

        return map((columnName: string) => {
            ++columnIndex;

            return <th
                style={{width: this._getColumnWidth(columnIndex)}}
                key={`headerColumn_${columnIndex}`}
            >{columnName}</th>;
        }, this._getColumnNames());
    }

    _renderTableFooter(): React.Node {
        return (
            <tfoot>
                <tr>
                    {this._renderTableHeaderCells()}
                </tr>
            </tfoot>
        );
    }

    _renderTableHeader(): React.Node {
        return (
            <thead>
                <tr>
                    {this._renderTableHeaderCells()}
                </tr>
            </thead>
        );
    }

    _renderTable(): React.Node {
        const {showTableHeader, showTableFooter} = this.props;

        return <table>
            {showTableHeader && this._renderTableHeader()}
            {showTableFooter && this._renderTableFooter()}

            {this._renderTableBody()}
        </table>;
    }

    _renderComponentContainer(): React.Node {
        const {componentContainer} = this.props.classes;

        return <div className={componentContainer}>
            {this._renderTable()}
        </div>;
    }

    render(): React.Node {
        return this._renderComponentContainer();
    }

    // endregion
}

// exports
export const RegularTableComponent = injectSheet(styles)(RegularTableComponentClass);