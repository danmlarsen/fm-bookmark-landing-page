import { useEffect, useState } from "react";
import Logo from "../ui/Logo";
import MobileNavButton from "./MobileNavButton";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    if (mobileNavOpen) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      document.body.style.height = "100%";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.height = "";
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

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
        className={`relative z-50 mx-8 mb-20 mt-10 flex items-center justify-between px-1 lg:mx-auto lg:mb-[6.5625rem] lg:mt-12 lg:max-w-6xl`}
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
