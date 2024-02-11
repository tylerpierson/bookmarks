import { useState, useEffect } from 'react'
import BookmarkList from './components/BookmarkList/BookmarkList'
import styles from './App.module.scss'


export default function App(){
    const [bookmarks, setBookmarks] = useState([])
    const [completedBookmarks, setCompletedBookmarks] = useState([])
    const [newBookmark, setNewBookmark] = useState({
        title: '',
        completed: false
    })

    //createBookmarks
    const createBookmark = async () => {
        const body = {...newBookmark}
        try {
            const response = await fetch('/api/bookmarks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            const createdBookmark = await response.json()
            const bookmarksCopy = [createdBookmark,...bookmarks]
            setBookmarks(bookmarksCopy)
            setNewBookmark({
                title: '',
                completed: false
            })
        } catch (error) {   
            console.error(error)
        }
    }
    //deleteBookmarks
    const deleteBookmark = async (id) => {
        try {
            const index = completedBookmarks.findIndex((bookmark) => bookmark._id === id)
            const completedBookmarksCopy = [...completedBookmarks]
            const response = await fetch(`/api/bookmarks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            await response.json()
            completedBookmarksCopy.splice(index, 1)
            setCompletedBookmarks(completedBookmarksCopy)
        } catch (error) {
            console.error(error)
        }
    }
    //moveToCompleted
    const moveToCompleted = async (id) => {
        try {
            const index = bookmarks.findIndex((bookmark) => bookmark._id === id)
            const bookmarksCopy = [...bookmarks]
            const subject = bookmarksCopy[index]
            subject.completed = true 
            const response = await fetch(`/api/bookmarks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(subject)
            })
            const updatedBookmark = await response.json()
            const completedTDsCopy = [updatedBookmark, ...completedBookmarks]
            setCompletedBookmarks(completedTDsCopy)
            bookmarksCopy.splice(index, 1)
            setBookmarks(bookmarksCopy)
        } catch (error) {
            console.error(error)
        }
    }
    //getBookmarks
    const getBookmarks = async () => {
        try{
            const response = await fetch('/api/bookmarks')
            const foundBookmarks = await response.json()
            setBookmarks(foundBookmarks.reverse())
            const responseTwo = await fetch('/api/bookmarks/completed')
            const foundCompletedBookmarks = await responseTwo.json()
            setCompletedBookmarks(foundCompletedBookmarks.reverse())
        } catch(error){
            console.error(error)
        }
    }
    useEffect(() => {
        getBookmarks()
    }, [])
    return(
        <>
			
            <div className={styles.banner}>
                <h1>The World Famous Big Poppa Code React Starter Kit</h1>
              <img src='https://i.imgur.com/5WXigZL.jpg'/>
            </div>
            <BookmarkList
            newBookmark={newBookmark}
            setNewBookmark={setNewBookmark}
            createBookmark={createBookmark}
            bookmarks={bookmarks}
            moveToCompleted={moveToCompleted}
            completedBookmarks={completedBookmarks}
            deleteBookmark={deleteBookmark}
            />
        </>
    )
}