const express = require('express');
const connectDB = require('./config/db');
const app = express();

// //Connect DB
connectDB();

// //init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Welcome to the TodoList API' }));

// //define routes
app.use('/api/todos', require('./routes/todos'));
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
