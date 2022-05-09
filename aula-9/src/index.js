require('dotenv').config();
const express = require('express');

const app = express();

app.set('view engine', 'hbs');

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/about', (req, res) => {
    res.send('This is about page!');
});

app.get('/hello', (req, res) => {
    // const name = req.query.name || 'No name';
    const { name = 'No name' } = req.query;
    res.send(`Hello, ${name}`);
});

app.get('/hello/:name', (req, res) => {
    const { name = 'No name' } = req.params;
    // res.send(`Hello, ${name}`);

    res.render('index', { name });
});

const products = [
    { id: 1, name: 'PlayStation 5', price: 499 },
    { id: 2, name: 'Xbox Series X', price: 399 },
    { id: 3, name: 'Nintendo Switch', price: 329 },
    { id: 4, name: 'Game Boy', price: 49 },
];

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find(p => p.id == id);

    if (!product) {
        return res.status(404).json({
            code: 404,
            message: 'Product not found'
        });
    }

    return res.json(product);
});

app.post('/save', (req, res) => {
    console.log(req.body);

    const { name, price } = req.body;
    products.push({ 
        id: Math.round(Math.random() * 10000), 
        name, 
        price 
    });

    res.redirect('/hello/saved');
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});