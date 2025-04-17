"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useLiteral } from "./hooks/context/useLiteral";
import { staticData } from "@/shared/static.data";
import { IstaticData } from "@/shared/interface/static.interface";
import Image from "next/image";
import Link from "next/link";
import StackTags from "./StackTags";

export default function ProjectElement() {
  const { setLiteral } = useLiteral();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleSelectData = (item: IstaticData) => {
    setLiteral(item);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // 한 번 감지되면 더 이상 감지하지 않음
        }
      },
      { threshold: 0.3 } // 30% 이상 화면에 나타나면 트리거
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div>
        <h1 className="text-2xl font-bold mb-6">Projects List</h1>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {staticData.map((element, index) => (
          <motion.div
          key={element.title+index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
            <Link href="/details">
              <div
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                } items-center rounded-lg shadow-md hover:shadow-lg transition-shadow h-[350px] shadow-gray-700 hover:shadow-gray-700`}
                onClick={()=>{handleSelectData(element)}}
              >
                {/* 이미지 영역 */}
                <div className="md:w-1/2 w-full h-1/2 md:h-full relative flex justify-center items-center overflow-hidden rounded">
                  <Image
                    src={element.img}
                    alt="이미지입니다!"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    className="object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                    priority
                  />
                </div>

                {/* 텍스트 + 태그 */}
                <div className="md:w-1/2 w-full h-1/2 md:h-full px-6 py-4 flex flex-col justify-center">
                  <h2 className="text-xl font-semibold mb-2">{element.title}</h2>
                  <p className="text-gray-700 mb-3">{element.description}</p>
                  <StackTags stackList={element.stack} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
