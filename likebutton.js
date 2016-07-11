import React from 'react';


export default React.createClass({
  getDefaultProps: function () {
    return {
      count: 0,
      text: 'likes'
    }
  },
   
  getInitialState: function () {
    return {
      count: this.props.count,
      text: this.props.text
    }
  },
  doThis: function() {
    this.setState({
      count: this.state.count + 1,
      text: this.state.count === 0 ? 'like' : 'likes'
    })
  },
  render: function () {
    return (
      <div id="likebutton">
        <button id="button" onClick={this.doThis}>{this.state.count} {this.state.text}</button> 
      </div>
      
    )
  }
})