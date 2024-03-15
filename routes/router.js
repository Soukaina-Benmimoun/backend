const express = require('express');
const router = express.Router();
const { connectDB } = require('../db');

// Wrap the code that uses await inside an async function
const initRoutes = async () => {
 const db = await connectDB();

 // Routes for students
 router.get('/etudiants', (req, res) => {
    const { getEtudiants } = require('../controllers/etudiantsController');
    getEtudiants(req, res, db);
 });
};

initRoutes();

module.exports = router;
