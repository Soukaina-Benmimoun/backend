
const getUsers = (req, res, db) => {
    db.collection('Users').find({}).toArray((error, result) => {
       if (error) {
         console.error('Error fetching users:', error);
         res.status(500).send('Error fetching users');
       } else {
         res.send(result);
         console.log(result);
       }
    });
   };
   
   const addUser = (req, res, db) => {
    const newUser = req.body;
   
    db.collection('Users').insertOne(newUser, (error, result) => {
       if (error) {
         console.error('Error adding new user:', error);
         res.status(500).send('Error adding new user');
       } else {
         res.status(201).send('New user added successfully');
       }
    });
   };
   
   const findOneUser = (req, res, db) => {
    const userId = parseInt(req.params.id);
   
    db.collection('Users').findOne({ id: userId }, (error, result) => {
       if (error) {
         console.error('Error finding user:', error);
         res.status(500).send('Error finding user');
       } else if (!result) {
         res.status(404).send('User not found');
       } else {
         res.send(result);
       }
    });
   };
   
   const deleteOneUser = (req, res, db) => {
    const userId = parseInt(req.params.id);
   
    db.collection('Users').deleteOne({ id: userId }, (error, result) => {
       if (error) {
         console.error('Error deleting user:', error);
         res.status(500).send('Error deleting user');
       } else if (result.deletedCount === 0) {
         res.status(404).send('User not found');
       } else {
         res.status(200).send('User deleted successfully');
       }
    });
   };
   module.exports = { getUsers, addUser, findOneUser, deleteOneUser}; 
    
   