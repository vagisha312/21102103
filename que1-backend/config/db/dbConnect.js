import mongoose from 'mongoose';

const dbConnect = async () => {
    await mongoose
          .connect(process.env.MONGODB_URL)
          .then(() => {
              console.log('db is connected');
          })
          .catch(err => console.error(
              `Error connecting to Mongoose: ${err.message}`
          ));
  };
  export default dbConnect;
