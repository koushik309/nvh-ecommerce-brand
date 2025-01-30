import Image from "next/image";
import nvh from "../../../public/nvh.png";

export default function About() {
  return (
    <section id="about-the-brand" className="py-24 max-w-screen-lg mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl mb-3 font-light">About The Brand</h2>
        <p className="text-lg text-neutral-400">
          Redefining Luxury Skincare Since 2021
        </p>
      </div>

      <div className="w-full gap-6 flex flex-col items-center justify-center py-12 px-8 bg-[#F8F8F8] rounded-2xl shadow-sm">
        <Image
          src={nvh}
          alt="NVH Logo"
          className="h-10 w-auto select-none mb-2"
        />
        <p className="text-center text-lg text-neutral-800 max-w-[600px] leading-relaxed">
          Born from the fusion of nature's finest ingredients and cutting-edge
          science, NVH® represents the pinnacle of luxury skincare. Each formula
          is meticulously crafted to deliver transformative results.
        </p>
      </div>
    </section>
  );
}

{
  /* Feature Cards */
}
{
  /* <div className="w-full flex items-stretch gap-8 mt-12">
        <div className="flex-1 bg-[#F8F8F8] group rounded-2xl flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
          <div className="relative h-64 overflow-hidden">
            <Image
              src={about1}
              alt="Unmatched Purity"
              className="w-full h-full object-cover brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="text-center p-8 bg-white">
            <h3 className="font-light text-2xl mb-3 text-neutral-800">
              Unmatched Purity
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Experience the difference of 99.9% pure active ingredients,
              sourced from the world's most pristine locations.
            </p>
          </div>
        </div>

        <div className="flex-1 bg-[#F8F8F8] group rounded-2xl flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
          <div className="relative h-64 overflow-hidden">
            <Image
              src={about2}
              alt="Scientific Innovation"
              className="w-full h-full object-cover brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="text-center p-8 bg-white">
            <h3 className="font-light text-2xl mb-3 text-neutral-800">
              Scientific Innovation
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Backed by 15 groundbreaking clinical studies and continuous
              research in advanced skincare science.
            </p>
          </div>
        </div>

        <div className="flex-1 bg-[#F8F8F8] group rounded-2xl flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
          <div className="relative h-64 overflow-hidden">
            <Image
              src={about3}
              alt="Elite Experience"
              className="w-full h-full object-cover brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="text-center p-8 bg-white">
            <h3 className="font-light text-2xl mb-3 text-neutral-800">
              Elite Experience
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Join the distinguished community of celebrities and skincare
              enthusiasts who trust NVH® for their daily ritual.
            </p>
          </div>
        </div>
      </div> */
}
