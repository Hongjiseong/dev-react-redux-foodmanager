import React from 'react';

const CookingComponent = function () {
  return (
    <div className="container">
      <div className="cooking">
        <div className="image-view">
          <img src="/resources/images/마파두부.jpg" alt="" />
        </div>
        <div className="process">
          <h2 className="sub-title">음식 만드는 순서</h2>
          <ul className="list">
            <li className="item">
              <div className="line-bar"></div>
              <div className="content">양념장 만들기</div>
            </li>
            <li className="item">
              <div className="line-bar"></div>
              <div className="content">두부 자르기</div>
            </li>
            <li className="item">
              <div className="line-bar"></div>
              <div className="content">부추와 고기를 볶기</div>
            </li>
            <li className="item">
              <div className="line-bar"></div>
              <div className="content">양념장과 두부와 고기를 넣고 끓이기</div>
            </li>
            <li className="item">
              <div className="line-bar"></div>
              <div className="content">기다립니다~</div>
            </li>
            <li className="item">
              <div className="line-bar"></div>
              <div className="content">기다립니다~</div>
            </li>
            <li className="item">
              <div className="line-bar"></div>
              <div className="content">기다립니다~</div>
            </li>
            <li className="item">
              <div className="line-bar"></div>
              <div className="content">기다립니다~</div>
            </li>
            <li className="item">
              <div className="line-bar"></div>
              <div className="content">기다립니다~</div>
            </li>
          </ul>
        </div>
        <div className="process-detail">
          <div className="title">양념장 만들기</div>
          <div className="description">
            <p>고추장 / 간장 / 깨 를 각각 한컵씩 넣고 섞습니다.</p>
            <iframe src="https://www.youtube.com/embed/FLGIPR54940" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>예쁘게 플레이팅 합니다.</p>
            <iframe src="https://www.youtube.com/embed/HihbHqFtLG8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookingComponent;