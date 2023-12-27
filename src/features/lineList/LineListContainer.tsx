import React from 'react';

import {SWSApi} from '../../api/SWSApi';
import addFolderImg from '../../assects/img/addFolder.png';
import {RequestAddNewLineType} from './types';

import {LineListItem} from './item/LineListItem';
import HeaderLines from './headerLines/HeaderLines';

import s from './LineListContainer.module.scss';
import {SuperButton} from './components/buttons/button/SuperButton';

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
    return (
      <>
        <h1>...Загрузка линий</h1>
        <div className={s.lineListContainer}>
          <table>
            <HeaderLines/>
          </table>
        </div>
      </>
    );
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
      rowName: `New line ${Lines && Lines.length}`,
      salary: 0,
      supportCosts: 0,
    };
    await addNewLine({newLine: newLine, eID: +eID!});
  };

  return (
    <div className={s.lineListContainer}>
      <table>
        <HeaderLines/>
        {Lines && Lines.map((line, index) =>
          <LineListItem key={line.id} line={line} eID={+eID!} parentId={null} indentLevel={index}/>,
        )}
      </table>
      <SuperButton
        iconSrc={`${addFolderImg}`}
        alt={'addParent'}
        onClickAdd={handleAddNewLine}
        isDisabled={addNewLineIsLoading}
      />
      {addNewLineIsLoading && <div>....добавление</div>}
      {addNewLineError && <h1>Ошибка при добавлении линии</h1>}
    </div>
  );
}
