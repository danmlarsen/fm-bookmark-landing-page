import FAQItem from "./FAQItem";
import LinkButton from "../ui/LinkButton";
import SectionTitle from "../ui/SectionTitle";

const faqData = [
  {
    title: "What is Bookmark?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    title: "How can I request a new browser?",
    text: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    title: "Is there a mobile app?",
    text: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    title: "What about other Chromium browsers?",
    text: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

export default function FAQ() {
  return (
    <section className="mb-36">
      <div className="mx-8 max-w-[540px] sm:mx-auto">
        <div className="mb-16 text-center">
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <p>
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>
        <ul className="mb-12 space-y-4 divide-y border-y">
          {faqData.map((faqItem) => (
            <FAQItem key={faqItem.title} {...faqItem} />
          ))}
        </ul>
        <div className="text-center">
          <LinkButton to="#">More Info</LinkButton>
        </div>
      </div>
    </section>
  );
}
