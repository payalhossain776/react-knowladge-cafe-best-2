import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookmarkAdd, handleAddToReadingTime}) => {

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">{ }</h1>
            {
                blogs.map((blog, idx) =>
                    <Blog
                        key={idx}
                         blog={blog}
                         handleBookmarkAdd={handleBookmarkAdd}
                         handleAddToReadingTime={handleAddToReadingTime}
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    handleBookmarkAdd:PropTypes.func.isRequired,
    handleAddToReadingTime:PropTypes.func
}

export default Blogs;