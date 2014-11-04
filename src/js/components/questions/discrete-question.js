/** @jsx React.DOM */
var React           = require('react');
var QuestionStore   = require('../../stores/question-store');
var QuestionActions = require('../../actions/question-actions');
var _               = require('underscore');

var DiscreteQuestion = React.createClass({
  handleAnswer: function(event) {
    event.preventDefault();
    var target = event.target;
    var answer = target.value;
    var question = this.props.question;
    QuestionActions.answer({questionId: question.id, answer: answer});
    return true;
  },
  renderButton: function(label, value) {
    var question     = this.props.question;
    var valuesLength = _.values(question.values).length;
    var key          = "answer-" + value;
    var divClasses;

    switch(valuesLength) {
      case 1:
        divClasses = "small-12 columns";
        break;
      case 3:
        divClasses = "small-4 columns";
        break;
      case 4:
        divClasses = "small-3 columns";
        break;
      default:
        divClasses = "small-6 columns";
    }

    return (
      <div key={key} className={divClasses}>
        <button className="tiny" onClick={this.handleAnswer} value={value}>{label}</button>
      </div>
    );
  },
  render: function() {
    var question = this.props.question;
    var discreteButtons = _.map(question.values, this.renderButton);
    return (
      <div id="discrete-question">
        <div className="row">
          <div className="small-12 columns">
            <h2>{question.title}</h2>
          </div>
        </div>
        <div className="row">
          {discreteButtons}
        </div>
      </div>
    )
  }
});

module.exports = DiscreteQuestion;
