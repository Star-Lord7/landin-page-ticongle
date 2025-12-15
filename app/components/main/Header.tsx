import headerImage from '../../images/tierra.jpg'

const Header = () => {
    return(
        <div className="header">
        <div className="header-container">
          <div className="w-1/4">
            <div className=''>
              <img src={headerImage} alt=""  className='w-1/2 object-center'/>
            </div>
          </div>
        <div className="w-3/4">
          <h1 className=" header-title text-4xl font-bold" data-aos="fade-down-right">Tu mejor eleccion a la hora de comprar</h1>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dicta praesentium quibusdam quis ab mollitia, nesciunt eveniet veniam ratione nobis sed magnam! Porro minus recusandae modi in, hic mollitia dolores.</p>
        </div>
        </div>
      </div>
    )
};

export default Header;