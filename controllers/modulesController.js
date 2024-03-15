
const getModules = (req, res, db) => {
    db.collection('Modules').find({}).toArray((error, result) => {
       if (error) {
         console.error('Error fetching modules:', error);
         res.status(500).send('Error fetching modules');
       } else {
         res.send(result);
         console.log(result);
       }
    });
   };
   
   const addModule = (req, res, db) => {
    const newEtudiant = req.body;
   
    db.collection('Modules').insertOne(newEtudiant, (error, result) => {
       if (error) {
         console.error('Error adding new module:', error);
         res.status(500).send('Error adding new module');
       } else {
         res.status(201).send('New module added successfully');
       }
    });
   };
   
   const findOneModule = (req, res, db) => {
    const moduleId = parseInt(req.params.id);
   
    db.collection('Modules').findOne({ id: moduleId }, (error, result) => {
       if (error) {
         console.error('Error finding module:', error);
         res.status(500).send('Error finding module');
       } else if (!result) {
         res.status(404).send('Module not found');
       } else {
         res.send(result);
       }
    });
   };
   
   const deleteOneModule = (req, res, db) => {
    const moduleId = parseInt(req.params.id);
   
    db.collection('Modules').deleteOne({ id: moduleId }, (error, result) => {
       if (error) {
         console.error('Error deleting module:', error);
         res.status(500).send('Error deleting module');
       } else if (result.deletedCount === 0) {
         res.status(404).send('Module not found');
       } else {
         res.status(200).send('Module deleted successfully');
       }
    });
   };
   module.exports = { getModules, addModule, findOneModule, deleteOneModule}; 
    
   