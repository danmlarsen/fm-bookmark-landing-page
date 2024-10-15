export default function StadiumShape({ alignment = "left" }) {
  return (
    <div
      className={`absolute -z-10 h-[203px] w-[577px] rounded-full bg-blue-500 md:h-[352px] lg:w-[1000px] ${alignment === "left" ? "left-0 top-0 -translate-x-1/2 translate-y-9" : "bottom-0 right-0 translate-x-1/2"}`}
    ></div>
  );
}
