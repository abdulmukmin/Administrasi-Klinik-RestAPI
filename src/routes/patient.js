
import express from 'express';
import { getAll, create, deleteAll, createDummy } from '../controllers/patientController'
const router = express.Router();

/* Link routing. */
router.get('/', getAll);
router.post('/', create);
router.post('/dummy', createDummy);
router.delete('/', deleteAll)

export default router
