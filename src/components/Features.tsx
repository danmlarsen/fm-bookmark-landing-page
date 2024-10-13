import { useState } from "react";
import Illustration1 from "../assets/images/illustration-features-tab-1.svg";
import Illustration2 from "../assets/images/illustration-features-tab-2.svg";
import Illustration3 from "../assets/images/illustration-features-tab-3.svg";

import FeatureItem from "./FeatureItem";
import SectionTitle from "./SectionTitle";

const featureItemsData = [
  {
    image: Illustration1,
    title: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    image: Illustration2,
    title: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    image: Illustration3,
    title: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <section className="mx-8 mb-36">
      <div className="text-center">
        <div className="mb-10">
          <SectionTitle>Features</SectionTitle>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <div>
          <div>
            <button onClick={() => setSelectedFeature(0)}>
              Simple Bookmarking
            </button>
          </div>
          <div>
            <button onClick={() => setSelectedFeature(1)}>
              Speedy Searching
            </button>
          </div>
          <div>
            <button onClick={() => setSelectedFeature(2)}>Easy Sharing</button>
          </div>
        </div>
      </div>
      <div>{<FeatureItem {...featureItemsData[selectedFeature]} />}</div>
    </section>
  );
}
