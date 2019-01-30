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
    LOGIN: asyncActionTypeCreator('LOGIN')
}

export default actionTypes
