import React from 'react';

import {LinesListResponseChild} from '../types';

interface ILineListItem {
    line: LinesListResponseChild
}

const LineListItem: React.FC<ILineListItem> = ({ line}) => {

  return (
    <div>
        LineListItem
      <ul>
        <li>rowName: {line.rowName}</li>
        <li>equipmentCosts: {line.equipmentCosts}</li>
        <li>estimatedProfit: {line.estimatedProfit}</li>
        <li>total: {line.total}</li>
        <li>id: {line.id}</li>
      </ul>
    </div>
  );
};

export default LineListItem;
