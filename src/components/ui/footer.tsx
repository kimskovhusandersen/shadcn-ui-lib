export const Footer = () => {
  return (
    <footer className="bg-gray-800 p-8 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-4">
        {/* <!-- Company Info --> */}
        <div>
          <h2 className="mb-2 text-lg font-bold">Company</h2>
          <p className="text-gray-400">
            123 E-commerce St.
            <br />
            Shopping City, SC 12345
          </p>
          <p className="mt-4 text-gray-400">Email: contact@ecommerce.com</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
        </div>

        {/* <!-- Customer Service --> */}
        <div>
          <h2 className="mb-2 text-lg font-bold">Customer Service</h2>
          <ul>
            <li>
              <a className="text-gray-400 hover:text-white" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white" href="#">
                Returns
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white" href="#">
                Site Map
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white" href="#">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- Social Media --> */}
        <div>
          <h2 className="mb-2 text-lg font-bold">Follow Us</h2>
          <div className="flex space-x-2">
            <a className="text-gray-400 hover:text-white" href="#">
              Facebook
            </a>
            <a className="text-gray-400 hover:text-white" href="#">
              Twitter
            </a>
            <a className="text-gray-400 hover:text-white" href="#">
              Instagram
            </a>
          </div>
        </div>

        {/* <!-- Newsletter Signup --> */}
        <div>
          <h2 className="mb-2 text-lg font-bold">Newsletter</h2>
          <form action="#">
            <input
              className="w-full p-2 text-gray-700"
              placeholder="Your email address"
              type="email"
            />
            <button className="mt-2 w-full bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};
