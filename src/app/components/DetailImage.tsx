"use client";

import Image from "next/image";
import { ISampleImage } from "@/shared/interface/static.interface";
import { useModal } from "./hooks/useModal";

export default function DetailImage({ sampleImages }: { sampleImages: ISampleImage[] }) {
  const { isModalOpen, selectedImage, openModal, closeModal, handleBackgroundClick } = useModal();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">About Project Images</h1>
      <div className="grid grid-cols-1 gap-4 pb-10">
        {sampleImages.map((element, index) => (
          <div key={index} className="flex">
            <div
              className="relative cursor-pointer w-1/3 h-40 min-w-[200px] min-h-[150px] overflow-hidden rounded-lg"
              onClick={() => openModal(element.img)}
            >
              <Image
                src={element.img}
                alt="이미지입니다!"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <div className="ml-6">
              <h1 className="text-3xl font-bold">{element.title}</h1>
              <p>{element.params}</p>
            </div>
          </div>
        ))}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onClick={handleBackgroundClick}
          >
              <button
                className="absolute top-2 right-2 text-white text-2xl font-bold"
                onClick={closeModal}
              >
                &times;
              </button>
              {selectedImage && (
                <Image
                  src={selectedImage}
                  alt="원본 이미지입니다!"
                  sizes="100vw"
                  width={800}
                  height={1000}
                  className="object-contain max-w-full max-h-[90vh]"
                />
              )}
            </div>
        )}
      </div>
    </div>
  );
}
