import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMessage } from '../../../actions/_index';
import MessageComponent from './message.component';

class MessageContainer extends Component {
  // componentDidMount()
  // - 데이터 가져오기 (연속 / 1회)
  // - 로딩화면 해제
  componentDidMount(){
    const fetchMessageInterval = function(){
      this.props.fetchMessage();
      setTimeout(this, 30*1000);
    }
    setTimeout(fetchMessageInterval, 30*1000);
  }

  render(){
    const isNotData = (this.props.isMessage === null);
    if(isNotData) {
      return (<div>Loading</div>);
    } else {
      return (
        <MessageComponent
          menus={this.menus}
          isMessage={this.props.isMessage} />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    menus: state,
    isMessage: state.length>0,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);