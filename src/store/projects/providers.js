import {connect} from 'react-redux'
import actions from './actions'


const projectsProvider = connect(
  (state) => {
    return {
      nonCashProjects: state.projects.nonCashProjects,
      cashProjects: state.projects.cashProjects
    }
  }, (dispatch) => {
    return {
      getNonCashProjects: () => dispatch(actions.getNonCashProjects()),
      getCashProjects: () => dispatch(actions.getCashProjects()),
      sendRequestToCharity: (charityID, projectID, message) => dispatch(actions.sendRequestToCharity(charityID, projectID, message))
    }
  }
)

const providers = {
  projects: projectsProvider,
}

export default providers