import React from 'react'

const Planet = (planet) => {
  const { planet: {id, name, diameter, population, rotationPeriod }} = planet;
  return (
    <React.Fragment>
      <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
           className="align-self-start mr-3 w-25" alt="..."/>
      <div className="media-body">
        <h5 className="mt-0">{name}</h5>
        <p><span>Diameter: </span><span className={'text-success'}>{diameter}</span></p>
        <p><span>Population: </span><span className={'text-success'}>{population}</span></p>
        <p><span>Rotation Period: </span><span className={'text-success'}>{rotationPeriod}</span></p>
      </div>
    </React.Fragment>
  )
};
export default Planet
