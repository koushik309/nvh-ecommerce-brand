export default function Footer() {
  return (
    <footer className="w-full py-10">
      <div className="border-t border-neutral-800 pt-12 pb-8">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-white text-lg mb-4">Join the NVH® Experience</h3>
          <p className="text-sm text-neutral-400 mb-6">
            Subscribe to receive exclusive offers, early access to limited
            editions, and skincare insights.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-neutral-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-300"
            />
            <button className="bg-white text-neutral-900 px-6 py-2 rounded-lg hover:bg-neutral-200 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
