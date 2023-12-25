import React from 'react';

import {SWSApi} from '../../api/SWSApi';
import {RequestAddNewLineType} from './types';
import LineListItem from './item/LineListItem';

const eID = process.env.REACT_APP_E_ID;

export default function LineListContainer() {

  const {
    data: Lines,
    isLoading,
    error,
  } = SWSApi.useGetAllLinesQuery(+eID!);

  const [addNewLine,
    {
      error: addNewLineError,
      isLoading: addNewLineIsLoading,
    },
  ] = SWSApi.useAddNewLineMutation();

  if (isLoading) {
    return <h1>...Загрузка линий</h1>;
  }

  if (error) {
    return <h1>{`Произошла ошибка ${error}`}</h1>;
  }

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
      rowName: `New Line ${Lines && Lines.length + 1}`,
      salary: 0,
      supportCosts: 0,
    };
    await addNewLine({newLine: newLine, eID: +eID!});
  };

  return (
    <div>
      LineListContainer
      {Lines && Lines.map((line) =>
        <LineListItem key={line.id} line={line}/>,
      )}
      <button onClick={handleAddNewLine} disabled={addNewLineIsLoading}>add lines</button>
      {addNewLineIsLoading && <div>....добавление</div>}
      {addNewLineError && <h1>Ошибка при добавлении линии</h1>}
    </div>
  );
}
