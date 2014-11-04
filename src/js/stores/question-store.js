var Reflux = require('reflux');
var QuestionActions = require('../actions/question-actions');

var QuestionStore = Reflux.createStore({
  init: function () {
    this.listenTo(QuestionActions.answer, this.handleAnswer);
  },
  handleAnswer: function(answer) {
    // TODO: Send this to the server
    return this.trigger({title: "What is your favorite color?"});
  },
});

module.exports = QuestionStore;
