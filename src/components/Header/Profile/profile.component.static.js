import React from 'react';

const ProfileComponent = function (props) {
  return (
    <div className="profile">
      <div className="image">
        <img src="https://i.pinimg.com/236x/eb/14/e1/eb14e14d2fcde310ea8de3fd97c0f8c8.jpg" alt="프로필 이미지" title="출처 [weibo.com/234604616]" />
      </div>
      <div className="summary">
        <p className="name">Hong Jiseong</p>
        <p className="email">dgf5820@gmail.com</p>
      </div>
    </div>
  );
}

export default ProfileComponent;