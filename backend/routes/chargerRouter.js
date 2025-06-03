const { addCharger, getAllChargers, updateCharger, deleteCharger } = require('../controllers/chargercontroller');
const authMiddleware = require('../middleware/authmiddleware');

const router= require('express').Router();

router.get('/', getAllChargers);
router.post('/add',addCharger);
router.patch('/update/:id', updateCharger);
router.delete('/delete/:id', deleteCharger);

module.exports = router;