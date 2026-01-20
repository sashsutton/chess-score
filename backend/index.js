import express from 'express';
import cors from 'cors'


import archiveRoutes from './src/routes/archive.route.js';

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => {
    res.json({ status: "ok", message: "Server is running"});
});

app.use('/api/archives', archiveRoutes);


app.listen(PORT, () => {
    console.log('Server is running on port 3000');
})






