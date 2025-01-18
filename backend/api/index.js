const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const chatbotRoutes = require('./routes/chatbots');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://mongo:27017/chatbotDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/chatbots', chatbotRoutes);

app.get('/', (req, res) => {
    res.send('API de gestión de chatbots lista');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});