import React from 'react';

const CookingComponent = function (props) {
  const food = props.food;
  const process = props.food.process;
  const selectedProcess = Object.keys(props.selectedProcess).length === 0 ? process[0] : props.selectedProcess;
  const details = props.selectedProcess.details === undefined ? process[0].details: props.selectedProcess.details;

  return (
    <div className="container">
      <div className="cooking">
        <div className="image-view">
          <img src={food.url} alt={food.name} />
        </div>
        <div className="process">
          <h2 className="sub-title">음식 만드는 순서</h2>
          <ul className="list">
            {process.map(p => (
              <li className="item" key={p.order} 
                  onClick={()=>{
                    props.onSelectProcess(p);
                    document.querySelector('.description').scrollTop = 0;
                  }}>
                <div className="line-bar"></div>
                <div className="content">{p.content}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="process-detail">
          <div className="title">{selectedProcess.content}</div>
          <div className="description">
            {details.map((d) => (
              <div key={d.order}>
                <p>{d.content}</p>
                <img src={d.imageUrl} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookingComponent;