let asyncActionTypeCreator = (actionType) => {
  return {
    REQUEST: actionType + '_REQUEST',
    SUCCESS: actionType + '_SUCCESS',
    FAILURE: actionType + '_FAILURE',
  }
}

const actionTypes = {
  SET_TOKEN: 'SET_TOKEN',
  LOGOUT: 'LOGOUT',
  LOGIN: asyncActionTypeCreator('LOGIN'),
  GET_PROFILE: asyncActionTypeCreator('GET_PROFILE'),
  GET_ABILITIES: asyncActionTypeCreator('GET_ABILITIES'),
  ADD_ABILITY: asyncActionTypeCreator('ADD_ABILITY'),
  REMOVE_ABILITY: asyncActionTypeCreator('REMOVE_ABILITY'),
  GET_FEEDBACK: asyncActionTypeCreator('GET_FEEDBACK'),
  GET_ALL_NON_CASH_PROJECTS: asyncActionTypeCreator('GET_ALL_NON_CASH_PROJECTS'),
  GET_ALL_CASH_PROJECTS: asyncActionTypeCreator('GET_ALL_CASH_PROJECTS'),
  SEND_REQUEST_TO_CHARITY: asyncActionTypeCreator('SEND_REQUEST_TO_CHARITY')
}

export default actionTypes
