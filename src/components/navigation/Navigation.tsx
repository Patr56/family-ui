import React from 'react';
import { NavLink } from 'react-router-dom';

import Avatar from '../avatar/Avatar';
import NavigationMenu from '../navigation/menu/NavigationMenu';

import { IItemMenu, EType } from '../../models/Models';

import './Navigation.css';


const items: IItemMenu[] = [
  {
    id: "1",
    type: EType.BIO,
    title: "Биография"
  },
  {
    id: "2",
    type: EType.GALLERY,
    title: "Фото",
    description: "35"
  },
  {
    id: "3",
    type: EType.MAP,
    title: "Дом в Ивакино"
  },
  {
    id: "4",
    type: EType.PHONE,
    title: "Мобильный Sberbank",
    description: "89165889892"
  },
  {
    id: "5",
    type: EType.PHONE,
    title: "Рабочий",
    description: "89168856699"
  },
  {
    id: "6",
    type: EType.PHONE,
    title: "Мобильный МТС",
    description: "89165364551"
  },
  {
    id: "7",
    type: EType.EMAIL,
    title: "Личная",
    description: "patr123456@yandex.ru"
  },
  {
    id: "8",
    type: EType.DATE,
    title: "Дата свадьбы",
    description: "02.09.2017"
  }
]

const Navigation = () => {

  return (
    <nav className="nav">

      <div className="nav_tab">
        <div id="nav_toggle_id" className="tab" title="Скрыть">
          <div className="tab_text">Семейное древо</div>
        </div>
      </div>

      <div className="nav_wrapper">
        <div className="info">
          <NavLink
            className="link"
            to="/"
            title="Моисеенков Владимир Ильич"
          >
            <div className="info_logo">
              <Avatar
                position="-63px -51px"
                url="/photo/001-volodya.png"
                size={261}
              />
            </div>
            <div className="info_fio">
              <div className="info_lastname">Моисеенков</div>
              <div className="info_firstname">Владимир Ильич</div>
            </div>
            <div className="info_life">03.02.1937-04.07.2012</div>
            <div className="info_age">75 лет</div>
          </NavLink>
        </div>
        <NavigationMenu id={1} items={items} />
      </div>
    </nav>
  )
}

export default Navigation;