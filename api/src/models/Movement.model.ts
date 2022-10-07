import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
	type: {
		type: String,
		required: true,
	},
	description: String,
	exchangeRate: {
		type: Number,
		required: true,
	},
	amount: {
		type: Number,
		required: true,
	},
	typeOfCurrency: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	financeCategories: [
		{
			type: Schema.Types.ObjectId,
			ref: 'FinanceCategory'
		},
	],
});

// validation
schema
	.path('typeOfCurrency')
	.validate(
		(value: string) => /usd|uru/g.test(value),
		'Must be "uru" or "usd".'
	);

export default mongoose.model('Movement', schema);
