import React, {Component} from 'react';
import ItemTypes from './ItemTypes';
import {DragSource} from 'react-dnd';
const container = {
  width: 300,
  height: 300,
  textAlign: 'center',
  backgroundColor: 'blue'
};
const takeSource = {
  beginDrag(props) {
    return {takeId: props.takeId, ratings: props.ratings};
  }
};
function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
}
class Take extends Component {
  render() {
    const {isDragging, connectDragSource} = this.props;
    return connectDragSource(<div style={container}/>);
  }
}
export default DragSource(ItemTypes.Take, takeSource, collect)(Take);
