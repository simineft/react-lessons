import { combineReducers } from "redux";
import { CHANGE_STYLE } from "./actions"

export const changeStyle = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_STYLE:
      return { 
        ...state, 
        [action.element]: action.styles 
      }
    default:
      return state;
  };
}

export default combineReducers({
  styles: changeStyle
})
