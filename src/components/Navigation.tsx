import NavigationItem from "./NavigationItem";
import LinkButton from "../ui/LinkButton";

const navItems = [
  { text: "Features" },
  { text: "Pricing" },
  { text: "Contact" },
];

export default function Navigation({ direction = "row", type = "header" }) {
  return (
    <nav className="flex justify-center gap-12 md:items-center">
      <ul
        className={`flex gap-8 text-sm uppercase tracking-widest ${direction === "row" ? "flex-row" : "flex-col md:flex-row"}`}
      >
        {navItems.map((item) => (
          <NavigationItem key={item.text}>{item.text}</NavigationItem>
        ))}
      </ul>
      {type === "footer" ? "" : <LinkButton type="tertiary">LOGIN</LinkButton>}
    </nav>
  );
}
