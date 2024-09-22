const mongoose = require('mongoose');

// Update below to match your own MongoDB connection string.
const MONGO_URL = 'mongodb+srv://mmandani9:e16MHLXD1ok57dJ4@nasacluster.njvkp.mongodb.net/?retryWrites=true&w=majority&appName=NASACluster'

mongoose.connection.once('open', () => {
    console.log('MongoDb connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function mongoConnect() {
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
}