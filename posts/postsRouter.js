const express = require('express');
const db = require('../data/db');

const router = express.Router();

//POST	/api/posts  Sort of WOrks, gives me an error saying it is not there or there was an error adding it but if I do the get request for the original list, what I added does show up

router.post('/', (req, res) => {
  //const newPost = req.body;
  db.insert(req.body)
  .then( post => {
    if(!title || !contents){
      res.status(400).json({ errorMessage: "Please provide title and contents for the post."  });
    } else {
      res.status(201).json(post)
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

//GET	/api/posts/:id WORKS
router.get('/:id', (req, res) => {
  db.findById(req.params.id) //use request params to get id
  .then(post => {
    if (!post) {
      res.status(404).json({ message: "The post with the specified ID does not exist." })
    } else {
      res.status(200).json(post)
    }
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({ error: "The post information could not be retrieved." })
  })
});

//GET	/api/posts/:id/comments WORKS
router.get('/:id/comments', (req, res) => {
  const { id } = req.params //id is req. params
  db.findCommentById(id)
  .then(comment => {
    if(!id) {
      res.status(404).json({ message: "The post with the specified ID does not exist." })
    } else {
      res.status(200).json(comment)
    }
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({ error: "The comments information could not be retrieved." })
  })
  
});

//DELETE	/api/posts/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params.id
  db.remove(id)
  .then(post => {
    if (!id) {
      res.status(404).json({ message: "The post with the specified ID does not exist." })
    } else {
      res.status(204)
    }
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({ error: "The post could not be removed" })
  })
});

//PUT	/api/posts/:id
router.put('/:id', (req, res) => {
  
});



//export default router
module.exports = router;