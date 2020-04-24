import axios from 'axios'

const GET_USERS_LIST = 'GET_USERS_LIST'
const getUsersUrl = 'https://randomuser.me/api/?results=10'

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST: {
      return {
        ...state,
        list: action.list
      }
    }
    default:
      return state
  }
}

export function getUsersList() {
  return (dispatch) => {
    axios
      .get(getUsersUrl)
      .then(({ data }) => data)
      .then(({ results }) => {
        // eslint-disable-next-line no-console
        console.log(results)
        dispatch({
          list: results,
          type: GET_USERS_LIST
        })
      })
  }
}
