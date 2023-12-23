import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Products() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='bg-blue'>
            <div className='container'>
                <h2 className='text-3xl pt-10 font-semibold text-white font-taviraj'> New</h2>
                <h2 className='text-3xl font-bold text-red mb-3 font-taviraj'> Arrivals </h2>
                <Slider {...settings}>
                    <div className=''>
                        <div className='bg-[url("./img/shoe1.jpg")] h-[350px] bg-cover  mb-5 border-x-[5px] border-blue drop-shadow-xl'>
                            <div className='text-[white] font-worksans pt-[200px] pl-[30px]'>
                                <h3 className='font-semibold text-2xl '>Nike Dunk </h3>
                                <p className='font-medium text-lg'>Men's Shoes</p>
                                <p className='font-medium'>$115</p>
                                <button className='bg-red p-1 mt-3 font-semibold hover:bg-blue duration-200'><a href="">Add to Cart</a></button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[url("./img/shoe2.jpg")] h-[350px] bg-cover  mb-5 drop-shadow-xl border-x-[5px] border-blue'>
                            <div className='text-[white] font-worksans pt-[200px] pl-[30px]'>
                                <h3 className='font-semibold text-2xl '>Nike Dunk </h3>
                                <p className='font-medium text-lg'>Men's Shoes</p>
                                <p className='font-medium'>$115</p>
                                <button className='bg-red p-1 mt-3 font-semibold hover:bg-blue duration-200'><a href="">Add to Cart</a></button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[url("./img/shoe3.jpg")] h-[350px] bg-cover  mb-5 drop-shadow-xl border-x-[5px] border-blue'>
                            <div className='text-[white] font-worksans pt-[200px] pl-[30px]'>
                                <h3 className='font-semibold text-2xl '>Nike Dunk </h3>
                                <p className='font-medium text-lg'>Men's Shoes</p>
                                <p className='font-medium'>$115</p>
                                <button className='bg-red p-1 mt-3 font-semibold hover:bg-blue duration-200'><a href="">Add to Cart</a></button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[url("./img/shoe5.jpg")] h-[350px] bg-cover mb-5 drop-shadow-xl border-x-[5px] border-blue'>
                            <div className='text-white font-worksans pt-[200px] pl-[30px]'>
                                <h3 className='font-semibold text-2xl '>Nike Dunk </h3>
                                <p className='font-medium text-lg'>Men's Shoes</p>
                                <p className='font-medium'>$115</p>
                                <button className='bg-red p-1 mt-3 font-semibold hover:bg-blue duration-200'><a href="">Add to Cart</a></button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[url("./img/shoe6.jpg")] h-[350px] bg-cover mb-5 drop-shadow-xl border-x-[5px] border-blue'>
                            <div className='text-[white] font-worksans pt-[200px] pl-[30px]'>
                                <h3 className='font-semibold text-2xl '>Nike Dunk </h3>
                                <p className='font-medium text-lg'>Men's Shoes</p>
                                <p className='font-medium'>$115</p>
                                <button className='bg-red p-1 mt-3 font-semibold hover:bg-blue duration-200'><a href="">Add to Cart</a></button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[url("./img/shoe7.jpg")] h-[350px] bg-cover  mb-5 drop-shadow-xl border-x-[5px] border-blue'>
                            <div className='text-[white] font-worksans pt-[200px] pl-[30px]'>
                                <h3 className='font-semibold text-2xl '>Nike Dunk </h3>
                                <p className='font-medium text-lg'>Men's Shoes</p>
                                <p className='font-medium'>$115</p>
                                <button className='bg-red p-1 mt-3 font-semibold hover:bg-blue duration-200'><a href="">Add to Cart</a></button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[url("./img/shoe8.jpg")] h-[350px] bg-cover mb-5 drop-shadow-xl border-x-[5px] border-blue'>
                            <div className='text-[white] font-worksans pt-[200px] pl-[30px]'>
                                <h3 className='font-semibold text-2xl '>Nike Dunk </h3>
                                <p className='font-medium text-lg'>Men's Shoes</p>
                                <p className='font-medium'>$115</p>
                                <button className='bg-red p-1 mt-3 font-semibold hover:bg-blue duration-200'><a href="">Add to Cart</a></button>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Products;
