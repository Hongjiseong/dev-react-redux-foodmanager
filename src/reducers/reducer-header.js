import {
  FETCH_MESSAGE, LOAD_MENU
} from '../actions/_index';

let initState = {
  menu: [],
  profile: {},
  message: []
}

export default function(state = initState, action){
  switch(action.type){
    case LOAD_MENU:
      return Object.assign(state, {menu: action.payload.data});
    // case LOAD_PROFILE:
    //   return Object.assign(state, {profile: action.payload.data});
    case FETCH_MESSAGE:
      return Object.assign(state, {message: action.payload.data});
    default:
      return state;
  }
}