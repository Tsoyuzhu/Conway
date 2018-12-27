import { configureStore } from 'redux-starter-kit'
import boardState from './board'

const store = configureStore({
    reducer: {
        boardState: boardState.reducer
    }
})
export default store