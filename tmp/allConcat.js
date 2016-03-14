var Journal = require('./../js/journal.js').Journal;
var moment = require('moment');
$(document).ready(function(){
 $('#journal-form').submit(function(event){
   event.preventDefault();
   var inputTitle = $('#title').val();
   var inputBody = $('#body').val();
   var now = moment();
   var newJournal = new Journal(inputTitle, inputBody, now);
   $('#output').append("<h3>" + newJournal.title + "</h3>");
   $('#output').append("<p>" + newJournal.date.format("MMM Do YY") + "</p>");
   $('#output').append("<p>" + newJournal.body + "</p>");
   $('#output').append("<p>" + newJournal.wordCount() + "</p>");
 });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#result').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
