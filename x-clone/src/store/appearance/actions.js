import store from '../store'
import { _setColor, _setBackgroundColor, _setFontsize, _setBoxShadow } from './appearance'

export const setBackgroundColor = data => store.dispatch(_setBackgroundColor(data))
export const setColor = data => store.dispatch(_setColor(data))
export const setFontsize = data => store.dispatch(_setFontsize(data))
export const setBoxShadow = data => store.dispatch(_setBoxShadow(data))


