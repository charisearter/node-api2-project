const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
  const posts = [ 'human', 'elf', 'hobbit', 'wizard', 'dwarf', 'orc' ];
  res.status(200).json(posts);
});

module.exports = router;