import styles from './BookmarkList.module.scss'
import Bookmark from '../Bookmark/Bookmark'
 
export default function BookmarkList ({ 
    newBookmark, 
    createBookmark, 
    setNewBookmark, 
    bookmarks,
    deleteBookmark
}){

    function handleCreateBookmark(){
        if (newBookmark.title && newBookmark.url && newBookmark.url !== 'http://' && newBookmark.url !== 'https://') {
            createBookmark();
        }
    }

    return(
        <div className={styles.bookmarklist}>
            Website Title:<input 
            className={styles.input}
            type="text" 
            value={newBookmark.title} 
            onChange={(e) => {
                setNewBookmark({...newBookmark, title: e.target.value})
            }} 
            onKeyDown={(e) => {
                e.key === 'Enter' && handleCreateBookmark()
            }}
            />
            URL:<input 
            className={styles.input}
            type="text" 
            value={newBookmark.url ? newBookmark.url : 'http://'}
            onChange={(e) => {
                setNewBookmark({...newBookmark, url: e.target.value})
            }} 
            onKeyDown={(e) => {
                e.key === 'Enter' && handleCreateBookmark()
            }}
            />
             <h3>Bookmarks</h3>
        {bookmarks.map(bookmark => (
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