const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

// Load config
dotenv.config({ path: './config/config.env' });

const app = express();

if (process.env.NODE_ENV = 'development') {
    app.use(morgan('dev'));
}

// Handlebars
app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout:'main' }));
app.set('view engine', '.hbs');

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode from port ${PORT}`));