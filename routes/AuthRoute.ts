import express from 'express';
import { registerUserController, loginUserController } from '../controllers/authController'; 

const router = express.Router();

router.post('/register', registerUserController);
router.post('/login', loginUserController);

module.exports = router;