import React from 'react';
import {LinesListResponseChild} from '../types';
import {useListItemHook} from '../services/useListItemHook';
import {ButtonsGroup} from '../components/buttons/ButtonsGroup';
import {InputGroup} from '../components/inputs/inputsGroup/InputGroup';
import s from './LineListItem.module.scss';

interface ILineListItem {
    line: LinesListResponseChild
    eID: number
    parentId?: number | null
    indentLevel: number
}

export const LineListItem: React.FC<ILineListItem> = React.memo(({
  line,
  eID,
  parentId,
  indentLevel,
}) => {
  const MemoizedLineListItem = React.memo(LineListItem);

  const {
    addNewLineIsLoading, isEditing,
    handleAddNewLine, addNewLineError,
    deleteLineHandler, deleteLineIsLoading,
    updateLineIsLoading, handleDoubleClick,
    updatedLine, handleKeyPress, handleInputChange,
  } = useListItemHook(line, parentId, eID);

  return (
    <>
      <tr className={s.tableBorder}>
        <td>
          <ButtonsGroup
            parentId={parentId}
            indentLevel={indentLevel}
            addNewLineIsLoading={addNewLineIsLoading}
            isEditing={isEditing}
            handleAddNewLine={handleAddNewLine}
            addNewLineError={addNewLineError}
            deleteLineHandler={deleteLineHandler}
            eID={eID}
            deleteLineIsLoading={deleteLineIsLoading}
            line={line}
          />
        </td>
        {updateLineIsLoading && <div className={s.loadingLabel}>...обнавление</div>}
        <InputGroup
          isEditing={isEditing}
          updatedLine={updatedLine}
          line={line}
          handleKeyPress={handleKeyPress}
          handleDoubleClick={handleDoubleClick}
          handleInputChange={handleInputChange}
        />
      </tr>
      {line.child?.map((childLine, index) => (
        <MemoizedLineListItem
          key={childLine.id}
          line={childLine}
          eID={eID}
          parentId={childLine.id}
          indentLevel={index}
        />
      ))}
    </>
  );
});
