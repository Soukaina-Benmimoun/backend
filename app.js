const express = require('express');
const cors = require('cors');
const notesRoutes = require('./routes/router');

const app = express();

app.use(cors());
app.use(express.json()); // Added for parsing JSON requests

// Use the routes for notes
app.use('/api', notesRoutes);

app.listen(5038, () => {
 console.log('Server is running on port 5038');
});
