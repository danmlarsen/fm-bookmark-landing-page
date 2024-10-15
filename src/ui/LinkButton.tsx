type AppProps = {
  children: React.ReactNode;
  to?: string;
  type?: string;
};

export default function LinkButton({
  children,
  to = "#",
  type = "primary",
}: AppProps) {
  const baseStyles =
    "inline-flex items-center justify-center min-w-28 min-h-12 rounded-md border px-4 py-3 text-center text-sm shadow-md transition duration-300 ";

  return (
    <a
      className={`${baseStyles} ${type === "primary" && "border-blue-500 bg-blue-500 text-white hover:bg-white hover:text-blue-500"} ${type === "secondary" && "border-white bg-white text-black hover:border-grayishBlue hover:text-grayishBlue"} ${type === "tertiary" && "border-red bg-red text-white hover:bg-white hover:text-red"}`}
      href={to}
    >
      {children}
    </a>
  );
}
