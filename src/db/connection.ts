import { Sequelize } from 'sequelize';
import Dotenv from 'dotenv';
import path from 'path';

Dotenv.config({
    path: path.resolve(__dirname, '../../.env'),
});

// Initialize Sequelize instance
let sequelize: Sequelize;

// create a new sequelize instance to connect to the mysql database
export const startDatabase = async (): Promise<void> => {
    sequelize = new Sequelize(
        process.env.DB_NAME as string,
        process.env.DB_USER as string,
        process.env.DB_PASS as string,
        {
            host: process.env.DB_HOST,
            dialect: 'mysql',
            logging: false,
        }
    );

    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
    } catch (e: unknown) {
        console.error('Unable to connect to the database:', e);
        throw e;
    }
};

// retrieve and export the sequelize instance
export const getSequelizeInstance = (): Sequelize => {
    if (!sequelize) {
        throw new Error(
            'Database connection has not been established yet Call startDatabase first.'
        );
    }
    return sequelize;
};
