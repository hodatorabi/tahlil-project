import actions from 'src/store/auth/actions'
import {connect} from 'react-redux'


const authProvider = connect(
  (state) => {
    return {
      volunteer: state.auth.volunteer,
      abilities: state.auth.abilities,
      feedbacks: state.auth.feedbacks,
      volunteerTimeSlots: state.auth.volunteerTimeSlots,
    }
  }, (dispatch) => {
    return {
      setToken: (token) => dispatch(actions.setToken(token)),
      login: (username, password) => dispatch(actions.login({username, password})),
      volunteerJoin: (username, password, name, gender, age, phoneNumber, city) => dispatch(actions.volunteerJoin(username, password, name, gender, age, phoneNumber, city)),
      logout: () => dispatch(actions.logout()),
      getProfile: () => dispatch(actions.getProfile()),
      getAbilities: () => dispatch(actions.getAbilities()),
      addAbility: (id) => dispatch(actions.addAbility(id)),
      removeAbility: (id) => dispatch(actions.removeAbility(id)),
      getFeedbacks: () => dispatch(actions.getFeedbacks()),
      getVolunteerTimeSlots: () => dispatch(actions.getVolunteerTimeSlots()),
      addAvailableSlot: (id) => dispatch(actions.addAvailableSlot(id)),
    }
  },
)

const providers = {
  auth: authProvider,
}

export default providers