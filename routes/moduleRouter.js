const express = require('express');
const router = express.Router();
const { connectDB } = require('../db');

const initRoutes = async () => {
 const db = await connectDB();

  // Route for getting all module
 router.get('/', (req, res) => {
    const { getModules } = require('../controllers/modulesController');
    getModules(req, res, db);
 });
 
  // Route for adding a new module
 router.post('/new_modules', (req, res) => {
   const { addModule } = require('../controllers/modulesController');
   addModule(req, res, db);
  });
  
  // Route for finding a single module by ID
router.get('/find/:id', (req, res) => {
  const { findOneModule } = require('../controllers/modulesController');
  findOneModule(req, res, db);
 });
 
 // Route for deleting a single module by ID
 router.delete('/:id', (req, res) => {
  const { deleteOneModule } = require('../controllers/modulesController');
  deleteOneModule(req, res, db);
 });
};

initRoutes();

module.exports = router;
