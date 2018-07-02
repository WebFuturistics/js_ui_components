'use strict';

// exports
export default ({baseStyles}) => {
    return Object.freeze({
        cellFontSize: baseStyles.secondaryFontSize, // px

        headerCellFontColor: baseStyles.mainQuaternaryColor,
        cellFontColor: baseStyles.mainPrimaryColor,

        cellBGColor: baseStyles.transparentBGColor,
        cellHoverBGColor: baseStyles.mainQuaternaryColor,

        cellBorderColor: baseStyles.mainQuaternaryColor,

        cellPaddingTop: 12, // px
        cellPaddingBottom: 12, // px

        cellPaddingLeft: 5, // px
        cellPaddingRight: 5 // px
    });
};
