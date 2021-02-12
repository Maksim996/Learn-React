import React from 'react';
import icon from './oops-icon.jpg';

const ErrorMassages = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="d-flex w-25 mx-auto">
          <img className="w-50 mx-auto" src={icon} alt="something is wrong"/>
        </div>
        <h1 className="display-4 text-danger text-center">Oops!!!</h1>
        <p className="lead text-danger text-center">Something is wrong</p>
      </div>
    </div>
  )
};

export default ErrorMassages
