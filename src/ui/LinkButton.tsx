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
    "inline-flex items-center justify-center min-w-28 rounded-md border-2 px-2 sm:px-4 lg:px-6 text-center font-medium shadow-md shadow-transparentBlue transition duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500 focus-visible:ring-offset-2";

  if (!type || type === "primary")
    styles +=
      " min-h-12 border-blue-500 bg-blue-500 text-xs text-white hover:bg-white hover:text-blue-500";
  if (type === "secondary")
    styles +=
      " min-h-12 border-white bg-gray-50 text-xs text-blue-900/75 hover:border-grayishBlue hover:bg-white";
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
