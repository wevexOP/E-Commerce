const router = require('express').Router();
const { Category, Product } = require('../../models');



router.get('/', (req, res) => {
  Category.findAll(
    {
        include:[{model:Product}] 
    },
    ).then(results =>res.send(results));
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, 
    {
      include: [{model: Product}]
    }
  ).then(results => res.send(results));
});

router.post('/', (req, res) => {
  Category.create(req.body).then((category) => {
    res.status(200).json(category);
  });
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then((category) => {
    res.status(200).json(category);
  });
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then((category) => {
    res.status(200).json(category);
  });
});

module.exports = router;
