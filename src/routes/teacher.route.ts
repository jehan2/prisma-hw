import express from 'express'
import { addNewteacher, getAllteacher, getteacherId } from '../controller/teacher.controller';
import validate from '../middleware/validate';
import { teacherSchema } from '../zod_schema/school.schema';

const router = express.Router();

router.get('/',getAllteacher );
 router.get('/s/:id',validate(teacherSchema),getteacherId  );
 router.post('/', validate(teacherSchema), addNewteacher)

export default router;