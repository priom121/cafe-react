
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks , readingTime}) => {
  return (
          
       <div className="w-1/3 bg-slate-200 p-4 m-4 rounded-xl">
        <div className='text-2xl'>
 <h3> Reading Time: { readingTime}</h3>
        </div>
      <h3 className="text-3xl">Bookmarks:{bookmarks.length}</h3> 
      {
        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
      }                                                                                   
 </div>
    
  );
};

Bookmarks.propTypes = {
  bookmarks:PropTypes.array,
  readingTime:PropTypes.number
};

export default Bookmarks;