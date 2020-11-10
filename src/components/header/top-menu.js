import React from 'react';
import { NavLink } from 'react-router-dom';

const TopMenu = () => {
  return (
    <div className="container">
      <div className="wrapper top-menu">
        <div className="logo">
          <img src="https://via.placeholder.com/1920x1080" alt="#" />
        </div>
          <nav>
            <ul>
              <li><NavLink to="/dialogs" activeClassName="active">Сообщения</NavLink></li>
              <li><NavLink to="glimake.ru" activeClassName="active">Новости</NavLink></li>
              <li><NavLink to="glimake.ru" activeClassName="active">Друзья</NavLink></li>
              <li><NavLink to="/profile" activeClassName="active">Профиль</NavLink></li>
              <li><a href="glimake.ru" id="toggler">↓</a></li>
            </ul>
          </nav>
        </div>
      </div>
  );
}

export default TopMenu;
