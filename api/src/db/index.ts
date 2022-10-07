import mongoose, { Connection } from 'mongoose';
import config from '../config';

let DBConnectionInstance: DBConnection;

class DBConnection {
	private connection: Connection = mongoose.connection;
	private wasClose: boolean = false;

	constructor() {
		if(DBConnectionInstance) {
			throw new Error('A new instance of DBConnection class cant be created.')
		}
	}

	private handleEventConnections() {
		this.connection.on('connected', () => console.log('Database connected.'));
		this.connection.on('close', () => {
			this.wasClose = true;
			console.log('Connection to database was close.')
		});
		this.connection.on('disconnected', () => {
			if(!this.wasClose) {
				console.log('Trying reconnection to the database...');
				this.handleConnection();
			}
		});
	}

	private async handleConnection() {
		try {
			await mongoose.connect(config.uriDbConnection);
		} catch (error) {
			this.handleConnection();
		}
	}

	public connect() {
		this.handleEventConnections();
		this.handleConnection();
	}

	public close() {
		if (this.connection.readyState === 1) {
			this.connection.close();
		}
	}
}

DBConnectionInstance = new DBConnection();

export default DBConnectionInstance;
