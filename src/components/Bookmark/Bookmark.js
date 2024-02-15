import React from 'react';
import styles from './Bookmark.module.scss';
import { useState } from 'react'

export default function Bookmark({ bookmark, deleteAction }) {
    const [title, setTitle] = useState(bookmark.title)
    const [url, setUrl] = useState(bookmark.url)

    const handleTitleChange = (e) => {
        console.log(e.target.value)
        setTitle(e.target.value)
    }

    const handleUrlChange = (e) => {
        console.log(e.target.value)
        setUrl(e.target.value)
    }

    const handleClick = (e) => {
        if (!e.target.closest('button')) {
            window.open(bookmark.url, '_blank');
        }
    }

    return (
        <div className={styles.bookmarkContainer}>
            <div className={styles.bookmark}>
                <input className={styles.titleInput} value={title} onChange={handleTitleChange} />
                <div className={styles.bookmarkUrl}>
                <input className={styles.urlInput} value={url} onChange={handleUrlChange} />
                </div>
            </div>
            <div>
                <button className={styles.button} onClick={() => deleteAction(bookmark._id)}>
                    Delete
                </button>
                <div className={styles.visitBtnContainer} onClick={handleClick}>
                    <a className={styles.visitBtn} target="_blank" href={bookmark.url}>
                        VISIT
                    </a>
                </div>
                <div className={styles.animation}></div>
            </div>
        </div>
    );
}
