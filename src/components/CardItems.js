import { Button, Card } from "flowbite-react";

export function CardItems() {
  return (
    <Card className=" grid grid-cols-[1fr] md:w-[300px] mx-auto ">
      <img
        className="object-fill w-full"
        fill="currentColor"
        viewBox="0 0 20 20"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8NYnGDqrQm-gbf4fbXkaMBzmVLlf2rZdOLA&s"
        alt="..."
      />
      <h5 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        
      </p>
      <div className="flex justify-between items-center ">
        <span className="font-bold">$200</span>
      <Button className="block">Add To Card</Button>
      </div>
    </Card>
  );
}
