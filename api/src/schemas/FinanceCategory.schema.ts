import joi, { ObjectSchema, string } from 'joi';

const baseSchema = {
	name: joi.string().required(),
	type: joi
		.string()
		.required()
		.pattern(/expense|incoming/),
	description: joi.string(),
};

const create: ObjectSchema = joi.object().keys({
	...baseSchema,
});

const update: ObjectSchema = joi.object().keys({
	...baseSchema,
	id: joi.string().required(),
});

const getById: ObjectSchema = joi.object().keys({
	id: joi.string().required(),
});

const remove: ObjectSchema = joi.object().keys({
	id: joi.string().required(),
});

export { create, update, getById, remove };
