import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadFood, selectFood } from '../../../actions/_index';
import FoodSliderConponent from './foodSlider.component';

// 리액트
class FoodSliderContainer extends Component {
  componentDidMount(){
    this.props.loadFood();
  }
  
  render(){
    const isNotData = false;
    if(isNotData) {
      return (<div></div>);
    } else {
      return (
        <FoodSliderConponent 
          foods={this.props.foodSlider}
          selectFood={this.props.selectFood}
          />
      );
    }
  }
}

// 리덕스
function mapStateToProps(state) {
  console.log(state)
  return {
    foodSlider: state.foodSlider.foods
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadFood, selectFood }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodSliderContainer);