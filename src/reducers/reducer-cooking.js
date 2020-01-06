import {
  SELECT_FOOD
} from '../actions/_index';

export default function(state = {}, action){
  switch(action.type){
    case SELECT_FOOD:
      return action.payload;
    default:
      return state;
  }
}