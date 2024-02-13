import { useState, useEffect } from 'react'
import BookmarkList from './components/BookmarkList/BookmarkList'
import styles from './App.module.scss'


export default function App(){
    const [bookmarks, setBookmarks] = useState([])
    const [completedBookmarks, setCompletedBookmarks] = useState([])
    const [newBookmark, setNewBookmark] = useState({
        title: '',
        url: ''
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
                url: ''
            })
        } catch (error) {   
            console.error(error)
        }
    }

    // UpdateBookmark
    const updateBookmark = async (id) => {
        const body = { ...newBookmark }
        try {
            const response = await fetch(`/api/bookmarks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            const updatedBookmark = await response.json()
            const updatedBookmarks = bookmarks.map(bookmark => {
                if (bookmark._id === id) {
                    return updatedBookmark
                }
                return bookmark;
            });
            setBookmarks(updatedBookmarks)
            setNewBookmark({ title: '', url: '' })
        } catch (error) {
            console.error(error)
        }
    }

    //editBookmarks
    const editBookmark = async () => {
        const body = {...newBookmark}
        const index = bookmarks.findIndex((bookmark) => bookmark._id === id)
        try {
            const response = await fetch(`/api/bookmarks/${id}`, {
                method: 'PUT',
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
                url: ''
            })
        } catch (error) {   
            console.error(error)
        }
    }

    //deleteBookmarks
    const deleteBookmark = async (id) => {
        try {
            const index = bookmarks.findIndex((bookmark) => bookmark._id === id)
            const bookmarksCopy = [...bookmarks]
            const response = await fetch(`/api/bookmarks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            await response.json()
            bookmarksCopy.splice(index, 1)
            setBookmarks(bookmarksCopy)
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
            const response = await fetch(`/api/bookmarks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(subject)
            })
            const updatedBookmark = await response.json()
            const completedBMsCopy = [updatedBookmark, ...completedBookmarks]
            setCompletedBookmarks(completedBMsCopy)
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
            <BookmarkList
            newBookmark={newBookmark}
            setNewBookmark={setNewBookmark}
            createBookmark={createBookmark}
            bookmarks={bookmarks}
            updateBookmark={updateBookmark}
            moveToCompleted={moveToCompleted}
            completedBookmarks={completedBookmarks}
            deleteBookmark={deleteBookmark}
            />
        </>
    )
}