import styles from './BookmarkList.module.scss'
import Bookmark from '../Bookmark/Bookmark'

export default function BookmarkList({
    newBookmark,
    createBookmark,
    setNewBookmark,
    bookmarks,
    deleteBookmark,
    updateBookmark
}) {
    function handleCreateBookmark() {
        if (newBookmark.title && newBookmark.url && newBookmark.url !== 'http://' && newBookmark.url !== 'https://') {
            createBookmark()
        }
    }

    return (
        <>
        <h1>Tyler's Bookmarks</h1>
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <div className={styles.banner}>
                </div>
                <div className={styles.titleInputContainer}>
                    <h3 className={styles.inputTitle}>Website Title:</h3>
                    <input
                        className={styles.input}
                        type="text"
                        value={newBookmark.title}
                        onChange={(e) => {
                            setNewBookmark({ ...newBookmark, title: e.target.value })
                        }}
                        onKeyDown={(e) => {
                            e.key === 'Enter' && handleCreateBookmark()
                        }}
                    />
                </div>
                <div className={styles.urlInputContainer}>
                    <h3 className={styles.inputTitle}>URL:</h3><input
                        className={styles.input}
                        type="text"
                        value={newBookmark.url ? newBookmark.url : 'https://'}
                        onChange={(e) => {
                            setNewBookmark({ ...newBookmark, url: e.target.value })
                        }}
                        onKeyDown={(e) => {
                            e.key === 'Enter' && handleCreateBookmark()
                        }}
                    />
                </div>
            </div>
            <div className={styles.bookmarksContainer}>
                <div className={styles.bookmarks}>
                    {bookmarks.map(bookmark => (
                        <Bookmark
                            key={bookmark._id}
                            bookmark={bookmark}
                            deleteAction={deleteBookmark}
                            updateBookmark={updateBookmark}
                        />
                    ))}
                </div>
            </div>
        </div>
        </>
        
    )
}
