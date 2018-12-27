import * as theme from '../theme'
import { createSlice } from 'redux-starter-kit'
import { createBoard, liveOrDie } from './helpers'

const alterCell = (state, action) => {
    const { alive, x, y } = action.payload
    state.board[y][x] = alive
}

const startTimer = (state, action) => {
	state.running = action.payload
}

const stopTimer = (state) => {
	state.running = undefined
}

const evolve = (state) => {
    const newBoard = state.board.map((cols,y) => (
        // Live or die only needs the cell's neighbours, not the whole board. Potential optimisation
        cols.map((_,x) => liveOrDie(state.board,x,y))
	))
    state.board = newBoard
    state.generation += 1
}

const resetBoard = (state) => {
    state.board = createBoard(theme.boardWidth, theme.boardHeight)
    state.generation = 0
}

const boardState = createSlice({
    slice: 'boardState',
    initialState: {
        board: createBoard(theme.boardWidth, theme.boardHeight),
        running: undefined,
        generation: 0,
	},
    reducers: {
      alterCell,
      evolve,
      startTimer,
      stopTimer,
      resetBoard,
    }
})

export default boardState