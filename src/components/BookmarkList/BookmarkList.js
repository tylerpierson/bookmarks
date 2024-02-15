import styles from './BookmarkList.module.scss';
import Bookmark from '../Bookmark/Bookmark';

export default function BookmarkList({
    newBookmark,
    createBookmark,
    setNewBookmark,
    bookmarks,
    updateBookmark,
    deleteBookmark
}) {
    function handleCreateBookmark() {
        if (newBookmark.title && newBookmark.url && newBookmark.url !== 'http://' && newBookmark.url !== 'https://') {
            createBookmark();
        }
    }

    function handleUpdateBookmark(bookmarkId) {
        updateBookmark(bookmarkId);
    }

    return (
        <>
        <h1>Tyler's Bookmarks</h1>
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <div className={styles.banner}>
                </div>
                <div>
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
                <div>
                    <h3 className={styles.inputTitle}>URL:</h3><input
                        className={styles.input}
                        type="text"
                        value={newBookmark.url ? newBookmark.url : 'http://'}
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
                            editAction={updateBookmark}
                        />
                    ))}
                </div>
            </div>
        </div>
        </>
        
    )
}
