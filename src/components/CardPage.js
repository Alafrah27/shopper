import React from "react";
import { CardItems } from "./CardItems";

function CardPage() {
  return (
    <div className="mx-auto w-[100%]">
      <h3 className="text-center text-gray-600 font-bold my-4">
        New Collection For Summer
      </h3>
      <div>
        <CardItems />
      </div>
    </div>
  );
}

export default CardPage;
