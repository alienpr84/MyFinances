import FinanceCategory from './FinanceCategory.interface';

interface Movement {
	type: 'expense' | 'incoming';
	description: string;
	exchangeRate: number;
	amount: number;
	typeOfCurrency: 'usd' | 'uru';
	date: Date;
	financeCategories?: FinanceCategory[];
}

export default Movement;