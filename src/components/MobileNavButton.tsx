import { AnimatePresence, motion } from "framer-motion";

import IconHamburger from "../assets/images/icon-hamburger.svg";
import IconClose from "../assets/images/icon-close.svg";

type AppProps = {
  onClick: () => void;
  isOpen: boolean;
};

export default function MobileNavButton({ onClick, isOpen }: AppProps) {
  return (
    <motion.button onClick={onClick}>
      <AnimatePresence initial={false} mode="wait">
        {isOpen ? (
          <motion.img
            key={0}
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: [1, 1.5, 1] }}
            src={IconClose}
            alt="Close Icon"
          />
        ) : (
          <motion.img
            key={1}
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: [1, 1.5, 1] }}
            src={IconHamburger}
            alt="Hamburger Icon"
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
}
