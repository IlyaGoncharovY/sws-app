import React from 'react';

import HeaderContainer from '../header/HeaderContainer';
import LineListContainer from '../lineList/LineListContainer';
import TaskListContainer from '../taskList/TaskListContainer';
import TableHeader from './tableHeader/TableHeader';

import s from './App.module.scss';

function App() {
  return (
    <div className={s.appContainer}>
      <HeaderContainer/>
      <TableHeader/>
      <div className={s.taskAndLinesContainer}>
        <TaskListContainer/>
        <LineListContainer/>
      </div>
    </div>
  );
}

export default App;
