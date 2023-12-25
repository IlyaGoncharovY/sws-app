import React from 'react';

import {DataForHeader} from '../../common/dataSet/dataForTable';

import s from './HedaerContainer.module.scss';

export default function HeaderContainer() {
  return (
    <div className={s.headerContainer}>
      {DataForHeader.map((el) =>
        <div key={el.id} className={s.headerTitle}>{el.title}</div>,
      )}
    </div>
  );
}
