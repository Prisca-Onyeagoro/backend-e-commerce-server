import express from 'express';
import colors from 'colors';
import Product from './Routes/Products.js';
//import the database
import connectDB from './Config/Db.js';
import dotenv from 'dotenv';
import Error from './middlewares/Error.js';
// handle the uncaught exceptions
// process.on(`uncaughtException`, (err) => {
//   console.log(`Error: ${err.stack}`);
//   console.log(`Shutting down server due to uncaught exceptions`);
//   process.exist(1);
// });

const app = express();
const PORT = process.env.PORT || 4000;
dotenv.config({ path: 'server/.env' });

//middlewares
app.use(express.json());
app.use('/api/v1', Product);
// middleware to handle error
app.use(Error);

app.listen(PORT, () => {
  console.log(`Server is serving on Port: ${PORT}`);
  connectDB();
});

// handle unhandled promise rejections
// process.on('unhandledRejection', (err) => {
//   console.log(`Error: ${err.message}`);
//   console.log(`Shutting down the server due to unhandled promise rejections`);
//   server.close(() => {
//     process.exist(1);
//   });
// });
