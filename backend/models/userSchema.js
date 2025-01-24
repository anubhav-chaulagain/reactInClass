const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const Users = sequelize.define("users", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTERGER,
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