// Google Apps Script: publishes every tab of this Google Sheet as JSON.
// Paste into Extensions > Apps Script (opened from inside your sheet).
function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var out = {};
  ss.getSheets().forEach(function (sh) {
    out[sh.getName()] = sh.getDataRange().getDisplayValues();
  });
  var json = JSON.stringify(out);
  var cb = e && e.parameter && e.parameter.callback;
  if (cb && /^[A-Za-z0-9_]+$/.test(cb)) {
    return ContentService.createTextOutput(cb + "(" + json + ")")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}
