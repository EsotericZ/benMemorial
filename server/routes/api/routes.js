let express = require('express');
let router = express.Router();

const memoryController = require('../../controllers/memoryController');

router.get('/', function (req, res) {
    res.send('Welcome to the API');
});

router.get('/memories/getAllMemories', memoryController.getAllMemories);
router.post('/memories/newMemory', memoryController.newMemory);

module.exports = router;