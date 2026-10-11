import { Router } from 'express';
import * as userController from '../controllers/userController.js';
import upload from '../config/multer.js';

const router = Router();

router.get('/', userController.getUsers);
router.post('/', upload.single('foto'), userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:email', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;