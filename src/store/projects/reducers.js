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

const cashProjects = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_CASH_PROJECTS.SUCCESS:
      return action.response
    case actionTypes.LOGOUT:
      return []
    default:
      return state
  }
}

const outgoingRequests = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_OUTGOING_REQUESTS.SUCCESS:
      return action.response
    case actionTypes.LOGOUT:
      return []
    default:
      return state
  }
}

const reducers = combineReducers({
  nonCashProjects,
  cashProjects,
  outgoingRequests
})

export default reducers