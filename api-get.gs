function doGet(request) {
 var output = ContentService.createTextOutput();
 var data = {};
 var sheet = "Sheet1";
 var pid = Number(request.parameters.product_id).toFixed(0);
 var id = "1hNjadGLn_Oipa3c_ljKDKhvJMCj5BsYiiS_1oGb-0Ss";
 var cell = request.parameters.cell;
 var ss = SpreadsheetApp.openById(id);
 if (sheet) {
   if (cell) {
     data = ss.getSheetByName(sheet).getRange(cell).getValue();
   } else {
     data = readData_(ss, sheet, pid);
   }
 } else {
   // Grab all sheets except those with a name
   // that starts with an underscore
   ss.getSheets().forEach(function(oSheet, iIndex) {
     var sName = oSheet.getName();
     if (! sName.match(/^_/)) {
       data[sName] = readData_(ss, sName);
     }
   })
 }
 if(data && data != "undefined" && Object.keys(data).length > 0){
   data.result = "success";
   var result = JSON.stringify(data);
   output.setContent(result);
   output.setMimeType(ContentService.MimeType.JSON);
 }
 else {
   var seterror = JSON.stringify({"result":"error"});
   output.setContent(seterror);
   output.setMimeType(ContentService.MimeType.JSON);
 }
 return output;
}


function readData_(ss, sheetname, pid) {
 
 if (typeof properties == "undefined") {
   properties = getHeaderRow_(ss, sheetname);
   properties = properties.map(function(p) { return p.replace(/\s+/g, '_'); });
 }
 
 var rows = getDataRows_(ss, sheetname);
 var data = [];
 for (var r = 0, l = rows.length; r < l; r++) {
   var row = rows[r];
   var record = {};
     for (var p in properties) {
       Logger.log(row[p]);
       record[properties[p]] = convert_(row[p]);
   }
   data.push(record);
 }
 return getByValue2(data, pid);
}


function convert_(value) {
 if (value === "true") return true;
 if (value === "false") return false;
 return value;
}


function getDataRows_(ss, sheetname) {
 
 var sh = ss.getSheetByName(sheetname);
 return sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues();
 
}


function getHeaderRow_(ss, sheetname) {
 
 var sh = ss.getSheetByName(sheetname);
 return sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
 
}

function getByValue2(arr, value) {

 var result  = arr.filter(function(o){return o.product_id == value;} );

 return result? result[0] : null; // or undefined

}
