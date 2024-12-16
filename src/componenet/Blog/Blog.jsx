import PropTypes from 'prop-types';
import { FcBookmark } from "react-icons/fc";

const Blog = ({ blog, handleBookmarkAdd, handleAddToReadingTime }) => {
   
    const { title, cover_img, author, author_img, date, read_time, hashtag, btn } = blog;
    // const [title]=blog;
    return (
        <div className='grid gap-6'>
            <img className='w-full' src={cover_img} alt="" />
            <h2 className="text-4xl">{title}</h2>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className='w-16 m-4' src={author_img} alt="" />
                    <div>
                        <p>{author}</p>
                        <p>{date}</p>
                    </div>
                </div>
                <div  className='flex items-center gap-3'>
                    <span>{read_time}: Min read</span>
                    <button onClick={()=>handleBookmarkAdd(blog)} className='text-2xl'><FcBookmark></FcBookmark></button>
                </div>
            </div>
            <p>{hashtag}</p>
            <p onClick={()=>handleAddToReadingTime(read_time)} className='mb-4 text-purple-600 text-xl'>{btn}</p>
        </div>
    );
};
Blog.propTypes = {

    blog: PropTypes.object.isRequired,
    handleBookmarkAdd: PropTypes.func.isRequired,
    handleAddToReadingTime:PropTypes.func.isRequired

}
export default Blog;