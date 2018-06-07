import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import ReduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import homeReducer from './components/home/homeReducer'

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
})

const Store = createStore(combineReducers({homeReducer:homeReducer}),
composeWithDevTools(
  applyMiddleware(
    ReduxThunk,
    logger
  ),
))

export default Store