import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import usersList from './UsersList'

const createRootReducer = (history) =>
  combineReducers({
    usersList,
    router: connectRouter(history)
  })

export default createRootReducer
