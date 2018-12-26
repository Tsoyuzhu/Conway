import React from 'react'
import styled from 'styled-components'
import GameCell from './Cell'
import * as theme from '../theme'
class Board extends React.Component {
	// Use react context in order to speed up the cell click response time
	constructor() {
		super()
		this.state = {
			grid: this.createBoard(theme.boardWidth,theme.boardHeight)
		}
	} 
	
	createBoard = (width, height) => {
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

	reset = () => {
		if (this.state.running) {
			clearInterval(this.state.running)
		}
		this.setState ({ grid: this.createBoard(theme.boardWidth,theme.boardHeight), running: undefined })
	}

	alterCell = (x,y,alive) => {
		this.setState((prevState) => {
			const newGrid = prevState.grid
			const newRow = newGrid[x]
			newRow[y] = alive
			newGrid[x] = newRow
				
			return { grid: newGrid }
		})
	}

	toggleTime = () => {
		// check this.state.running
		// if running, start, else stop
		if (!this.state.running) {
			this.evolve()
			this.setState( {running: setInterval(this.evolve,100)} )
		} else {
			clearInterval(this.state.running)
			this.setState({running: undefined})
		}
	}

	evolve = () => {
		this.setState((prevstate) => {
			const newGrid = prevstate.grid.map((cols,i) => (
				cols.map((_,j) => (
					this.liveOrDie(j,i)
				))
			))
			return { grid: newGrid }
		})
	}

	cellValid = (x,y) => x >= 0 && x < theme.boardWidth && y >= 0 && y < theme.boardHeight

	liveNeighbours = (x,y) => {
		let count = 0
		const grid = this.state.grid
		// console.log(`checking neighbours x: ${x} y: ${y}`)
		if ( this.cellValid(x,y+1) && grid[y+1][x] ) 		count++ 
		if ( this.cellValid(x+1,y+1) && grid[y+1][x+1] )	count++ 
		if ( this.cellValid(x+1,y) && grid[y][x+1] ) 		count++ 
		if ( this.cellValid(x+1,y-1) && grid[y-1][x+1] ) 	count++ 
		if ( this.cellValid(x,y-1) && grid[y-1][x] ) 		count++ 
		if ( this.cellValid(x-1,y-1) && grid[y-1][x-1] ) 	count++ 
		if ( this.cellValid(x-1,y) && grid[y][x-1] ) 		count++
		if ( this.cellValid(x-1,y+1) && grid[y+1][x-1] ) 	count++
		return count
	}

	/* 
		Conway's Game of Life: (src: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
		Any live cell with fewer than two live neighbors dies, as if by underpopulation.
		Any live cell with two or three live neighbors lives on to the next generation.
		Any live cell with more than three live neighbors dies, as if by overpopulation.
		Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
	*/

	liveOrDie = (x,y) => {
		/* Edge cells should always stay dead in order to simulate an infinite grid */
		if (x < theme.boardDeadZone || x > theme.boardWidth-theme.boardDeadZone 
			|| y < theme.boardDeadZone || y > theme.boardHeight-theme.boardDeadZone) return false
		const grid = this.state.grid
		let neighbours = this.liveNeighbours(x,y)
		if (grid[y][x]) {
			if (neighbours < 2) return false
			if (neighbours === 2 || neighbours === 3) return true
			if (neighbours > 3) return false
		} else {
			if (neighbours === 3) 	return true
		}
		return false
	}

	render() {
		return (
			<div>
				<Simbox>
					<BoardWrapper style={{margin: '2px auto'}}>
						<tbody>
							{ this.state.grid.map((cols,i) => 
								<tr key={i}>
									{ cols.map((alive,j) => 
										<GameCell key={i+j} alive={alive} clickCell={(alive) => this.alterCell(i, j, alive)}/>
									).slice(theme.boardEdgeSize,theme.boardWidth-theme.boardEdgeSize)}
								</tr>
							).slice(theme.boardEdgeSize,theme.boardHeight-theme.boardEdgeSize)}
						</tbody>
					</BoardWrapper>
					<RoundBtn onClick={this.toggleTime} style={{width: '3rem'}}> 
						{
						this.state.running 
						? <i className ="fas fa-pause" />
						: <i className ="fas fa-play"/>
						} 
					</RoundBtn> 
					<RoundBtn onClick={this.reset} style={{width: '6rem'}}> Reset </RoundBtn> 
				</Simbox>
			</div>
		)
	}
} 

export default Board

const BoardWrapper = styled.table`
    // border: 3px solid black;
    // border-radius: 10px;
    border-collapse: collapse;
`
const RoundBtn = styled.button`
	margin: 0.75rem 3px;
    font-family: monospace;
	border: 2px solid ${theme.cellDefault};
	border-radius: 3px;
	height: 2rem;
    background-color: white;
    color: black;
    &:focus {
        outline: none;
    }
    &:hover {
        cursor: pointer;
    }
`

const Simbox = styled.div`
	margin-top: 1rem;
	display: inline-block;
	background-color: #efefef;
	border-radius: 8px;
	padding: 1rem;
`