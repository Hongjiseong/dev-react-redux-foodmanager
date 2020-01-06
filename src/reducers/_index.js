import { combineReducers } from 'redux';
import sideBar from './reducer-sidebar';
import header from './reducer-header';
import ingredient from './reducer-ingredient';
import foodSlider from './reducer-food-slider';
import cooking from './reducer-cooking';

const rootReducer = combineReducers({
  sideBar,
  header,
  ingredient,
  foodSlider,
  cooking
})

export default rootReducer;