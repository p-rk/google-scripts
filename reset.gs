function resetSentData() {
  var sheet = selectSheet("Sheet1");
  var startRow = 2;
  var lastCol = sheet.getLastColumn();
  var numRows = sheet.getLastRow() - 1;
  var dataRange = sheet.getRange(startRow, 1, numRows, lastCol);
  var data = dataRange.getValues();                                                                           
  sheet.getRange("Sheet1!A2:AZ").setValue("");
  return resetSentColumn();
}


function resetSentColumn() {
  var sheet = selectSheet("Sheet2");
  var startRow = 2;
  var lastCol = sheet.getLastColumn() - 1;
  var numRows = sheet.getLastRow() - 1;
  var dataRange = sheet.getRange(startRow, 1, numRows, lastCol);
  var data = dataRange.getValues();
  for (i in data) {                           
    sheet.getRange(startRow + Number(i), lastCol).setValue(""); 
  }
}


