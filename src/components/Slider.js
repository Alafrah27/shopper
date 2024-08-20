"use client";

import { Carousel } from "flowbite-react";

function Slider() {
  return (
    <div className="h-[300px] sm:h-64 xl:h-80 2xl:h-[120px">
      <Carousel pauseOnHover>
        <img  className="object-fill w-[100%]"
         fill="currentColor"
          viewBox="0 0 20 20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8NYnGDqrQm-gbf4fbXkaMBzmVLlf2rZdOLA&s"
          alt="..."
        />
        <img  className="object-cover w-[100%]"
         fill="currentColor"
          viewBox="0 0 20 20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOc91IOdtyNQa6CuCp5TIqUH89hKafBaDf6g&s"
          alt="..."
           />
        <img  className="object-cover w-[100%]" fill="currentColor"
          viewBox="0 0 20 20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmUOvofdKUdxOfLjwXsJiJYHt-yU0XFifxQ&s"
          alt="..."
           />
        <img  className="object-fill w-[100%]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8NYnGDqrQm-gbf4fbXkaMBzmVLlf2rZdOLA&s"
          alt="..."
            />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}
export default Slider