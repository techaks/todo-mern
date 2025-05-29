import express from 'express';
import dbConnect from './Helper/ConnectDb.js';
import userRouter from './Routes/userRoutes.js'
import taskRouter from './Routes/userRoutes.js'
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

app.use(express.json())
app.use("/api/v1",userRouter);
app.use("/api/v1",taskRouter);


app.listen(3000, () => {
    dbConnect();
  console.log('Server is running on port 3000');
});
