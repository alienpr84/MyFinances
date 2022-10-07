import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
	name: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	movements: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Movement',
		},
	],
});

// validation
schema
	.path('type')
	.validate(
		(value: string) => /expense|incoming/g.test(value),
		'Must be "expense" or "incoming".'
	);

export default mongoose.model('FinanceCategory', schema);
