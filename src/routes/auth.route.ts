import express from 'express'
import { admin, getAllUsersHandler, loginUser, registerUser, user } from '../controller/auth.controller';
//import { authorize } from '../middleware/auth';
import {authorize, protect} from '../middleware/auth';
import validate from '../middleware/validate';
import { loginSchema, registerSchema } from '../zod_schema/auth.schema';

const router = express.Router();

router.post('/login',validate(loginSchema),loginUser );
router.post('/register',validate(registerSchema), registerUser );
router.get('/users',protect, getAllUsersHandler );
router.get('/admin',protect, authorize('ADMIN') , admin);
router.get('/user', protect, authorize('USER', 'ADMIN'),user);
router.get('/superuser',protect, authorize('ADMIN') ,admin);



export default router;