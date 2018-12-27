import React from 'react'
import styled from 'styled-components'
import * as theme from '../theme'
import { connect } from 'react-redux'
import boardState from '../redux/board'

const GameCell = ({ x, y, alive, alterCell }) => {
	const handleClick = () => alterCell({ x, y, alive: !alive })
	const colour = alive
	? theme.cellActive
	: theme.cellDefault

	return <Cell onClick={handleClick} colour={colour}/>
}

const mapStateToProps = (state, ownProps) => {
	const { x, y } = ownProps;
	return {
		alive: state.boardState.board[y][x]
	}
}

export default connect(mapStateToProps, {
	alterCell: boardState.actions.alterCell,
})(GameCell)

const Cell = styled.td`
	width: 10px;
	height: 10px;
	border: 2px solid ${theme.cellBorder};
	background-color: ${props => props.colour};
	&:hover {
		background-color: ${theme.cellSelected};
		cursor: pointer;
	}
`