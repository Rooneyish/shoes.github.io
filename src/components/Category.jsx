import React from 'react';

function Category() {
  return (
    <div>
      <div className='container lg:flex justify-between mt-10'>
        <div>
            <h4 className='text-xl font-worksans text-red font-semibold'><a href="">Featured</a></h4>
            <ul className='hidden lg:block mt-4 text-md text-blue font-medium '>
                <li><a href="">Air Force 1</a></li>
                <li><a href="">Jordan 1</a></li>
                <li><a href="">Metcon</a></li>
                <li><a href="">Air Max 270</a></li>
            </ul>
        </div>
        
        <div>
            <h4 className='text-xl font-worksans text-red font-semibold'><a href="">Shoes</a></h4>
            <ul className='hidden lg:block mt-4 text-md text-blue font-medium'>
                <li><a href="">All Shoes</a></li>
                <li><a href="">Jordan Shoes</a></li>
                <li><a href="">Running Shoes</a></li>
                <li><a href="">Basketball Shoes</a></li>
            </ul>
        </div>
        <div>
            <h4 className='text-xl font-worksans text-red font-semibold'><a href="">Clothing</a></h4>
            <ul className='hidden lg:block mt-4 text-md text-blue font-medium'>
                <li><a href="">All Clothing</a></li>
                <li><a href="">Tops & T-Shirts</a></li>
                <li><a href="">Shorts</a></li>
                <li><a href="">Hoodies & Pullovers</a></li>
            </ul>
        </div>
        <div>
            <h4 className='text-xl font-worksans text-red font-semibold'><a href="">Kids</a></h4>
            <ul className='hidden lg:block mt-4 text-md text-blue font-medium'>
                <li><a href="">Infant & Toddler Shoes</a></li>
                <li><a href="">Kids Shoes</a></li>
                <li><a href="">Kids Basketball Shoes</a></li>
                <li><a href="">Kids Running Shoes</a></li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Category;
