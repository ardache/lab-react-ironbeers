import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import axios from 'axios';
import Beers from './components/Beers'
import Home from './components/Home'
import BeerDetail from './components/BeerDetail';


class App extends Component {
  state = {
    beerslist: [],
    beer:[]
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(res => {
        this.setState({beerslist: res.data})
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/beers' render={() => <Beers beerslist={this.state.beerslist} />} />
          <Route exact path='/beer-detail/:idx' render={match => <BeerDetail {...match} />} />
          {/* <Route path='/random-beer' component={Random_beer} /> */}
        </Switch>
      </div>
    );
  }
}



export default App;
