import LinkButton from "../ui/LinkButton";

type AppProps = {
  image: string;
  title: string;
  text: string;
};

export default function FeatureItem({ image, title, text }: AppProps) {
  return (
    <div className="grid max-w-6xl items-center justify-items-center gap-x-32 gap-y-8 lg:mx-auto lg:grid-cols-2">
      <div className="">
        <img src={image} alt="" />
      </div>
      <div className="space-y-4 text-center lg:text-left">
        <h3 className="text-2xl font-medium md:text-3xl">{title}</h3>
        <p>{text}</p>
        <LinkButton to="#">More Info</LinkButton>
      </div>
    </div>
  );
}
