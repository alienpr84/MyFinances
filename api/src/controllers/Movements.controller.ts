import { Request, Response } from 'express';
import BaseController from '../interfaces/BaseController.interface';
import MovementModel from '../models/Movement.model';

const controller: BaseController = {} as BaseController;

controller.create = async (req: Request, res: Response) => {
	try {
		const model = new MovementModel(req.body);
		await model.save();
		res.status(201).json({ message: 'Created sucessfully.' });
	} catch (error) {
		res.status(400).json({ message: 'Can not be created.' });
	}
};

controller.get = async (req: Request, res: Response) => {
	try {
		const models = await MovementModel.find();
		res.status(200).json(models);
	} catch (error) {
		res.status(404).json({ message: 'Not found.' });
	}
};

controller.getById = async (req: Request, res: Response) => {
	try {
		const model = await MovementModel.findById(req.params.id);
		res.status(200).json(model);
	} catch (error) {
		res.status(404).json({ message: 'Not found.' });
	}
};

controller.update = async (req: Request, res: Response) => {
	try {
		await MovementModel.findByIdAndUpdate(req.params.id, req.body);
		res.status(200).json({ message: 'Updated sucessfully.' });
	} catch (error) {
		res.status(404).json({ message: 'Not found.' });
	}
};

controller.delete = async (req: Request, res: Response) => {
	try {
		MovementModel.findByIdAndDelete(req.params.id);
		res.status(200).json({ message: 'Deleted sucessfully.' });
	} catch (error) {
		res.status(404).json({ message: 'Not found.' });
	}
};

export default controller;