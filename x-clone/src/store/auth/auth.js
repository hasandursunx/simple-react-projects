import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAccount: {
        id: 1,
        username: 'hasanxyz',
        fullname: 'Hasan Dursun',
        avatar: 'https://pbs.twimg.com/profile_images/1855975183145684992/Z5S4SjBZ_400x400.jpg'
    },
    accounts: [
        {
            id: 1,
            username: 'hasanxyz',
            fullname: 'Hasan Dursun',
            avatar: 'https://pbs.twimg.com/profile_images/1855975183145684992/Z5S4SjBZ_400x400.jpg'
        },
        {
            id: 2,
            username: 'ronaldo',
            fullname: 'Cristiano Ronaldo',
            avatar: 'https://pbs.twimg.com/profile_images/1594446880498401282/o4L2z8Ay_400x400.jpg'
        },
    ]

}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        _addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if (state.currentAccount && action.payload === state.currentAccount.id) {
                this.currentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions
export default auth.reducer

