const express = require('express')
const router = express.Router();
const {getCandidate,setCandidate, updateCandidate, deleteCandidate, getAll } = require('../controller/candidateController')
const {protect} = require('../middleware/authMiddleware');

router.route('/all').get(getAll);
router.route('/').get(getCandidate).post(protect, setCandidate);
router.route('/:id').delete(protect ,deleteCandidate).put(protect ,updateCandidate);

module.exports = router;
