import { createSlice } from '@reduxjs/toolkit'

export const modalStateSlice = createSlice({
  name: 'modalState',
  initialState: {
    value: false,
  },

  reducers: {
    open: (state) => {
      state.value = true
    },
    close: (state) => {
      state.value = false
    },
  },
})

export const { open, close } = modalStateSlice.actions

export default modalStateSlice.reducer
