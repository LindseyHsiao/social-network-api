const router = require('express').Router();
const {
    addThought,
    removeThought,
    addResponse,
    removeResponse
} = require('../../controllers/thought-controller');

// /api/comments/<userId>
router.route('/:userId').post(addThought);

// /api/comments/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .put(addResponse)
    .delete(removeThought)

router.route('/:userId/:thoughtId/:responseId').delete(removeResponse);


module.exports = router;