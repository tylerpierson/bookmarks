const router = require('express').Router()
const userCtrl = require('../../controllers/api/users')
const checkToken = require('../../config/checkToken')

/*
/api/users
SignUp
*/
router.post('/', userCtrl.signUp, userCtrl.respondWithToken)

/*
/api/users/login
Login
*/
router.post('/login', userCtrl.login, userCtrl.respondWithToken)

/*
/api/users/bookmarks
Get Bookmarks by User
*/
router.get('/bookmarks', checkToken, userCtrl.getBookmarkByUser, userCtrl.respondWithBookmarks)

module.exports = router