import board from './board'

export const toggleTimer = (time = 300) => (dispatch, getState) => {
	const { boardState: { running } } = getState()
	if (running) {
		clearInterval(running)
		dispatch(board.actions.stopTimer())
	} else {
		dispatch(board.actions.evolve())
		const interval = setInterval(() => dispatch(board.actions.evolve()), time)
		dispatch(board.actions.startTimer(interval))
	}
}
