var Journal = require('./journal.js').Journal;
var prompt = require('prompt');
var moment = require('moment');
prompt.start();

prompt.get(['title', 'post'], function (err, result) {
  var inputTitle = result.title;
  var postContent = result.post;
  var now = moment();
  var newJournal = new Journal(inputTitle, postContent, now);

  console.log(newJournal.title);
  console.log(newJournal.date.format("MMM Do YY"));
  console.log(newJournal.body);
  console.log(newJournal.wordCount());
})
