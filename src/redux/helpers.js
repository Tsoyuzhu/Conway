import { boardDeadZone, boardWidth, boardHeight } from '../theme'

const liveNeighbours = (grid, x, y) => {
    let count = 0
    // console.log(`checking neighbours x: ${x} y: ${y}`)
    if ( cellValid(x,y+1) && grid[y+1][x] ) 		count++ 
    if ( cellValid(x+1,y+1) && grid[y+1][x+1] )	    count++ 
    if ( cellValid(x+1,y) && grid[y][x+1] ) 		count++ 
    if ( cellValid(x+1,y-1) && grid[y-1][x+1] ) 	count++ 
    if ( cellValid(x,y-1) && grid[y-1][x] ) 		count++ 
    if ( cellValid(x-1,y-1) && grid[y-1][x-1] ) 	count++ 
    if ( cellValid(x-1,y) && grid[y][x-1] ) 		count++
    if ( cellValid(x-1,y+1) && grid[y+1][x-1] ) 	count++
    return count
}

export const createBoard = (width, height) => {
	const table = [];
	for (let i = 0; i < height; i++) {
		const cols = []
		for (var j = 0; j < width; j++) {
			cols.push(false)
		}
		table.push(cols)
	}
	return table
}

/* 
    Conway's Game of Life: (src: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
    Any live cell with fewer than two live neighbors dies, as if by underpopulation.
    Any live cell with two or three live neighbors lives on to the next generation.
    Any live cell with more than three live neighbors dies, as if by overpopulation.
    Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
	*/
export const liveOrDie = (grid,x,y) => {
    /* Edge cells should always stay dead in order to simulate an infinite grid */
    if (x < boardDeadZone || x > boardWidth-boardDeadZone 
        || y < boardDeadZone || y > boardHeight-boardDeadZone) return false
    const neighbours = liveNeighbours(grid,x,y)
    if (grid[y][x]) {
        if (neighbours < 2) return false
        if (neighbours < 4) return true
        if (neighbours > 3) return false
    } else {
        if (neighbours === 3) 	return true
    }
    return false
}
    
const cellValid = (x, y) => x >= boardDeadZone && x < boardWidth-boardDeadZone && y >= boardDeadZone && y < boardHeight-boardDeadZone