import { VariantProps, tv } from "tailwind-variants";

const footerLinkVariant = tv({
  base: "text-gray-400 hover:text-white",
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

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

interface FooterLinkProps extends VariantProps<typeof footerLinkVariant> {
  className?: string;
  item: { id: string; title: string; url: string };
}

function FooterLink({ className, item, size }: FooterLinkProps) {
  return (
    <li key={item.id}>
      <a
        className={footerLinkVariant({ className, size })}
        href={item.url as string}
      >
        {item.title}
      </a>
    </li>
  );
}

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
              <FooterLink item={{ id: label, title: label, url: href }} />
            ))}
          </ul>
        </div>

        {/* <!-- Social Media --> */}
        <div>
          <h3 className="text-md font-bold">Follow Us</h3>
          <ul className="mt-4 space-y-2">
            {socialLinks.map(({ href, label }) => (
              <FooterLink item={{ id: label, title: label, url: href }} />
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
        {/* <!-- Legal --> */}
        <ul className="flex space-x-3">
          {legalLinks.map(({ href, label }, index) => (
            <FooterLink
              item={{ id: label, title: label, url: href }}
              size="xs"
            />
          ))}
        </ul>
      </div>
    </footer>
  );
};
