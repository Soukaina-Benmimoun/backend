
const getUsers = (req, res, db) => {
    db.collection('Users').find({}).toArray((error, result) => {
       if (error) {
         console.error('Error fetching notes:', error);
         res.status(500).send('Error fetching notes');
       } else {
         res.send(result);
         console.log(result);
       }
    });
   };
   
   const addUser = (req, res, db) => {
    const newEtudiant = req.body;
   
    db.collection('Users').insertOne(newEtudiant, (error, result) => {
       if (error) {
         console.error('Error adding new student:', error);
         res.status(500).send('Error adding new student');
       } else {
         res.status(201).send('New student added successfully');
       }
    });
   };
   
   const findOneUser = (req, res, db) => {
    const userId = parseInt(req.params.id);
   
    db.collection('Users').findOne({ id: userId }, (error, result) => {
       if (error) {
         console.error('Error finding student:', error);
         res.status(500).send('Error finding student');
       } else if (!result) {
         res.status(404).send('Student not found');
       } else {
         res.send(result);
       }
    });
   };
   
   const deleteOneUser = (req, res, db) => {
    const userId = parseInt(req.params.id);
   
    db.collection('Users').deleteOne({ id: userId }, (error, result) => {
       if (error) {
         console.error('Error deleting student:', error);
         res.status(500).send('Error deleting student');
       } else if (result.deletedCount === 0) {
         res.status(404).send('Student not found');
       } else {
         res.status(200).send('Student deleted successfully');
       }
    });
   };
   module.exports = { getUsers, addUser, findOneUser, deleteOneUser}; 
    
   