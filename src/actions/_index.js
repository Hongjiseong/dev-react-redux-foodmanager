import axios from 'axios';

// const ROOT_URL = 'http://localhost:3000';
const ROOT_URL = 'http://dev-node-rest-api.herokuapp.com';

// Header
export const LOAD_MENU = 'LOAD_MENU';
export function loadMenu() {
  const request = axios.get(`${ROOT_URL}/menus`);
  return {
    type: LOAD_HEADER,
    payload: request
  };
}
export const FETCH_MESSAGE = 'FETCH_MESSAGE';
export function fetchMessage() {
  const request = axios.get(`${ROOT_URL}/messages`);
  return {
    type: FETCH_MESSAGE,
    payload: request
  };
}
export const LOAD_PROFILE = 'LOAD_PROFILE';
export function loadProfile() {
  const request = axios.get(`${ROOT_URL}/messages`);
  return {
    type: FETCH_MESSAGE,
    payload: request
  };
}

// Ingredient
export const LOAD_INGREDIENT = 'LOAD_INGREDIENT';
export function loadIngredient(search) {
  const searchValue = search || "";
  const request = axios.get(`${ROOT_URL}/ingredient?limit=100&search=${searchValue}`);
  return {
    type: LOAD_INGREDIENT,
    payload: request
  };
}
export const SELECT_INGREDIENT = 'SELECT_INGREDIENT';
export function selectIngredient(id) {
  return {
    type: SELECT_INGREDIENT,
    payload: id
  };
}
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export function deleteIngredient(arrayData) {
  const request = axios.put(`${ROOT_URL}/ingredient?deleted=Y`, arrayData);
  return {
    type: DELETE_INGREDIENT,
    payload: request
  };
}

// Food
export const LOAD_FOOD = 'LOAD_FOOD';
export function loadFood() {
  const request = axios.get(`${ROOT_URL}/food`);
  return {
    type: LOAD_FOOD,
    payload: request
  };
}
export const SELECT_FOOD = 'SELECT_FOOD';
export function selectFood(food) {
  return {
    type: SELECT_FOOD,
    payload: food
  };
}
export const LOAD_RECOMMEND_FOOD = 'LOAD_RECOMMEND_FOOD';
export function loadRecommendFood() {
  const request = axios.get(`${ROOT_URL}/food?recommend=Y`);
  return {
    type: LOAD_RECOMMEND_FOOD,
    payload: request
  };
}

// SideBar
export const LOAD_FAVORITE_FOODS = 'LOAD_FAVORITE_FOODS';
export function loadFavoriteFoods() {
  const request = axios.get(`${ROOT_URL}/food?favorite=Y`);
  return {
    type: LOAD_FAVORITE_FOODS,
    payload: request
  };
}
export const LOAD_PURCHASE_INGREDIENTS = 'LOAD_PURCHASE_INGREDIENTS';
export function loadPurchaseIngredients() {
  const request = axios.get(`${ROOT_URL}/ingredient?purchase=Y`);
  return {
    type: LOAD_PURCHASE_INGREDIENTS,
    payload: request
  };
}
export const LOAD_THROW_AWAY_INGREDIENTS = 'LOAD_THROW_AWAY_INGREDIENTS';
export function loadThrowAwayIngredients() {
  const request = axios.get(`${ROOT_URL}/ingredient?throwaway=Y`);
  return {
    type: LOAD_THROW_AWAY_INGREDIENTS,
    payload: request
  };
}
export const LOAD_LOCATIONS = 'LOAD_LOCATIONS';
export function loadLocations() {
  const request = axios.get(`${ROOT_URL}/location`);
  return {
    type: LOAD_LOCATIONS,
    payload: request
  };
}
export const SELECT_SIDE_MENU = 'SELECT_SIDE_MENU';
export function selectSideMenu(name) {
  return {
    type: SELECT_SIDE_MENU,
    payload: name
  };
}
