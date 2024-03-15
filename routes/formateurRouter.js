const express = require('express');
const router = express.Router();
const { connectDB } = require('../db');

const initRoutes = async () => {
 const db = await connectDB();

  // Route for getting all formateurs
 router.get('/', (req, res) => {
    const { getFormateurs } = require('../controllers/formateursController');
    getFormateurs(req, res, db);
 });
 
  // Route for adding a new formateur
 router.post('/new_Formateur', (req, res) => {
   const { addFormateur } = require('../controllers/formateursController');
   addFormateur(req, res, db);
  });
  
  // Route for finding a single formateur by ID
router.get('/:id', (req, res) => {
  const { findOneFormateur } = require('../controllers/formateursController');
  findOneFormateur(req, res, db);
 });
 
 // Route for deleting a single formateur by ID
 router.delete('/:id', (req, res) => {
  const { deleteOneFormateur } = require('../controllers/formateursController');
  deleteOneFormateur(req, res, db);
 });
 
};

initRoutes();

module.exports = router;
