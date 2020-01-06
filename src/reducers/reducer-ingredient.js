import {
  LOAD_INGREDIENT,
  SELECT_INGREDIENT,
  DELETE_INGREDIENT
} from '../actions/_index';

let initState = {
  list: [],
  selectId: ""
}

export default function(state = initState, action){
  switch(action.type){
    case LOAD_INGREDIENT:
      return Object.assign({}, state, {list: action.payload.data});
    case SELECT_INGREDIENT:
      return Object.assign({}, state, {selectId: action.payload});
    case DELETE_INGREDIENT:
      return Object.assign({}, state, {list: action.payload.data});
    default:
      return state;
  }
}