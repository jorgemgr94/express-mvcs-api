import { MongoDB } from './config/mongoDB';
import { ExpressBackendApp } from './app';
import dotenv from 'dotenv';

async function init() {
	dotenv.config();

	const mongoDb = new MongoDB();
	await mongoDb.start();

	const app = new ExpressBackendApp();
	app.start();
}

init();
