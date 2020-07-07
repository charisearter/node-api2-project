const express = require('express');

//router for posts
const postsRoutes = require('./posts/postsRoutes');
const server = express();

server.use('/api/posts', postsRoutes);

server.use('/', (req, res) => {
  res.status(200).send('Hello from express');
})

server.listen(8000, () => {
  console.log('magic happening on port 8000');
});