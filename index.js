const express = require('express');

//router for posts
const postsRouter = require('./posts/postsRouter');

const server = express();

server.use(express.json());

server.use('/', (req, res) => {
  res.status(200).send('Hello this is Node API Project 2');
})

server.use('/api/posts', postsRouter);

const PORT = 8000
server.listen(PORT, () => {
  console.log('magic happening on port 8000');
});