import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IngredientDetailComponent from './ingredientDetail.component';

// 리액트
class IngredientDetailContainer extends Component {
  componentDidMount(){
  }
  
  render(){
    const isNotData = this.props.ingredientDetail === undefined;
    if(isNotData) {
      return (
        <div className="search-detail">
          <div className="sub-title">식재료 상세보기</div>
          <div className="card"></div>
        </div>
      );
    } else {
      return (
        <IngredientDetailComponent 
          ingredient={this.props.ingredientDetail} />
      );
    }
  }
}

// 리덕스
function mapStateToProps(state) {
  const ingredientList = state.ingredient.list;
  const selectIngredient = state.ingredient.selectId;

  return {
    ingredientDetail: ingredientList.filter(function(o) {return o.id === selectIngredient})[0]
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, null)(IngredientDetailContainer);