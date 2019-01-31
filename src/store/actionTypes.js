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
  REMOVE_ABILITY: asyncActionTypeCreator('REMOVE_ABILITY')
}

export default actionTypes
