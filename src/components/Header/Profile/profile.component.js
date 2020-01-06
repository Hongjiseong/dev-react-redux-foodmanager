// props
// - profile          : Object
// - profile.imageUrl : String
// - profile.nickname : String
// - profile.username : String

import React from 'react';

// 화면
const ProfileComponent = function (props) {
  return (
    <div className="profile">
      <div className="image">
        <img src={props.profile.imageUrl} alt="프로필 이미지"/>
      </div>
      <div className="summary">
        <p className="name">{props.profile.nickname}</p>
        <p className="email">{props.profile.username}</p>
      </div>
    </div>
  );
}

export default ProfileComponent;