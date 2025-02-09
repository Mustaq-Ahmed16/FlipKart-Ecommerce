import express from 'express'
import { forgotPassword, login, signUp } from '../controllers/AuthController.js';
import { upload } from '../middlewares/uploadFile.middleware.js'


const AuthRouter = express.Router();

AuthRouter.post('/signup', upload.single("photo"), signUp);
AuthRouter.post('/login',login)
AuthRouter.put('/forgot-password',forgotPassword);

export default AuthRouter;


