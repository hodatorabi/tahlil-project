import {connect} from 'react-redux'
import actions from './actions'


const projectsProvider = connect(
  (state) => {
    return {
      nonCashProjects: state.projects.nonCashProjects,
      cashProjects: state.projects.cashProjects,
      outgoingRequests: state.projects.outgoingRequests
    }
  }, (dispatch) => {
    return {
      getNonCashProjects: () => dispatch(actions.getNonCashProjects()),
      getCashProjects: () => dispatch(actions.getCashProjects()),
      sendRequestToCharity: (charityID, projectID, message) => dispatch(actions.sendRequestToCharity(charityID, projectID, message)),
      getOutgoingRequests: () => dispatch(actions.getOutgoingRequests())
    }
  }
)

const providers = {
  projects: projectsProvider,
}

export default providers