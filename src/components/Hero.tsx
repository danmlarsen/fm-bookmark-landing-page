import IllustrationHero from "../assets/images/illustration-hero.svg";
import StadiumShape from "../ui/StadiumShape";
import LinkButton from "../ui/LinkButton";

export default function Hero() {
  return (
    <section className="mb-36 lg:mb-20">
      <div className="max-w-8xl mx-auto overflow-hidden">
        <div className="grid gap-12 lg:mx-auto lg:max-w-7xl lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[255px] lg:min-h-[486px]">
            <div>
              <img
                className="h-[460px] object-cover"
                src={IllustrationHero}
                alt="Hero illustration"
              />
            </div>
            <StadiumShape alignment="right" />
          </div>
          <div className="mx-8 space-y-4 text-center lg:col-start-1 lg:row-start-1 lg:text-left">
            <h1 className="text-3xl font-medium tracking-tight md:text-5xl">
              A Simple Bookmark Manager
            </h1>
            <p>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="flex justify-center gap-4 lg:justify-normal">
              <LinkButton to="#">Get it on Chrome</LinkButton>
              <LinkButton to="#" type="secondary">
                Get it on Firefox
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
