import _ from 'lodash'


export function makeActionCreator(type, ...argNames) {
    return function (...args) {
        const action = {type}
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        })
        return action
    }
}

export function callAPIMiddleware({dispatch, getState}) {
    return next => action => {
        const {types, callAPI, shouldCallAPI = () => true, payload = {}} = action
        const store = getState()

        if (!types) {
            return next(action)
        }

        if (
            types === null ||
            typeof types !== 'object' ||
            types instanceof Array
        ) {
            return Promise.reject(Error('Expected an dict of three string types.'))
        }

        if (typeof callAPI !== 'function') {
            return Promise.reject(Error('Expected callAPI to be a function.'))
        }

        if (!shouldCallAPI(store)) {
            return Promise.reject(Error('API call not allowed.'))
        }

        dispatch(
            _.assign({}, payload, {
                type: types.REQUEST
            })
        )

        return callAPI(store).then(response => {
            dispatch(
                _.assign({}, payload, {
                    response,
                    type: types.SUCCESS
                })
            )
            return response
        }).catch(error => {
            dispatch(
                _.assign({}, payload, {
                    error,
                    type: types.FAILURE
                })
            )
            return Promise.reject(error)
        })
    }
}
