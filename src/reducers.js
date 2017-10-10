import { combineReducers } from "redux"
import { actionTypes } from "./actions"

function foo(state = [], action) {

  switch (action.type) {
    case actionTypes.CREATE_FOO:
      return [
        ...state,
        action.foo
      ]

    default:
      return state

  }

}

export default combineReducers({
  foo
})
