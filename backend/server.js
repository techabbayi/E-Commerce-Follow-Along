const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();  // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

const handler = require('./middleware/handler');

// Add the error handling middleware
app.use(handler);

const routes = require('./routes/routes');
app.use('/api', routes); // Your routes are now under /api endpoint



// Middleware to parse JSON request body
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error: ', err);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
