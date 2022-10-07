import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
	name: {
		type: String,
		required: true,
	},
	avatar: String,
	email: String,
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	}
});

export default mongoose.model('users', schema);