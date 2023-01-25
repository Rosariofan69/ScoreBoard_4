const express = require("express");
const path = require("path");

const port = Number(process.env.PORT) || 8000;

const app = express();

// log
app.all("*", (req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// static files
app.use(express.static(path.resolve("public")));

// API
app.get("/data.json", (req, res) => {
  const data = {
    date: new Date(),
    message: "Hello World!",
  };
  res.json(data);
});


app.get('/xlsx', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  // res.send('GETパラメータ取得: ');

  const xlsx = require('xlsx');
  
  const book = xlsx.readFile('./public/Book1.xlsx');
  const worksheet = book.Sheets['Sheet1'];

  const rowIndex = 0;
  const columnIndex = 0;

  const cellAddress = xlsx.utils.encode_cell( {c:columnIndex, r:rowIndex} );
  const cell = worksheet[cellAddress];
  res.send('cel');
});


// start
app.listen(port, () => console.log("Listening at", port));
