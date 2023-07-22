const router = require('express').Router();
const postRoutes = require('./postRoutes');
const reactionRoutes = require('./reactionRoutes');
const friendRoutes = require('./friendRoutes');

router.use('/posts', postRoutes);
router.use('/reactions', reactionRoutes);
router.use('/friends', friendRoutes);

module.exports = router;
