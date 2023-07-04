import React from 'react';
import HeadPhonePicOne from '../assets/Vectorhead.png';
import HeadPhonePicTwo from '../assets/head2.png';
import speakerOne from '../assets/speaker_one.png';
import speakerTwo from '../assets/speaker_two.png';
import sunglassesOne from '../assets/sunglasses_one.png';
import sunglassesTwo from '../assets/sunglasses_two.png'
import '../styles/categoriesStyles.scss';

function Categories (){
   return (
      <div className='categories-block-container'>
         <div className='categories-block'>
            <div className='categories-block-text'>Browse Bose<br/>products by category</div>
            <div className='categories-list'>
               <div className='category'>
                  <div className='category-picture'>
                     <img src={HeadPhonePicOne} alt='img'></img>
                     <img src={HeadPhonePicTwo} alt='img'></img>
                  </div>
                  <div className='category-name'>
                     Headphones & earbuds
                  </div>
               </div>
               <div className='category'>
                  <div className='category-picture'>
                     <img src={speakerOne} alt='img'></img>
                     <img src={speakerTwo} alt='img'></img>
                  </div>
                  <div className='category-name'>
                     Speakers
                  </div>
               </div>
               <div className='category'>
                  <div className='category-picture'>
                     <img src={sunglassesOne} alt='img'></img>
                     <img src={sunglassesTwo} alt='img'></img>
                  </div>
                  <div className='category-name'>
                     Audio sunglasses
                  </div>
               </div>
               <div className='button-container'>
                  <button className='view-all'>View all</button>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Categories