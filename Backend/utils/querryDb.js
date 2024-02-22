const { db } = require('../db');

function queryDb(sql, values) {
  console.log("Executing query:", sql); // Add this line
  console.log("Query parameters:", values); // Add this line
  return new Promise((resolve, reject) => {
    db.query(sql, values, (err, results) => {
      if (err) {
        console.error("Error executing query:", err); // Add this line
        reject(err);
      } else {
        console.log("Query results:", results); // Add this line
        resolve(results);
      }
    });
  });
}

module.exports = { queryDb };
