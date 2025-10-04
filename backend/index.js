require('dotenv').config({ path: './backend/.env' });
const connectToMongo = require('./db');
const express = require('express');
const session = require('express-session');
var cors = require('cors');



connectToMongo();
const app = express();
const port = process.env.PORT || 4000;

// trust proxy to allow secure cookies behind Render
app.set('trust proxy', 1);

app.use(cors({
  origin: [
    'http://localhost:3000',
    process.env.FRONTEND_URL || 'https://screenly-pi.vercel.app'
  ],
  credentials: true,
}));

app.use(express.json());


// Normal auth routes
app.use('/api/auth', require('./routes/auth'));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
