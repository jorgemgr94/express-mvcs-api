import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

import routes from './routes/index.routes';

export class ExpressBackendApp {
	app: Express;

	constructor() {
		this.app = express();
	}

	start() {
		const { PORT } = process.env;
		if (!PORT) throw new Error(`PORT not specified`);

		this.registerMiddleware();
		this.registerRoutes();

		// eslint-disable-next-line no-console
		console.debug(`Server starting on port ${PORT}`);
		this.app.listen(PORT);
	}

	// TODO: implement this.
	// async stop() {}

	registerMiddleware() {
		const { NODE_ENV, CORS_ORIGINS } = process.env;

		if (NODE_ENV === 'development') this.app.use(morgan('dev'));
		this.app.use(helmet());
		this.app.use(cors({ origin: CORS_ORIGINS }));
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
	}

	registerRoutes() {
		this.app.use('/api/v1', routes);
	}
}
