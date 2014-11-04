/** @jsx React.DOM */
var React = require('react');
var Question = require('../questions/show')

var Welcome = React.createClass({
  render: function() {
    return (
      <div id="welcome" className="row">
        <div className="small-12 columns">
          <h1>Worth Switching?</h1>
          <p>You're thinking about leaving your job.  Should you stay or should you go?</p>
					<Question />
        </div>
      </div>
    )
  }
});

module.exports = Welcome;
