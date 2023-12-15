import express from 'express'
import  {userLogin, userRegister, userLogout, getMyProfile} from '../controllers/user.js'
import { isAuthenticated } from '../middlewares/auth.js';
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        success:true,
        message: 'we are in home route'
    })
})

router.post('/register', userRegister)

router.post('/login', userLogin)

router.get('/logout', userLogout)

router.get('/myprofile',isAuthenticated, getMyProfile)

export default router;