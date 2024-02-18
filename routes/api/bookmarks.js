const express = require('express')
const router = express.Router()
const bookmarkCtrl = require('../../controllers/api/bookmarks')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

/* /api/bookmarks/
INDEX Bookmarks as User
*/
router.get('/', checkToken, bookmarkCtrl.index, bookmarkCtrl.respondWithBookmarks)

/* /api/bookmarks/:id
DELETE Bookmarks as User
*/
router.delete('/:id', checkToken, bookmarkCtrl.destroy, bookmarkCtrl.respondWithBookmark)

/* /api/bookmarks/:id
UPDATE Bookmarks as User
*/
router.put('/:id', checkToken, bookmarkCtrl.update, bookmarkCtrl.respondWithBookmark)

/* /api/bookmarks/
CREATE Bookmark as User
*/
router.post('/', checkToken, bookmarkCtrl.create, bookmarkCtrl.respondWithBookmark)

module.exports = router