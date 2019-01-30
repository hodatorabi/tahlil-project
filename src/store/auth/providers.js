import actions from 'src/store/auth/actions'
import {connect} from 'react-redux'


const authProvider = connect(
  (state) => {
    return {}
  }, (dispatch) => {
    return {
      setToken: (token: string) => dispatch(actions.setToken(token)),
      login: (username, password) => dispatch(actions.login({username, password})),
      logout: () => dispatch(actions.logout())
    }
  }
)

const providers = {
  auth: authProvider,
}

export default providers