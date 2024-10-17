import { AnimatePresence, motion } from "framer-motion";
import LinkButton from "../ui/LinkButton";
import StadiumShape from "../ui/StadiumShape";

type AppProps = {
  image: string;
  title: string;
  text: string;
};

export default function FeatureItem({ image, title, text }: AppProps) {
  return (
    <AnimatePresence>
      <motion.div
        key={title}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="grid w-full items-center justify-items-center gap-x-32 gap-y-[69px] md:mx-auto md:max-w-3xl lg:mx-auto lg:max-w-6xl lg:grid-cols-2"
      >
        <div className="relative">
          <img src={image} alt="" />
          <StadiumShape />
        </div>
        <div className="space-y-4 text-center lg:text-left">
          <h3 className="text-2xl font-medium md:text-3xl">{title}</h3>
          <p>{text}</p>
          <LinkButton to="#">More Info</LinkButton>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
