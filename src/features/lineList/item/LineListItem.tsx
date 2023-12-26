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

  const [deleteLine] = SWSApi.useDeleteLinesMutation();

  const [updateLine, {}] = SWSApi.useUpdateLineMutation();

  const handleAddNewLine = async () => {
    const newLine: RequestAddNewLineType = {
      equipmentCosts: 0,
      estimatedProfit: 0,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      overheads: 0,
      parentId: line.id,
      rowName: `New Line ${line.id}`,
      salary: 0,
      supportCosts: 0,
    };
    await addNewLine({newLine: newLine, eID: +eID!});
  };

  const handleUpdateLine = async () => {

    const updatedLine: RequestAddNewLineType = {
      equipmentCosts: 0,
      estimatedProfit: 0,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      overheads: 0,
      parentId: line.id,
      rowName: `update line${line.id}`,
      salary: 0,
      supportCosts: 0,
    };

    await updateLine({updatedLine: updatedLine, eID: +eID!, rID: line.id});
  };

  const deleteLineHandler = (eID: number, rID: number) => {
    deleteLine({eID, rID});
  };

  // const updatedLineHandler = (updatedLine: RequestAddNewLineType, eID: number, rID: number) => {
  //   updateLine({updatedLine, eID, rID});
  // };

  return (
    <>
      <tr>
        <td>
          <button onClick={handleAddNewLine} disabled={addNewLineIsLoading}>
              Add Lines
          </button>
          {addNewLineIsLoading && <div>....добавление</div>}
          {addNewLineError && <h1>Ошибка при добавлении линии</h1>}
          <button onClick={() => deleteLineHandler(eID, line.id)}>Delete</button>
        </td>
        <td>{line.rowName}</td>
        <td>{line.equipmentCosts}</td>
        <td>{line.estimatedProfit}</td>
        <td>{line.machineOperatorSalary}</td>
        <td>{line.mainCosts}</td>
      </tr>
      {line.child?.map((childLine) => (
        <LineListItem key={childLine.id} line={childLine} eID={eID} />
      ))}
    </>
  );
};

export default LineListItem;
