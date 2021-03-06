import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import router from './routers/index.js';
import db from './config/db.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 4400;
const DBURL = process.env.DBURL;

app.use(bodyParser.json({ limit: '60mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '60mb' }));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(cookieParser());

db.connect(DBURL);
router(app);

app.listen(PORT, () => {
  console.log('Server is running on port:', PORT);
});
