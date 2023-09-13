
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
 const [bookmarks ,setBookmarks] = useState([])
 const [readingTime , setReadingTime] = useState(0)


 const handleClickBookmarks = (blog) =>{
  const newBookmarks = [...bookmarks , blog]
  setBookmarks(newBookmarks)
 }

 const handleMarkAsRead =(time)=>{
  setReadingTime(readingTime + time)
 }
  return (
    <>
     <Header></Header>
     <div className='md:flex bg-gray-200 max-w-screen-xl mx-auto'>
      <Blogs handleClickBookmarks={handleClickBookmarks} handleMarkAsRead={handleMarkAsRead} ></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
    </>
  )
}

export default App
