export default function NavigationItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <li className={`${className}`}>
      <a className={`transition duration-300 hover:text-red`} href="#">
        {children}
      </a>
    </li>
  );
}
