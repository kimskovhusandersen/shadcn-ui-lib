import { Fragment } from "react";

const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
];

const serviceLinks = [
  { label: "Contact Us", href: "#" },
  { label: "Returns", href: "#" },
  { label: "Site Map", href: "#" },
  { label: "FAQ", href: "#" },
];
const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "CA Supply Chains Act", href: "#" },
  { label: "Do Not Sell My Information", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="space-y-12 bg-gray-800 p-12 pb-3 text-white">
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
            {serviceLinks.map(({ href, label }) => (
              <li key={label}>
                <a
                  className="text-sm text-gray-400 hover:text-white"
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* <!-- Social Media --> */}
        <div>
          <h3 className="text-md font-bold">Follow Us</h3>
          <ul className="mt-4 space-y-2">
            {socialLinks.map(({ href, label }) => (
              <li key={label}>
                <a
                  className="text-sm text-gray-400 hover:text-white"
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* <!-- Newsletter Signup --> */}
        <div></div>
      </div>
      <div className="mt-8 flex justify-between align-bottom">
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} E-commerce, Inc. All rights
          reserved.
        </p>
        <ul className="flex space-x-3">
          {legalLinks.map(({ href, label }, index) => {
            const isLast = index === legalLinks.length - 1;
            return (
              <Fragment key={label}>
                <li>
                  <p className="text-xs text-gray-400">
                    <a
                      className="text-xs text-gray-400 hover:text-white"
                      href={href}
                    >
                      {label}
                    </a>
                  </p>
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};
