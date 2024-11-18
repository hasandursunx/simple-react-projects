import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    /* backgroundColor: {
        primary: '#000',
        secondary: '#16181c',
        third: '#273340'
    },
    color: {
        primary: '#1d9bf0',
        secondary: '#8ecdf8',
        third : 'e7e9ea'
    },
    fontSize: 16 */

    backgroundColor: {
        primary: '#15202b',
        secondary: '#1e2732',
        third: '#263340'
    },
    color: {
        primary: '#1d9bf0',
        secondary: '#8ecdf8',
        base: '#f7f9f9'
    },
    fontSize: 16

}

const appearance = createSlice({
    name: 'appearance',
    initialState,
    reducers: {
        _setBackgroundColor: (state, action) => {
            state.backgroundColor = action.payload
        },
        _setColor: state => {
            state.color = action.payload
        },
        _setFontsize: state => {
            state.fontSize = action.payload
        }
    }
})

export const { _setBackgroundColor, _setColor, _setFontsize } = appearance.actions
export default appearance.reducer

