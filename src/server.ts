import app from './app';
import { startDatabase, getSequelizeInstance } from './db/connection';
import Dotenv from 'dotenv';
import path from 'path';

Dotenv.config({
    path: path.resolve(__dirname, '../.env'),
});

const PORT = process.env.PORT || 3333;
// start server and database connection
const startServer = async () => {
    try {
        await startDatabase(); // first start the database connection
        const sequelize = getSequelizeInstance(); // then get the sequelize instance
        app.listen(PORT, () => {
            console.log(`Server is running on port http://localhost:${PORT}`);
        });
    } catch (e: unknown) {
        console.error('Failed to start the server due to database connection error:', e);
        process.exit(1); // Exit the process if the DB connection fails
    }
};

startServer();
