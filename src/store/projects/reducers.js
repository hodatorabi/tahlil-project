import {combineReducers} from 'redux'
import actionTypes from '../actionTypes'

const nonCashProjects = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_NON_CASH_PROJECTS.SUCCESS:
      return action.response
    case actionTypes.LOGOUT:
      return []
    default:
      return state
  }
}

const reducers = combineReducers({
  nonCashProjects

})

export default reducers