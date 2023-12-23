import React from 'react';
import Products from './Products';

import Category from './Category';
import About from './About';


function Hero1() {
  return (
    <section>
        <div className=''>
            <div className='bg-[url("https://images.pexels.com/photos/6688574/pexels-photo-6688574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] h-[vh] w-full bg-cover bg-center p-24'>
              
            <div className=' text-white font-worksans font-bold text-5xl md:text-7xl container'>Start your</div>
            <div className=' text-red font-worksans font-bold text-6xl md:text-8xl container'>Business</div>
            <div className='container'>
              
            <p className=' text-white font-worksans font-bold text-left w-[200px] md:w-[400px] lg:text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi rem itaque sequi, tempora ipsam facilis, sed harum amet dicta</p>
            </div>
            <div className='container'>
            <button className=' text-white font-worksans font-bold text-sm mt-3 left-6 bg-red p-2 hover:bg-blue md:left-[390px] md:top-[300px] '><a href="">Learn more <i class="fa fa-angle-right" aria-hidden="true"></i></a></button></div>
            </div>
        </div>
        <Products/>
      <About/>
      <Category/>
     
    </section>
  );
}

export default Hero1;
