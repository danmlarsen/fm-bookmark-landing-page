export default function SocialLink({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <a
      className="fill-white transition duration-300 hover:fill-red focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      href="#"
    >
      {children}
    </a>
  );
}
