// props
// - menu         : Object
// - menu.id      : String
// - menu.name    : String
// - selected     : String
// - onClickMenu  : Function

import React from 'react';

import IngredientList from './List/ingredientList.container';
import IngredientDetail from './Detail/ingredientDetail.container';

import StaticIngredientList from './List/ingredientList.component.static';
import StaticIngredientDetail from './Detail/ingredientDetail.component.static';

export default function (props) {
  if(props.MODE === 'PUBLE'){
    return (
      <div className="container">
        <StaticIngredientList />
        <StaticIngredientDetail />
      </div>
    );
  } else {
    return (
      <div className="container">
        <IngredientList />
        <IngredientDetail />
      </div>
    );
  }
}