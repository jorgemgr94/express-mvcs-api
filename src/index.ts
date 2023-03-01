import { MongoDB } from './config/mongoDB';
import { PetsBackendApp } from './app';
import dotenv from 'dotenv';

async function init() {
	dotenv.config();

	const mongoDb = new MongoDB();
	await mongoDb.start();

	const app = new PetsBackendApp();
	app.start();
}

init();
