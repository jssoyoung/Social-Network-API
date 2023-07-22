const router = require('express').Router();
const {
  getSingleThought,
  getThoughts,
  createThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).thought(createThought);

router.route('/:thoughtId').get(getSingleThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;