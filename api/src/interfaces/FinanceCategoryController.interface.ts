import { Request, Response } from 'express';
import BaseController from './BaseController.interface';

interface FinanceCategoryController extends BaseController {
	generate(req: Request, res: Response): Promise<void>;
}

export default FinanceCategoryController;