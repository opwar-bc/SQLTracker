const fs = require('fs');
const path = require('path');
const db = require('../config/connection.js');

fs.readFile(path.join(__dirname, 'seeds.sql'), 'utf8', (err, data) => {
  if (err) throw err;

  const queries = data.split(';').map(query => query.trim()).filter(query => query.length > 0);

  queries.forEach(query => {
    db.query(query, err => {
      if (err) throw err;
    });
  });
  db.end();
});
