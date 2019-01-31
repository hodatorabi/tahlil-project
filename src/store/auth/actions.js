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
  getAbilities: () => {
    return {
      types: actionTypes.GET_ABILITIES,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.get(state, Constants.abilitiesUrl)
    }
  },
  addAbility: (id) => {
    return {
      types: actionTypes.ADD_ABILITY,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => {
        return Request.patch(state, Constants.profileUrl, {}, {abilities: [...state.auth.volunteer.abilities, id]})
      }
    }
  },

}

export default actions