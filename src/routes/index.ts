import {Router} from 'express';
const router = Router();

import {getUsers, getUserById, createUser, deleteUser, updateUser} from '../controllers/indexControllers';

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
