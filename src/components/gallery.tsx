import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState,useRef } from 'react';


export default function Gallery() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  let sliderRef = useRef(null);
  const settings = {
    dots: true,
    // infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current: any, next: any) => setSlideIndex(next),
    appendDots: (dots: any)  => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bottom: "-8%",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
          width: "30%"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    
  };

  return (
    <div className="bg-[#1E1E1E] min-h-screen flex justify-center items-center">
      <div className="slider-container w-11/12 md:w-3/4 lg:w-2/3">
      <input
        onChange={e => sliderRef.slickGoTo(e.target.value)}
        value={slideIndex}
        type="range"
        min={0}
        max={3}
      />
        <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >

          <div className="flex justify-center p-4 ">
            <Image
              src="/assets/slider/nike_1.jpeg"
              alt="Image 1"
              width={300}
              height={200}
              priority
              className="rounded-md object-cover "
            />
          </div>
          <div className="flex justify-center p-4">
            <Image
              src="/assets/slider/nike_2.jpeg"
              alt="Image 2"
              width={300}
              height={200}
              priority
              className="rounded-md object-cover"
            />
          </div>
          <div className="flex justify-center p-4">
            <Image
              src="/assets/slider/nike_3.jpeg"
              alt="Image 3"
              width={300}
              height={200}
              priority
              className="rounded-md object-cover"
            />
          </div>
          <div className="flex justify-center p-4">
            <Image
              src="/assets/slider/nike_4.jpeg"
              alt="Image 4"
              width={300}
              height={200}
              priority
              className="rounded-md object-cover"
            />
          </div>
          <div className="flex justify-center p-4">
            <Image
              src="/assets/slider/nike_5.jpeg"
              alt="Image 5"
              width={300}
              height={200}
              priority
              className="rounded-md object-cover"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
