import Link from "next/link";
import { ILinkbuttons } from "@/shared/interface/static.interface"

export default function ButtonGroup({ aboutProps }: { aboutProps: ILinkbuttons[] }) {
  return (
    <div className="flex flex-wrap gap-4 my-6">
      {aboutProps.map((button, index) => (
        <Link
          key={index}
          href={button.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#a76767] text-white py-2 px-4 rounded-md hover:bg-[#e06969] focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        >
          {button.placeholder}
        </Link>
      ))}
              <Link
          href="/"
          className="ml-auto bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
        >
          뒤로가기
        </Link>
    </div>
  );
}
