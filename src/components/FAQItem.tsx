import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type AppProps = {
  title: string;
  text: string;
};

export default function FAQItem({ title, text }: AppProps) {
  const [showText, setShowText] = useState(false);

  return (
    <li className="py-5">
      <div
        className="flex cursor-pointer justify-between transition duration-300 hover:text-red"
        onClick={() => setShowText((prev) => !prev)}
      >
        <h3>{title}</h3>
        <div
          className={`flex items-center transition duration-300 ${showText ? "stroke-red [transform:rotateX(180deg)]" : "stroke-blue-500"}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
            <path
              fill="none"
              stroke="inherit"
              strokeWidth="3"
              d="M1 1l8 8 8-8"
            />
          </svg>
        </div>
      </div>
      <AnimatePresence>
        {showText && (
          <motion.p
            initial={{ transformOrigin: "top", scaleY: 0, opacity: 0 }}
            animate={{ transformOrigin: "top", scaleY: 1, opacity: 1 }}
            exit={{ transformOrigin: "top", scaleY: 0, opacity: 0 }}
            className="mt-8 text-blue-900"
          >
            {text}
          </motion.p>
        )}
      </AnimatePresence>
    </li>
  );
}
