import express from 'express'
import { addNewteacher, getAllclassroom, getclassroomId } from '../controller/classroom.controller';
import validate from '../middleware/validate';
import { classroomSchema } from '../zod_schema/school.schema';

const router = express.Router();

router.get('/', getAllclassroom);
 router.get('/s/:id',validate(classroomSchema),getclassroomId );
 router.post('/', validate(classroomSchema),addNewteacher )

export default router;