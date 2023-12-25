import React from 'react';

import {SWSApi} from '../../api/SWSApi';
import LineListItem from './item/LineListItem';

import s from './LineListContainer.module.scss';
import HeaderLines from './headerLines/HeaderLines';

const eID = process.env.REACT_APP_E_ID;

export default function LineListContainer() {

  const {
    data: Lines,
    isLoading,
    error,
  } = SWSApi.useGetAllLinesQuery(+eID!);

  if (isLoading) {
    return (
      <>
        <h1>...Загрузка линий</h1>
        <div className={s.lineListContainer}>
          <table>
            <HeaderLines />
          </table>
        </div>
      </>
    );
  }

  if (error) {
    return <h1>{`Произошла ошибка ${error}`}</h1>;
  }

  return (
    <div className={s.lineListContainer}>
      <table>
        <HeaderLines/>
        {Lines && Lines.map((line) =>
          <LineListItem key={line.id} line={line} eID={+eID!}/>,
        )}
      </table>
    </div>
  );
}
