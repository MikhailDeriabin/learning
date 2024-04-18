import fs from 'node:fs/promises';

import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/meals', async (req, res) => {
  const meals = await fs.readFile('./data/available-meals.json', 'utf8');
  return res.status(200).json(JSON.parse(meals));
});

app.post('/orders', async (req, res) => {
  const {order} = req.body;

  if(!order)
    return res.status(400).json({ message: 'order field is required.' });

  const {email, name, street, ['postal-code']: postal, city, items} = order;

  if (!items || items.length === 0) {
    return res
      .status(400)
      .json({ message: 'Missing items data.' });
  }

  if (
    !email || !email.includes('@') ||
    !name || name.trim() === '' ||
    !street || street.trim() === '' ||
    !postal || postal.trim() === '' ||
    !city || city.trim() === ''
  ) {
    return res.status(400).json({
      message:
        'Missing data: Email, name, street, postal code or city is missing.',
    });
  }

  const newOrder = {
    ...order,
    id: (Math.random() * 1000).toString(),
  };
  const orders = await fs.readFile('./data/orders.json', 'utf8');
  const allOrders = JSON.parse(orders);
  allOrders.push(newOrder);
  await fs.writeFile('./data/orders.json', JSON.stringify(allOrders));
  res.status(201).json({ message: 'Order created!' });
});

app.use((req, res) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: 'Not found' });
});

app.listen(3000);
