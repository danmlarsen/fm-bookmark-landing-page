import LinkButton from "./LinkButton";

import IconDots from "../assets/images/bg-dots.svg";

type AppProps = {
  image: string;
  browserName: string;
  minVersion: string;
};

export default function DownloadCard({
  image,
  browserName,
  minVersion,
}: AppProps) {
  return (
    <div className="w-full max-w-[280px] rounded-xl shadow-xl">
      <div className="grid justify-items-center gap-8 p-6 pt-10">
        <div>
          <img src={image} alt={`${browserName} logo`} />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-medium">Add to {browserName}</h3>
          <p>Minimum version {minVersion}</p>
        </div>
      </div>
      <div
        className="h-1 w-full bg-red"
        style={{ background: `url('${IconDots}')` }}
      ></div>
      <div className="mt-4 flex flex-col border-blue-900 px-6 pb-6">
        <LinkButton to="#">Add & Install Extension</LinkButton>
      </div>
    </div>
  );
}
