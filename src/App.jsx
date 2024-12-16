
import { useState } from 'react'
import './App.css'
import Blogs from './componenet/Blogs/Blogs'
import Bookmark from './componenet/Bookmarks/Bookmarks'
import Header from './componenet/Header/Header'

function App() {

const [bookmarks, setBookmarks]=useState([])
const [readingtime, setReadingtime]=useState(0)

const handleBookmarkAdd=(blog)=>{
const newBookmark=[...bookmarks, blog]
setBookmarks(newBookmark);
// console.log(newBookmark)
}
const handleAddToReadingTime=(time)=>{
  setReadingtime(readingtime + time)
}

return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs
         handleBookmarkAdd={handleBookmarkAdd}
         handleAddToReadingTime={handleAddToReadingTime}
        ></Blogs>
        <Bookmark bookmarks={bookmarks} readingtime={readingtime}></Bookmark>
      </div>
     

    </>
  )
}

export default App
