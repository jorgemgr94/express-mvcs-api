import { Schema, model } from 'mongoose';

export interface IPet {
	name: string;
	age: number;
	breed?: string;
}

const userSchema = new Schema<IPet>({
	name: { type: String, required: true },
	age: { type: Number, required: true },
	breed: { type: String, required: false }
});

export const Pet = model<IPet>('Pet', userSchema);
