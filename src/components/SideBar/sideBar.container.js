import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadFavoriteFoods, selectSideMenu } from '../../actions/_index';
import SideBarComponent from './sideBar.component';

class SideBarContainer extends Component {
  constructor(props){
    super(props);

    this.onClickMenu = this.onClickMenu.bind(this);
  }

  componentDidMount(){
    // 항상 바인딩 한 다음에 호출되도록 this.props 를 붙여주셔야 디스패치가 되어서
    // 렌더링 함수를 재호출 하고 스테이트도 받아서 쓸 수 있습니다~
    this.props.loadFavoriteFoods();
  }

  onClickMenu(e, value){
    this.active(e);
    this.props.selectSideMenu(value);
  }

  active(e){
    const currentActiveMenu = e.currentTarget;
    const beforeActiveMenu = document.querySelector('.side-menu .item .link.on');
    const sidebar = document.querySelector('#sidebar');

    if(currentActiveMenu.classList.contains('on')) {
      currentActiveMenu.classList.remove('on');
      sidebar.classList.remove('on');
    } else {
      if(beforeActiveMenu !== null) {
        beforeActiveMenu.classList.remove('on');
      }
      currentActiveMenu.classList.add('on');
      sidebar.classList.add('on'); 
    }
  }
  
  render(){
    const isNotData = false;
    if(isNotData) {
      return (<div>Loading</div>);
    } else {
      return (
        <SideBarComponent 
          onClickMenu={this.onClickMenu}
          favoriteFoods= {this.props.favoriteFoods}
          purchaseIngredients= {this.props.purchaseIngredients}
          throwAwayIngredients= {this.props.throwAwayIngredients}
          locations= {this.props.locations}
          selectedMenuName={this.props.selectedMenuName}
          />
      );
    }
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    favoriteFoods: state.favoriteFoods,
    purchaseIngredients: state.purchaseIngredients,
    throwAwayIngredients: state.throwAwayIngredients,
    locations: state.locations,
    selectedMenuName: state.selectedMenuName
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadFavoriteFoods, selectSideMenu }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer);