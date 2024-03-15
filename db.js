const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'Gestion_etudiant';

let db;

const connectDB = async () => {
 try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    db = client.db(dbName);
    console.log('Successfully connected to the database.');
    return db;
 } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error; // Propagate the error
 }
};

module.exports = { connectDB, db }; // Export db as well
