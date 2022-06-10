const express = require("express");
const { google } = require("googleapis");

const app = express();

app.get("/", async (req, res) => {

    const auth = new google.auth.GoogleAuth({

        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",

    });

    // Create client instance for auth
    const client = await auth.getClient();

    const spreadsheetId = "1kpW2RKxEGBsoMe2H7kgfIDimYtyLl-rRfNG77slXHnA";

    //Instance of Google Sheets API
    const googleSheets = google.sheets({
        version: "v4",
        auth: client
    });

    // Read rows from spreadsheet
    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Sheet1!A:B",
    });

    res.send(getRows.data);
    
});

app.listen(1337, (req, res) => console.log("running on 1337"));