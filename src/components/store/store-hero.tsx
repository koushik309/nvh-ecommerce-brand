import Image from "next/image";
import hero from "../../../public/hero.png";

export default function HeroSection() {
  return (
    <section className="select-none my-24 flex justify-start items-center border  w-full h-[200px] relative max-w-screen-lg mx-auto rounded-t-xl">
      <Image
        src={hero}
        alt="cover"
        className="absolute bottom-0 right-0 h-[300px] w-auto"
      />
      <p className="ml-2 text-6xl leading-[62px] font-extralight italic">
        Timeless Beauty, Redefined! <br />
        Your Skin Deserves{" "}
        <span className="underline underline-offset-8 font-medium">
          the Best.
        </span>
      </p>
    </section>
  );
}
