import { MongoClient, ObjectId } from 'mongodb';

import { uri } from './credentials.js';

const client = new MongoClient(uri);

//connects to DB 'sample_mflix'
const db = client.db('sample_mflix');

//retrieves collection movies from DB called sample_mflix
const moviesCollection = db.collection('movies');

const query = {
    title: {$regex: /boca code/i}
}

//retrieves one line from DB
const movie = await moviesCollection.find(query).limit(20).toArray();
// console.log(`Total results ${movie.length}`);
// movie.forEach(mov => console.log(`${mov.title} was made in ${mov.year}`));

//add new movie
const newMovie = {
    title: "The Boca Code Story",
    rated: "R",
    genre: ["Comedy"],
    releasedDate: "2022-12-16", 
}

// const result = await moviesCollection.insertOne(newMovie);
// console.log(result.insertedId);

// const newQuery = { _id: ObjectId('6345ca6be30900dec9472aa8') };
// const update = {$set: {title: "The New Boca Code Story"}};
// const results = await moviesCollection.findOneAndUpdate(newQuery, update);
// console.log(results);