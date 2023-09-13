import profile from '../../assets/images/profile.png'
const Header = () => {
 return (
    <div className='flex border-b-2 justify-between max-w-screen-xl mx-auto bg-slate-200 rounded-2xl'>
          <h2 className='text-4xl text-red-400'>Knowledge Cafe</h2> 
          <img src={profile}></img>                                                                                
  </div>
  );
};

export default Header;