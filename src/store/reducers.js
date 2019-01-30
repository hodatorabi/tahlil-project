import {combineReducers} from 'redux'
import Auth from 'src/store/auth'


const appReducer = combineReducers({
    auth: Auth.reducers,

})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer