import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import loanRoutes from './routes/LoanRoutes';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/loans', loanRoutes);

export default app;
