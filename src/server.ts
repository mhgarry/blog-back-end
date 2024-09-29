import app from './app';
import Dotenv from 'dotenv';
import path from 'path';

Dotenv.config({
    path: path.resolve(__dirname, '../.env'),
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
