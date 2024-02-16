import React, { useState } from 'react'
import styles from './Bookmark.module.scss'

export default function Bookmark({ bookmark, deleteAction, updateBookmark }) {
    const [title, setTitle] = useState(bookmark.title)
    const [url, setUrl] = useState(bookmark.url)

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleUrlChange = (e) => {
        setUrl(e.target.value)
    }

    const handleSubmit = (e) => {
        if(e.key === 'Enter') {
            updateBookmark(bookmark._id, { [e.target.name]: e.target.value })
            e.target.blur()
        }
    }

    const handleClick = (e) => {
        if (!e.target.closest('button')) {
            window.open(bookmark.url, '_blank')
        }
    }

    return (
        <div className={styles.bookmarkContainer}>
            <form className={styles.bookmark}>
                <input
                    name='title'
                    className={styles.titleInput}
                    value={title}
                    onChange={handleTitleChange}
                    onKeyDown={handleSubmit}
                />
                <div className={styles.bookmarkUrl}>
                    <input
                        name='url'
                        className={styles.urlInput}
                        value={url}
                        onChange={handleUrlChange}
                        onKeyDown={handleSubmit}
                    />
                </div>
            </form>
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
    )
}
