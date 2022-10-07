import app from './app';
import config from './config';
import dbConnection from './db';

async function main() {
	const { port } = config;
	dbConnection.connect();
	app.listen(port);
	console.log('Listen on PORT: ', port);
}

main();