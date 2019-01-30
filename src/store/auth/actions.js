import actionTypes from 'src/store/actionTypes'
import {makeActionCreator} from '../../utils/redux'
import {Constants} from '../../constants'
import Request from 'src/utils/request'


const actions = {
  logout: makeActionCreator(actionTypes.LOGOUT),
  setToken: makeActionCreator(actionTypes.SET_TOKEN, 'token'),
  login: ({username, password}) => {
    return {
      types: actionTypes.LOGIN,
      shouldCallAPI: (state) => !state.auth.isLoggedIn,
      callAPI: (state) => Request.post(state, Constants.loginUrl, {},
        {username, password}, false)
    }
  },
  getProfile: () => {
    return {
      types: actionTypes.GET_PROFILE,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.get(state, Constants.profileUrl)
    }
  },

}

export default actions