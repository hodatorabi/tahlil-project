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

const incomingRequests = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_INCOMING_REQUESTS.SUCCESS:
      return action.response
    case actionTypes.LOGOUT:
      return []
    default:
      return state
  }
}

const charityOutgoingRequests = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_CHARITY_OUTGOING_REQUESTS.SUCCESS:
      return action.response
    case actionTypes.LOGOUT:
      return []
    default:
      return state
  }
}

const charityIncomingRequests = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_CHARITY_INCOMING_REQUESTS.SUCCESS:
      return action.response
    case actionTypes.LOGOUT:
      return []
    default:
      return state
  }
}

const charityNonCashProjects = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_CHARITY_NON_CASH_PROJECTS.SUCCESS:
      return action.response
    case actionTypes.LOGOUT:
      return []
    default:
      return state
  }
}

const charityCashProjects = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_CHARITY_CASH_PROJECTS.SUCCESS:
      return action.response
    case actionTypes.LOGOUT:
      return []
    default:
      return state
  }
}

const volunteers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_VOLUNTEERS.SUCCESS:
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
  outgoingRequests,
  incomingRequests,
  charityOutgoingRequests,
  charityIncomingRequests,
  charityNonCashProjects,
  charityCashProjects,
  volunteers
})

export default reducers