"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { StackUsage } from "@/shared/static.usage";

export default function StackElement() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // 한 번 감지되면 더 이상 감지하지 않음
        }
      },
      { threshold: 0.3 } // 30% 이상 보이면 트리거
    );

    if (ref.current) observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-28">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold mb-6">What I Used</h2>
      </motion.div>

      <div className="space-y-4 py-6 w-3/4">
        {StackUsage.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold">{category.title}</h3>
            <div className="grid grid-cols-2 gap-4 text-xl">
              {category.params.map((item, idx) => (
                <motion.p
                  key={idx}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: (index + idx) * 0.1 }}
                >
                  <span className="pr-2">•</span> {item}
                </motion.p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
