export default function Subscription() {
  return (
    <section className="py-12 bg-gray-50 container">
      <div className="max-w-xl mx-auto text-center px-4">
        <h3 className="text-3xl font-bold mb-4">
          Subscribe To Get The Latest News About Us
        </h3>
        <p className="text-gray-600 mb-6">
          We recommend you to subscribe to our newsletter to get updates about
          new packages and destinations.
        </p>
        <div className="flex gap-2 p-6 bg-white rounded-full shadow">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-3 py-2  rounded"
          />
          <button className="btn-primary">Subscribe</button>
        </div>
      </div>
    </section>
  );
}
