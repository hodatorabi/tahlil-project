import actionTypes from 'src/store/actionTypes'
import {Constants} from '../../constants'
import Request from 'src/utils/request'


const actions = {
  getNonCashProjects: () => {
    return {
      types: actionTypes.GET_ALL_NON_CASH_PROJECTS,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.get(state, Constants.getNonCashProjects)
    }
  },
  getCashProjects: () => {
    return {
      types: actionTypes.GET_ALL_CASH_PROJECTS,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.get(state, Constants.getCashProjects)
    }
  },
  sendRequestToCharity: (charityID, projectID, message) => {
    return {
      types: actionTypes.SEND_REQUEST_TO_CHARITY,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.post(state, Constants.requestUrl + charityID + '/' + projectID + '/', {},
        {message},)
    }
  },
  getOutgoingRequests: () => {
    return {
      types: actionTypes.GET_OUTGOING_REQUESTS,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.get(state, Constants.outgoingRequestsUrl)
    }
  },
  getIncomingRequests: () => {
    return {
      types: actionTypes.GET_INCOMING_REQUESTS,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.get(state, Constants.incomingRequestsUrl)
    }
  },
  acceptProjectRequest: (requestID) => {
    return {
      types: actionTypes.ACCEPT_PROJECT_REQUEST,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.patch(state, Constants.requestResponseUrl + requestID + '/', {}, {accepted: true})
    }
  },
  rejectProjectRequest: (requestID, reason) => {
    return {
      types: actionTypes.REJECT_PROJECT_REQUEST,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.patch(state, Constants.requestResponseUrl + requestID + '/', {}, {
        accepted: false,
        rejectionReason: reason
      })
    }
  },
  payProject: (projectID, amount) => {
    return {
      types: actionTypes.PAY_PROJECT,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.post(state, Constants.payProjectUrl + projectID + '/', {}, {
        amount
      })
    }
  }

}

export default actions