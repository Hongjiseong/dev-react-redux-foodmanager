import React from 'react';

const IngredientDetail = function (props) {

  function ingredientStatus(expiryDate){
    const now = new Date();
    const ed = new Date(expiryDate);

    const status = ed - now;
    if(status > 1015000000) {
      return '정상';
    }else if(status <= 1015000000 && status > 0){
      return '위험';
    }else{
      return '상함';
    }
  }

  return (
    <div className="search-detail">
      <div className="sub-title">식재료 상세보기</div>
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
          <img src={props.ingredient.imageUrl} alt=""/>
        </div>
        <div className="info">
          <div className="type">종류 : <span>{props.ingredient.type}</span></div>
          <div className="type">이름 : <span>{props.ingredient.name}</span></div>
          <div className="type">양 : <span>{props.ingredient.mount}{props.ingredient.unit}</span></div>
          <div className="type">상태 : <span>{ingredientStatus(props.ingredient.expiryDate)}</span></div>
          <div className="type">구매일자 : <span>{props.ingredient.purchaseDate}</span></div>
          <div className="type">유통기한 : <span>{props.ingredient.expiryDate}</span></div>
        </div>
      </div>
    </div>
  );
}

export default IngredientDetail;