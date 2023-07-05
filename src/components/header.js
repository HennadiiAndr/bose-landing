import React from 'react';
import LogoBose from '../assets/Logo_Bose.png';
import SoundWaves from '../assets/Sound waves.png';
import CloseIcon from '../assets/Icon-Close.png';

function Header () {
   
   return (
      <div className='header-block'>
         <header>
            <div className='navbar-block'>
               <img src={LogoBose} alt='img' className='logo'></img>
               <div className='menu-phone-block'>
                  <div className='phone'></div>
                  <div className='number'>+1 234 555-55-55</div>
                  <div className='burger'></div>
               </div>
            </div>
         </header>
         <div className='header-menu-container'>
            <div className='header-menu-block'>
               <div className='header-menu-logo'>
                  <img src={LogoBose}  alt='img'></img>
                  <img src={CloseIcon}  alt='img'></img>
               </div>
               <div className='menu-items-container'>
                  <div className='menu-items'>
                     <div className='menu-item'>HOME</div>
                     <div className='menu-item'>RECOMMENDED</div>
                     <div className='menu-item'>CATEGORIES</div>
                     <div className='menu-item'>HOW TO BUY</div>
                     <div className='menu-item'>CALL TO BUY</div>
                  </div>
                  <div className='call-items'>
                     <div className='call-item-number'>+1 234 5555-55-55</div>
                     <div className='call-item'>call to order</div>
                  </div>
               </div>
            </div>
         </div>
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