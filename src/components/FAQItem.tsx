import { useState } from "react";

type AppProps = {
  title: string;
  text: string;
};

export default function FAQItem({ title, text }: AppProps) {
  const [showText, setShowText] = useState(false);

  return (
    <li className="py-5">
      <button
        className="flex w-full cursor-pointer items-center justify-between pr-6 transition duration-300 hover:text-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        onClick={() => setShowText((prev) => !prev)}
      >
        <span className="text-left text-blue-900">{title}</span>
        <span
          className={`flex items-center transition duration-300 ${showText ? "stroke-red [transform:rotateX(180deg)]" : "stroke-blue-500"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="12"
            role="img"
          >
            <title>Arrow icon</title>
            <path
              fill="none"
              stroke="inherit"
              strokeWidth="3"
              d="M1 1l8 8 8-8"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${showText ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="mt-8 text-blue-900/75">{text}</p>
      </div>
    </li>
  );
}
