export default function StadiumShape({ alignment = "left" }) {
  return (
    <div
      className={`absolute -z-10 bg-blue-500 ${alignment === "left" ? "left-0 top-0 h-[100%] w-[170%] -translate-x-1/2 translate-y-9 rounded-r-full md:h-[100%] md:w-[175%] lg:translate-y-20" : "bottom-0 right-0 h-[80%] w-[170%] translate-x-1/2 rounded-l-full md:h-[352px] md:w-[1000px]"}`}
    ></div>
  );
}
