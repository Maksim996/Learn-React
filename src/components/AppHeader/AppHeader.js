import React from 'react';
import './AppHeader.css';

const AppHeader = ({ toDo, done }) => {
  return (
   <div className="app-header">
     <h1>New list todo in react</h1>
     <span> { toDo } more to do, { done } done </span>
   </div>
  )
};

export default AppHeader
