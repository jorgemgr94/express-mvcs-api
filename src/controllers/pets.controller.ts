import { Response, Request } from 'express';
import { Pet, IPet } from '../schemas/Pet.schema';
import { CustomRequest } from '../util/express/types';

export async function findAll(_: Request, res: Response) {
	try {
		const pets = await Pet.find();
		res.json(pets);
	} catch (error) {
		res.status(500).json(error);
	}
}

export async function findOne(req: Request, res: Response) {
	try {
		const { id } = req.params;
		const pet = await Pet.findById(id);
		if (!pet) res.status(404).json(id);
		res.json(pet);
	} catch (error) {
		res.status(500).json(error);
	}
}

export async function create(req: Request, res: Response) {
	try {
		const { body } = req;
		const createdPet = await Pet.create(body);
		res.json(createdPet);
	} catch (error) {
		res.status(500).json(error);
	}
}

export async function remove(req: Request, res: Response) {
	try {
		const { id } = req.params;
		const deletedPet = await Pet.findByIdAndDelete(id);
		if (!deletedPet) res.status(404).json(id);
		res.json(deletedPet);
	} catch (error) {
		res.status(500).json(error);
	}
}

export async function update(req: CustomRequest<IPet>, res: Response) {
	try {
		const { id } = req.params;
		const { body } = req;

		const updatedPet = await Pet.findByIdAndUpdate(id, body);
		if (!updatedPet) res.status(404).json(id);
		res.json(updatedPet);
	} catch (error) {
		res.status(500).json(error);
	}
}
