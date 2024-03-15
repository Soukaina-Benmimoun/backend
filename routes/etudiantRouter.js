const express = require('express');
const router = express.Router();
const { connectDB } = require('../db');

const initRoutes = async () => {
 const db = await connectDB();

  // Route for getting all students
 router.get('/', (req, res) => {
    const { getEtudiants } = require('../controllers/etudiantsController');
    getEtudiants(req, res, db);
 });
 
  // Route for adding a new student
 router.post('/new_etudiant', (req, res) => {
   const { addEtudiant } = require('../controllers/etudiantsController');
   addEtudiant(req, res, db);
  });
  
  // Route for finding a single student by ID
router.get('/:id', (req, res) => {
  const { findOneEtudiant } = require('../controllers/etudiantsController');
  findOneEtudiant(req, res, db);
 });
 
 // Route for deleting a single student by ID
 router.delete('/:id', (req, res) => {
  const { deleteOneEtudiant } = require('../controllers/etudiantsController');
  deleteOneEtudiant(req, res, db);
 });
 
};

initRoutes();

module.exports = router;
