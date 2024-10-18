import { AnimatePresence, motion } from "framer-motion";

type AppProps = {
  children: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
};

export default function FeatureButton({
  children,
  onClick,
  isActive = false,
}: AppProps) {
  return (
    <div className={`relative border-b transition duration-300`}>
      <button
        className="block w-full py-4 text-base tracking-[0.53px] transition duration-300 hover:text-red focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500 focus-visible:ring-offset-2 lg:py-0 lg:pb-6"
        onClick={onClick}
      >
        {children}
      </button>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0, y: "100%" }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-red"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
