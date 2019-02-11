import actionTypes from 'src/store/actionTypes'
import {Constants} from '../../constants'
import Request from 'src/utils/request'


const actions = {
  getNonCashProjects: () => {
    return {
      types: actionTypes.GET_ALL_NON_CASH_PROJECTS,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.get(state, Constants.getNonCashProjects),
    }
  },
  getCashProjects: () => {
    return {
      types: actionTypes.GET_ALL_CASH_PROJECTS,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.get(state, Constants.getCashProjects),
    }
  },
  sendRequestToCharity: (charityID, projectID, message) => {
    return {
      types: actionTypes.SEND_REQUEST_TO_CHARITY,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.post(state, Constants.requestUrl + charityID + '/' + projectID + '/', {},
        {message},),
    }
  },
  getOutgoingRequests: () => {
    return {
      types: actionTypes.GET_OUTGOING_REQUESTS,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.get(state, Constants.outgoingRequestsUrl),
    }
  },
  getIncomingRequests: () => {
    return {
      types: actionTypes.GET_INCOMING_REQUESTS,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.get(state, Constants.incomingRequestsUrl),
    }
  },
  acceptProjectRequest: (requestID) => {
    return {
      types: actionTypes.ACCEPT_PROJECT_REQUEST,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.patch(state, Constants.requestResponseUrl + requestID + '/', {}, {accepted: true}),
    }
  },
  rejectProjectRequest: (requestID, reason) => {
    return {
      types: actionTypes.REJECT_PROJECT_REQUEST,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.patch(state, Constants.requestResponseUrl + requestID + '/', {}, {
        accepted: false,
        rejectionReason: reason,
      }),
    }
  },
  payProject: (projectID, amount) => {
    return {
      types: actionTypes.PAY_PROJECT,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.post(state, Constants.payProjectUrl + projectID + '/', {}, {
        amount,
      }),
    }
  },

  getCharityOutgoingRequests: () => {
    return {
      types: actionTypes.GET_CHARITY_OUTGOING_REQUESTS,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.get(state, Constants.charityBaseUrl + Constants.outgoingRequestsUrl),
    }
  },
  getCharityIncomingRequests: () => {
    return {
      types: actionTypes.GET_CHARITY_INCOMING_REQUESTS,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.get(state, Constants.charityBaseUrl + Constants.incomingRequestsUrl),
    }
  },
  acceptVolunteerRequest: (requestID) => {
    return {
      types: actionTypes.ACCEPT_VOLUNTEER_REQUEST,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.patch(state, Constants.charityBaseUrl + Constants.requestResponseUrl + requestID + '/', {}, {accepted: true}),
    }
  },
  rejectVolunteerRequest: (requestID, reason) => {
    return {
      types: actionTypes.REJECT_VOLUNTEER_REQUEST,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.patch(state, Constants.charityBaseUrl + Constants.requestResponseUrl + requestID + '/', {}, {
        accepted: false, rejectionReason: reason,
      }),
    }
  },
  getCharityNonCashProjects: () => {
    return {
      types: actionTypes.GET_CHARITY_NON_CASH_PROJECTS,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.get(state, Constants.charityBaseUrl + Constants.getNonCashProjects),
    }
  },
  getCharityCashProjects: () => {
    return {
      types: actionTypes.GET_CHARITY_CASH_PROJECTS,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.get(state, Constants.charityBaseUrl + Constants.getCashProjects),
    }
  },
  getAllVolunteers: () => {
    return {
      types: actionTypes.GET_ALL_VOLUNTEERS,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.get(state, Constants.charityBaseUrl + Constants.getVolunteersUrl),
    }
  },
  sendRequestToVolunteer: (projectId, volunteerId, message) => {
    return {
      types: actionTypes.SEND_REQUEST_TO_VOLUNTEER,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.post(state, Constants.charityBaseUrl + Constants.getNonCashProjects + projectId + '/' + 'request/' + volunteerId + '/', {},
        {message},),
    }
  },
  sendFeedbackToVolunteer: (volunteerId, message, rating) => {
    return {
      types: actionTypes.SEND_FEEDBACK_TO_VOLUNTEER,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.post(state, Constants.charityBaseUrl + Constants.sendFeedbackUrl + volunteerId + '/', {},
        {comment: message, rating: rating},),
    }
  },
  getVolunteerNonCashProjects: () => {
    return {
      types: actionTypes.GET_VOLUNTEER_NON_CASH_PROJECTS,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.get(state, Constants.myNonCashProjectsUrl),
    }
  },
  getVolunteerCashProjects: () => {
    return {
      types: actionTypes.GET_VOLUNTEER_CASH_PROJECTS,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.get(state, Constants.myCashProjectsUrl),
    }
  },
  sendFeedbackToCharity: (charityId, message, rating) => {
    return {
      types: actionTypes.SEND_FEEDBACK_TO_CHARITY,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.post(state, Constants.giveFeedbackUrl + charityId + '/', {},
        {comment: message, rating: rating},),
    }
  },
  showCharityProfile: (charityId) => {
    return {
      types: actionTypes.SHOW_CHARITY_PROFILE,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.get(state, Constants.charityProfileUrl + charityId + '/'),
    }
  },
  createNonCashProject: (startDate, endDate, name, description, needMale, needFemale, minAge, maxAge, city, abilities) => {
    return {
      types: actionTypes.CREATE_NON_CASH_PROJECT,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.post(state, Constants.charityBaseUrl + Constants.createNonCashProject, {},
        {startDate, endDate, name, description, needMale, needFemale, minAge, maxAge, city, abilities}),
    }
  },
  createProjectTimeSlot: (item, projectId) => {
    return {
      types: actionTypes.CREATE_PROJECT_TIME_SLOT,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.post(state, Constants.charityBaseUrl + Constants.getNonCashProjects + projectId + Constants.volunteerTimeSlots + 'create/', {}, item),
    }
  },
  getProjectTimeSlots: (projectId) => {
    return {
      types: actionTypes.GET_PROJECT_TIME_SLOTS,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.get(state, Constants.charityBaseUrl + Constants.getNonCashProjects + projectId + Constants.volunteerTimeSlots),
    }
  },
  createCashProject: (startDate, endDate, name, description, targetAmount) => {
    return {
      types: actionTypes.CREATE_NON_CASH_PROJECT,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.post(state, Constants.charityBaseUrl + Constants.createCashProject, {},
        {startDate, endDate, name, description, targetAmount}),
    }
  },
  searchNonCashProjects: (filters) => {
    return {
      types: actionTypes.SEARCH_NON_CASH_PROJECTS,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.get(state, Constants.getNonCashProjects, filters),
    }
  },
  searchCashProjects: (filters) => {
    return {
      types: actionTypes.SEARCH_CASH_PROJECTS,
      shouldCallAPI: (state) => state.auth.isLoggedIn,
      callAPI: (state) => Request.get(state, Constants.getCashProjects, filters),
    }
  },
}

export default actions