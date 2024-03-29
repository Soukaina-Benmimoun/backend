const express = require('express');
const router = express.Router();
const { connectDB } = require('../db');

const initRoutes = async () => {
 const db = await connectDB();

  // Route for getting all user
 router.get('/', (req, res) => {
    const { getUsers } = require('../controllers/usersController');
    getUsers(req, res, db);
 });
 
  // Route for adding a new user
 router.post('/new_users', (req, res) => {
   const { addUser } = require('../controllers/usersController');
   addUser(req, res, db);
  });
  
  // Route for finding a single user by ID
router.get('/find/:id', (req, res) => {
  const { findOneUser } = require('../controllers/usersController');
  findOneUser(req, res, db);
 });
 
 // Route for deleting a single user by ID
 router.delete('/:id', (req, res) => {
  const { deleteOneUser } = require('../controllers/usersController');
  deleteOneUser(req, res, db);
 });
};

initRoutes();

module.exports = router;
