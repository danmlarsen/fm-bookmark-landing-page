import IllustrationHero from "../assets/images/illustration-hero.svg";
import StadiumShape from "../ui/StadiumShape";
import LinkButton from "../ui/LinkButton";

export default function Hero() {
  return (
    <section className="mb-32 lg:mb-[5.625rem]">
      <div className="mx-auto max-w-8xl overflow-x-clip">
        <div className="grid gap-12 gap-x-8 md:mx-auto md:max-w-3xl lg:max-w-[83.125rem] lg:grid-cols-[auto_40.625rem] lg:items-center">
          <div className="relative min-h-[15.9375rem] lg:min-h-[30.375rem]">
            <div>
              <img
                className="object-cover"
                src={IllustrationHero}
                alt="Hero illustration"
              />
            </div>
            <StadiumShape alignment="right" />
          </div>
          <div className="mx-8 space-y-4 text-center lg:col-start-1 lg:row-start-1 lg:mx-0 lg:pb-8 lg:pl-28 lg:text-left">
            <div className="mb-9">
              <h1 className="mb-6 text-3xl font-medium tracking-[-0.15px] text-blue-900 md:text-5xl">
                A Simple Bookmark Manager
              </h1>
              <p>
                A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see your sites load
                instantly. Try it for free.
              </p>
            </div>

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
