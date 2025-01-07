import express from 'express';
import cors from 'cors';
import router from './routes/router.js';

const app = express();
app.use(cors());
app.use(express.json());

// Basic route for testing
app.use('/', router);

// Start the server
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});