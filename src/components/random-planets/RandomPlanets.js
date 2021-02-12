// import React, {useState, useEffect} from 'react'
// import ApiSwapi from "../../services/ApiSwapi";
//
// const RandomPlanets = () => {
//   const apiSwapi = new ApiSwapi();
//   const [planet, setPlanet] = useState({name: null, diameter: null, population: null, rotationPeriod: null});
//   const [planets, setPlanets] = useState([]);
//
//   function getAllPlanet () {
//     apiSwapi.getAllPlanets().then((data) => {
//
//       setPlanets(data);
//     })
//   }
//   function randomPlanet() {
//     const id = Math.floor(Math.random() * Math.floor(planets.length || 10))
//     const planet = planets[id];
//     setPlanet({
//       name: planet.name,
//       diameter: planet.diameter,
//       population: planet.population,
//       rotationPeriod: planet.rotation_period
//     });
//     console.log('sss')
//   }
//   useEffect(() => {
//     getAllPlanet();
//   },[]);
//   useEffect(() => {
//     const interval = setInterval( () => {if(planets.length) randomPlanet();}, 3600)
//     return () => { interval.clearInterval()}
//   },[]);
//
//   return (
//     <div className="media mt-5">
//       <img src="https://images.unsplash.com/photo-1481819613568-3701cbc70156?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
//            className="align-self-start mr-3 w-25" alt="..."/>
//       <div className="media-body">
//         <h5 className="mt-0">{planet.name}</h5>
//         <p><span>Diameter: </span><span className={'text-success'}>{planet.diameter}</span></p>
//         <p><span>Population: </span><span className={'text-success'}>{planet.population}</span></p>
//         <p><span>Rotation Period: </span><span className={'text-success'}>{planet.rotationPeriod}</span></p>
//       </div>
//     </div>
//   )
// };
//
// export default RandomPlanets

import React, { Component } from 'react';
import ApiSwapi from "../../services/ApiSwapi";
import Spinner from "../spinner/Spinner";
import Planet from './Planet'
import ErrorMassages from "../error-messages/ErrorMessages";

const apiSwapi = new ApiSwapi();

export default class RandomPlanets extends Component {
  constructor() {
    super();
    this.updatePlanet();
  }

  state = {
    loader: true,
    error: false,
    planet: {
      id: null,
      name: null,
      diameter: null,
      population: null,
      rotationPeriod: null,
    }
  };
  onError = (err) => {
    this.setState({error: true, loader: false});
  };
  updatePlanet = () => {
    const id = 2222//Math.floor(Math.random() * 25) + 2;
    apiSwapi.getPlanet(id).then((data) => {
      this.setState({
          planet: {
            id,
            name: data.name,
            diameter: data.diameter,
            population: data.population,
            rotationPeriod: data.rotation_period,
          },
          loader: false,
          error: false
        })
    }).catch(this.onError)
  };

  render() {
    const { planet, loader, error } = this.state;
    const spinner = loader ? <Spinner/> : null;
    const errorMessage = error ? <ErrorMassages/> : null;
    const content = !(loader || errorMessage) ? <Planet planet={ planet }/> : null

    return (
      <div className="media mt-5">
        {errorMessage}
        { spinner }
        { content }
      </div>
    )
  }
}
