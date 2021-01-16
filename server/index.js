import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({limit: "30mb",extended: true }));
app.use(bodyParser.urlencoded({limit: "30mb",extended: true }));
app.use(cors());
const PORT = process.env.PORT || 5000;

//connect to mongodb
mongoose
  .connect("mongodb://localhost/memory-redux", { useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex:true })
  .then(() =>  app.listen(PORT,()=> console.log(`Connected to MongoDB... server running on port: ${PORT}`) ))
  .catch(err => console.error("Could not connect to MongoDB..."));

  mongoose.set('useFindAndModify',false);


  app.use('/posts',postRoutes);

