import NavigationItem from "./NavigationItem";

const navItems = [
  { text: "Features" },
  { text: "Pricing" },
  { text: "Contact" },
];

export default function Navigation({ direction = "row" }) {
  return (
    <nav>
      <ul
        className={`flex gap-8 text-sm uppercase tracking-widest ${direction === "row" ? "flex-row" : "flex-col md:flex-row"}`}
      >
        {navItems.map((item) => (
          <NavigationItem key={item.text}>{item.text}</NavigationItem>
        ))}
      </ul>
    </nav>
  );
}
