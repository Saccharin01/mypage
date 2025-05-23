"use client";

import { motion } from "framer-motion";
import ProjectElement from "./components/ProjectElement";
import StackElement from "./components/StackElement";

export default function MainPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {/* 랜딩 메시지 */}
      <header className="flex flex-col justify-center items-center h-[100vh] bg-transparent">
        <motion.h1
          className="text-5xl font-bold mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
        >
          반갑습니다
        </motion.h1>
        <motion.h1
          className="text-2xl font-bold mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Was a Cook, Now i develop
        </motion.h1>
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          조우식입니다
        </motion.h1>
      </header>

      <main className="mt-20 w-full">
        <StackElement />
      </main>

      <footer className="my-10 w-full">
        <ProjectElement />
      </footer>
    </div>
  );
}
