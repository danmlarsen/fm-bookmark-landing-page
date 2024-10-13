import IllustrationHero from "../assets/images/illustration-hero.svg";
import LinkButton from "./LinkButton";

export default function Hero() {
  return (
    <section className="mb-36 grid gap-12">
      <div className="relative min-h-[255px] overflow-x-hidden">
        <div className="relative z-10">
          <img
            className="w-full object-cover"
            src={IllustrationHero}
            alt="Hero illustration"
          />
        </div>
        <div className="absolute bottom-0 right-0 h-[203px] w-[577px] translate-x-1/2 rounded-full bg-blue-500"></div>
      </div>
      <div className="mx-8 space-y-4 text-center">
        <h1 className="text-3xl font-medium">A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex justify-center gap-4">
          <LinkButton to="#">Get it on Chrome</LinkButton>
          <LinkButton
            to="#"
            className="border-white bg-white text-black hover:border-grayishBlue hover:text-grayishBlue"
          >
            Get it on Firefox
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
