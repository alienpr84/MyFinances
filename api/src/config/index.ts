import dotenv from 'dotenv';
import VariablesEnvironment from 'interfaces/VariablesEnvironment.interface';

const { NODE_ENV = 'production' } = process.env;
let loadedEnv;

if (NODE_ENV !== 'production') {
	loadedEnv = dotenv.config({ path: `.env.${NODE_ENV}` });
} else {
	loadedEnv = dotenv.config();
}

if (loadedEnv.error) {
	throw new Error('The environment variables can not be loaded');
}

if (!loadedEnv.parsed) {
	throw new Error('The environment variables can not be loaded');
}

const { PORT, DB_NAME, DB_USER, DB_PASSWORD } = loadedEnv.parsed;

const config: VariablesEnvironment = {
	node_env: NODE_ENV,
	port: PORT,
	uriDbConnection: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.3asww.mongodb.net/${DB_NAME}`,
};

Object.freeze(config);

export default config;
