import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import logo from './logo.svg';
import './App.css';
import Box from './Box';
import Target from './Target';

class App extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            boxTop: 20,
            boxLeft: 20
        }
    }
  
    MoveBox(top, left) {
        this.setState({
            boxTop: top,
            boxLeft: left  
        });
    }

    render() {
        return (
            <div className="App" style={{position: 'relative'}}>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <div style={{margin: '20px auto'}}>
                    <Box posTop={this.state.boxTop} posLeft={this.state.boxLeft}></Box>
                </div>
                <div style={{margin: '50px auto'}}>
                    <Target posTop={50} posLeft={150} moveBox={this.MoveBox.bind(this)}></Target>
                </div>
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(App);
