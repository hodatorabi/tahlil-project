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
  removeAbility: (id) => {
    return {
      types: actionTypes.REMOVE_ABILITY,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => {
        let array = state.auth.volunteer.abilities
        for (let i = 0; i < array.length; i++) {
          if (array[i] === id) {
            array.splice(i, 1)
          }
        }

        return Request.patch(state, Constants.profileUrl, {}, {abilities: array})
      }
    }
  }

}

export default actions