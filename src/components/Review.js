"use client";

import { Carousel } from "flowbite-react";

export function Review() {
  return (
    <div>
        <h3 className="text-center text-gray-500 font-bold text-[20px] my-10">Shop by Category</h3>
      <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96 my-4">
        <Carousel>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOHh-w2kJjp6R6WB1GpXMkREw6XaNU5JCP0w&s"
            alt="..."
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6orjAs-C770cho4rtuKOz3d-Nk-dsZLayKQ&s"
            alt="..."
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2gvtCFH3lQJFmjp3NuoydvBgsFqV04POg&s"
            alt="..."
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWO9RzuKE9Yx-zQpWuH3-jWcNlrgMffFAJ5w&s"
            alt="..."
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwG3io5cs346aImJAbE7_ZutmohFXzQhi-w&s"
            alt="..."
          />
        </Carousel>
        <Carousel indicators={false}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhuROv4xscDmc6uzpolcDBY6p57HwBjY8dA&s"
            alt="..."
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvi0RL5e1J3c4en2rfZPVNDbn3HpFZ85uoDQ&s"
            alt="..."
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_zSGpbTJzpsyxCV8n0GVO3wcD3rAfPqewTQ&s"
            alt="..."
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_zSGpbTJzpsyxCV8n0GVO3wcD3rAfPqewTQ&s"
            alt="..."
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSnfBD8oiQixFsc59ccAI4fSbIBvvTjUEZuw&s"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
}
