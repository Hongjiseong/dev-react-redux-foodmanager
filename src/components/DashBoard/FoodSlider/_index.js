import React from 'react';

import FoodSlider from './foodSlider.container';
import StaticFoodSlider from './foodSlider.component.static';

export default function (props) {
  if(props.MODE === 'PUBLE'){
    return (
      <StaticFoodSlider />
    );
  } else {
    return (
      <FoodSlider />
    );
  }
}