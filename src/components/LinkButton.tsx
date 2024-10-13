type AppProps = {
  children: React.ReactNode;
  to: string;
  className?: string;
};

export default function LinkButton({ children, to, className }: AppProps) {
  return (
    <a
      className={`inline-block min-w-28 rounded-md border border-blue-500 bg-blue-500 px-4 py-3 text-center text-sm text-white shadow-md transition duration-300 hover:bg-white hover:text-blue-500 ${className}`}
      href={to}
    >
      {children}
    </a>
  );
}
