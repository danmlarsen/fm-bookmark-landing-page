export default function SocialLink({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <a
      className="fill-white transition duration-300 hover:fill-red focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2"
      href="#"
    >
      {children}
    </a>
  );
}
