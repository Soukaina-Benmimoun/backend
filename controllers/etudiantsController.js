
const getEtudiants = (req, res, db) => {
  db.collection('Etudiants').find({}).toArray((error, result) => {
     if (error) {
       console.error('Error fetching student:', error);
       res.status(500).send('Error fetching student');
     } else {
       res.send(result);
       console.log(result);
     }
  });
 };
 
 const addEtudiant = (req, res, db) => {
  const newEtudiant = req.body;
 
  db.collection('Etudiants').insertOne(newEtudiant, (error, result) => {
     if (error) {
       console.error('Error adding new student:', error);
       res.status(500).send('Error adding new student');
     } else {
       res.status(201).send('New student added successfully');
     }
  });
 };
 
 const findOneEtudiant = (req, res, db) => {
  const studentId = parseInt(req.params.id);
 
  db.collection('Etudiants').findOne({ id: studentId }, (error, result) => {
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
 
 const deleteOneEtudiant = (req, res, db) => {
  const studentId = parseInt(req.params.id);
 
  db.collection('Etudiants').deleteOne({ id: studentId }, (error, result) => {
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
 
 module.exports = { getEtudiants, addEtudiant, findOneEtudiant, deleteOneEtudiant };