function createTable(tablename , values) {
  var message = "<table style='border-collapse:collapse;column-width:100px' border = 1 cellpadding = 1><tr></tr><tr><th colspan='16' align='center'>"+ tablename  +"</th></tr><tr><th></th><th colspan='6' align='center'>Bangalore</th><th colspan='6' align='center'>Delhi</th><th colspan='3' align='center'>Pune</th></tr><tr><th></th><th colspan='3' align='center'>Sandeep</th><th colspan='3' align='center'>Suhail</th><th colspan='3' align='center'>Ashish</th><th colspan='3' align='center'>Shailendra</th><th colspan='3' align='center'>Atul</th></tr>";
  for(var r=0;r<values.length;++r){
    message+='<tr>'
    if(r < 1) {
      for(var c=0;c<values[r].length;++c){
      message+='<th align = "center">'+values[r][c]+'</th>'
      }
    }
    else    
    {
    for(var c=0;c<values[r].length;++c){
      if (c == 0) {message+='<th align = "left">'+values[r][c]+'</th>';}
      else {message+='<td align = "center">'+values[r][c]+'</td>';}
    }
  }
    message+='</tr>' 
  }
  return message +='</table>';
}

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName("Sheet1");
}

function table(){
  var responses = getSheet();
  var values = responses.getRange("A1:Z1").getValues();
  var messageHTML = createTable1('Table 1', values);
  return messageHTML; 
}

function getDate(x){
  var yesterday = Utilities.formatDate(new Date(new Date().getTime()-(x*24*3600*1000)), "GMT+5:30", "dd-MM-yyyy");
  return yesterday;
}

function emails(){
  var mails = ["rama.ped@gmail.com"]; //Array of strings mail id's
  return mails.toString();  
}

function sendEmail(){
  var messageHTML = "<b>Please find Table " + table();
  MailApp.sendEmail(emails(),"Mail Subject", messageHTML,{'htmlBody':messageHTML}); 
}


