import { Router } from 'express';
import controller from '../controllers/FinanceCategories.controller';
import JoiSchemaValidation from '../middlewares/JoiSchemaValidation.middleware';
import {
	create,
	update,
	getById,
	remove,
} from '../schemas/FinanceCategory.schema';

function financeCategoriesRoutes(router: Router) {
	const prefixRoute = '/finance_categories';

	router
		.post(prefixRoute, JoiSchemaValidation(create), controller.create)
		.get(prefixRoute, controller.get)
		.get(`${prefixRoute}/:id`, JoiSchemaValidation(getById), controller.getById)
		.post(`${prefixRoute}/generate`, controller.generate)
		.put(`${prefixRoute}/:id`, JoiSchemaValidation(update), controller.update)
		.delete(
			`${prefixRoute}/:id`,
			JoiSchemaValidation(remove),
			controller.delete
		);
}

export default financeCategoriesRoutes;
