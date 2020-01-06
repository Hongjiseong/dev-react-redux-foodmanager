import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CookingConponent from './cooking.component';

// 리액트
class CookingContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedProcess: {}
    }

    this.onSelectProcess = this.onSelectProcess.bind(this);
  }

  onSelectProcess(process){
    this.setState({selectedProcess: process});
  }
  
  render(){
    const isNotData = Object.keys(this.props.food).length === 0;
    if(isNotData) {
      return (<div>음식을 선택해주세요</div>);
    } else {
      return (
        <CookingConponent
          food={this.props.food}
          selectedProcess={this.state.selectedProcess}
          onSelectProcess={this.onSelectProcess} />
      );
    }
  }
}

// 리덕스
function mapStateToProps(state) {
  return {
    food: state.cooking
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({  }, dispatch);
}

export default connect(mapStateToProps, null)(CookingContainer);