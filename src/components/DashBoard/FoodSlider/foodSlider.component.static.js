import React from 'react';

const FoodSliderComponent = function () {
  
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
        <div className="food-card" style={{left: '0px'}}>
          <div className="food-image">
            <img src="/resources/images/마파두부.jpg" alt="음식 이미지" height="500"/>
            <div className="food-name">얼큰한 마파두부</div>
          </div>
          <div className="food-info">
            <div className="line"></div>
            <p>말랑한 두부와 얼큰한 국물이 숙취를 도와줍니다.</p>
            <p>집에 열무김치나 동치미가 있다면 같이 드셔보시는 것을 추천합니다!</p>
          </div>
        </div>
        <div className="food-card" style={{left: '400px'}}>
          <div className="food-image">
            <img src="/resources/images/볶음라면.jpg" alt="음식 이미지" height="500"/>
            <div className="food-name">고소한 볶음라면</div>
          </div>
          <div className="food-info">
            <div className="line"></div>
            <p>말랑한 두부와 얼큰한 국물이 숙취를 도와줍니다.</p>
            <p>집에 열무김치나 동치미가 있다면 같이 드셔보시는 것을 추천합니다!</p>
          </div>
        </div>
        <div className="food-card" style={{left: '800px'}}>
          <div className="food-image">
            <img src="/resources/images/꽁치조림.jpg" alt="음식 이미지" height="500"/>
            <div className="food-name">밥도둑 꽁치조림</div>
          </div>
          <div className="food-info">
            <div className="line"></div>
            <p>말랑한 두부와 얼큰한 국물이 숙취를 도와줍니다.</p>
            <p>집에 열무김치나 동치미가 있다면 같이 드셔보시는 것을 추천합니다!</p>
          </div>
        </div>
        <div className="food-card" style={{left: '1200px'}}>
          <div className="food-image">
            <img src="/resources/images/삼겹살볶음.jpg" alt="음식 이미지" height="500"/>
            <div className="food-name">든든한 삼겹살볶음</div>
          </div>
          <div className="food-info">
            <div className="line"></div>
            <p>말랑한 두부와 얼큰한 국물이 숙취를 도와줍니다.</p>
            <p>집에 열무김치나 동치미가 있다면 같이 드셔보시는 것을 추천합니다!</p>
          </div>
        </div>
        <div className="food-card" style={{left: '1600px'}}>
          <div className="food-image">
            <img src="/resources/images/어향가지볶음.jpg" alt="음식 이미지" height="500"/>
            <div className="food-name">신선한 어향가지볶음</div>
          </div>
          <div className="food-info">
            <div className="line"></div>
            <p>말랑한 두부와 얼큰한 국물이 숙취를 도와줍니다.</p>
            <p>집에 열무김치나 동치미가 있다면 같이 드셔보시는 것을 추천합니다!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodSliderComponent;