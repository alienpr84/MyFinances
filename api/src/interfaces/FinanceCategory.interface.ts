import Movement from "./Movement.interface";

interface FinanceCategory {
	name: string;
	type: 'expense' | 'incoming';
	description: string;
	movements?: Movement[];
}

export default FinanceCategory;