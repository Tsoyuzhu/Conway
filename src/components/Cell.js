import React from 'react'
import PropTypes from 'prop-types'

const GameCell = (props) => {
	const handleClick = () => props.clickCell(!props.alive)
	const colour = this.props.alive
	? theme.cellActive
	: this.state.hover
		? theme.cellSelected
		: theme.cellDefault

	return <Cell onClick={this.handleClick} colour={colour}/>
}

GameCell.propTypes = {
	clickCell: PropTypes.func
}

export default React.memo(GameCell)

const Cell = styled.td`
	width: 10px;
	height: 10px;
	border: 1px solid ${theme.cellBorder};
	border-radius: 1.1px;
	background-color: ${props => props.colour};
	&:hover {
		background-color: ${theme.cellActive};
		cursor: pointer;
	}
`