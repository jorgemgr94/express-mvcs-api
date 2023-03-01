import { connect, ConnectOptions, Mongoose } from 'mongoose';

export class MongoDB {
	public connection: Mongoose | null = null;

	async start() {
		const { MONGODB_URI } = process.env;
		if (!MONGODB_URI) throw new Error(`MONGODB_URI not specified`);

		const mongooseOptions: ConnectOptions = {};

		this.connection = await connect(MONGODB_URI, mongooseOptions);

		// eslint-disable-next-line no-console
		console.log(`MongoDB connected`);
	}
}
