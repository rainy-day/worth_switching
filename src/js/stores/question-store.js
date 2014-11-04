var Reflux = require('reflux');
var QuestionActions = require('../actions/question-actions');

var QuestionStore = Reflux.createStore({
  init: function () {
    this.listenTo(QuestionActions.answer, this.handleAnswer);
  },
  handleAnswer: function(answer) {
    // TODO: Find the next question and return that

    console.log(answer);

    var question = {
      id: 2,
      title: "What is your favorite color?",
      type: "discrete",
      values: {"red": "Red", "yellow": "Yellow"}
    }

    return this.trigger(question);
  },
});

module.exports = QuestionStore;
