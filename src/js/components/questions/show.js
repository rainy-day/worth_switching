/** @jsx React.DOM */
var React               = require('react');
var Reflux              = require('reflux');
var Link                = require('react-router-component').Link;
var QuestionStore       = require('../../stores/question-store');
var DiscreteQuestion    = require('./discrete-question');
var ValueQuestion       = require('./value-question');

var Question = React.createClass({
  mixins: [Reflux.ListenerMixin],
  getInitialState: function() {
    // return {
    //   question: {
    //     id: 1,
    //     title: "Are you currently paid market rates?",
    //     type: "discrete",
    //     values: {"yes": "Yes", "no": "No", "maybe": "Maybe"}
    //   }
    // };

    return {
      question: {
        id: 1,
        title: "How are you today?",
        type: "value"
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
  render: function() {
    var question = this.state.question;
    var questionView;

    switch (question.type) {
      case 'value':
        questionView = (<ValueQuestion question={question} />);
        break;
      default:
        questionView = (<DiscreteQuestion question={question} />);
    }

    return (
      <div id="question">
        {questionView}
        <div className="row">
          <div className="small-12 columns">
            <div className="restart"><Link href="/">Start Over</Link></div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Question;
