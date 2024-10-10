const express = require('express');
const router = express.Router();
const mediaHandler = express.Router('./handler/media');

router.post('/', mediaHandler.create);
router.get('/', mediaHandler.getAll);
router.delete('/:id', mediaHandler.destroy);

module.exports = router;
