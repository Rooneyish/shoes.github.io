import React from 'react';

function Footer() {
  return (
    <footer className='bg-blue'>
        <div className='container pt-10 lg:flex justify-between pb-10 mt-10'> 
            <div>
                <ul className='text-lg font-semibold font-worksans text-white '>
                    <li className='hover:text-skyblue'><a href="">GIFT CARDS</a></li>
                    <li className='hover:text-skyblue'><a href="">FIND A STORE</a></li>
                    <li className='hover:text-skyblue'><a href="">BECOME A MEMBER</a></li>
                    <li className='hover:text-skyblue'><a href="">SEND US FEEDBACK</a></li>
                </ul>
            </div>
            <div>
                <hr className='lg:hidden' />
                <h4 className='text-lg font-semibold font-worksans text-white hover:text-skyblue'>GET HELP</h4>
                <ul className='text-md font-light font-worksans text-white hidden lg:block'>
                    <li className='hover:text-skyblue'><a href="">Order Status</a></li>
                    <li className='hover:text-skyblue'><a href="">Shipping and Delivery</a></li>
                    <li className='hover:text-skyblue'><a href="">Returns</a></li>
                    <li className='hover:text-skyblue'><a href="">Order Cancellation</a></li>
                    <li className='hover:text-skyblue'><a href="">Payment Options</a></li>
                    <li className='hover:text-skyblue'><a href="">Gift Card Balance</a></li>
                    <li className='hover:text-skyblue'><a href="">Contact Us</a></li>
                </ul>
            </div>
            <div>
            <hr className='lg:hidden' />
                <h4 className='text-lg font-semibold font-worksans text-white hover:text-skyblue'><a href="">ABOUT US</a></h4>
                <ul className='text-md font-light font-worksans text-white hidden lg:block'>
                    <li className='hover:text-skyblue'><a href="">News</a></li>
                    <li className='hover:text-skyblue'><a href="">Careers</a></li>
                    <li className='hover:text-skyblue'><a href="">Investors</a></li>
                    <li className='hover:text-skyblue'><a href="">Purpose</a></li>
                    <li className='hover:text-skyblue'><a href="">Susstainability</a></li>
                </ul>
            </div>
            
            <div>
            <hr className='lg:hidden' />
                <h4 className='text-lg font-semibold font-worksans text-white hover:text-skyblue'>PROMOTIONS & DISCOUNTS</h4>
                <ul className='text-md font-light font-worksans text-white hidden lg:block'>
                    <li className='hover:text-skyblue'><a href="">Student</a></li>
                    <li className='hover:text-skyblue'><a href="">Military</a></li>
                    <li className='hover:text-skyblue'><a href="">Teacher</a></li>
                    <li className='hover:text-skyblue'><a href="">First Responders & Medical Professionals</a></li>
                    <li className='hover:text-skyblue'><a href="">Birthday</a></li>
                </ul>
            </div>
            <div>
            <hr className='lg:hidden' />
                <ul className='flex gap-5 text-white'>
                    <li><a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href=""><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                    <li><a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            
        </div>
        <div className='bg-[#313A4D] text-center text-white py-4'>
            <p>© 2023 dadiddas America, Inc. </p>
        </div>
    </footer>
  );
}

export default Footer;
