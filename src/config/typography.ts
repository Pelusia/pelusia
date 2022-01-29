//  WIP: https://github.com/gatsbyjs/gatsby/issues/21079

import Typography from 'typography';

const headerFontFamily = ['Outfit', 'Avenir Next', 'Roboto', 'Helvetica Neue', 'sans-serif'];
const baseFontFamily = ['Rubik', 'Lucida Grande', 'Geneva', 'Roboto', 'Arial', 'sans-serif'];
const headerFontWeight = 400;
const boldFontWeight = 500;
const baseFontSize = '14px';
const baseLineHeight = 1.1;
const rythmUnit = 'rem';
const baseFontWeight = 400;
const baseFontColor = '#303033';

const typography = new Typography({
  baseFontSize,
  baseLineHeight,
  scaleRatio: 1.4,
  headerFontFamily,
  bodyFontFamily: baseFontFamily,
  headerWeight: headerFontWeight,
  bodyWeight: baseFontWeight,
  boldWeight: boldFontWeight,
  blockMarginBottom: 0.75,
  bodyColor: baseFontColor,
  includeNormalize: false,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    return {
      'h1,h2,h3,h4,h5,h6': {
        lineHeight: baseLineHeight,
      },
      h1: {
        marginBottom: '1.2rem',
      },
    };
  },
});

const css = typography.toString();
console.log(css);

export const { scale, rhythm, options } = typography;
export default typography;
