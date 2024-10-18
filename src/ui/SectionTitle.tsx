export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-2xl font-medium text-blue-900 md:text-3xl">
      {children}
    </h2>
  );
}
