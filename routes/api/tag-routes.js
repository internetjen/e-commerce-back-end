const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//GET all tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      // be sure to include its associated Product data
      include: [{model: Product}]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET one tag by its `id`
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
     // be sure to include its associated Product data
      include: [{model: Product}]
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create({
     tag_name: req.body.tag_name
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.error(err)
  }
});


// UPDATE a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update({
      tag_name: req.body.tag_name,
    }, {
      where: {
        id: req.params.id
      }
    });

    if (tagData[0] === 0) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json({ message: 'Tag updated successfully!' });
  } catch (err) {
    res.status(500).json(err);
  }
});


// DELETE a tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
