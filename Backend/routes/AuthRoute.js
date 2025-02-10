import express from 'express'
import { forgotPassword, login, resetPassword, signUp } from '../controllers/AuthController.js';
import { upload } from '../middlewares/uploadFile.middleware.js'


const AuthRouter = express.Router();

AuthRouter.post('/signup', upload.single("photo"), signUp);
AuthRouter.post('/login',login)
AuthRouter.post('/forgot-password',forgotPassword);
AuthRouter.put('/reset-password',resetPassword)

export default AuthRouter;


