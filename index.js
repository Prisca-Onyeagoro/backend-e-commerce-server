import Express from 'express';
import Cors from 'cors';
import Bodyparser from 'body-parser';

import connectDB from './Database/Db.js';
import Posts from './Routes/Posts/Posts.js';

const app = Express();
const PORT = process.env.PORT || 4000; // PORT on server

app.use(Bodyparser.json({ limit: '30mb', extended: true }));
app.use(Bodyparser.urlencoded({ limit: '30mb', extended: true }));
app.use(Express.json());
//middleware
app.use(Cors());

app.use('/post', Posts);
app.listen(PORT, () => {
  console.log(`App is listening on Port: ${PORT}`);
  connectDB();
});
