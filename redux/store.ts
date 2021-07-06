import { logger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import { createWrapper } from "next-redux-wrapper"

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
const store = createStore(reducer, applyMiddleware(...middlewares))
export default store
