import mongoose from 'mongoose';

const Connection = async (username, password) => {
        try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;