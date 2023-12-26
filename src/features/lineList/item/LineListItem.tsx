import React, {useState} from 'react';

import {SWSApi} from '../../../api/SWSApi';
import {LinesListResponseChild, RequestAddNewLineType} from '../types';

interface ILineListItem {
    line: LinesListResponseChild
    eID: number
}

const LineListItem: React.FC<ILineListItem> = ({line, eID}) => {

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [updatedLine, setUpdatedLine] = useState<RequestAddNewLineType>({
    equipmentCosts: line.equipmentCosts,
    estimatedProfit: line.estimatedProfit,
    machineOperatorSalary: line.machineOperatorSalary,
    mainCosts: line.mainCosts,
    materials: 0,
    mimExploitation: 0,
    overheads: 0,
    parentId: line.id,
    rowName: line.rowName,
    salary: 0,
    supportCosts: 0,
  });

  const [addNewLine,
    {
      error: addNewLineError,
      isLoading: addNewLineIsLoading,
    },
  ] = SWSApi.useAddNewLineMutation();

  const [deleteLine,
    {
      isLoading: deleteLineIsLoading,
    },
  ] = SWSApi.useDeleteLinesMutation();

  const [updateLine,
    {
      isLoading: updateLineIsLoading,
    },
  ] = SWSApi.useUpdateLineMutation();

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
    await updateLine({ updatedLine, eID: +eID!, rID: line.id });
    setIsEditing(false);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, property: string) => {
    setUpdatedLine((prevLine) => ({
      ...prevLine,
      [property]: Number(event.target.value),
    }));
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleUpdateLine();
    }
  };

  const deleteLineHandler = (eID: number, rID: number) => {
    deleteLine({eID, rID});
  };

  return (
    <>
      <tr>
        <td>
          <button onClick={handleAddNewLine} disabled={addNewLineIsLoading || isEditing}>
                        Add Lines
          </button>
          {addNewLineIsLoading && <div>....добавление</div>}
          {addNewLineError && <h1>Ошибка при добавлении линии</h1>}
          <button onClick={() => deleteLineHandler(eID, line.id)} disabled={deleteLineIsLoading}>Delete</button>
          {deleteLineIsLoading && <div>...удаление</div>}
        </td>
        {updateLineIsLoading && <div>...обнавление</div>}
        <td onDoubleClick={handleDoubleClick}>
          {isEditing ? (
            <input
              type="text"
              value={updatedLine.rowName}
              onChange={(e) => handleInputChange(e, 'rowName')}
              onKeyPress={handleKeyPress}
            />
          ) : (
            line.rowName
          )}
        </td>
        <td onDoubleClick={handleDoubleClick}>
          {isEditing ? (
            <input
              type="text"
              value={updatedLine.equipmentCosts}
              onChange={(e) => handleInputChange(e, 'equipmentCosts')}
              onKeyPress={handleKeyPress}
            />
          ) : (
            line.equipmentCosts
          )}
        </td>
        <td onDoubleClick={handleDoubleClick}>
          {isEditing ? (
            <input
              type="text"
              value={updatedLine.estimatedProfit}
              onChange={(e) => handleInputChange(e, 'estimatedProfit')}
              onKeyPress={handleKeyPress}
            />
          ) : (
            line.estimatedProfit
          )}
        </td>
        <td onDoubleClick={handleDoubleClick}>
          {isEditing ? (
            <input
              type="text"
              value={updatedLine.machineOperatorSalary}
              onChange={(e) => handleInputChange(e, 'machineOperatorSalary')}
              onKeyPress={handleKeyPress}
            />
          ) : (
            line.machineOperatorSalary
          )}
        </td>
        <td onDoubleClick={handleDoubleClick}>
          {isEditing ? (
            <input
              type="text"
              value={updatedLine.mainCosts}
              onChange={(e) => handleInputChange(e, 'mainCosts')}
              onKeyPress={handleKeyPress}
            />
          ) : (
            line.mainCosts
          )}
        </td>
      </tr>
      {line.child?.map((childLine) => (
        <LineListItem key={childLine.id} line={childLine} eID={eID}/>
      ))}
    </>
  );
};

export default LineListItem;
