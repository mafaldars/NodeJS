require('dotenv').config();

const { join } = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const session = require('express-session');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');

const routes = require('./routes');

const port = process.env.PORT || 3000;
const app = express();

app.engine('hbs', handlebars.engine({
    defaultLayout: 'main',
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', join(__dirname, '..', 'views'));

app.use(express.static(join(__dirname, '..', 'public')));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
}));

app.use(fileUpload({
    createParentPath: true
}))

app.use(routes);

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('error', err => console.log('[error]', 'Error connecting to database:', err.message));
mongoose.connection.once('open', () => {
    console.log('[info]', 'Connected to database');
    app.listen(port, () => console.log(`App started at http://localhost:${port}`));
});
