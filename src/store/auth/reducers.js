import actionTypes from '../actionTypes'
import {combineReducers} from 'redux'
import {AsyncStorageRemoveItem, AsyncStorageSetItem} from '../../utils/asyncStorage'


const isLoggedIn = (state = false, action) => {
    switch (action.type) {
        case actionTypes.LOGIN.SUCCESS:
            return true
        case actionTypes.SET_TOKEN:
            return true
        case actionTypes.LOGOUT:
            return false
        default:
            return state
    }
}

const token = (state = null, action) => {
    let token = null
    switch (action.type) {
        case actionTypes.LOGIN.SUCCESS:
            token = action.response.token
            AsyncStorageSetItem('jwtToken', token)
                .catch((error) => {
                })
            return token
        case actionTypes.SET_TOKEN:
            token = action.token
            AsyncStorageSetItem('jwtToken', token)
                .catch((error) => {
                })
            return token
        case actionTypes.LOGOUT:
            AsyncStorageRemoveItem('jwtToken')
                .catch((error) => {
                })
            return null
        default:
            return state
    }
}


const reducers = combineReducers({
    isLoggedIn,
    token,
})

export default reducers