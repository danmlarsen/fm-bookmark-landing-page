export default function NavigationItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <li className={`${className}`}>
      <a
        className={`transition duration-300 hover:text-red focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2`}
        href="#"
      >
        {children}
      </a>
    </li>
  );
}
