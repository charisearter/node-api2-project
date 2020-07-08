const express = require('express');
const db = require('../data/db');

const router = express.Router();

//POST	/api/posts
//if no title or contents cancel requests, 400 code and send error json message if statement else .then
// if valid, save post, 201 code, return new post .then()
//if error, cancel request, 500 code and json error message this will be in the .catch()

router.post('/', (req, res) => {
  const newPost = req.body;
  db.insert(newPost)
  .then( post => {
    if(!post.title || !post.contents){
      res.status(400).json({ errorMessage: "Please provide title and contents for the post."  });
    } else {
      res.status(201).json(newPost)
    }
  })
  .catch( error => {
    console.log(error);
    res.status(500).json({ error: "There was an error while saving the post to the database" })
  });
});

//POST	/api/posts/:id/comments

router.post('/:id/comments', (req, res) => {
  
});

//GET	/api/posts WORKS
router.get('/', (req, res) => {
  db.find(req.query)
  .then( posts => {
    res.status(200).json({ query: req.query, data: posts });
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({ error: "The posts information could not be retrieved." })
  })
});

//GET	/api/posts/:id
router.get('/:id', (req, res) => {
  
});

//GET	/api/posts/:id/comments
router.get('/:id/comments', (req, res) => {
  
});

//DELETE	/api/posts/:id
router.delete('/:id', (req, res) => {
  
});

//PUT	/api/posts/:id
router.put('/:id', (req, res) => {
  
});



//export default router
module.exports = router;