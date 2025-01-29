"use client";
import { Star, Quote, Heart, BadgeCheck } from "lucide-react";

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Adam Anderson",
      title: "Professional Model",
      image: "/adam.jpg",
      rating: 5,
      review:
        "As someone who needs to maintain perfect skin for work, I trust NVH® completely. The results are consistent and the experience is pure indulgence.",
      product: "Eternal Youth Serum",
      verified: true,
    },
    {
      id: 2,
      name: "Aicha Ben Malek",
      title: "Beauty Industry Expert",
      image: "/aicha.jpg",
      rating: 5,
      review:
        "The Velvet Serum has completely transformed my skincare routine. The texture is unlike anything I've experienced before - it's pure luxury in a bottle.",
      product: "Velvet Serum",
      verified: true,
    },
    {
      id: 3,
      name: "Sahar Martinez",
      title: "Skincare Enthusiast",
      image: "/sahar.jpg",
      rating: 5,
      review:
        "After trying countless luxury skincare brands, NVH® stands out with its incredible attention to detail and remarkable results. My skin has never looked better.",
      product: "Night Restoration Cream",
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
            <Star className="size-8 fill-yellow-400 text-yellow-400" /> 4.7
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
          <p className="text-neutral-600">Trusted Customers</p>
        </div>
        <div className="text-center px-8 py-4 bg-white rounded-xl">
          <h3 className="text-4xl font-light text-neutral-800 flex gap-2 items-center justify-center">
            <Heart className="size-8 fill-red-400 text-red-400" /> 97%
          </h3>
          <p className="text-neutral-600">Would Recommend</p>
        </div>
      </div>

      <div className="text-center mt-20 mb-12">
        <h2 className="text-4xl font-light text-white mb-3">
          Experts Love NVH®
        </h2>
        <p className="text-lg text-neutral-400">
          Trusted reviews from the foremost names in the domain.
        </p>
      </div>

      <div className="relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <div className="flex justify-center mb-8">
              <Quote className="w-12 h-12 text-neutral-200" />
            </div>

            <div className="space-y-6 text-center">
              <div className="flex justify-center gap-1">
                {[...Array(reviews[0].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-xl text-neutral-700 leading-relaxed italic">
                "{reviews[0].review}"
              </p>

              <div className="inline-block px-4 py-1 bg-neutral-100 rounded-full text-sm text-neutral-600">
                {reviews[0].product}
              </div>

              <div className="pt-6">
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={reviews[0].image}
                    alt={reviews[0].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-medium text-neutral-800">
                      {reviews[0].name}
                    </p>
                    <p className="text-sm text-neutral-600">
                      {reviews[0].title}
                    </p>
                    {reviews[0].verified && (
                      <p className="text-xs text-emerald-600 mt-1">
                        Verified Purchase
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
