import config from './config';
import { gapi } from 'gapi-script';
import { map, forEach } from 'lodash';

export function loadGasp(callback) {
  gapi.client.load("sheets", "v4", () => {
    let values = gapi.client.sheets.spreadsheets.values;
    let output = {filters: {}};
      values.get({
        spreadsheetId: config.gaspSheetId,
        range: "all keywords!A1:c200",
        majorDimension: "COLUMNS"
      })
      .then(
        response => {
          mapHeaders(response.result.values, output.filters);
          values.get({
            spreadsheetId: config.gaspSheetId,
            range: "masterlist!A1:e"
          })
          .then(
            response => {
              let header = response.result.values.shift();
              output.users = map(response.result.values, user => {
                let out = {};
                
                out[header[0]] = user[0];
                out[header[1]] = user[1];
                out[header[2]] = user[2];
                out[header[3]] = user[3];
                out[header[4]] = user[4];

                return out;});
              callback(output);
            },
            response => error(callback, response));
      }, 
    response => error(callback, response))
  })};
  
  
export function loadCape(callback) {
  gapi.client.load("sheets", "v4", () => {
    let values = gapi.client.sheets.spreadsheets.values;
    let output = {filters: {}};
    values
      .get({
        spreadsheetId: config.capeSheetId,
        range: "all keywords!A1:F100",
        majorDimension: "COLUMNS"
      })
      .then(
        response => {
          mapHeaders(response.result.values, output.filters);
          values.get({
            spreadsheetId: config.capeSheetId,
            range: "masterlist!A1:g"
          })
          .then(
            response => {
              output.users = response.result.values;
              callback(output);
            },
            response => error(callback, response));
      },
        response => error(callback, response));
  });
};
    
export function loadStrings(callback) {
  gapi.client.load("sheets", "v4", () => {
    let values = gapi.client.sheets.spreadsheets.values;
    let output = {};
    values
      .get({
        spreadsheetId: config.tlSheetId,
        range: "BBCode!A1:8"
      })
      .then(
        response => { 
          response = response.result.values;
          let headers = response.shift();
          map(response, (ruleset) => {
            let key = ruleset[2].toLowerCase();
            output[key] = {};
            forEach(ruleset, (line, id) => {
              output[key][headers[id]] = line;
            }); 
          });
          callback(output);
        },
        response => error(callback, response));
  });
};

function error(callback, response) {
  return callback(false, response.result.error);
}

// for mapping headers to values onto the output
function mapHeaders(array, output) {
  map(array, a => output[a.shift()] = a);
}