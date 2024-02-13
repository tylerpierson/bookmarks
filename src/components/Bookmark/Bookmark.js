import React from 'react';
import styles from './Bookmark.module.scss';

export default function Bookmark({ bookmark, deleteAction, editAction }) {
    const handleClick = (e) => {
        if (!e.target.closest('button')) {
            window.open(bookmark.url, '_blank');
        }
    };

    return (
        <div className={styles.bookmarkContainer} onClick={handleClick}>
            <div className={styles.bookmark}>
                <a className={styles.a} target="_blank" href={bookmark.url}>
                    {bookmark.title}
                </a>
                <div className={styles.bookmarkUrl}>
                    <a className={styles.a} target="_blank" href={bookmark.url}>
                        {bookmark.url}
                    </a>
                </div>
            </div>
            <div>
                <button className={styles.button} onClick={() => deleteAction(bookmark._id)}>
                    Delete
                </button>
                <button className={styles.button} onClick={() => editAction(bookmark._id)}>
                    Edit
                </button>
                <div className={styles.animation}></div>
            </div>
        </div>
    );
}
