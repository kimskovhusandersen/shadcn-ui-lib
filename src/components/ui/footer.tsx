export const Footer = () => {
  return (
    <footer className="bg-gray-800 p-24 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* <!-- Company Info --> */}
        <div>
          <h3 className="text-md font-bold">Company</h3>
          <dl className="mt-4 space-y-2 text-sm">
            <dt className="sr-only">Street</dt>
            <dd className="break-words text-gray-400">123 E-commerce St.</dd>
            <dt className="sr-only">City</dt>
            <dd className="break-words text-gray-400">
              Shopping City, SC 12345
            </dd>
            <dt className="sr-only">Email</dt>
            <dd className="break-words text-gray-400">contact@ecommerce.com</dd>
            <dt className="sr-only">Fax number</dt>
            <dd className="break-words text-gray-400">(123) 456-7890</dd>
          </dl>
        </div>

        {/* <!-- Customer Service --> */}
        <div>
          <h3 className="text-md font-bold">Customer Service</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a className="text-sm text-gray-400 hover:text-white" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a className="text-sm text-gray-400 hover:text-white" href="#">
                Returns
              </a>
            </li>
            <li>
              <a className="text-sm text-gray-400 hover:text-white" href="#">
                Site Map
              </a>
            </li>
            <li>
              <a className="text-sm text-gray-400 hover:text-white" href="#">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- Social Media --> */}
        <div>
          <h3 className="text-md font-bold">Follow Us</h3>
          <div className="flex space-x-2">
            <a className="text-sm text-gray-400 hover:text-white" href="#">
              Facebook
            </a>
            <a className="text-sm text-gray-400 hover:text-white" href="#">
              Twitter
            </a>
            <a className="text-sm text-gray-400 hover:text-white" href="#">
              Instagram
            </a>
          </div>
        </div>

        {/* <!-- Newsletter Signup --> */}
        <div></div>
      </div>
    </footer>
  );
};
