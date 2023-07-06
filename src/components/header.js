import React from 'react';
import LogoBose from '../assets/Logo_Bose.png';
import SoundWaves from '../assets/Sound waves.png';

function Header ({active, setActive}) {
   return (
      <div className='header-block'>
         <header>
            <div className='navbar-block'>
               <img src={LogoBose} alt='img' className='logo'></img>
               <div className='menu-phone-block'>
                  <div className='phone'></div>
                  <div className='number'>+1 234 555-55-55</div>
                  <div 
                     className='burger'
                     onClick={()=> setActive(true)}
                  ></div>
               </div>
            </div>
         </header>
         <div className='header-text-block'>
            <div className='sound-wave'>
               <img src={SoundWaves} alt='img'></img>
            </div>
            <div className='sound-text-block'>The world shades.<br/>Your music shines.</div>
         </div>
      </div>
   )
}

export default Header