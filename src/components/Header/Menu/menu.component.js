// props
// - menu         : Object
// - menu.id      : String
// - menu.name    : String
// - selected     : String
// - onClickMenu  : Function

import React from 'react';

const MenuComponent = function (props) {
  return (
    <ul className="tab-menu">
      {menus.map((menu) => {(
        <li className="item" key={menu.id}>
          <a className={props.selected === menu.id ? 'link on':'link'}
             href="#"
             onClick={props.onClickMenu(menu.id)}
          >{menu.name}</a>
        </li>
      )})}
    </ul>
  );
}

export default MenuComponent;