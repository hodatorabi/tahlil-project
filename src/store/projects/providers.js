import {connect} from 'react-redux'


const projectsProvider = connect(
  (state) => {
    return {
    }
  }, (dispatch) => {
    return {

    }
  }
)

const providers = {
  projects: projectsProvider,
}

export default providers