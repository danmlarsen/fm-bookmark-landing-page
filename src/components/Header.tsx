import { useState } from "react";
import Logo from "../ui/Logo";
import MobileNavButton from "./MobileNavButton";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <AnimatePresence>
      {mobileNavOpen && (
        <motion.div
          key="mobileMenu"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed inset-0 z-20 md:hidden"
        >
          <MobileMenu />
        </motion.div>
      )}
      <header
        className={`relative z-50 mx-8 mb-20 mt-10 flex items-center justify-between lg:mx-auto lg:mb-28 lg:max-w-6xl`}
      >
        <div>
          <Logo
            bgColor={mobileNavOpen ? "hsl(229, 31%, 21%)" : "#fff"}
            fillColor={mobileNavOpen ? "#fff" : "hsl(231, 69%, 60%)"}
            className={mobileNavOpen ? "text-white" : ""}
          />
        </div>
        <div className="hidden md:block">
          <Navigation />
        </div>
        <div className="flex items-center md:hidden">
          <MobileNavButton
            isOpen={mobileNavOpen}
            onClick={() => setMobileNavOpen((prev) => !prev)}
          />
        </div>
      </header>
    </AnimatePresence>
  );
}
