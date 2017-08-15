import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

const boxTarget = {
    drop(props) {
      props.moveBox(props.posTop, props.posLeft);
    }
};
  
function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

class Target extends Component {
    render() {
        const { connectDropTarget, isOver, posTop, posLeft } = this.props;

        return connectDropTarget(
        <div className="Target" style={{
            border: '1px solid #ccc', 
            width: '200px', 
            height: '200px',
            position: 'absolute',
            top: posTop,
            left: posLeft
            }}>
        </div>
        );
    }
}

Target.propTypes = {
    isOver: PropTypes.bool.isRequired
};

export default DropTarget('box', boxTarget, collect)(Target);