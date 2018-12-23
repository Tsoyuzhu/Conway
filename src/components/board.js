import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import * as theme from '../theme.js';

class Board extends React.Component {
    constructor(props) {
        super()

        // Define a programmatic representation of the board.
        var newGrid = new Array(theme.boardWidth);
        for (var i = 0; i < theme.boardWidth; i++) {
            newGrid[i] = new Array(theme.boardHeight);
            for (var j = 0; j < theme.boardHeight; j++) {
                newGrid[i][j] = false;
            }
        }

        this.state = {
            grid: newGrid
        }

        this.alterCell = this.alterCell.bind(this);
    }

    createBoard(height, width) {
        var table = [];
        for (var i = 0; i < height; i++) {
            var cols = []
            for (var j = 0; j < width; j++) {
                cols.push(<GameCell key={i+j} x={j} y={i} alive={this.state.grid[j][i]} clickCell={this.alterCell}/>)
            }
            table.push(<tr key={i}>{cols}</tr>)
        }
        return table
    }

    alterCell(x,y,alive) {
        // Extract the current array state
        var newGrid = this.state.grid
        // Alter it 
        newGrid[x][y] = alive
        // Save it back
        this.setState({grid:newGrid})

        // debugging
        for(var l=0; l<theme.boardWidth;l++) {
            for(var m=0;m<theme.boardHeight;m++) {
                console.log(newGrid[m][m]);
            }
        }
    }

    

    render() {
        return (
            <BoardWrapper style={{margin: '0 auto'}}>
                <tbody>{this.createBoard(theme.boardHeight,theme.boardWidth)}</tbody>
            </BoardWrapper>
        )
    }
} 

class GameCell extends React.Component {
    constructor(props) {
        super()
        this.state = {
            color: theme.cellDefault,
            hover: false,
            x: props.x,
            y: props.y,
            alive: props.alive
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleClick() {
        console.log("clicked");
        if (this.state.alive) {
            // Mark cell as dead
            this.setState({alive: false})
            this.props.clickCell(this.state.x,this.state.y,false)
        } else {
            // Mark cell as alive
            this.setState({alive: true})
            this.props.clickCell(this.state.x,this.state.y,true)
        }
    }

    handleMouseEnter() {
        this.setState({hover: true})
    }

    handleMouseLeave() {
        this.setState({hover: false})
    }

    render() {
        var style
        if (this.state.alive) {
            style = {backgroundColor: theme.cellActive}
        } else {
            if (this.state.hover) {
                style = {backgroundColor: theme.cellSelected}
            } else {
                style = {backgroundColor: theme.cellDefault}
            }
        }
        return <Cell onClick={this.handleClick} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} style={style}/>
    }
   
}

GameCell.propTypes = {
    clickCell: PropTypes.func
}

export default Board

const Cell = styled.td`
    width: 10px;
    height: 10px;
    border: 1px solid ${theme.cellBorder};
    border-radius: 1.1px;
    background-color: ${theme.cellDefault};
    &:hover {
        cursor: pointer;
    }
`

const BoardWrapper = styled.table`
    border: 2px solid black;
    border-radius: 10px;
    border-collapse: collapse;
`