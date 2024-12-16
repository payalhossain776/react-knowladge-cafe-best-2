import profiled from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 m-4  border-b-2 border-black'>
           
            <h1 className='text-4xl'>knowlagde cafe</h1>
            <img src={ profiled} alt="" />
        </div>
    );
};

export default Header;