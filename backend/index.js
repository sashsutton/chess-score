import express from 'express';

import archiveRoutes from './routes/archiveRoutes.js';

const app = express();

app.use(express.json());

app.get('/api/archives', archiveRoutes);

app.listen(3000), () => {
    console.log('Server is running on port 3000');
};



