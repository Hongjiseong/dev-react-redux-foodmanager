import React from 'react';

import SideBar from './sideBar.container';
import StaticSideBar from './sideBar.component.static';

export default function (props) {
  if(props.MODE === 'PUBLE'){
    return (
      <StaticSideBar />
    );
  } else {
    return (
      <SideBar />
    );
  }
}