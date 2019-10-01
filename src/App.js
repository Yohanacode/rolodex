import React, {Component} from 'react';
import { CardList } from './component/card-list/card-list.components';
import { SearchBox } from './component/search-box/search-box.component';
import './App.css';
import { thisTypeAnnotation } from '@babel/types';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

    this.handlechange = this.handlechange.bind(this);
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()
  .then(users => this.setState({ monsters: users})));
}
  handlechange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className="App">
        <h1> Monster Rolodex </h1>
        <SearchBox
          placeholder="search monsters"
          handlechange={this.handlechange} 
        />
        <CardList monsters={filteredMonster}/>  
         
      </div>
    );
  }
}

export default App;
