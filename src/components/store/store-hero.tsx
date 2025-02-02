import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-12 sm:py-24 w-full max-w-screen-lg mx-auto flex justify-center px-4">
      <div className="flex justify-center md:justify-start  w-full items-center border rounded-t-2xl h-32 sm:h-52 relative">
        <Image
          width={420}
          height={594}
          src="/hero.png"
          alt="cover"
          className="absolute bottom-0 z-0  right-0 h-[180px] sm:h-[300px] w-auto drop-shadow-[-1px_-1px_0_white]"
        />
        {/* <div className="w-32 h-10 border-[6px] border-white/80  rounded-[80%] absolute -top-24 -rotate-12 right-[86px]"></div> */}
        <p className="mr-20 sm:mr-0 md:ml-8 lg:mr-52 z-10 text-3xl text-center md:text-start sm:text-5xl md:text-6xl leading-[40px] md:leading-[62px] font-extralight italic tracking-tighter">
          <span className="hidden sm:block">Timeless Beauty, Redefined!</span>
          Your Skin Deserves{" "}
          <span className="underline underline-offset-8 font-medium">
            the Best.
          </span>
        </p>
      </div>
    </section>
  );
}
