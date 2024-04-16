import { Carousel } from "@material-tailwind/react";
import image1 from "../../../assets/image1.jpg"
import image2 from "../../../assets/image2.jpg"
import image3 from "../../../assets/image3.jpeg"

 
export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl h-full" autoplay="true" loop="true">
      <img
        src={image1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={image2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={image3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}