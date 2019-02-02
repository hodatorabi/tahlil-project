let asyncActionTypeCreator = (actionType) => {
  return {
    REQUEST: actionType + '_REQUEST',
    SUCCESS: actionType + '_SUCCESS',
    FAILURE: actionType + '_FAILURE',
  }
}

const actionTypes = {
  SET_TOKEN: 'SET_TOKEN',
  SET_IS_VOLUNTEER: 'SET_IS_VOLUNTEER',
  LOGOUT: 'LOGOUT',
  LOGIN: asyncActionTypeCreator('LOGIN'),
  VOLUNTEER_JOIN: asyncActionTypeCreator('VOLUNTEER_JOIN'),
  GET_PROFILE: asyncActionTypeCreator('GET_PROFILE'),
  GET_ABILITIES: asyncActionTypeCreator('GET_ABILITIES'),
  ADD_ABILITY: asyncActionTypeCreator('ADD_ABILITY'),
  REMOVE_ABILITY: asyncActionTypeCreator('REMOVE_ABILITY'),
  GET_FEEDBACK: asyncActionTypeCreator('GET_FEEDBACK'),
  GET_ALL_NON_CASH_PROJECTS: asyncActionTypeCreator('GET_ALL_NON_CASH_PROJECTS'),
  GET_ALL_CASH_PROJECTS: asyncActionTypeCreator('GET_ALL_CASH_PROJECTS'),
  SEND_REQUEST_TO_CHARITY: asyncActionTypeCreator('SEND_REQUEST_TO_CHARITY'),
  GET_OUTGOING_REQUESTS: asyncActionTypeCreator('GET_OUTGOING_REQUESTS'),
  GET_INCOMING_REQUESTS: asyncActionTypeCreator('GET_INCOMING_REQUESTS'),
  ACCEPT_PROJECT_REQUEST: asyncActionTypeCreator('ACCEPT_PROJECT_REQUEST'),
  REJECT_PROJECT_REQUEST: asyncActionTypeCreator('REJECT_PROJECT_REQUEST'),
  PAY_PROJECT: asyncActionTypeCreator('PAY_PROJECT'),
  GET_VOLUNTEER_TIME_SLOTS: asyncActionTypeCreator(('GET_VOLUNTEER_TIME_SLOTS')),
  ADD_AVAILABLE_SLOT: asyncActionTypeCreator('ADD_AVAILABLE_SLOT'),
  REMOVE_AVAILABLE_SLOT: asyncActionTypeCreator('REMOVE_AVAILABLE_SLOT'),

  GET_CHARITY_PROFILE: asyncActionTypeCreator('GET_CHARITY_PROFILE'),
  GET_CHARITY_OUTGOING_REQUESTS: asyncActionTypeCreator('GET_CHARITY_OUTGOING_REQUESTS'),
  GET_CHARITY_INCOMING_REQUESTS: asyncActionTypeCreator('GET_CHARITY_INCOMING_REQUESTS'),
  ACCEPT_VOLUNTEER_REQUEST: asyncActionTypeCreator('ACCEPT_VOLUNTEER_REQUEST'),
  REJECT_VOLUNTEER_REQUEST: asyncActionTypeCreator('REJECT_VOLUNTEER_REQUEST'),
  GET_CHARITY_FEEDBACK: asyncActionTypeCreator('GET_CHARITY_FEEDBACK')

}

export default actionTypes
