import joi, { ObjectSchema } from 'joi';

const baseSchema = {
	type: joi.string().required().pattern(/expense|incoming/),
	exchangeRate: joi.number().required(),
	amount: joi.number().required(),
	typeOfCurrency: joi.string().required().pattern(/usd|uru/),
	date: joi.date().required(),
}

const create: ObjectSchema = joi.object().keys({...baseSchema});

export { create };