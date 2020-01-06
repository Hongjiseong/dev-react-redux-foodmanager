import React from 'react';
import { useHistory } from "react-router-dom";

const FoodSliderComponent = function (props) {
  const history = useHistory();
  
  // 오토플레이 - 컴포넌트디드마운트(생성 후 셋 스테이트에 담기), 컴포넌트윌마운트(해제)
  // const auto = setInterval(function(){
  //   moveCard(-1, 400);
  // }, 4000);

  // 이동함수
  function moveCard(dir, movePixel){
    const cardList = document.querySelectorAll('.card-slider>div');
    const size = cardList.length;

    for(let i=0; i<size; i++){
      let currentLeft = cardList[i].style.left;
      const end = currentLeft.indexOf('px');
      currentLeft = Number(currentLeft.substring(0, end));

      const leftPixel = currentLeft + (dir)*movePixel;
      cardList[i].style.left = `${leftPixel}px`;
    }
  }

  return (
    <div className="container">
      <div className="card-slider">
        <a className="move left" onClick={()=>{moveCard(1, 400)}}><i className="fas fa-chevron-left"></i></a>
        <a className="move right" onClick={()=>{moveCard(-1, 400)}}><i className="fas fa-chevron-right"></i></a>
        {props.foods.map((food, i) => (
          <div className="food-card" style={{left: i*400+'px'}} key={food.id}
               onClick={()=>{
                  props.selectFood(food);
                  document.querySelector('.tab-menu .item .link.on').classList.remove('on');
                  document.querySelector('.tab-menu .item:nth-child(3) .link').classList.add('on');
                  history.push("/cooking");
               }}>
            <div className="food-image">
              <img src={food.url} alt="음식 이미지" height="500"/>
              <div className="food-name">{food.name}</div>
            </div>
            <div className="food-info">
              <div className="line"></div>
              <p>{food.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodSliderComponent;