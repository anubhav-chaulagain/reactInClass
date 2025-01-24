
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', '123#@!456^%$789(*&', { //db, username, password
    host: "localhost",
    dialect: "postgres",
});

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch(error) {
        console.error("Unable to connect to the database.", error);
    }
};

module.exports = { sequelize, connection };