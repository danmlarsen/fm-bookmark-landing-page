import { useState } from "react";

type AppProps = {
  title: string;
  text: string;
};

export default function FAQItem({ title, text }: AppProps) {
  const [showText, setShowText] = useState(false);

  return (
    <li className="border-b" onClick={() => setShowText((prev) => !prev)}>
      <div className="flex justify-between">
        <h3>{title}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
          <path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8" />
        </svg>
      </div>
      {showText && <p>{text}</p>}
    </li>
  );
}
