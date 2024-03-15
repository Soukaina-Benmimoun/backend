// controllers.js


const getEtudiants = (req, res, db) => {
  db.collection('Etudiants').find({}).toArray((error, result) => {
     if (error) {
       console.error('Error fetching notes:', error);
       res.status(500).send('Error fetching notes');
     } else {
       res.send(result);
       console.log(result);
     }
  });
 };
 
 // Ajoutez ici d'autres fonctions de contrôleur
 
 module.exports = { getEtudiants };
 