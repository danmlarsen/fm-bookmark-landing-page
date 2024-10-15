export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h2 className="text-2xl font-medium md:text-3xl">{children}</h2>;
}
