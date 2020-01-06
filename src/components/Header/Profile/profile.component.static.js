import React from 'react';

const ProfileComponent = function (props) {
  return (
    <div className="profile">
      <div className="image">
        <img src="../../../resources/images/Profile.png" alt="프로필 이미지" title="출처 [weibo.com/234604616]" />
      </div>
      <div className="summary">
        <p className="name">Hong Jiseong</p>
        <p className="email">dgf5820@gmail.com</p>
      </div>
    </div>
  );
}

export default ProfileComponent;