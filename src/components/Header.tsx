import { useState } from "react";
import Logo from "../ui/Logo";
import MobileNavButton from "./MobileNavButton";
import Navigation from "./Navigation";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="mx-8 mb-20 mt-10 flex items-center justify-between lg:mx-auto lg:max-w-6xl">
      <div>
        <Logo />
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
  );
}
