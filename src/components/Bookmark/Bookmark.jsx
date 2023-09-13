
import PropTypes from 'prop-types';

const Bookmark = ({bookmark }) => {
 const {Title} = bookmark;
  return (
    <div className='bg-slate-400 p-4 m-4 rounded-xl'>
       <h1 className='text-2xl'>{Title}</h1>                                                                                   
    </div>
 );
};

Bookmark.propTypes = {
      Bookmark:PropTypes.object ,
                          
};

export default Bookmark;
