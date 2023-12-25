import React from 'react';

import {LinesListResponseChild, RequestAddNewLineType} from '../types';

import {SWSApi} from '../../../api/SWSApi';

interface ILineListItem {
    line: LinesListResponseChild
    eID: number
}

const LineListItem: React.FC<ILineListItem> = ({ line, eID}) => {

  const [addNewLine,
    {
      error: addNewLineError,
      isLoading: addNewLineIsLoading,
    },
  ] = SWSApi.useAddNewLineMutation();

  const handleAddNewLine = async () => {
    const newLine: RequestAddNewLineType = {
      equipmentCosts: 0,
      estimatedProfit: 0,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      overheads: 0,
      parentId: null,
      rowName: `New Line ${line.id}`,
      salary: 0,
      supportCosts: 0,
    };
    await addNewLine({newLine: newLine, eID: +eID!});
  };

  return (
    <tbody>
      <tr>
        <td>
          <button onClick={handleAddNewLine} disabled={addNewLineIsLoading}>add lines</button>
          {addNewLineIsLoading && <div>....добавление</div>}
          {addNewLineError && <h1>Ошибка при добавлении линии</h1>}
          <button>del</button>
        </td>
        <td>
          {line.rowName}
          {line.id}
        </td>
        <td>
          {line.equipmentCosts}
        </td>
        <td>
          {line.estimatedProfit}
        </td>
        <td>
          {line.machineOperatorSalary}
        </td>
        <td>
          {line.mainCosts}
        </td>
      </tr>
    </tbody>
  );
};

export default LineListItem;
