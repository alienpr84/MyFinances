import { Router } from "express";
import controller from '../controllers/Movements.controller';
import JoiSchemaValidation from '../middlewares/JoiSchemaValidation.middleware';
import { create } from '../schemas/Movement.schema';

function movementsRoutes(router: Router) {
	const prefixRoute = '/movements';

	router
		.post(prefixRoute, JoiSchemaValidation(create), controller.create)
		.get(prefixRoute, controller.get)
		.get(`${prefixRoute}/:id`, controller.getById)
		.put(`${prefixRoute}/:id`, controller.update)
		.delete(`${prefixRoute}/:id`, controller.delete)
	;
}

export default movementsRoutes;