import React, {Component} from 'react';
const container = {
  width:300,
  height:300,
  textAlign:'center',
  backgroundColor:'blue',
};
class TakeContainer extends Component {
  render() {
    return (
      <div style={container}/>
    );
  }
}
export default TakeContainer;
