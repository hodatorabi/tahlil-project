import {combineReducers} from 'redux'
import Auth from 'src/store/auth'
import Projects from 'src/store/projects'


const appReducer = combineReducers({
  auth: Auth.reducers,
  projects: Projects.reducers
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer