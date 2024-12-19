import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import CSS

const ImageCarousel = () => {
    return (
        <Carousel
            autoPlay      
            interval={3000} 
            infiniteLoop   
            showThumbs={false} 
            showStatus={false} 
        >
            <div className="carousel-image ml-5 mr-5 mt-3 mb-3">
                <img src="/img/caro1.jpg" alt="Slide 1" />
            </div>
            <div className="carousel-image ml-5 mr-5 mt-3 mb-3">
                <img src="/img/caro2.jpg" alt="Slide 2" />
            </div>
            <div className="carousel-image ml-5 mr-5 mt-3 mb-3">
                <img src="/img/caro3.jpg" alt="Slide 3" />
            </div>
            {/* Tambahkan lebih banyak gambar di sini */}
        </Carousel>
    );
};

export default ImageCarousel;
