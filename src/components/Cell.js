import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import * as theme from '../theme'

const GameCell = (props) => {
	const handleClick = () => props.clickCell(!props.alive)
	const colour = props.alive
	? theme.cellActive
	: theme.cellDefault

	return <Cell onClick={handleClick} colour={colour}/>
}

GameCell.propTypes = {
	clickCell: PropTypes.func
}

export default React.memo(GameCell)

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