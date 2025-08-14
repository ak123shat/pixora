import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './Configs/db.js';
import { inngest , functions} from './Ingest/index.js';
import { serve } from 'inngest/express';


const app = express();

await connectDB();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, Pixora Server is running!');
})
app.use('/api/inngest' , serve({ client: inngest , functions }))

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
