import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Take from './components/Take';
import HTML5Backend from 'react-dnd-html5-backend';
import {DragDropContext} from 'react-dnd';
class App extends Component {
  render() {
    return (<Take takeId={2} rating={3}/>);
  }
}

export default DragDropContext(HTML5Backend)(App);
