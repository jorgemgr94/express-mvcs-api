import { Router } from 'express';
import {
	findAll,
	findOne,
	create,
	remove,
	update
} from '../controllers/pets.controller';

const router = Router();
router.route('/').get(findAll).post(create);
router.route('/:id').get(findOne).patch(update).delete(remove);

export default router;
