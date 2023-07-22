const router = require('express').Router();
const {
  getFriend,
  getSingleFriend,
  createFriend,
} = require('../../controllers/friendController');

// /api/friend
// TODO create friend or add friend?
router.route('/').get(getFriend).post(createFriend);

// /api/friends/:friendId
router.route('/:friendId').get(getSingleFriend);

module.exports = router;