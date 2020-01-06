import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadMenu } from '../../../actions/_index';
import MenuComponent from './menu.component';

class MenuContainer extends Component {
  // constructor(props)
  // - 상태 초기화
  // - 함수 바인딩
  constructor(props){
    super(props);

    this.state = {
      selected: ''
    };

    this.onClickMenu = this.onClickMenu.bind(this);
  }

  // componentDidMount()
  // - 데이터 가져오기 (연속 / 1회)
  componentDidMount(){
    this.props.loadMenu();
  }

  onClickMenu(value){
    this.setState({selected: value});
  }

  render(){
    const isNotData = (this.props.menus === null);
    if(isNotData) {
      return (<div>Loading</div>);
    } else {
      return (
        <MenuComponent 
          menus={this.props.menus}
          selected={this.state.selected}
          onClickMenu={this.onClickMenu} />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    menus: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadMenu }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);