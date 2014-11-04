/** @jsx React.DOM */
var React    = require('react');
var Question = require('../questions/show')
var Link     = require('react-router-component').Link;

var Welcome = React.createClass({
  getInitialState: function() {
    // TODO: Set the decision logic to a good starting point.
    return {};
  },
  render: function() {
    return (
      <div id="welcome" className="row">
        <div className="small-12 columns">
          <p>You're thinking about leaving your job.  Should you stay or should you go?</p>
          <Link href="/survey">
            <button>Ready to Start?</button>
          </Link>
        </div>
      </div>
    )
  }
});

module.exports = Welcome;
