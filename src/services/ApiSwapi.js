export default class ApiSwapi {
  _apiBase = 'https://swapi.dev/api';

  planet = {
    climate: "Arid",
    created: "2014-12-09T13:50:49.641000Z",
    diameter: "10465",
    edited: "2014-12-15T13:48:16.167217Z",
    films: [
      "https://swapi.dev/api/films/1/",
    ],
    gravity: "1",
    name: "Tatooine",
    orbital_period: "304",
    population: "120000",
    residents: [
      "https://swapi.dev/api/people/1/",
    ],
    rotation_period: "23",
    surface_water: "1",
    terrain: "Dessert",
    url: "https://swapi.dev/api/planets/1/"
  };
  people = {
    "birth_year": "19 BBY",
    "eye_color": "Blue",
    "films": [
      "https://swapi.dev/api/films/1/",
    ],
    "gender": "Male",
    "hair_color": "Blond",
    "height": "172",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "mass": "77",
    "name": "Luke Skywalker",
    "skin_color": "Fair",
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-10T13:52:43.172000Z",
    "species": [
      "https://swapi.dev/api/species/1/"
    ],
    "starships": [
      "https://swapi.dev/api/starships/12/",
    ],
    "url": "https://swapi.dev/api/people/1/",
    "vehicles": [
      "https://swapi.dev/api/vehicles/14/"
    ]
  };

  async getResource(url) {
    const response = await fetch(`${this._apiBase}${url}`);
    if (!response.ok) {
      throw new Error('Ответ сети был не ok.');
    }
    return await response.json();
  }
  async getAllPeople() {
    // const res = await this.getResource('/people/');
    // return res.results.map(this._transformPerson)
    return [this.people].map(this._transformPerson);
  }
  async getPeople(id) {
    // const people = await this.getResource(`/people/${id}`);
    const people = this.people
    return this._transformPerson(people);

  }
  async getAllPlanets() {
    // const res = await this.getResource('/planets/');
    // return res.results.map(this._transformPlanet);
    return this.planet.map(this._transformPlanet);
  }
  async getPlanet(id) {
    // const planet = await this.getResource(`/planets/${id}`);
    const planet = this.planet
    return this._transformPlanet(planet);
  }
  async getAllStarships() {
    const res = await this.getResource('/starships/');
    return res.results;
  }
  getStarship(id) {
    return this.getResource(`/starships/${id}`);
  }
  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return  item.url.match(idRegExp)[1];
  }
  _transformPlanet = (planet) => {
    return {
        id: this._extractId(planet),
        name: planet.name,
        diameter: planet.diameter,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
    }
  };
  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      mass: person.mass,
      height: person.height,
      gender: person.gender,
      birthYear: person.birth_year,
    }
  }
}
