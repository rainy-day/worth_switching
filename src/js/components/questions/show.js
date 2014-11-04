/** @jsx React.DOM */
var React           = require('react');
var Reflux          = require('reflux');
var Link            = require('react-router-component').Link;
var QuestionStore   = require('../../stores/question-store');
var QuestionActions = require('../../actions/question-actions');

var Question = React.createClass({
  mixins: [Reflux.ListenerMixin],
  getInitialState: function() {
    return {
      question: {
        id: 1,
        title: "Are you currently paid market rates?"
      }
    };
  },
  componentDidMount: function() {
    this.listenTo(QuestionStore, this.updateQuestion);
  },
  updateQuestion: function(nextQuestion) {
    this.setState({question: nextQuestion});
    return true;
  },
  handleAnswer: function(event) {
    event.preventDefault();
    var target = event.target;
    var answer = target.value;
    var question = this.state.question;
    QuestionActions.answer({questionId: question.id, answer: answer});
    return true;
  },
  render: function() {
    var question = this.state.question;
    return (
      <div id="question">
        <h2>{question.title}</h2>
        <div className="row">
          <div className="small-4 columns">
            <button className="tiny" onClick={this.handleAnswer} value="yes">Yes</button>
          </div>
          <div className="small-4 columns">
            <button className="tiny" onClick={this.handleAnswer} value="maybe">Maybe</button>
          </div>
          <div className="small-4 columns">
            <button className="tiny" onClick={this.handleAnswer} value="no">No</button>
          </div>
        </div>
        <div className="restart"><Link href="/">Start Over</Link></div>
      </div>
    )
  }
});

module.exports = Question;
