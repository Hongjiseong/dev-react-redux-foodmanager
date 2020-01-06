import React from 'react';

const SideBarComponent = function (props) {
  return (
    <div id="sidebar" className="on">
      <ul className="side-menu">
        <li className="item">
          <a className="link on" href="#" onClick={(e)=>{props.onClickMenu(e, "all")}}><i className="fas fa-list-ul"></i></a>
        </li>
        {/* <li className="item">
          <a className="link" href="#" onClick={(e)=>{props.onClickMenu(e, "favorite")}}><i className="far fa-star"></i></a>
        </li>
        <li className="item">
          <a className="link" href="#" onClick={(e)=>{props.onClickMenu(e, "store")}}><i className="fas fa-store"></i></a>
        </li>
        <li className="item">
          <a className="link" href="#" onClick={(e)=>{props.onClickMenu(e, "trash")}}><i className="far fa-trash-alt"></i></a>
        </li>
        <li className="item">
          <a className="link" href="#" onClick={(e)=>{props.onClickMenu(e, "map")}}><i className="fab fa-periscope"></i></a>
        </li> */}
      </ul>
      <div className="side-detail">
        <div className="side-detail-contents">
          <div>내가 찜한 요리</div>
          <div>- 클릭시 조리법으로 이동 (푸드슬라이드 미니버전) </div>
          <div>식재료 등록/삭제 이력</div>
          <div>- 식재료 등록/삭제 기록표 (식재료이름, 날짜)</div>
          <div>- 이름/날짜별 필터링 검색 가능</div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default SideBarComponent;