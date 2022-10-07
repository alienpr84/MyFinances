import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';
import config from '../config';

function JoiSchemaValidation(schema: ObjectSchema) {
	return (req: Request, res: Response, next: NextFunction) => {
		const { error } = schema.validate({ ...req.body, ...req.params });
		console.log(error);

		if (error) {
			res
				.status(400)
				.json({
					message:
						config.node_env === 'development' ? error : 'Something was wrong',
				});
			return;
		}
		next();
	};
}

export default JoiSchemaValidation;
