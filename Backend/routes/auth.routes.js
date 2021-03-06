const express = require('express');
const authRouter = express.Router();
const auth = require('../controllers/auth.controller');
const secure = require('../middlewares/secure.mid');
const uploader = require('../configs/storage.config.js');

authRouter.post('/register', auth.register);
authRouter.get('/profile/:id', secure.isAuthenticated, auth.getProfile);
authRouter.post('/profile', auth.authenticate);
authRouter.get('/logout', auth.logout);


/*router.put('/profile', secure.isAuthenticated, uploader.single('avatar'), auth.editProfile);
*/

module.exports = authRouter;