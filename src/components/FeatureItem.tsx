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
    <AnimatePresence initial={false}>
      <motion.div
        key={title}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="grid w-full items-center justify-items-center gap-x-[7.8125rem] gap-y-[4.3125rem] md:mx-auto md:max-w-3xl lg:mx-auto lg:max-w-6xl lg:grid-cols-[33.5rem_auto]"
      >
        <div className="relative">
          <img src={image} alt="Feature Illustration" />
          <StadiumShape />
        </div>
        <div className="text-center lg:text-left">
          <div className="mb-8 space-y-4">
            <h3 className="text-2xl font-medium md:text-3xl">{title}</h3>
            <p>{text}</p>
          </div>
          <div>
            <LinkButton to="#">More Info</LinkButton>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
