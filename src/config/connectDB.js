const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodejs_base", "root", "12345", {
  host: "localhost",
  dialect: "mysql",
  port: 5001,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default connectDB;
