import React from 'react'
import styled from 'styled-components'
import GameCell from './Cell'
import * as theme from '../theme'
import { connect } from 'react-redux'
import { toggleTimer } from '../redux/operations'

class Board extends React.Component {
	
	render() {
		const grid = []
		for (let y = theme.boardEdgeSize; y < theme.boardHeight - theme.boardEdgeSize; y++) {
			const row = []
			for (let x = theme.boardEdgeSize; x < theme.boardWidth - theme.boardEdgeSize; x++) {
				row.push({x,y})
			}
			grid.push(row)
		}

		return (
			<Simbox>
				<BoardWrapper style={{margin: '2px auto'}}>
					<tbody>
						{ grid.map((cols,i) => 
							<tr key={i}>
								{ cols.map((coords, j) => 
									<GameCell key={i+j} x={coords.x} y={coords.y}/>
								)}
							</tr>
						)}
					</tbody>
				</BoardWrapper>
				<RoundBtn onClick={() => this.props.toggle()}> 
					{/* {
					this.state.running 
					? <i className ="fas fa-pause" />
					: <i className ="fas fa-play"/>
					}  */}
				</RoundBtn>
				{/* <RoundBtn onClick={this.reset} width='6rem'> Reset </RoundBtn>  */}
			</Simbox>
		)
	}
}

export default connect(null, {
	toggle: toggleTimer,
})(Board)

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
	width: ${props => props.width || '3rem' }
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