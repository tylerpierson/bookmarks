import styles from './BookmarkList.module.scss';
import Bookmark from '../Bookmark/Bookmark';

export default function BookmarkList({
    newBookmark,
    createBookmark,
    setNewBookmark,
    bookmarks,
    deleteBookmark
}) {
    function handleCreateBookmark() {
        if (newBookmark.title && newBookmark.url && newBookmark.url !== 'http://' && newBookmark.url !== 'https://') {
            createBookmark();
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <div className={styles.banner}>
                    <h1>Tyler's Bookmarks</h1>
                </div>
                <div>
                    Website Title:<input
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
                    URL:<input
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
                <h3>Bookmarks</h3>
                <div className={styles.bookmarks}>
                    {bookmarks.map(bookmark => (
                        <Bookmark
                            key={bookmark._id}
                            bookmark={bookmark}
                            buttonAction={deleteBookmark}
                            buttonText={'Delete'}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
