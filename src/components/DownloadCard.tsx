import LinkButton from "../ui/LinkButton";

import IconDots from "../assets/images/bg-dots.svg";

type AppProps = {
  image: string;
  browserName: string;
  minVersion: string;
  className: string;
};

export default function DownloadCard({
  image,
  browserName,
  minVersion,
  className,
}: AppProps) {
  return (
    <div
      className={`shadow-transparentBlue min-h-[23.1875rem] w-full max-w-[17.5rem] rounded-xl text-center shadow-lg ${className}`}
    >
      <div className="grid justify-items-center gap-8 pt-10">
        <div>
          <img src={image} alt={`${browserName} logo`} />
        </div>
        <div className="space-y-2">
          <h3 className="text-[1.25rem] font-medium tracking-[0.25px]">
            Add to {browserName}
          </h3>
          <p className="text-sm">Minimum version {minVersion}</p>
        </div>
      </div>
      <div
        className="mt-8 h-1 w-full bg-red"
        style={{ background: `url('${IconDots}')` }}
      ></div>
      <div className="mt-6 flex flex-col border-blue-900 px-6 pb-6">
        <LinkButton to="#">Add & Install Extension</LinkButton>
      </div>
    </div>
  );
}
