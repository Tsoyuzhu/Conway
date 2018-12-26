import {css} from 'styled-components'

export const cellDefault = '#121a26';
export const cellActive = '#ffdb4f';
export const cellSelected = '#fffaed';
export const cellBorder = '#10213a';
export const boardHeight = 40;
export const boardWidth = 60;
export const boardEdgeSize = 5;
export const boardDeadZone = 3;

export const regularType = `
    @font-face {
        font-family: 'Circular';
        src: url('/fonts/Circular/CircularStd-Black.otf') format('opentype');
        font-weight:  600;
        font-style:   normal;
        font-stretch: normal;
        font-display: auto;
    }
`


export const mainTypeBold = css`
    font-family: ${regularType}, sans-serif;
    font-style: normal;
    font-weight: 600
` 