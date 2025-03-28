import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
//ROUTE IMPORTS 
import projectRoutes from './routes/projectRoutes';
import taskRoutes from './routes/taskRoutes';

//CONFIGURATION 
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//ROUTES 
app.get("/",(req, res) => {
  res.send("Home route ");
})

app.use("/projects" , projectRoutes);
app.use("/tasks" , taskRoutes);

//SERVER 
const port  = process.env.PORT || 6001;

app.listen(port , ()=>{
  console.log(`Server is running on port ${port}`);
  
})