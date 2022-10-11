import { MongoClient } from 'mongodb';

import { uri } from './credentials.js';

const client = new MongoClient(uri);

//connects to DB 'sample_mflix'
const db = client.db('sample_mflix');

//retrieves collection movies from DB called sample_mflix
const moviesCollection = db.collection('movies');

const query = {
    title: {$regex: /[\d+]{4}$/i}
}

//retrieves one line from DB
const movie = await moviesCollection.find(query).limit(20).toArray();
console.log(`Total results ${movie.length}`);
movie.forEach(mov => console.log(`${mov.title} was made in ${mov.year}`));
