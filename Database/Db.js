import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://JIREHCITY-USER:12345@jirehcity-database.p4oay.mongodb.net/?retryWrites=true&w=majority'
    );
    console.log('USERDATA database connection is successfull');
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
