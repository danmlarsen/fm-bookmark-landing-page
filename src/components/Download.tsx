import logoChrome from "../assets/images/logo-chrome.svg";
import logoFirefox from "../assets/images/logo-firefox.svg";
import logoOpera from "../assets/images/logo-opera.svg";
import DownloadCard from "./DownloadCard";
import SectionTitle from "./SectionTitle";

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
    <section className="mb-36">
      <div className="mx-8">
        <div className="space-y-4 text-center">
          <SectionTitle>Download the extension</SectionTitle>
          <p>
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>
        <div className="grid justify-items-center gap-10">
          {cards.map((card) => (
            <DownloadCard {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
