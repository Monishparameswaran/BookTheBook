import React, { useState, useEffect } from "react";

export function ImageCarousal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1589998059171-988d887df646?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full">
      <div className="relative h-64 overflow-hidden rounded-lg md:h-72">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`image ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-transform duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ transform: `translateX(${100 * (index - currentIndex)}%)`, height: "100%" }}
          />
        ))}
      </div>
      <button onClick={handlePrev} className="absolute top-1/2 left-4 transform -translate-y-1/2">
        Prev
      </button>
      <button onClick={handleNext} className="absolute top-1/2 right-4 transform -translate-y-1/2">
        Next
      </button>
    </div>
  );
}
