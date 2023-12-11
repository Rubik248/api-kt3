// const express = require('express');
// const app = express();
// const port = 3000;

// let items = [];

// app.use(express.json());


// app.get('/items', (req, res) => {
//   res.json(items);
// });


// app.get('/items/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const item = items.find(item => item.id === id);
//   if (!item) {
//     return res.status(404).send('Item not found');
//   }
//   res.json(item);
// });


// app.post('/items', (req, res) => {
//   const { title, description } = req.body;
//   if (!title || !description) {
//     return res.status(400).send('Title and description are required');
//   }
//   const newItem = { id: Date.now(), title, description };
//   items.push(newItem);
//   res.status(201).json(newItem);
// });


// app.put('/items/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const { title, description } = req.body;
//   const itemIndex = items.findIndex(item => item.id === id);
//   if (itemIndex === -1) {
//     return res.status(404).send('Item not found');
//   }
//   items[itemIndex] = { id, title, description };
//   res.json(items[itemIndex]);
// });


// app.delete('/items/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const itemIndex = items.findIndex(item => item.id === id);
//   if (itemIndex === -1) {
//     return res.status(404).send('Item not found');
//   }
//   items.splice(itemIndex, 1);
//   res.status(204).send();
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });