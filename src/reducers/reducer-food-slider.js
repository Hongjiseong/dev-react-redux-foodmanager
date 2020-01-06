import {
  LOAD_FOOD,
  LOAD_RECOMMEND_FOOD
} from '../actions/_index';

const initState = {
  foods:[],
  recommendFoods:[]
}

// 이런식의 초기상태를 핸들링 해주면 리듀서가 훨씬 깔끔해집니다!

export default function(state = initState, action){
  switch(action.type){
    case LOAD_FOOD:
      // 초기값, 더할값, 더할값
      // 초기값을 비워주는 이유는 새로운 객체라는 표시입니다.
      // 새로운 객체로 바뀌었다 라는것이 인식되어야만 렌더링 함수를 호출하기 때문입니다.
      // 따라서 항상 초기값은 새로운 객체를 넣어 주고, 그다음 state 와 변경할 state 를 넣어주면 됩니다.
      return Object.assign({}, state, {foods : action.payload.data});
    case LOAD_RECOMMEND_FOOD:
      return  Object.assign({}, state, {recommendFoods : action.payload.data});
    default:
      return state;
  }
}

