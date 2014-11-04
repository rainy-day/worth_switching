/** @jsx React.DOM */
var React = require('react');

var Welcome = React.createClass({
  render: function() {
    return (
      <div id="welcome" className="row">
        <div className="small-12 columns">
          <h1>Worth Switching?</h1>
          <p>You're thinking about leaving your job.  Should you stay or should you go?</p>

          <h2>Are you currently paid market rates?</h2>

          <form>
            <div className="row">
              <div className="small-4 columns">
                <button className="tiny">Yes</button>
              </div>
              <div className="small-4 columns">
                <button className="tiny">Maybe</button>
              </div>
              <div className="small-4 columns">
                <button className="tiny">No</button>
              </div>
            </div>
          </form>

        </div>
      </div>
    )
  }
});

module.exports = Welcome;
