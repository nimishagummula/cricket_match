const express = require("express");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const path = require("path");
const dbpath = path.join(__dirname, cricketMatchDetails);
const app = expess();
let db = null;
const initializedbserver = async () => {
  try {
    db = await open({
      fileName: dbpath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3000/");
    });
  } catch (e) {
    console.log(`DB Error ${e.message}`);
  }
};
initializedbserver();
