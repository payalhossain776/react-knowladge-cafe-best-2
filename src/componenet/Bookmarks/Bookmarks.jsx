import PropTypes from 'prop-types';
import Bookmark from '../BookMark/Bookmark';

const Bookmarks = ({ bookmarks, readingtime }) => {
    // console.log(bookmark)

    return (
        <div className="md:w-1/3 text-3xl text-center bg-gray-300 m-4 rounded-xl ml-4">
            <div>
                <h2 className='text-4xl'>Readng time:{readingtime}</h2>
            </div>
            <h1 className="">bookmark Blog:{bookmarks.length}</h1>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingtime: PropTypes.number
}

export default Bookmarks;