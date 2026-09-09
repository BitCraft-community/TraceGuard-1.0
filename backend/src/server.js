require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { logger } = require("./utils/logger");

// Importing custom error handler middleware
const { errorHandler } = require("./middleware/errorHandler");
const connectDB = require("./config/db");
const helmet = require("helmet");
const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

// 1. Middleware Setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

// 2. API Versioning Setup
const v1Routes = require("./routes/v1");
app.use("/api/v1", v1Routes);

// Root endpoint / Health check
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ status: "success", message: "TraceGuard API is running " });
});

// 3. Global Error Handling Middleware (Optional but recommended)
app.use(errorHandler);
connectDB();

app.listen(PORT, "0.0.0.0", () => {
  logger.info(`Server running on  http://localhost:${PORT}`);
});
