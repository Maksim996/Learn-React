import React, {Component} from 'react'
import ApiSwapi from "../../services/ApiSwapi";
import Spinner from "../spinner/Spinner";

const apiSwapi = new ApiSwapi();


export default class ListItems extends Component {

  state = {
    peopleList : null
  };

  componentDidMount() {
    apiSwapi.getAllPeople()
      .then((peopleList) => { this.setState({peopleList})})
  }

  render() {
    const { peopleList } = this.state;
    if (!peopleList) return <Spinner />
    console.log(peopleList);
    return (
      <ul className="list-group">
        {
          peopleList.map(({name})=>{
          return <li key={name}
                     onClick={ () => this.props.onSelectedPerson(name)}
                     className="list-group-item">{name}</li>
        })}
      </ul>
    )
  }
}
