import React from 'react';

const SideBarComponent = function () {
  function active(e){
    const currentActiveMenu = e.currentTarget;
    const beforeActiveMenu = document.querySelector('.side-menu .item .link.on');
    const sidebar = document.querySelector('#sidebar');

    if(currentActiveMenu.classList.contains('on')) {
      currentActiveMenu.classList.remove('on');
      sidebar.classList.remove('on');
    } else {
      if(beforeActiveMenu !== null) {
        beforeActiveMenu.classList.remove('on');
      }
      currentActiveMenu.classList.add('on');
      sidebar.classList.add('on');
    }
  }

  return (
    <div id="sidebar">
      <ul className="side-menu">
        <li className="item"><a className="link" href="#" onClick={(e)=>{active(e)}}><i className="fas fa-list-ul"></i></a></li>
        <li className="item"><a className="link" href="#" onClick={(e)=>{active(e)}}><i className="far fa-star"></i></a></li>
        <li className="item"><a className="link" href="#" onClick={(e)=>{active(e)}}><i className="fas fa-store"></i></a></li>
        <li className="item"><a className="link" href="#" onClick={(e)=>{active(e)}}><i className="far fa-trash-alt"></i></a></li>
        <li className="item"><a className="link" href="#" onClick={(e)=>{active(e)}}><i className="fab fa-periscope"></i></a></li>
      </ul>
      <div className="side-detail">
        <div className="side-detail-contents">
          <a href="#">클릭해바바랑</a>
          
        </div>
      </div>
    </div>
  );
}

export default SideBarComponent;