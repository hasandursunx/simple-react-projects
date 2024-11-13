import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAcount: {
        id: 1,
        username: 'hasanxyz',
        fullname: 'Hasan Dursun',
        avatar: 'https://pbs.twimg.com/profile_images/1855975183145684992/Z5S4SjBZ_400x400.jpg'
    },
    accounts: []

}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        _addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccont: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if (state.currentAcount && action.payload === state.currentAcount.id) {
                this._setCurrentAcount(false)
            }
        },
        _setCurrentAcount: (state, action) => {
            state.currentAcount = action.payload
        }
    }
})

export const { _addAccount, _removeAccont, _setCurrentAcount } = auth.actions
export default auth.reducer

