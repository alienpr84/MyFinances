import express, { Router } from 'express';
import financeCategoriesRoutes from './FinanceCategories.routes';
import movementsRoutes from './Movements.routes';

const router: Router = express.Router();

financeCategoriesRoutes(router);
movementsRoutes(router);

export default router;

