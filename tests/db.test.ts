import { startDatabase, getSequelizeInstance } from '../src/db/connection';

describe('Database Connection', () => {
    beforeAll(async () => {
        await startDatabase(); // make sure db is connected before tests
    });

    it('should connect to the database', () => {
        const sequelize = getSequelizeInstance();
        expect(sequelize).toBeDefined();
        expect(sequelize.authenticate()).resolves.toBeUndefined(); //  Check if connection is successful, fail if not
    });
});
