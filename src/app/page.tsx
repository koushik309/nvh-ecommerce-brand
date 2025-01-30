// import { redirect } from "next/navigation";
// export default function Home() {
//   redirect("/admin/dashboard");
// }

import Header from "@/components/store/store-header";
import Products from "@/components/store/store-products";
import InfiniteScroll from "@/components/store/store-infinite-scroll";
import BestSeller from "@/components/store/store-best-seller";
import About from "@/components/store/store-about";
import Footer from "@/components/store/store-footer";
import ReviewSection from "@/components/store/store-reviews";
import HeroSection from "@/components/store/store-hero";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Products />
      <BestSeller />
      <InfiniteScroll />
      <ReviewSection />
      <About />
      <Footer />
    </>
  );
}
