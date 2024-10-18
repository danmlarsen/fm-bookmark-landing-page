import Logo from "../ui/Logo";
import SocialLinks from "../ui/SocialLinks";

import Navigation from "./Navigation";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="text-center text-white">
      <div className="space-y-8 bg-blue-500 px-8 pb-[4.625rem] pt-[3.625rem]">
        <div className="mx-auto max-w-[27.625rem]">
          <div className="mb-9 space-y-6">
            <p className="lg:text-xxs text-[0.75rem] font-medium uppercase leading-[40px] tracking-[4.62px] lg:leading-[40px] lg:tracking-[5px]">
              35,000+ already joined
            </p>
            <h2 className="text-2xl font-medium leading-tight md:text-3xl md:leading-[40px]">
              Stay up-to-date with what we’re doing
            </h2>
          </div>
          <div>
            <Newsletter />
          </div>
        </div>
      </div>
      <div className="bg-blue-900 py-8 text-center">
        <div className="mx-8 flex flex-col gap-16 md:max-w-6xl md:flex-row lg:mx-auto">
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
