"use client"

import Image from "next/image";
import { useLiteral } from "./context/useLiteral";


export default function DetailImage() {
  
  
  const data = useLiteral()



  return (
    <div>
      <div>
        <Image
        src={""}
        alt=""/>
      </div>

      <div></div>
    </div>

  );
}
