import {connect} from 'react-redux'
import actions from './actions'


const projectsProvider = connect(
  (state) => {
    return {
      nonCashProjects: state.projects.nonCashProjects,
      cashProjects: state.projects.cashProjects,
      outgoingRequests: state.projects.outgoingRequests,
      incomingRequests: state.projects.incomingRequests,
      charityOutgoingRequests: state.projects.charityOutgoingRequests,
      charityIncomingRequests: state.projects.charityIncomingRequests,
      charityNonCashProjects: state.projects.charityNonCashProjects,
      charityCashProjects: state.projects.charityCashProjects,
      volunteers: state.projects.volunteers,
      volunteerNonCashProjects: state.projects.volunteerNonCashProjects,
      volunteerCashProjects: state.projects.volunteerCashProjects,
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
      payProject: (requestId, amount) => dispatch(actions.payProject(requestId, amount)),
      sendFeedbackToCharity: (charityId, message, rating) => dispatch(actions.sendFeedbackToCharity(charityId, message, rating)),
      showCharityProfile: (charityId) => dispatch(actions.showCharityProfile(charityId)),

      getCharityOutgoingRequests: () => dispatch(actions.getCharityOutgoingRequests()),
      getCharityIncomingRequests: () => dispatch(actions.getCharityIncomingRequests()),
      acceptVolunteerRequest: (requestID) => dispatch(actions.acceptVolunteerRequest(requestID)),
      rejectVolunteerRequest: (requestID, reason) => dispatch(actions.rejectVolunteerRequest(requestID, reason)),
      getCharityNonCashProjects: () => dispatch(actions.getCharityNonCashProjects()),
      getCharityCashProjects: () => dispatch(actions.getCharityCashProjects()),
      getAllVolunteers: () => dispatch(actions.getAllVolunteers()),
      sendRequestToVolunteer: (projectId, volunteerId, message) => dispatch(actions.sendRequestToVolunteer(projectId, volunteerId, message)),
      sendFeedbackToVolunteer: (volunteerId, message, rating) => dispatch(actions.sendFeedbackToVolunteer(volunteerId, message, rating)),
      getVolunteerNonCashProjects: () => dispatch(actions.getVolunteerNonCashProjects()),
      getVolunteerCashProjects: () => dispatch(actions.getVolunteerCashProjects()),

      createNonCashProject: (startDate, endDate, name, description, needMale, needFemale, minAge, maxAge, city, abilities) => dispatch(actions.createNonCashProject(startDate, endDate, name, description, needMale, needFemale, minAge, maxAge, city, abilities)),
      createProjectTimeSlot: (item, projectId) => dispatch(actions.createProjectTimeSlot(item, projectId)),
      getProjectTimeSlots: (projectId) => dispatch(actions.getProjectTimeSlots(projectId)),
    }
  },
)

const providers = {
  projects: projectsProvider,
}

export default providers