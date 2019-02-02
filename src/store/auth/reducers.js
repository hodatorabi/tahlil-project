import actionTypes from '../actionTypes'
import {combineReducers} from 'redux'
import {AsyncStorageRemoveItem, AsyncStorageSetItem} from '../../utils/asyncStorage'
import {listToDict} from '../../utils/dictionary'


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

const isVolunteer = (state = null, action) => {
  let isVolunteer = null
  switch (action.type) {
    case actionTypes.LOGIN.SUCCESS:
      console.log('action.response.isVolunteer', action.response.isVolunteer)
      isVolunteer = action.response.isVolunteer ? 'true' : 'false'
      AsyncStorageSetItem('isVolunteer', isVolunteer)
        .catch((error) => {
          console.log('set error', error)
        })
      return action.response.isVolunteer
    case actionTypes.SET_IS_VOLUNTEER:
      isVolunteer = action.isVolunteer
      AsyncStorageSetItem('isVolunteer', isVolunteer)
        .catch((error) => {
        })
      return isVolunteer === 'true'
    case actionTypes.LOGOUT:
      AsyncStorageRemoveItem('isVolunteer')
        .catch((error) => {
        })
      return null
    default:
      return state
  }
}

const volunteer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_PROFILE.SUCCESS:
    case actionTypes.ADD_ABILITY.SUCCESS:
    case actionTypes.REMOVE_ABILITY.SUCCESS:
      return action.response
    case actionTypes.LOGOUT:
      return {}
    default:
      return state
  }
}

const abilities = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_ABILITIES.SUCCESS:
      return listToDict(action.response)
    case actionTypes.LOGOUT:
      return {}
    default:
      return state
  }
}

const feedbacks = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_FEEDBACK.SUCCESS:
      return action.response
    case actionTypes.LOGOUT:
      return []
    default:
      return state

  }
}

const volunteerTimeSlots = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_VOLUNTEER_TIME_SLOTS.SUCCESS:
      let array = action.response
      array.sort((a, b) => {
        return a.id - b.id
      })
      return array
    case actionTypes.LOGOUT:
      return []
    default:
      return state

  }
}

const reducers = combineReducers({
  isLoggedIn,
  token,
  isVolunteer,
  volunteer,
  abilities,
  feedbacks,
  volunteerTimeSlots,
})

export default reducers