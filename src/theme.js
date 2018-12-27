import {css} from 'styled-components'
/* Default Color theme */
// export const cellDefault = '#121a26'
// export const cellActive = '#ffdb4f'
// export const cellSelected = '#fffaed'
// export const cellBorder = '#10213a'


/* Secondary Color theme */
export const cellDefault = 'white'
export const cellActive = 'black'
export const cellSelected = 'grey'
export const cellBorder = '#fffaed'

// height of 40 width of 90 is stable and fast.
// height of 60 and width of 120 is stable but laggy when board fills up. 
export const boardHeight = 60
export const boardWidth = 120
export const boardEdgeSize = 5
export const boardDeadZone = 1
export const cellSize = '6px'

export const regularType = `
    @font-face {
        font-family: 'Circular';
        src: url('/fonts/Circular/CircularStd-Bold.otf') format('opentype');
        font-weight:  600;
        font-style:   normal;
        font-stretch: normal;
        font-display: auto;
    }
`
export const secondaryType = `
    @font-face {
        font-family: 'Circular';
        src: url('/fonts/Circular/CircularStd-Black.otf') format('opentype');
        font-weight:  normal;
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