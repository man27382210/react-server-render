"use strict";
var React = require("react");

module.exports = React.createClass({
  getInitialState: function() {
    return {
      imageArea:this.props.contentObject.imageArea
    };
  },
  componentDidMount: function(){},
  render: function() {
    var that = this;
    var imageAreaNodeList = this.state.imageArea.map(function(data,index){
      that.d = data;
      var image_area = require("./image_area/image_area.ajs")[that.props.id];
         
    return (
          image_area.apply(that)
    );
  });

  return (
        <ul>
          {imageAreaNodeList}
        </ul>
    );
  }
});
