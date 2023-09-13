import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog , handleClickBookmarks ,handleMarkAsRead}) => {
const {Title ,Cover , Author_img ,Author, Reading_Time, Posted_Date } =blog
 return (
 <div>
      <img className='w-96' src={Cover} alt={`cover picture title ${Cover}`}></img>
      <div className='flex justify-between'>
          <div className='flex gap-4'>
       <img className='w-12 rounded-xl' src={Author_img}></img>
       <div>
         <h2>{Author}</h2>
         <h3>{Posted_Date}</h3>
       </div>
          </div>
          <div>
            <span>{Reading_Time} min read</span>
            <button onClick={()=> handleClickBookmarks(blog)} className='ml-2 text-xl'><FaBookmark></FaBookmark></button>
          </div>
      </div>
     <h2 className='text-4xl'>{Title} </h2> 
     <button onClick={()=>handleMarkAsRead(Reading_Time)} className='space-x-4 text-purple-800 font-bold'>Mark as read</button>                                                                                    
 </div>
 );
};
Blog.PropTypes ={
 blog:PropTypes.object.isRequired,
 handleClickBookmarks:PropTypes.func,
 handleMarkAsRead:PropTypes.number
}
export default Blog;