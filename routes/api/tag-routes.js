const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll(
    {
      include: [{model: Product}]
    }
  ).then(results => res.send(results));
});

router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, 
    {
      include: [{model: Product}]
    }
  ).then(results => res.send(results));
});

router.post('/', (req, res) => {
  Tag.create(req.body).then((tag) => {
    res.status(200).json(tag);
  });
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then((tag) => {
    res.status(200).json(tag);
  });
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then((tag) => {
    res.status(200).json(tag);
  });
});

module.exports = router;
