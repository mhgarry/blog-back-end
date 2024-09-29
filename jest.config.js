module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: ['dotenv/config'], // Load environment variables before tests
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1', // If using path aliases from tsconfig.json
    },
};
