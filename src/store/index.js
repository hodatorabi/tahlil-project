import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'src/store/reducers'
import {callAPIMiddleware} from 'src/utils/redux'

const enhancers = []
const middleware = [
    thunk,
    callAPIMiddleware,
]

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

export const store = createStore(
    rootReducer,
    composedEnhancers,
)
