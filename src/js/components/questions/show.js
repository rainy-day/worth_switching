/** @jsx React.DOM */
var React = require('react');

var Question = React.createClass({
  render: function() {
    return (
      <div id="question">
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
    )
  }
});

module.exports = Question;