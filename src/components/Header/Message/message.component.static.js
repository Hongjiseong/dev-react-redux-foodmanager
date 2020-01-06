import React from 'react';

const MessageComponent = function (props) {
  return (
    <div className="message">
      <a className="link on" 
         href="#" 
         title="알림 메시지"><i className="fas fa-bell"></i></a>
    </div>
  );
}

export default MessageComponent;