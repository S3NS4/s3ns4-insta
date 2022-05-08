import { configureStore } from '@reduxjs/toolkit'
import modalStateReducer from './features/modalState'

const store = configureStore({
  reducer: {
    modalState: modalStateReducer,
  },
})

export default store
