import React, { useState, useEffect } from 'react';

// Sample images (replace these with actual product or promotional images for your Flipkart website)
const images = [
  'https://media.fashionnetwork.com/m/9bbd/9239/870e/e447/99b3/8373/ab91/11fa/889e/3896/3896.jpeg',
  'https://d16pnh712pyiwa.cloudfront.net/wp-content/uploads/2020/11/Landing-page-banner-scaled.jpg',
  'https://cdn.flipshope.com/blog/wp-content/uploads/2023/08/Flipkart-Independence-sale.jpg',
  'https://image.ibb.co/mwTOiw/flipkart_upcomig_offer.jpg',
];

const AutoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change every 3 seconds
    return () => clearInterval(interval); // Clear interval when component unmounts
  }, []);

  return (
    <div className="relative w-full h-72 overflow-hidden">
      {/* Slider images */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover" // Keep the image fitting the container
            />
          </div>
        ))}
      </div>

      {/* Previous and Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-50 hover:opacity-100"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-50 hover:opacity-100"
      >
        &gt;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full bg-white ${index === currentIndex ? 'bg-blue-500' : 'bg-opacity-50'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
