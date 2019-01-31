import {connect} from 'react-redux'
import actions from './actions'


const projectsProvider = connect(
  (state) => {
    return {
      nonCashProjects: state.projects.nonCashProjects
    }
  }, (dispatch) => {
    return {
      getNonCashProjects: () => dispatch(actions.getNonCashProjects())
    }
  }
)

const providers = {
  projects: projectsProvider,
}

export default providers