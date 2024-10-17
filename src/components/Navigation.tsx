import NavigationItem from "./NavigationItem";
import LinkButton from "../ui/LinkButton";

export const navItems = [
  { text: "Features" },
  { text: "Pricing" },
  { text: "Contact" },
];

export default function Navigation({ direction = "row", type = "header" }) {
  return (
    <nav
      className={`flex justify-center gap-12 md:items-center ${type === "mobile" && "flex-col"}`}
    >
      <ul
        className={`flex items-center uppercase tracking-widest ${direction === "row" ? "flex-row" : "flex-col md:flex-row"} ${type === "mobile" ? "divide-y border-y text-[20px]" : "text-xxs gap-8"}`}
      >
        {navItems.map((item) => (
          <NavigationItem
            key={item.text}
            className={
              type === "mobile"
                ? "flex w-full items-center justify-center py-6"
                : ""
            }
          >
            {item.text}
          </NavigationItem>
        ))}
      </ul>
      {type === "header" && <LinkButton type="tertiary">LOGIN</LinkButton>}
      {type === "mobile" && <LinkButton type="mobile">LOGIN</LinkButton>}
    </nav>
  );
}
