import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="select-none my-24 flex justify-start items-center border  w-full h-[200px] relative max-w-screen-lg mx-auto rounded-t-xl">
      <Image
        width={420}
        height={594}
        src="/hero.png"
        alt="cover"
        className="absolute bottom-0 right-0 h-[300px] w-auto drop-shadow-[-1px_-1px_0_white]"
      />
      {/* <div className="w-32 h-10 border-[6px] border-white/80  rounded-[80%] absolute -top-24 -rotate-12 right-[86px]"></div> */}
      <p className="ml-14 text-6xl leading-[62px] font-extralight italic tracking-tighter">
        Timeless Beauty, Redefined! <br />
        Your Skin Deserves{" "}
        <span className="underline underline-offset-8 font-medium">
          the Best.
        </span>
      </p>
    </section>
  );
}
