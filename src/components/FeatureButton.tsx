type AppProps = {
  children: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
};

export default function FeatureButton({
  children,
  onClick,
  isActive = false,
}: AppProps) {
  return (
    <div className={` ${isActive ? "border-b-4 border-b-red" : "border-b-2"}`}>
      <button
        className="p-4 text-base transition duration-300 hover:text-red"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
