const mongoose = require("mongoose");
const { logger } = require("../utils/logger");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    logger.info({
      msg: "mongodb database connected successfully",
      host: conn.connection.host,
    });
  } catch (error) {
    logger.error({ msg: error?.message, error, event: "connectDB" });
    process.exit(1);
  }
};

module.exports = connectDB;
