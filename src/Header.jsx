import React, { useState, useEffect } from 'react';
import ProfileMenu from './ProfileMenu';
import { useUser } from './UserContext';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { user } = useUser();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsSticky(scrollPosition > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header
      className={`p-4 sticky top-0 w-full transition-all duration-300 ${isSticky ? 'bg-primary' : 'bg-blurple'}`}
    >
      <div className="flex justify-between items-center">
        <div className="text-white font-bold">Logo</div>
        <nav>
            {user ? 
              (<ProfileMenu/>)
              : 
              (
                <button className='bg-dark-blurple rounded-[5px] p-[5px] text-white'>
                  <a href='https://discord.com/oauth2/authorize?client_id=938487470339801169&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fauth%2Fdiscord&scope=guilds+identify'>
                    Login
                  </a>
                </button>
              )
            }
            
        </nav>
      </div>
    </header>
  );
};

export default Header;
