// src/server.ts
import express    from 'express';
import fileRoutes from './routes/file.routes';

const app = express();
const port = 3000;

app.use('/api/files', fileRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
