import logoChrome from "../assets/images/logo-chrome.svg";
import logoFirefox from "../assets/images/logo-firefox.svg";
import logoOpera from "../assets/images/logo-opera.svg";
import DownloadCard from "./DownloadCard";
import SectionTitle from "../ui/SectionTitle";

const cards = [
  {
    browserName: "Chrome",
    minVersion: "62",
    image: logoChrome,
  },
  {
    browserName: "Firefox",
    minVersion: "55",
    image: logoFirefox,
  },
  {
    browserName: "Opera",
    minVersion: "46",
    image: logoOpera,
  },
];

export default function Download() {
  return (
    <section className="mb-32 lg:mb-36">
      <div className="mx-8">
        <div className="mb-[3.375rem] max-w-xl space-y-4 text-center sm:mx-auto">
          <SectionTitle>Download the extension</SectionTitle>
          <p>
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>
        <div className="mx-auto grid max-w-xl items-start justify-items-center gap-[2.125rem] md:grid-cols-2 lg:min-h-[28.1875rem] lg:max-w-[56.9375rem] lg:grid-cols-3">
          {cards.map((card, index) => (
            <DownloadCard
              key={card.browserName}
              {...card}
              className={`${index === 1 && "self-center"} ${index === 2 && "self-end md:col-span-2 lg:col-span-1"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
