const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const allowOriginMiddleware = require('./middleware/allowOrigin.middleware');

const app = express();

// CONSTANTS
const PORT = config.get('port') || 5000;
const MONGO_URI = config.get('mongoUri');

app.use('*', allowOriginMiddleware);

app.use(express.json({ extended: true }));
//API routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));

async function start() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    app.listen(PORT, () => console.log(`[INFO]: App has been started on port: ${PORT}`));
  } catch (e) {
    console.log('[ERROR]: Server Error: ', e.message);
    process.exit(1);
  }
}

start();
