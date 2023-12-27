import React from 'react';
import arrowDownImg from '../../../assects/img/arrowDown.png';

import s from './TableHeader.module.scss';

export default function TableHeader() {
  return (
    <div className={s.tableHeaderContainer}>
      <div className={s.tableHeaderDescription}>
        <div>
            Название проекта
          <div>
              Аббревиатура
          </div>
        </div>
        <div>
          <img src={`${arrowDownImg}`} alt="arrow_down"/>
        </div>
      </div>
      <div className={s.tableHeaderLines}>
                Строительно-монтажные работы
      </div>
    </div>
  );
}
