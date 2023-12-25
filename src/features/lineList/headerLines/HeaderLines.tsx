import React from 'react';

import {DataForLinesTable} from '../../../common/dataSet/dataForTable';

export default function HeaderLines() {
  return (
    <thead>
      <tr>
        {DataForLinesTable.map((el)=>
          <th key={el.id}>
            {el.title}
          </th>,
        )}
      </tr>
    </thead>
  );
}
