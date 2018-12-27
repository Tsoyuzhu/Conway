import React from 'react'
import styled from 'styled-components'
import GameCell from './Cell'
import * as theme from '../theme'
import { Row, Col } from 'react-grid-system'
import { connect } from 'react-redux'
import { toggleTimer, reset } from '../redux/operations'

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
					<Row>
						<Col md={2}>
							<Generation>Generation: {this.props.generation} </Generation>
						</Col>
						<Col md={10}>
							<Controls>
								<RoundBtn onClick={() => this.props.toggle()}> 
									{
									this.props.running
									? <i className ="fas fa-pause" />
									: <i className ="fas fa-play"/>
									} 
								</RoundBtn>
								<RoundBtn onClick={() => this.props.reset()} width='6rem'> Reset </RoundBtn>
							</Controls>
						</Col>
					</Row>
					
			</Simbox>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		running: state.boardState.running,
		generation: state.boardState.generation
	}
}

export default connect(mapStateToProps, {
	toggle: toggleTimer, 
	reset: reset,
})(Board)

const BoardWrapper = styled.table`
    cursor: pointer;
    border-collapse: collapse;
`
const RoundBtn = styled.button`
	margin: 0.75rem 3px;
    font-family: monospace;
	border: 0px solid ${theme.cellDefault};
	border-radius: 20px;
	height: 3rem;
	width: ${props => props.width || '4rem' }
    background-color: white;
	color: black;
	opacity: 0.75;
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

const Controls = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end
`

const Generation = styled.p`
	margin: 0.75rem 0;
	font-family: monospace;
	float: left;
	opacity: 0.9;
	font-size: 1rem;
`