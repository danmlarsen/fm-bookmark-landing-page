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
        className={`transition duration-300 hover:text-red focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
        href="#"
      >
        {children}
      </a>
    </li>
  );
}
