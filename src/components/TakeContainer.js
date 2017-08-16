import React, {Component} from 'react';
import update from 'react/lib/update';
import Take from './Take';
import {DropTarget} from 'react-dnd';
class TakeContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      takes: props.list
    };
  }

  pushTake(take) {
    this.setState(update(this.state, {
      takes: {
        $push: [take]
      }
    }));
  }

  removeTake(index) {
    this.setState(update(this.state, {
      takes: {
        $splice: [
          [index, 1]
        ]
      }
    }));
  }

  moveTake(dragIndex, hoverIndex) {
    const {takes} = this.state;
    const dragTake = takes[dragIndex];

    this.setState(update(this.state, {
      takes: {
        $splice: [
          [
            dragIndex, 1
          ],
          [hoverIndex, 0, dragTake]
        ]
      }
    }));
  }

  render() {
    const {takes} = this.state;
    const {canDrop, isOver, connectDropTarget} = this.props;
    const isActive = canDrop && isOver;
    const style = {
      width: "200px",
      height: "404px",
      border: '1px dashed gray'
    };

    const backgroundColor = isActive
      ? 'lightgreen'
      : '#FFF';

    return connectDropTarget(
      <div style={{
        ...style,
        backgroundColor
      }}>
        {takes.map((take, i) => {
          return (<Take key={take.id} index={i} listId={this.props.id} take={take} removeTake={this.removeTake.bind(this)} moveTake={this.moveTake.bind(this)}/>);
        })}
      </div>
    );
  }
}

const takeTarget = {
  drop(props, monitor, component) {
    const {id} = props;
    const sourceObj = monitor.getItem();
    if (id !== sourceObj.listId)
      component.pushTake(sourceObj.take);
    return {listId: id};
  }
}

export default DropTarget("Take", takeTarget, (connect, monitor) => ({connectDropTarget: connect.dropTarget(), isOver: monitor.isOver(), canDrop: monitor.canDrop()}))(TakeContainer);
