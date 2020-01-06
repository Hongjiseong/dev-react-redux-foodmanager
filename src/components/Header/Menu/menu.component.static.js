import React from 'react';
import { Link } from "react-router-dom";

const MenuComponent = function (props) {

  function active (e) {
    document.querySelector('.tab-menu .item .link.on').classList.remove('on');
    e.currentTarget.classList.add('on');
  }

  return (
    <ul className="tab-menu">
      <li className="item">
        <Link to="/" className="link on" onClick={(e)=>{active(e);}}>Ingredient</Link>
      </li>
      <li className="item">
        <Link to="/foodSlider" className="link" onClick={(e)=>{active(e);}}>FoodSlider</Link>
      </li>
      <li className="item">
        <Link to="/cooking" className="link" onClick={(e)=>{active(e);}}>Cooking</Link>
      </li>
    </ul>
  );
}

export default MenuComponent;