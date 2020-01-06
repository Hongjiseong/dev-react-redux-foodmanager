import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadProfile } from '../../../actions/_index';
import ProfileComponent from './profile.component';

// 리액트
class ProfileContainer extends Component {
  componentDidMount(){
    this.props.loadProfile();
  }

  render(){
    const isNotData = (this.props.menus === null);
    if(isNotData) {
      return (<div>Loading</div>);
    } else {
      return (
        <ProfileComponent 
          profile={this.props.profile} />
      );
    }
  }
}

// 리덕스
function mapStateToProps(state) {
  return {
    profile: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadProfile }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);