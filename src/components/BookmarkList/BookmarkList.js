import styles from './BookmarkList.module.scss'
import Bookmark from '../Bookmark/Bookmark'
 
export default function BookmarkList ({ 
    newBookmark, 
    createBookmark, 
    setNewBookmark, 
    bookmarks,
    completedBookmarks,
    moveToCompleted,
    deleteBookmark
}){
    return(
        <div className={styles.bookmarklist}>
            Add New Bookmark:<input 
            className={styles.input}
            type="text" 
            value={newBookmark.title} 
            onChange={(e) => {
                setNewBookmark({...newBookmark, title: e.target.value})
            }} 
            onKeyDown={(e) => {
                e.key === 'Enter' && createBookmark()
            }}
            />
             <h3>Bookmarks</h3>
        {bookmarks.map(bookmark => (
            <Bookmark 
                key={bookmark._id} 
                bookmark={bookmark}
                buttonAction={moveToCompleted}
                buttonText={'Complete'}
            />
        ))}
        <h3>Completed Bookmarks</h3>
        {completedBookmarks.map(bookmark =>(
            <Bookmark
                key={bookmark._id}
                bookmark={bookmark}
                buttonAction={deleteBookmark}
                buttonText={'Delete'}
            />
        ))}
        </div>
    )
}