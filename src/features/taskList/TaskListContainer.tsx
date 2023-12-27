import React from 'react';
import {DataForMainTable} from '../../common/dataSet/dataForTable';
import menuIIcon from '../../assects/img/menuLogo.png';

import s from './TaskListContainer.module.scss';

export default function TaskListContainer() {
  return (
    <div className={s.taskListContainer}>
      {DataForMainTable.map((el) =>
        <div key={el.id}>
          <img src={`${menuIIcon}`} alt="menuI_Icon"/> {el.title}
        </div>,
      )}
    </div>
  );
}
