import express from 'express';
import 'dotenv/config';
import authRouter from './routes/auth.route'
import studentRouter from './routes/student.route'
import teacherRouter from './routes/teacher.route'

import { connectDB } from './config/db';
import 'dotenv/config';



const app = express();

connectDB();

app.use(express.json());

app.use('/api/v1/auth', authRouter );
 app.use('/api/v1/student',studentRouter );
 app.use('/api/v1/teacher',teacherRouter);
// app.use('/api/v1/chassroom',);

const PORT =5000;
app.listen(PORT, ()=>{
     console.log(`server listeng on port ${PORT}`)})