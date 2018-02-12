function updateTime() {
  var sheetName = "Sheet1";
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var startRow = 2; 
  var numRows = sheet.getLastRow() - 1; 
  var dataRange = sheet.getRange(startRow, 1, numRows, 3) 
  var data = dataRange.getValues();
  
  for (i in data) {                                                                             
    var row = data[i];
    if(row[0] == "" && row[1] != ""){
      var status = Utilities.formatDate(new Date(), "GMT+5:30", "dd/MM/yyyy HH:mm:ss");
      sheet.getRange(startRow + Number(i), 1).setValue(status);                                       
    }
  }
}
