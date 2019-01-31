import {connect} from 'react-redux'
import actions from './actions'


const projectsProvider = connect(
  (state) => {
    return {
      nonCashProjects: state.projects.nonCashProjects,
      cashProjects: state.projects.cashProjects,
      outgoingRequests: state.projects.outgoingRequests,
      incomingRequests: state.projects.incomingRequests
    }
  }, (dispatch) => {
    return {
      getNonCashProjects: () => dispatch(actions.getNonCashProjects()),
      getCashProjects: () => dispatch(actions.getCashProjects()),
      sendRequestToCharity: (charityID, projectID, message) => dispatch(actions.sendRequestToCharity(charityID, projectID, message)),
      getOutgoingRequests: () => dispatch(actions.getOutgoingRequests()),
      getIncomingRequests: () => dispatch(actions.getIncomingRequests()),
      acceptProjectRequest: (requestID) => dispatch(actions.acceptProjectRequest(requestID)),
      rejectProjectRequest: (requestID, reason) => dispatch(actions.rejectProjectRequest(requestID, reason)),
      payProject: (requestId, amount) => dispatch(actions.payProject(requestId, amount))
    }
  }
)

const providers = {
  projects: projectsProvider,
}

export default providers