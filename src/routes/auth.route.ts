import express from 'express'
import { loginUser, registerUser } from '../controller/auth.controller';
import validate from '../middleware/validate';
import { loginSchema, registerSchema } from '../zod_schema/auth.schema';

const router = express.Router();

router.post('/login',validate(loginSchema),loginUser );
router.post('/register',validate(registerSchema), registerUser );



export default router;