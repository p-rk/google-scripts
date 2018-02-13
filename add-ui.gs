function onOpen() {
  	var ui = SpreadsheetApp.getUi();
  	ui.createMenu('Trigger Email Manually')
      .addItem('Trigger Email', 'getData') // 1st argument is Option Name, 2nd is which function you want to run
      .addSeparator() // adding hr
      .addItem('Reset', 'resetSentData') // 1st argument is Option Name, 2nd is which function you want to run
      .addToUi();
}