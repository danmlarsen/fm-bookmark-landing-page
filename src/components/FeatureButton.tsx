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
    <div
      className={`p-4 ${isActive ? "border-b-4 border-b-red" : "border-b-2"}`}
    >
      <button onClick={onClick}>{children}</button>
    </div>
  );
}
