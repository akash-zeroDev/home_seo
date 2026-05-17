import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import leadRoutes from './routes/lead.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Database
connectDB();

// Routes
app.use('/api/leads', leadRoutes);

// Base route
app.get('/', (req, res) => {
  res.send('Lead Generation API is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
