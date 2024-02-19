const express = require('express')
const router = express.Router()
const bookmarkCtrl = require('../../controllers/api/bookmarks')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

/* /api/bookmarks/
INDEX Bookmarks as User
*/
router.get('/', checkToken, ensureLoggedIn, bookmarkCtrl.index, bookmarkCtrl.respondWithBookmarks)

/* /api/bookmarks/:id
DELETE Bookmarks as User
*/
router.delete('/:id', checkToken, ensureLoggedIn, bookmarkCtrl.destroy, bookmarkCtrl.respondWithBookmark)

/* /api/bookmarks/:id
UPDATE Bookmarks as User
*/
router.put('/:id', checkToken, ensureLoggedIn, bookmarkCtrl.update, bookmarkCtrl.respondWithBookmark)

/* /api/bookmarks/
CREATE Bookmark as User
*/
router.post('/', checkToken, ensureLoggedIn, bookmarkCtrl.create, bookmarkCtrl.respondWithBookmark)

module.exports = router