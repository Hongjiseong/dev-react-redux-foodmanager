import React from 'react';

import StaticCooking from './cooking.component.static';
import Cooking from './cooking.container';

export default function (props) {
  if(props.MODE === 'PUBLE'){
    return (
      <StaticCooking />
    );
  } else {
    return (
      <Cooking />
    );
  }
}