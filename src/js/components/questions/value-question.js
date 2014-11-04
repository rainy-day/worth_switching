/** @jsx React.DOM */
var React           = require('react');
var QuestionStore   = require('../../stores/question-store');
var QuestionActions = require('../../actions/question-actions');

var ValueQuestion = React.createClass({
  handleAnswer: function(event) {
    event.preventDefault();
    var answer = this.refs.answer.getDOMNode().value.trim();
    var question = this.props.question;
    if ( !! answer ) // Only submit the answer if there was one.
      QuestionActions.answer({questionId: question.id, answer: answer});
    return true;
  },
  componentDidMount: function() {
    var answer = this.refs.answer;
    answer.getDOMNode().focus();
  },
  render: function() {
    var question = this.props.question;
    return (
      <div id="value-question">
        <div className="row">
          <div className="small-12 columns">
            <h2>{question.title}</h2>
          </div>
        </div>
        <div className="row">
          <div className="small-12 columns">
            <form onSubmit={this.handleAnswer}>
              <input ref="answer" type="text"></input>
            </form>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = ValueQuestion;
