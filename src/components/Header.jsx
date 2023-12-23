import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from '../components/Header'
import { Link } from 'react-router-dom';



function Header() {
    return (
        <>
        <header className='bg-red'>
            <div className='container hidden md:hidden lg:block xl:block'>
                <ul className='flex gap-5 text-white py-2 flex-row-reverse font-taviraj text-sm/[12px]'>
                    <li><a href="">Find Store</a></li> |
                    <li><a href="">Help</a></li> |
                    <li><a href="">Join Us</a></li> |
                    <li><a href="">Sign In</a></li>
                </ul>
            </div>
            <nav className='container'>
                <div className='flex justify-between gap-2'>
                    <div className='text-white py-5 text-xl lg:hidden xl:hidden'><i class="fa fa-tasks" aria-hidden="true"></i></div>
                    <h1 className='text-white py-5 font-averia text-3xl flex-none md:flex-none'>
                        <Link to="/">KIKE</Link>
                    </h1>
                    <div className='hidden md:hidden lg:block xl:block flex-1'>
                        <ul className='flex justify-center gap-5 py-5 font-worksans text-lg text-white '>
                            <li><Link to="/" className='hover:border-b-4 border-white duration-100 hover:text-skyblue pb-3'>Home</Link></li>
                            <li><Link to="/men" className='hover:border-b-4 border-white duration-100 hover:text-skyblue pb-3'>Men</Link></li>
                            <li><a href="" className='hover:border-b-4 border-white duration-100 hover:text-skyblue pb-3'>Women</a></li>
                            <li><a href="" className='hover:border-b-4 border-white duration-100 hover:text-skyblue pb-3'>Kids</a></li>
                            <li><a href="" className='hover:border-b-4 border-white duration-100 hover:text-skyblue pb-3'>Collections</a></li>
                            <li><a href="" className='hover:border-b-4 border-white duration-100 hover:text-skyblue pb-3'>Gifts</a></li>
                        </ul>
                    </div>
                    <div className='text-white bg-skyblue w-40 rounded-full my-4 relative flex-2 hidden md:hidden lg:block xl:block'>
                        <div className='absolute left-4 top-1'>
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </div>

                    </div>
                    <div className='flex md:block lg:block xl:block'>
                        <ul className='flex justify-between gap-5 text-white flex-1 py-5'>
                            <li className='hover:bg-skyblue hover:w-40 rounded-full hover:relative hidden md:block lg:hidden xl:hidden'>
                                <div className='hover:absolute left-4 top-1 '>
                            <i class="fa fa-search" aria-hidden="true"></i>
                                </div>
                            </li>
                            <li><a href=""><i class="fa fa-heart-o" aria-hidden="true"></i></a></li>
                            <li><a href=""><i class="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
                            <li><a href=""><i class="fa fa-user" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        </>
    );
}

export default Header;
