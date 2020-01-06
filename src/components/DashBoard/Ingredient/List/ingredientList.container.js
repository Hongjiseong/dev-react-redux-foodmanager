import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadIngredient, selectIngredient, deleteIngredient } from '../../../../actions/_index';
import IngredientListComponent from './ingredientList.component';

// 리액트
class IngredientListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchFilter:"",
      searchValue:"",
    }

    this.setFilter = this.setFilter.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onChangeInput(e){
    this.setState({searchValue: e.target.value});
    this.props.loadIngredient(e.target.value);
  }

  setFilter(value){
    const isToggle = this.state.searchFilter === value;
    if(isToggle){
      this.setState({searchFilter:""});
    }else{
      this.setState({searchFilter:value});
    }
  }

  componentDidMount(){
    this.props.loadIngredient();
  }

  render(){
    const isNotData = (this.props.menus === null);
    if(isNotData) {
      return (<div>Loading</div>);
    } else {
      return (
        <IngredientListComponent 
          onChangeInput={this.onChangeInput}
          searchValue={this.state.searchValue}
          searchIngredient={this.props.loadIngredient}
          ingredients={this.props.ingredientList}
          selectIngredient={this.props.selectIngredient}
          searchFilter={this.state.searchFilter}
          setFilter={this.setFilter}
          deleteIngredient={this.props.deleteIngredient}
          />
      );
    }
  }
}

// 리덕스
function mapStateToProps(state) {
  return {
    ingredientList: state.ingredient.list
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadIngredient, selectIngredient, deleteIngredient }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientListContainer);