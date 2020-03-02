
import express from 'express';
import { getAll, create, deleteAll } from '../controllers/doctorController'
const router = express.Router();

/* Link routing. */
router.get('/', getAll);
router.post('/', create);
router.delete('/', deleteAll)

export default router
