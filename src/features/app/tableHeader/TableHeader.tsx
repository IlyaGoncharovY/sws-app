import React from 'react';

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
            \/
        </div>
      </div>
      <div className={s.tableHeaderLines}>
          Строительно-монтажные работы
      </div>
    </div>
  );
}
