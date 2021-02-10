import React, {Component} from 'react';
import Header from '../header/Header'
import ApiSwapi from '../../services/ApiSwapi'
import RandomPlanets from "../random-planets/RandomPlanets";
import ListItems from "../list-items/ListItems";
import DescriptionItem from "../description-item/DescriptionItem";


export default class App extends Component {
  render() {
    return (
      <div className={'container'}>
        <Header/>
        <RandomPlanets/>
        <div className={'row'}>
          <div className={'col-lg-6 col-md-12'}>
            <ListItems/>
          </div>
          <div className={'col-lg-6 col-md-12'}>
            <DescriptionItem/>
          </div>
        </div>
      </div>
    )
  }
}
