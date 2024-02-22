const Sequelize = require("sequelize");

require("dotenv").config();

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
  
  } else {
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "mysql",
        port: 3306,
      }
    );
  }
  
  module.exports = sequelize;

  //to install a specific npm module version - npm i express@3.2.4 
  //https://www.youtube.com/watch?v=3i4pc3iWjqQ
  //https://www.youtube.com/watch?v=CXiT-DWn1zs