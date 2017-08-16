import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TakeContainer from './components/TakeContainer';
import HTML5Backend from 'react-dnd-html5-backend';
import {DragDropContext} from 'react-dnd';
class App extends Component {
  render() {
    const style = {
      display: "flex",
      justifyContent: "space-around",
      paddingTop: "20px"
    }
    const listOne = [
      {
        id: 1,
        text: "Item 1"
      }, {
        id: 2,
        text: "Item 2"
      }, {
        id: 3,
        text: "Item 3"
      }
    ];

    const listTwo = [
      {
        id: 4,
        text: "Item 4"
      }, {
        id: 5,
        text: "Item 5"
      }, {
        id: 6,
        text: "Item 6"
      }
    ];

    const listThree = [
      {
        id: 7,
        text: "Item 7"
      }, {
        id: 8,
        text: "Item 8"
      }, {
        id: 9,
        text: "Item 9"
      }, {
        id: 10,
        text: "Item 10"
      }, {
        id: 11,
        text: "Item 11"
      }
    ];
    return (
      <div style={{
        ...style
      }}>
        <div style={{
          overflowY: "scroll"
        }}>
          <TakeContainer id={1} list={listOne}/>
        </div>
        <div style={{
          overflowY: "scroll"
        }}>
          <TakeContainer id={2} list={listTwo}/>
        </div>
        <div style={{
          overflowY: "scroll"
        }}>
          <TakeContainer id={3} list={listThree}/></div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
