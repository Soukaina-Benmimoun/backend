const express = require('express');
const cors = require('cors');
const etudiantRouter = require('./routes/etudiantRouter');
const userRouter = require('./routes/userRouter');
const formateurRouter = require('./routes/formateurRouter');
const app = express();

app.use(cors());
app.use(express.json()); // Added for parsing JSON requests

// Use the routes for etudiants
app.use('/api/etudiants', etudiantRouter);

// Use the routes for users
app.use('/api/users', userRouter);

// Use the routes for formateurs
app.use('/api/formateurs', formateurRouter);

app.listen(5038, () => {
 console.log('Server is running on port 5038');
});
