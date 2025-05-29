import express from 'express';
import dbConnect from './Helper/ConnectDb.js';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from backend!');
});


app.listen(3000, () => {
    dbConnect();
  console.log('Server is running on port 3000');
});
