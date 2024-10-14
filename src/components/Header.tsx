import LinkButton from "../ui/LinkButton";
import Logo from "../ui/Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="mx-8 mb-20 mt-10 flex items-center justify-between lg:mx-auto lg:max-w-6xl">
      <div>
        <Logo />
      </div>
      <div className="hidden items-center gap-12 md:flex">
        <Navigation />
        <LinkButton className="border-red bg-red hover:text-red">
          LOGIN
        </LinkButton>
      </div>
    </header>
  );
}
