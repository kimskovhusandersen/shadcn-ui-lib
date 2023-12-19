export const Newsletter = () => {
  return (
    // <!-- Newsletter Signup Section -->
    <section className="mt-6 bg-gray-100 p-6">
      <div className="container mx-auto text-center">
        <h2 className="mb-2 text-2xl font-bold">Stay Updated!</h2>
        <p className="mb-4">
          Subscribe to our newsletter to get the latest news and special offers.
        </p>
        <form
          action="#"
          className="flex items-center justify-center"
          method="POST"
        >
          <input
            className="w-1/3 rounded-l-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            name="email"
            placeholder="Enter your email"
            type="email"
          />
          <button
            className="rounded-r-lg bg-blue-500 p-2 font-bold text-white hover:bg-blue-600"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};
