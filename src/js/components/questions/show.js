/** @jsx React.DOM */
var React           = require('react');
var Reflux          = require('reflux');
var Link            = require('react-router-component').Link;
var QuestionStore   = require('../../stores/question-store');
var QuestionActions = require('../../actions/question-actions');

var Question = React.createClass({
  mixins: [Reflux.ListenerMixin],
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
    this.listenTo(QuestionStore, this.updateQuestion);
  },
  updateQuestion: function(nextQuestion) {
    this.setState({question: nextQuestion});
    return true;
  },
  handleAnswer: function(event) {
    var target = event.target;
    var value = target.textContent
    QuestionActions.answer(value);
    return true;
  },
  render: function() {
    var question = this.state.question || {title: "Are you currently paid market rates?"};
    return (
      <div id="question">
        <h2>{question.title}</h2>
        <div className="row">
          <div className="small-4 columns">
            <button className="tiny" onClick={this.handleAnswer}>Yes</button>
          </div>
          <div className="small-4 columns">
            <button className="tiny" onClick={this.handleAnswer}>Maybe</button>
          </div>
          <div className="small-4 columns">
            <button className="tiny" onClick={this.handleAnswer}>No</button>
          </div>
        </div>
        <div className="restart"><Link href="/">Start Over</Link></div>
      </div>
    )
  }
});

module.exports = Question;
