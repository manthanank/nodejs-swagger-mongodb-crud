const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger.json");
const connectDB = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();

// Load environment variables
require("dotenv").config();

// Connect to MongoDB
connectDB();

// CORS
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Swagger setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API routes
app.get("/", (req, res) => {
  res.send(
    "API is running... Do you want to see the API documentation? Go to /api-docs"
  );
});

// User routes
app.use("/api/users", userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
