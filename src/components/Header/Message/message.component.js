// props
// - message         : Object
// - message.id      : String
// - message.content : String
// - message.date    : String
// - isMessage       : boolean

import React from 'react';

const MessageComponent = function (props) {
  return (
    <div className="message">
      <a className={props.isMessage ? "link on": "link"} 
          href="#" 
          title="알림 메시지"
      ><i className="fas fa-bell"></i></a>
    </div>
  );
}

export default MessageComponent;