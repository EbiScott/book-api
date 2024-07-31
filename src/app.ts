import express from 'express';
import connectDB from './db';
import bookRoutes from './routes/bookRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api', bookRoutes);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

export default app;
