import React from 'react';

const IngredientDetail = function () {
  return (
    <div className="search-detail">
      <div className="sub-title">Details</div>
      <div className="card">
        <div className="hover-filter">
          <div className="container">
            <div>
              <p>추천요리</p>
              <p>보러가기</p>
            </div>
          </div>
        </div>
        <div className="image">
          <img src="./resources/images/orange.jpg" alt=""/>
        </div>
        <div className="info">
          <div className="type">종류 : 과일</div>
          <div className="type">이름 : 귤</div>
          <div className="type">양 : 3kg</div>
          <div className="type">상태 : 정상</div>
          <div className="type">구매일자 : 2019-12-01</div>
          <div className="type">유통기한 : 2020-01-01</div>
        </div>
      </div>
    </div>
  );
}

export default IngredientDetail;