export default function SocialLink({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <a className="fill-white transition duration-300 hover:fill-red" href="#">
      {children}
    </a>
  );
}
