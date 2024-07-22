import express from 'express';
import { connectToDatabase } from './database';
import checkoutRoutes from './routes/checkoutRoutes';

const app = express();
app.use(express.json());

app.use('/api', checkoutRoutes);

const port = process.env.PORT || 4000;
app.listen(port, async () => {
  await connectToDatabase();
  console.log(`Server running at http://localhost:${port}`);
});
