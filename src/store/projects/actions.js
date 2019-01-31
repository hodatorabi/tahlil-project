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
  }

}

export default actions