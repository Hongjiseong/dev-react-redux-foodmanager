import React from 'react';

const IngredientList = function () {

  function rowClick (e) {
    const checkbox = e.currentTarget.children[0].children[0].children[0];
    checkbox.checked = checkbox.checked ? false : true;
  }

  function rowAllClick (e) {
    document.querySelectorAll('tr').forEach(function(tr){
      const checkbox = tr.children[0].children[0].children[0];
      checkbox.checked = e.currentTarget.checked;
    })
  }

  return (
    <div className="search-list">
      <div className="menu">
        <div className="sub-title">Ingredients</div>
        <h3 className="ir-text-ifc">상태 바</h3>
        <div className="status">
          <a href="#"><i className="fas fa-clock good"></i> <span>정상</span></a>
          <a href="#"><i className="fas fa-clock warnning"></i> <span>위험</span></a>
          <a href="#"><i className="fas fa-clock bad"></i> <span>상함</span></a>
        </div>
        <h3 className="ir-text-ifc">검색 바</h3>
        <div className="search-bar">
          <label className="ir-text-ifc" htmlFor="search-input">검색어</label>
          <input id="search-input" className="" type="text" placeholder=""/>
          <button id="">Search</button>
          <button id="">Delete</button>
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
                    <input id="i-all" className="checkbox" type="checkbox"  onChange={(e)=>{rowAllClick(e)}}/>
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
              <tr onClick={(e)=>{rowClick(e)}}>
                <td>
                  <div className="checkbox-wrap">
                    <input id="i-1" className="checkbox" type="checkbox"/>
                    <label htmlFor="i-1" name="i-1"></label>
                  </div>
                </td>
                <td>채소</td>
                <td>팽이버섯</td>
                <td>300g</td>
                <td><i className="fas fa-clock bad"></i></td>
                <td>2019-12-16</td>
              </tr>
              <tr onClick={(e)=>{rowClick(e)}}>
                <td>
                  <div className="checkbox-wrap">
                    <input id="i-2" className="checkbox" type="checkbox"/>
                    <label htmlFor="i-2" name="i-2"></label>
                  </div>
                </td>
                <td>채소</td>
                <td>상추</td>
                <td>1팩</td>
                <td><i className="fas fa-clock good"></i></td>
                <td>2019-12-16</td>
              </tr>
              <tr onClick={(e)=>{rowClick(e)}}>
                <td>
                  <div className="checkbox-wrap">
                    <input id="i-3" className="checkbox" type="checkbox"/>
                    <label htmlFor="i-3" name="i-2"></label>
                  </div>
                </td>
                <td>채소</td>
                <td>상추</td>
                <td>1팩</td>
                <td><i className="fas fa-clock good"></i></td>
                <td>2019-12-17</td>
              </tr>
              <tr onClick={(e)=>{rowClick(e)}}>
                <td>
                  <div className="checkbox-wrap">
                    <input id="i-4" className="checkbox" type="checkbox"/>
                    <label htmlFor="i-4" name="i-2"></label>
                  </div>
                </td>
                <td>채소</td>
                <td>상추</td>
                <td>1팩</td>
                <td><i className="fas fa-clock good"></i></td>
                <td>2019-12-18</td>
              </tr>
              <tr onClick={(e)=>{rowClick(e)}}>
                <td>
                  <div className="checkbox-wrap">
                    <input id="i-5" className="checkbox" type="checkbox"/>
                    <label htmlFor="i-5" name="i-3"></label>
                  </div>
                </td>
                <td>과일</td>
                <td>사과</td>
                <td>3개</td>
                <td><i className="fas fa-clock warnning"></i></td>
                <td>2019-12-16</td>
              </tr>
              <tr onClick={(e)=>{rowClick(e)}}>
                <td>
                  <div className="checkbox-wrap">
                    <input id="i-6" className="checkbox" type="checkbox"/>
                    <label htmlFor="i-6" name="i-3"></label>
                  </div>
                </td>
                <td>과일</td>
                <td>사과</td>
                <td>3개</td>
                <td><i className="fas fa-clock warnning"></i></td>
                <td>2019-12-17</td>
              </tr>
              <tr onClick={(e)=>{rowClick(e)}}>
                <td>
                  <div className="checkbox-wrap">
                    <input id="i-7" className="checkbox" type="checkbox"/>
                    <label htmlFor="i-7" name="i-3"></label>
                  </div>
                </td>
                <td>과일</td>
                <td>사과</td>
                <td>3개</td>
                <td><i className="fas fa-clock warnning"></i></td>
                <td>2019-12-18</td>
              </tr>
              <tr onClick={(e)=>{rowClick(e)}}>
                <td>
                  <div className="checkbox-wrap">
                    <input id="i-8" className="checkbox" type="checkbox"/>
                    <label htmlFor="i-8" name="i-4"></label>
                  </div>
                </td>
                <td>과일</td>
                <td>귤</td>
                <td>3kg</td>
                <td><i className="fas fa-clock good"></i></td>
                <td>2019-12-16</td>
              </tr>
              <tr onClick={(e)=>{rowClick(e)}}>
                <td>
                  <div className="checkbox-wrap">
                    <input id="i-9" className="checkbox" type="checkbox"/>
                    <label htmlFor="i-9" name="i-5"></label>
                  </div>
                </td>
                <td>고기</td>
                <td>삼겹살</td>
                <td>600g</td>
                <td><i className="fas fa-clock warnning"></i></td>
                <td>2019-12-16</td>
              </tr>
              <tr onClick={(e)=>{rowClick(e)}}>
                <td>
                  <div className="checkbox-wrap">
                    <input id="i-10" className="checkbox" type="checkbox"/>
                    <label htmlFor="i-10" name="i-6"></label>
                  </div>
                </td>
                <td>고기</td>
                <td>대패삼겹살</td>
                <td>600g</td>
                <td><i className="fas fa-clock good"></i></td>
                <td>2019-12-16</td>
              </tr>
              <tr onClick={(e)=>{rowClick(e)}}>
                <td>
                  <div className="checkbox-wrap">
                    <input id="i-11" className="checkbox" type="checkbox"/>
                    <label htmlFor="i-11" name="i-6"></label>
                  </div>
                </td>
                <td>고기</td>
                <td>대패삼겹살</td>
                <td>600g</td>
                <td><i className="fas fa-clock good"></i></td>
                <td>2019-12-17</td>
              </tr>
              <tr onClick={(e)=>{rowClick(e)}}>
                <td>
                  <div className="checkbox-wrap">
                    <input id="i-12" className="checkbox" type="checkbox"/>
                    <label htmlFor="i-12" name="i-6"></label>
                  </div>
                </td>
                <td>고기</td>
                <td>대패삼겹살</td>
                <td>600g</td>
                <td><i className="fas fa-clock good"></i></td>
                <td>2019-12-18</td>
              </tr>
              <tr onClick={(e)=>{rowClick(e)}}>
                <td>
                  <div className="checkbox-wrap">
                    <input id="i-13" className="checkbox" type="checkbox"/>
                    <label htmlFor="i-13" name="i-6"></label>
                  </div>
                </td>
                <td>고기</td>
                <td>대패삼겹살</td>
                <td>600g</td>
                <td><i className="fas fa-clock good"></i></td>
                <td>2019-12-19</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default IngredientList;