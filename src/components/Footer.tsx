import Logo from "../ui/Logo";
import SocialLinks from "../ui/SocialLinks";

import Navigation from "./Navigation";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="text-center text-white">
      <div className="space-y-8 bg-blue-500 px-8 py-16">
        <div className="mx-auto max-w-[442px]">
          <div className="mb-9">
            <p className="text-[12px] font-medium uppercase leading-[40px] tracking-[4.62px]">
              35,000+ already joined
            </p>
            <h2 className="text-2xl font-medium leading-tight md:text-3xl md:leading-tight">
              Stay up-to-date with what we’re doing
            </h2>
          </div>
          <div>
            <Newsletter />
          </div>
        </div>
      </div>
      <div className="bg-blue-900 py-10 text-center">
        <div className="mx-8 flex flex-col gap-12 md:max-w-6xl md:flex-row lg:mx-auto">
          <div className="flex justify-center">
            <Logo />
          </div>
          <Navigation direction="col" type="footer" />
          <div className="flex items-center justify-center gap-10 md:ml-auto">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}
