const router = require('express').Router();
const {
  getReactions,
  getSingleReaction,
  createReaction,
} = require('../../controllers/reactionController');

// /api/reaction
router.route('/').get(getReactions).post(createReaction);

// /api/reaction/:reactionId
router.route('/:reactionId').get(getSingleReaction);

module.exports = router;