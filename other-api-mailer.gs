function emailApi(){
  var api = "YOUR EMAIL API";
  return api;
}

function sendEmail(from, to, subject, message) {
  var data = {
    "subject": subject,
    "message": message,
    "from": from,
    "content_subtype": "html",
    "to": to
  };
  var options = {
    'method' : 'post',
    'contentType': 'application/json',
    'payload' : JSON.stringify(data) // data is something you want to pass
  };
  UrlFetchApp.fetch(emailApi(), options);
}
