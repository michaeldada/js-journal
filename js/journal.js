exports.Journal = function(title, body, date){
  this.title = title;
  this.body = body;
  this.date = date;
};

exports.Journal.prototype.wordCount = function() {
  var wordString = this.body.split(' ').length;
  return wordString;
};
