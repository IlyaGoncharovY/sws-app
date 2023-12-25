import React from 'react';
import {DataForMainTable} from '../../common/dataSet/dataForTable';
import s from './TaskListContainer.module.scss';

export default function TaskListContainer() {
  return (
    <div className={s.taskListContainer}>
      {DataForMainTable.map((el) =>
        <div key={el.id}>
            [ ] {el.title}
        </div>,
      )}
    </div>
  );
}
