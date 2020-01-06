import {
  LOAD_FAVORITE_FOODS,
  LOAD_PURCHASE_INGREDIENTS,
  LOAD_THROW_AWAY_INGREDIENTS,
  LOAD_LOCATIONS,
  SELECT_SIDE_MENU
} from '../actions/_index';

let initState = {
  favoriteFoods: [],
  purchaseIngredients: [],
  throwAwayIngredients: [],
  locations: [],
  selectedMenuName: ""
}

export default function(state = initState, action){
  switch(action.type){
    case LOAD_FAVORITE_FOODS:
      return Object.assign({}, state, {favorite: action.payload.data});
    case LOAD_PURCHASE_INGREDIENTS:
      return Object.assign({}, state, {purchase: action.payload.data});
    case LOAD_THROW_AWAY_INGREDIENTS:
      return Object.assign({}, state, {throwAway: action.payload.data});
    case LOAD_LOCATIONS:
      return Object.assign({}, state, {location: action.payload.data});
    case SELECT_SIDE_MENU:
      return Object.assign({}, state, {selectedMenuName: action.payload});
    default:
      return state;
  }
}