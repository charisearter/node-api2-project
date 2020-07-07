const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
  res.status(200).json(posts);
});

//export default router
module.exports = router;