import React, { Component } from 'react';
// import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/seach-box/search-box.component';


class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField : ''
    }




    // this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }

  handleChange = e => {
    this.setState({searchField : e.target.value});
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredmosnters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: "Changed !!"})}>Change Text</button>
        </header> */}
        
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList 
          monsters = {filteredmosnters}
        />
      </div>
    );
  }
}

export default App;
