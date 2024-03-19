const express = require('express');
const app = express();
const port = 8080;

// Define a route to handle GET requests to /api/cart/:username
app.get('/api/cart/:username', (req, res) => {
  const { username } = req.params;
  // Here you can write code to fetch the user's cart data from your database
  // and send it back as JSON response
  res.json({ username, cartItems: [] });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
