import { Request, Response } from 'express';
import FinanceCategoryModel from '../models/FinanceCategory.model';
import FinanceCategoryController from 'interfaces/FinanceCategoryController.interface';
import data from '../data/FinanceCategories';

const controller = {} as FinanceCategoryController;

controller.create = async (req: Request, res: Response) => {
	try {
		const model = new FinanceCategoryModel(req.body);
		await model.save();
		res.status(201).json({ message: 'Created sucessfully.' });
	} catch (error) {
		res.status(400).json({ message: 'Can not be created from controller.' });
	}
};

controller.get = async (req: Request, res: Response) => {
	try {
		const models = await FinanceCategoryModel.find();
		res.status(200).json(models);
	} catch (error) {
		res.json(400).json({ message: 'No finance categories founds.' });
	}
};

controller.getById = async (req: Request, res: Response) => {
	try {
		const model = await FinanceCategoryModel.findById(req.params.id);
		res.status(200).json(model??[]);
	} catch (error) {
		res.status(404).json({
			message: 'Not found',
		});
	}
};

controller.update = async (req: Request, res: Response) => {
	try {
		await FinanceCategoryModel.findByIdAndUpdate(req.params.id, req.body);
		res.status(200).json({ message: 'Updated sucessfully' });
	} catch (error) {
		res.status(404).json({
			message: 'Not found.',
		});
	}
};

controller.delete = async (req: Request, res: Response) => {
	try {
		await FinanceCategoryModel.findByIdAndDelete(req.params.id);
		res.status(200).json({ message: 'Deleted sucessfully' });
	} catch (error) {
		res.status(404).json({ message: `Not found.` });
	}
};

controller.generate = async (req: Request, res: Response) => {
	try {
		await FinanceCategoryModel.collection.insertMany(data);
		res.status(201).json({ message: 'Created successfully.' });
	} catch (error) {
		res.status(400).json({ message: 'Can not be created.' });
	}
};

export default controller;
