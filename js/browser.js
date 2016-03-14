var Journal = require('./journal.js').Journal;
var moment = require('moment');
$(document).ready(function(){
 $('#journal-form').submit(function(event){
   event.preventDefault();
   var inputTitle = $('#title').val();
   var inputBody = $('#body').val();
   var now = moment();
   var newJournal = new Journal(inputTitle, inputBody, now);
   $('#output').append("<h3>" + newJournal.title + "</h3>");
   $('#output').append("<p>" + now.format("MMM Do YY") + "</p>");
   $('#output').append("<p>" + newJournal.body + "</p>");
   $('#output').append("<p>" + newJournal.wordCount() + "</p>");
 });
});
