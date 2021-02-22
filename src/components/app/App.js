import React, {Component} from 'react';
import Header from '../header/Header'
import RandomPlanets from "../random-planets/RandomPlanets";
import ListItems from "../list-items/ListItems";
import DescriptionItem from "../description-item/DescriptionItem";


export default class App extends Component {
  state = {
    selectedPerson: null
  };
  onSelectedPerson = (name) => {
    console.log(name);
    this.setState({selectedPerson: name})
  };
  render() {
    return (
      <div className={'container'}>
        <Header/>
        <RandomPlanets/>
        <div className={'row'}>
          <div className={'col-lg-6 col-md-12'}>
            <ListItems onSelectedPerson={this.onSelectedPerson}/>
          </div>
          <div className={'col-lg-6 col-md-12'}>
            <DescriptionItem selectedPerson={this.state.selectedPerson}/>
          </div>
        </div>
      </div>
    )
  }
}
