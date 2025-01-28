"use client";
import { Star, Heart, BadgeCheck } from "lucide-react";

import Adam from "../../../public/adam.jpg";
import Sahar from "../../../public/Sahar.jpg";
import Aicha from "../../../public/aicha.jpg";

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Adam Anderson",
      title: "Beauty Industry Expert",
      image: Adam,
      rating: 5,
      review:
        "The Velvet Serum has completely transformed my skincare routine. The texture is unlike anything I've experienced before - it's pure luxury in a bottle.",
      product: "Velvet Serum",
      verified: true,
    },
    {
      id: 2,
      name: "Sahar Martinez",
      title: "Skincare Enthusiast",
      image: Sahar,
      rating: 5,
      review:
        "After trying countless luxury skincare brands, NVH® stands out with its incredible attention to detail and remarkable results. My skin has never looked better.",
      product: "Night Restoration Cream",
      verified: true,
    },
    {
      id: 3,
      name: "Aicha Ben Malek",
      title: "Professional Model",
      image: Aicha,
      rating: 5,
      review:
        "As someone who needs to maintain perfect skin for work, I trust NVH® completely. The results are consistent and the experience is pure indulgence.",
      product: "Radiance Essence",
      verified: true,
    },
  ];

  return (
    <section className="py-24  max-w-screen-lg mx-auto" id="why-nvh">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-light text-white mb-3">Why NVH®</h2>
        <p className="text-lg text-neutral-400">
          Discover why leading beauty experts and enthusiasts choose NVH®
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 max-w-4xl mx-auto">
        <div className="text-center px-8 py-4 bg-white rounded-xl">
          <h3 className="text-4xl font-light text-neutral-800 flex gap-2 items-center justify-center">
            <Star className="size-8 fill-yellow-400 text-yellow-400" /> 4.9
          </h3>
          <p className="text-neutral-600">Average Rating</p>
        </div>
        <div className="text-center px-8 py-4 bg-white rounded-xl">
          <h3 className="text-4xl font-light text-neutral-800 flex gap-2 items-center justify-center">
            <BadgeCheck
              className="size-9 fill-blue-400 text-white"
              strokeWidth={1}
            />
            3,218+
          </h3>

          <p className="text-neutral-600">Verified Reviews</p>
        </div>
        <div className="text-center px-8 py-4 bg-white rounded-xl">
          <h3 className="text-4xl font-light text-neutral-800 flex gap-2 items-center justify-center">
            <Heart className="size-8 fill-red-400 text-red-400" /> 97%
          </h3>
          <p className="text-neutral-600">Would Recommend</p>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
