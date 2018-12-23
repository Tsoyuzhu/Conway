import React from 'react'
import styled from 'styled-components'
import GameCell from '../Cell'
import * as theme from '../theme'

class Board extends React.Component {
	
	constructor() {
		super()
		this.state = {
			grid: this.createBoard(theme.boardHeight,theme.boardWidth)
		}
	} 
	
	createBoard = (height, width) => {
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

	alterCell = (x,y,alive) => {
		this.setState((prevState) => {
			const newGrid = [...prevState.grid]
			const newRow = [...newGrid[y]]
			newRow[x] = alive
			newGrid[y] = newRow
				
			return { grid: newGrid }
		})
	}

	render() {
		return (
			<BoardWrapper style={{margin: '0 auto'}}>
				<tbody>
					{ this.state.grid.map((rows,i) => 
						<tr key={i}>
							{ rows.map((alive,j) => 
								<GameCell key={i+j} alive={alive} clickCell={(alive) => this.alterCell(j, i, alive)}/>)
							}
						</tr>
					)}
				</tbody>
			</BoardWrapper>
		)
	}
} 

export default Board

const BoardWrapper = styled.table`
    border: 2px solid black;
    border-radius: 10px;
    border-collapse: collapse;
`