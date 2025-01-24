const { DataTypes } = require("sequelize");
const { sequelize, connection } = require("../database/db");

const Users = sequelize.define("persons", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

(async ()=> {
    try {
        await Users.sync(); // Creates or updates the table based on the mo
        console.log("The Users table has been created or updated.");
    } catch(error) {
        console.log("Error syncing the Users model: ", error.message);
    }
})();

module.exports = Users;