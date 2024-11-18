import { configureStore } from '@reduxjs/toolkit'
import auth from './auth/auth'
import modal from './modal/modal'
import appearance from './appearance/appearance'

const store = configureStore({
    reducer: {
        auth,
        modal,
        appearance,

    }
})

export default store