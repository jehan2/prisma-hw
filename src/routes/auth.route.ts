import express from 'express'
import { admin, getAllUsersHandler, loginUser, registerUser, user } from '../controller/auth.controller';
import {authorized, protect} from '../middleware/protect';
import validate from '../middleware/validate';
import { loginSchema, registerSchema } from '../zod_schema/auth.schema';

const router = express.Router();

router.post('/login',validate(loginSchema),loginUser );
router.post('/register',validate(registerSchema), registerUser );
router.get('/users',protect, getAllUsersHandler );
router.get('/admin',protect,authorized, admin);
router.get('/user',protect,authorized, user);



export default router;