import React from 'react';

import {DataForHeader} from '../../common/dataSet/dataForTable';
import menuIcon from '../../assects/img/burger.png';
import arrowImg from '../../assects/img/arrowLeft.png';

import s from './HeaderContainer.module.scss';

export default function HeaderContainer() {
  return (
    <div className={s.headerContainer}>

      <img src={`${menuIcon}`} alt="burger_menu"/>
      <img src={`${arrowImg}`} alt="arrow_left"/>

      {DataForHeader.map((el) =>
        <div key={el.id} className={s.headerTitle}>{el.title}</div>,
      )}
    </div>
  );
}
