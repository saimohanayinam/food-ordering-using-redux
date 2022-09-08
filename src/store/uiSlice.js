const { createSlice } = require("@reduxjs/toolkit");



const uiSlice =createSlice({
    name: 'ui',
    initialState: {cartisVisible: false},
    reducers: {
        toggle(State){
            State.cartisVisible = !State.cartisVisible
        }
    }
})

export const uiActions= uiSlice.actions

export default uiSlice