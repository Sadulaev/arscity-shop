'use client';
import { CompletedWorkType } from "@/app/completed-work/page";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const WorkCard: React.FC<{ example: CompletedWorkType }> = ({ example }) => {
  const [mainImage, setMainImage] = useState<number>(1);
    const [showText, setShowText] = useState<boolean>(false)
  const handleNext = () => {
    setMainImage(prev => (prev < 4 ? prev + 1 : 1));
  };

  const handlePrev = () => {
    setMainImage(prev => (prev > 1 ? prev - 1 : 4));
  };

  return (
    <div className="flex flex-col gap-4 w-[500px]">
      <div className="relative flex justify-center w-full h-[400px] overflow-hidden">
        <Image
          src={example[`image${mainImage}` as keyof CompletedWorkType]}
          alt=""
          fill
          className="object-cover transition-all duration-200"
        />
        <div className="absolute flex w-full top-1/2 items-center justify-between p-1">
          <div
            onClick={handlePrev}
            className="p-4 bg-gray-100 cursor-pointer hover:translate-x-[-4px] hover:bg-white hover:opacity-100 transition-all duration-200 opacity-75 z-10"
          >
            <ChevronLeft />
          </div>
          <div
            onClick={handleNext}
            className="p-4 bg-gray-100 cursor-pointer hover:translate-x-1 hover:bg-white hover:opacity-100 transition-all duration-200 opacity-75 z-10"
          >
            <ChevronRight />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 min-h-[80px] overflow-hidden">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="relative flex object-contain w-[100px] h-[80px]">
              <div
                onClick={() => setMainImage(index + 1)}
                className={`absolute top-0 left-0 ${index + 1 === mainImage ? "" : "bg-gray-200"} opacity-70 h-full w-full cursor-pointer`}
              ></div>
              <Image
                style={{ objectFit: 'contain' }}
                src={example[`image${index + 1}` as keyof CompletedWorkType]}
                alt=""
                width={100}
                height={80}
              />
            </div>
          ))}
      </div>
      <h2 className="mt-4 text-2xl text-gray-700">{example.title}</h2>
      <div className="flex items-center gap-2 text-gray-700">
        <MapPin color="green" />
        <span>{example.address}</span>
      </div>
      {!showText ? (
        <p>{example.description.slice(0, 150)}... <span onClick={() => setShowText(!showText)} className="text-blue-600 cursor-pointer">Показать еще</span></p>
      ) : (
        <p>{example.description.slice(0, -1)}... <span onClick={() => setShowText(!showText)} className="text-blue-600 cursor-pointer">Скрыть</span></p>
      )}
      
    </div>
  );
};

export default WorkCard;