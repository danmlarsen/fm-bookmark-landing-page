export default function NavigationItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <li>
      <a href="#">{children}</a>
    </li>
  );
}
