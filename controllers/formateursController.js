
const getFormateurs = (req, res, db) => {
    db.collection('Formateurs').find({}).toArray((error, result) => {
       if (error) {
         console.error('Error fetching formateur:', error);
         res.status(500).send('Error fetching formateur');
       } else {
         res.send(result);
         console.log(result);
       }
    });
   };
   
   const addFormateur = (req, res, db) => {
    const newFormateur = req.body;
   
    db.collection('Formateurs').insertOne(newFormateur, (error, result) => {
       if (error) {
         console.error('Error adding new formateur:', error);
         res.status(500).send('Error adding new formateur');
       } else {
         res.status(201).send('New formateur added successfully');
       }
    });
   };
   
   const findOneFormateur = (req, res, db) => {
    const formateurId = parseInt(req.params.id);
   
    db.collection('Formateurs').findOne({ id: formateurId }, (error, result) => {
       if (error) {
         console.error('Error finding formateur:', error);
         res.status(500).send('Error finding formateur');
       } else if (!result) {
         res.status(404).send('Formateur not found');
       } else {
         res.send(result);
       }
    });
   };
   
   const deleteOneFormateur = (req, res, db) => {
    const formateurId = parseInt(req.params.id);
   
    db.collection('Formateurs').deleteOne({ id: formateurId }, (error, result) => {
       if (error) {
         console.error('Error deleting formateur:', error);
         res.status(500).send('Error deleting formateur');
       } else if (result.deletedCount === 0) {
         res.status(404).send('Formateur not found');
       } else {
         res.status(200).send('Formateur deleted successfully');
       }
    });
   };
   
   module.exports = { getFormateurs, addFormateur, findOneFormateur, deleteOneFormateur }; 
     
   