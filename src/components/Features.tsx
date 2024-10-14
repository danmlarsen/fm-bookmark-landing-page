import { useState } from "react";
import Illustration1 from "../assets/images/illustration-features-tab-1.svg";
import Illustration2 from "../assets/images/illustration-features-tab-2.svg";
import Illustration3 from "../assets/images/illustration-features-tab-3.svg";

import FeatureItem from "./FeatureItem";
import SectionTitle from "../ui/SectionTitle";
import FeatureButton from "./FeatureButton";
import StadiumShape from "../ui/StadiumShape";

const featureItemsData = [
  {
    tabTitle: "Simple Bookmarking",
    image: Illustration1,
    title: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    tabTitle: "Speedy Searching",
    image: Illustration2,
    title: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    tabTitle: "Easy Sharing",
    image: Illustration3,
    title: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <section className="mb-36">
      <div className="max-w-8xl mx-auto overflow-hidden">
        <div className="mx-8">
          <div className="mx-auto max-w-[730px] text-center">
            <div className="mb-10">
              <SectionTitle>Features</SectionTitle>
              <p>
                Our aim is to make it quick and easy for you to access your
                favourite websites. Your bookmarks sync between your devices so
                you can access them on the go.
              </p>
            </div>
            <div className="mb-20 md:grid md:grid-cols-3">
              {featureItemsData.map((feature, index) => (
                <FeatureButton
                  onClick={() => setSelectedFeature(index)}
                  isActive={selectedFeature === index}
                  key={index}
                >
                  {feature.tabTitle}
                </FeatureButton>
              ))}
            </div>
          </div>
          <div className="relative">
            {<FeatureItem {...featureItemsData[selectedFeature]} />}
            <StadiumShape />
          </div>
        </div>
      </div>
    </section>
  );
}
