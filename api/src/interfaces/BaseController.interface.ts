import { Request, Response } from 'express';

interface BaseController {
	create(req: Request, res: Response): Promise<void>;
	get(req: Request, res: Response): Promise<void>;
	getById(req: Request, res: Response): Promise<void>;
	update(req: Request, res: Response): Promise<void>;
	delete(req: Request, res: Response): Promise<void>;
}

export default BaseController;