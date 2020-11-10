import React from 'react';

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-photo"><img src="https://via.placeholder.com/1920x1080" alt="#" /></div>
      <div className="profile-description">
        <div className="profile-description-logo">
          <img src="https://via.placeholder.com/1920x1080" alt="#" />
        </div>
        <div className="profile-description-content">
          <h1 className="heading">Kamil G.</h1>
          <ul className="info">
            <li>Дата рождения: <span className="info-desc">16 января</span></li>
            <li>Город: <span className="info-desc">Казань</span></li>
            <li>Образование: <span className="info-desc">К(П)ФУ</span></li>
            <li>Веб сайт: <span className="info-desc">glimake.ru</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
