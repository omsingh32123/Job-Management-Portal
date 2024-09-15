require('dotenv').config();
const mongoose = require('mongoose');

const DBconnection = async () => {
    const MONGO_URL = 'mongodb+srv://omsingh32123:dPgnQ5V3GVbTa53S@jobsportal.lkfuwsn.mongodb.net/?retryWrites=true&w=majority&appName=JobsPortal';
    try {
        await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.error('Error whaile connecting to Database', error.message);
    }
};

module.exports = DBconnection;
    