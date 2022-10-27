const {Router} = require('express');
const router = Router();

const {all, one, creation, songDestroy, edit} = require('../controllers/apiMusicando');

router.get('/', all);
router.get('/:id', one);
router.post('/', creation);
router.delete('/:id', songDestroy);
router.put('/:id', edit)

module.exports = router;