export default function NavigationItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <li>
      <a className="transition duration-300 hover:text-red" href="#">
        {children}
      </a>
    </li>
  );
}
