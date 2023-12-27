import React, {useCallback, useState} from 'react';
import {SerializedError} from '@reduxjs/toolkit';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';

import {LinesListResponseChild} from '../../types';

import addFolderImg from '../../../../assects/img/addFolder.png';
import deleteIcon from '../../../../assects/img/garbage.png';

import s from './ButtonsGroup.module.scss';
import {SuperButton} from './button/SuperButton';

interface IButtonsGroup {
    parentId: number | null | undefined
    indentLevel: number
    addNewLineIsLoading: boolean
    isEditing: boolean
    handleAddNewLine: () => Promise<void>
    addNewLineError: FetchBaseQueryError | SerializedError | undefined
    deleteLineHandler: (eID: number, rID: number) => void
    eID: number
    line: LinesListResponseChild
    deleteLineIsLoading: boolean
}

export const ButtonsGroup: React.FC<IButtonsGroup> =  React.memo(({
  parentId,
  indentLevel,
  addNewLineIsLoading,
  isEditing,
  handleAddNewLine,
  addNewLineError,
  deleteLineHandler, eID,
  line,
  deleteLineIsLoading,
}) => {

  const [isAddIconHovered, setIsAddIconHovered] = useState(false);

  const handleAddIconMouseEnter = useCallback(() => {
    setIsAddIconHovered(prevState => !prevState);
  }, []);

  const handleAddIconMouseLeave = useCallback(() => {
    setIsAddIconHovered(prevState => !prevState);
  }, []);

  const isChild = parentId !== null;

  const indentationStyle = {
    marginLeft: isChild ? `${20 + indentLevel}px` : '0',
  };

  return (
    <div
      style={indentationStyle}
      className={`${s.imageContainer} ${isAddIconHovered ? s.addIconHovered : ''}`}
      onMouseEnter={handleAddIconMouseEnter}
      onMouseLeave={handleAddIconMouseLeave}
    >
      <SuperButton
        iconSrc={`${addFolderImg}`}
        alt={'add'}
        onClickAdd={handleAddNewLine}
        isDisabled={addNewLineIsLoading}
        isEditing={isEditing}
      />
      {addNewLineIsLoading && <div className={s.loadingLabel}>....добавление</div>}
      {addNewLineError && <h1 className={s.loadingLabel}>Ошибка при добавлении линии</h1>}
      {isAddIconHovered && (
        <img
          src={deleteIcon}
          alt="delete"
          onClick={() => deleteLineHandler(eID, line.id)}
          className={`${s.img} ${deleteLineIsLoading ? s.disabled : ''}`}
        />
      )}
      {deleteLineIsLoading && <div className={s.loadingLabel}>...удаление</div>}
    </div>
  );
});
