import React from 'react';

const IngredientList = function (props) {
  let deleteArray = [];

  function rowClick (e, id) {
    // const checkbox = e.currentTarget.children[0].children[0].children[0];
    // checkbox.checked = checkbox.checked ? false : true;

    // 상세보기 액션
    props.selectIngredient(id);
  }

  function rowAllClick (e) {
    document.querySelectorAll('tr').forEach(function(tr){
      const checkbox = tr.children[0].children[0].children[0];
      checkbox.checked = e.currentTarget.checked;
    })
  }

  function ingredientStatus(expiryDate){
    const now = new Date();
    const ed = new Date(expiryDate);

    const status = ed.getTime() - now.getTime();
    if(status > 1015000000) {
      return 'good';
    }else if(status <= 1015000000 && status > 0){
      return 'warnning'
    }else{
      return 'bad'
    }
  }

  return (
    <div className="search-list">
      <div className="menu">
        <div className="sub-title">식재료 목록</div>
        <h3 className="ir-text-ifc">상태 바</h3>
        <div className="status">
          <a href="#" onClick={()=>{props.setFilter('good')}}><i className="fas fa-clock good"></i> <span>정상</span></a>
          <a href="#" onClick={()=>{props.setFilter('warnning')}}><i className="fas fa-clock warnning"></i> <span>위험</span></a>
          <a href="#" onClick={()=>{props.setFilter('bad')}}><i className="fas fa-clock bad"></i> <span>상함</span></a>
        </div>
        <h3 className="ir-text-ifc">검색 바</h3>
        <div className="search-bar">
          <label className="ir-text-ifc" htmlFor="search-input">검색어</label>
          <input id="search-input" className="" type="text" placeholder="" 
                 onChange={(e)=>{props.onChangeInput(e)}} value={props.searchValue}/>
          <button id="" onClick={()=>{props.searchIngredient(props.searchValue)}}>Search</button>
          <button id="" onClick={()=>{props.deleteIngredient(deleteArray);}}>Delete</button>
        </div>
      </div>
      <div className="search-table">
        <h4 className="ir-text-ifc">식재료 목록</h4>
        <div className="table-header">
          <table>
            <colgroup>
              <col width="7%"/>
              <col width="12%"/>
              <col />
              <col width="15%"/>
              <col width="15%"/>
              <col width="20%"/>
            </colgroup>
            <thead>
              <tr>
                <th>
                  <div className="checkbox-wrap">
                    <input id="i-all" className="checkbox" type="checkbox" onChange={(e)=> {rowAllClick(e);}}/>
                    <label htmlFor="i-all" name="i-all"></label>
                  </div>
                </th>
                <th>종류</th>
                <th>이름</th>
                <th>양</th>
                <th>상태</th>
                <th>구매일자</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="table-content">
          <table>
            <colgroup>
              <col width="7%"/>
              <col width="12%"/>
              <col />
              <col width="15%"/>
              <col width="15%"/>
              <col width="20%"/>
            </colgroup>
            <tbody>
              {props.ingredients.filter((o)=>{
                if(props.searchFilter === ""){
                  return true;
                }else{
                  return ingredientStatus(o.expiryDate) === props.searchFilter;
                }
              }).map((ingredient) => {
                return (
                  <tr onClick={(e)=>{rowClick(e, ingredient.id);}} key={ingredient.id}>
                    <td>
                      <div className="checkbox-wrap">
                        <input id={ingredient.id} className="checkbox ingredient" type="checkbox" 
                               onChange={()=>{
                                deleteArray = [];
                                document.querySelectorAll('input.ingredient:checked').forEach((o)=>deleteArray.push(o.id));
                               }}/>
                        <label htmlFor={ingredient.id} name={ingredient.id}></label>
                      </div>
                    </td>
                    <td>{ingredient.type}</td>
                    <td>{ingredient.name}</td>
                    <td>{ingredient.mount}{ingredient.unit}</td>
                    <td><i className={"fas fa-clock " + ingredientStatus(ingredient.expiryDate)}></i></td>
                    <td>{ingredient.purchaseDate}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default IngredientList;