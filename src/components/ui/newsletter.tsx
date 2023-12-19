import { Button } from "./button";
import { Input } from "./input";

export const Newsletter = () => {
  return (
    // <!-- Newsletter Signup Section -->
    <section className="mt-6 border border-b-0 border-l-0 border-r-0 bg-background p-24">
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
          <Input
            className="w-1/3 rounded-r-none border border-gray-300 p-2"
            name="email"
            placeholder="Enter your email"
            type="email"
          />
          <Button className="rounded-l-none font-bold" size="lg">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};
