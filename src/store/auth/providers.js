import actions from 'src/store/auth/actions'
import {connect} from 'react-redux'


const authProvider = connect(
  (state) => {
    return {
      volunteer: state.auth.volunteer,
      abilities: state.auth.abilities,
    }
  }, (dispatch) => {
    return {
      setToken: (token) => dispatch(actions.setToken(token)),
      login: (username, password) => dispatch(actions.login({username, password})),
      logout: () => dispatch(actions.logout()),
      getProfile: () => dispatch(actions.getProfile()),
      getAbilities: () => dispatch(actions.getAbilities()),
      addAbility: (id) => dispatch(actions.addAbility(id)),
      removeAbility: (id) => dispatch(actions.removeAbility(id))
    }
  }
)

const providers = {
  auth: authProvider,
}

export default providers