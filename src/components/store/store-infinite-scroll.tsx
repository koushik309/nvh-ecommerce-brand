export default function InfiniteScroll() {
  const items = [
    <div key="1" className="size-40 bg-slate-700"></div>,
    <div key="2" className="size-40 bg-slate-700"></div>,
    <div key="3" className="size-40 bg-slate-700"></div>,
    <div key="4" className="size-40 bg-slate-700"></div>,
    <div key="5" className="size-40 bg-slate-700"></div>,
    <div key="6" className="size-40 bg-slate-700"></div>,
  ];
  return (
    <section className="py-24 w-full">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-light text-white mb-3">
          Pure & Precious Oils
        </h2>
        <p className="text-lg text-neutral-400">
          Ethically sourced rare oils, carefully selected for their
          extraordinary benefits
        </p>
      </div>
      <div className="bg-[#F8F8F8] h-[200px] w-full flex items-center overflow-hidden relative">
        <div className="animate-scroll flex items-center absolute whitespace-nowrap">
          {items}
          {items}
          {items}
        </div>
      </div>
    </section>
  );
}
