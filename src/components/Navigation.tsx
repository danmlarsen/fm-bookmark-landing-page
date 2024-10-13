import NavigationItem from "./NavigationItem";

const navItems = [
  { text: "Features" },
  { text: "Pricing" },
  { text: "Contact" },
];

export default function Navigation() {
  return (
    <nav>
      <ul className="space-y-8 text-sm uppercase tracking-widest">
        {navItems.map((item) => (
          <NavigationItem>{item.text}</NavigationItem>
        ))}
      </ul>
    </nav>
  );
}
