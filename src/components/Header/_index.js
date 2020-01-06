// props
// - menu         : Object
// - menu.id      : String
// - menu.name    : String
// - selected     : String
// - onClickMenu  : Function

import React from 'react';
import Menu from './Menu/menu.container';
import Profile from './Profile/profile.container';
import Message from './Message/message.container';

import StaticMenu from './Menu/menu.component.static';
import StaticProfile from './Profile/profile.component.static';
import StaticMessage from './Message/message.component.static';

export default function (props) {
  if(props.MODE === 'PUBLE'){
    return (
      <div className="header">
        <StaticMenu />
        <StaticProfile />
        <StaticMessage />
      </div>
    );
  } else {
    return (
      <div className="header">
        <Menu />
        <Profile />
        <Message />
      </div>
    );
  }
}