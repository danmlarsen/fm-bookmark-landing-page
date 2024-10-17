import SocialLinks from "../ui/SocialLinks";
import Navigation from "./Navigation";

export default function MobileMenu() {
  return (
    <>
      <div className="absolute inset-0 bg-blue-900 opacity-95"></div>
      <div className="relative grid min-h-screen grid-rows-[1fr_auto] px-8 pb-12 pt-28 text-white">
        <div>
          <Navigation direction="column" type="mobile" />
        </div>
        <div className="flex items-center justify-center gap-12">
          <SocialLinks />
        </div>
      </div>
    </>
  );
}
