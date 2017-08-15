import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

const boxSource = {
    beginDrag(props) {
        return {};
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Box extends Component {
    render() {
        const { connectDragSource, isDragging, posTop, posLeft } = this.props;

        return connectDragSource(
        <div className="Box" style={{
            backgroundColor: 'orange', 
            width: '100px', 
            height: '100px',
            cursor: 'pointer',
            position: 'absolute',
            top: posTop,
            left: posLeft}}>
        </div>
        );
    }
}

Box.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };
  
export default DragSource("box", boxSource, collect)(Box);