import actionTypes from 'src/store/actionTypes'
import {makeActionCreator} from '../../utils/redux'

const actions = {
    logout: makeActionCreator(actionTypes.LOGOUT),
    setToken: makeActionCreator(actionTypes.SET_TOKEN, 'token'),
    login: ({username, password}) => {
        return {
            types: actionTypes.LOGIN,
            shouldCallAPI: (state) => !state.auth.isLoggedIn,
            callAPI: (state) => Request.post(state, Constants.otpLoginUrl, {},
                {username, password}, false)
        }
    },

}

export default actions