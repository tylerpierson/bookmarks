import styles from './Bookmark.module.scss'


export default function Bookmark({ bookmark, buttonAction, buttonText}){
    return(
        <div className={styles.bookmark}> <a target="_blank" href={bookmark.url}>{bookmark.title}</a>
            <button 
                className={styles.button}
                onClick={() => buttonAction(bookmark._id)}
            >
                {buttonText}
            </button>
        </div>
    )
}