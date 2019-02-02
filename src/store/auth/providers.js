import actions from 'src/store/auth/actions'
import {connect} from 'react-redux'


const authProvider = connect(
  (state) => {
    return {
      volunteer: state.auth.volunteer,
      isVolunteer: state.auth.isVolunteer,
      abilities: state.auth.abilities,
      feedbacks: state.auth.feedbacks,
      volunteerTimeSlots: state.auth.volunteerTimeSlots,

      charity: state.auth.charity,
      charityFeedbacks: state.auth.charityFeedbacks
    }
  }, (dispatch) => {
    return {
      setToken: (token) => dispatch(actions.setToken(token)),
      setIsVolunteer: (isVolunteer) => dispatch(actions.setIsVolunteer(isVolunteer)),
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
      removeAvailableSlot: (id) => dispatch(actions.removeAvailableSlot(id)),

      getCharityProfile: () => dispatch(actions.getCharityProfile()),
      getCharityFeedbacks: () => dispatch(actions.getCharityFeedbacks())
    }
  },
)

const providers = {
  auth: authProvider,
}

export default providers