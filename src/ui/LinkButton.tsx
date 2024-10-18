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
  let styles =
    "inline-flex items-center justify-center min-w-28 rounded-md border px-2 sm:px-4 lg:px-6 text-center font-medium shadow-md shadow-transparentBlue transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2";

  if (!type || type === "primary")
    styles +=
      " min-h-12 border-blue-500 bg-blue-500 text-xs text-white hover:bg-white hover:text-blue-500";
  if (type === "secondary")
    styles +=
      " min-h-12 border-white bg-white text-xs text-blue-900 hover:border-grayishBlue hover:text-grayishBlue";
  if (type === "tertiary")
    styles +=
      " text-xxs min-h-10 border-red bg-red text-white hover:bg-white hover:text-red";
  if (type === "mobile") styles += " w-full h-12";

  return (
    <a className={`${styles}`} href={to}>
      {children}
    </a>
  );
}
