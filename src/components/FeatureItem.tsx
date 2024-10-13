import LinkButton from "./LinkButton";

type AppProps = {
  image: string;
  title: string;
  text: string;
};

export default function FeatureItem({ image, title, text }: AppProps) {
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <div className="space-y-4 text-center">
        <h3 className="text-2xl font-medium">{title}</h3>
        <p>{text}</p>
        <LinkButton to="#">More Info</LinkButton>
      </div>
    </div>
  );
}
