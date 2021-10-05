import React, {Component} from 'react';
import './App.css';
import './Reset.css'
import Home from './Components/Home'


export default class App extends Component  {
  render(){
    return(
      <div>
        <div className="backGround ">
        <Home />

        </div>

      </div>
    )
  }
}

