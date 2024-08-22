import { useEffect, useState } from 'react';
import logo from '../../image/netflix.png';
import search from '../../image/search.png';
import notif from '../../image/notif.png';
import ava from '../../image/birth/img1.jpg';
import hamburger from '../../image/hamburger.png';

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);

   const navLinks = ['Homepage', 'Series', 'Movie', 'Hot and Popular', 'My List'];

   useEffect(() => {
      const handleScroll = () => {
        console.log('ScrollY:', window.scrollY);
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
    
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
   return (
    <nav className={`z-50 fixed w-full flex justify-between items-center px-5 py-3 lg:px-10 lg:py-5 transition-all duration-300 ease-in-out transform ${isOpen || isScrolled ? 'bg-zinc-900 shadow-xl' : ''}`}>
      <div className='flex items-center gap-5'>
         <img src={logo} alt="Logo" className='w-24 md:w-40' />

         <div className='hidden lg:flex space-x-4'>
            {navLinks.map((link, index) => (
              <p key={index} className='font-medium cursor-pointer'>
                {link}
              </p>
            ))}
         </div>
      </div>

      <div className='flex items-center gap-2'>
         <img src={search} alt="icon_search" className='cursor-pointer w-5 md:w-6' />
         <h2 className='font-semibold text-sm md:text-base'>ADULT</h2>
         <img src={notif} alt="icon_notif" className='cursor-pointer w-5 md:w-6' />
         <div className='w-8 h-8 rounded-full overflow-hidden'>
          <img src={ava} alt="icon_ava" className='cursor-pointer object-cover w-full h-full' />
         </div>


         <img 
           src={hamburger} 
           alt="icon_hamburger" 
           className='cursor-pointer w-8 lg:hidden' 
           onClick={() => setIsOpen(!isOpen)} 
         />
      </div>

      <div 
        className={`absolute top-14 right-0 w-full bg-zinc-900 text-white flex flex-col items-center lg:hidden transition-all duration-300 ease-in-out transform ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        {navLinks.map((link, index) => (
          <p key={index} className='py-4 font-medium cursor-pointer text-center'>
            {link}
          </p>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
