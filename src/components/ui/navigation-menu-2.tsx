import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { forwardRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import { TopBanner } from "./top-banner";

const fashionLinks = [
  { label: "Tops" },
  { label: "Dresses" },
  { label: "Pants" },
  { label: "Denim" },
  { label: "Sweaters" },
  { label: "T-Shirts" },
  { label: "Jackets" },
  { label: "Activewear" },
  { label: "Browse All" },
];

const accessoriesLinks = [
  { label: "Watches" },
  { label: "Wallets" },
  { label: "Bags" },
  { label: "Sunglasses" },
  { label: "Hats" },
  { label: "Belts" },
];

const brandsLinks = [
  { label: "Full Nelson" },
  { label: "My Way" },
  { label: "Re-Arranged" },
  { label: "Counterfeit" },
  { label: "Significant Other" },
];

const featuredLinsk = [
  {
    label: "New Arrivals",
    altText:
      "Models sitting back to back, wearing Basic Tee in black and bone.",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
  },
  {
    label: "Basic Tees",
    altText:
      "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
  },
];

const NavigationMenu = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ children, className, ...props }, ref) => (
  <div className="bg-white">{children}</div>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const MobileNavigationMenu = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ children, className, ...props }, ref) => (
  <div aria-modal="true" className="relative z-40 lg:hidden" role="dialog">
    {/* <!--
  Off-canvas menu backdrop, show/hide based on off-canvas menu state.

  Entering: "transition-opacity ease-linear duration-300"
    From: "opacity-0"
    To: "opacity-100"
  Leaving: "transition-opacity ease-linear duration-300"
    From: "opacity-100"
    To: "opacity-0"
--> */}
    <div className="fixed inset-0 bg-black bg-opacity-25"></div>

    <div className="fixed inset-0 z-40 flex">
      {/* <!--
    Off-canvas menu, show/hide based on off-canvas menu state.

    Entering: "transition ease-in-out duration-300 transform"
      From: "-translate-x-full"
      To: "translate-x-0"
    Leaving: "transition ease-in-out duration-300 transform"
      From: "translate-x-0"
      To: "-translate-x-full"
  --> */}
      <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
        <div className="flex px-4 pb-2 pt-5">
          <button
            className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
            type="button"
          >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Close menu</span>
            <svg
              aria-hidden="true"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* <!-- Links --> */}
        <Tabs className="px-4" defaultValue="women">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="women">Women</TabsTrigger>
            <TabsTrigger value="men">Men</TabsTrigger>
          </TabsList>
          <TabsContent value="women">
            <div className="grid grid-cols-2 gap-x-4">
              {featuredLinsk.map(({ altText, imageUrl, label }, index) => (
                <div className="group relative text-sm" key={index}>
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <img
                      alt={altText}
                      className="object-cover object-center"
                      src={imageUrl}
                    />
                  </div>
                  <a className="mt-6 block font-medium text-gray-900" href="#">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 z-10"
                    ></span>
                    {label}
                  </a>
                  <p aria-hidden="true" className="mt-1">
                    Shop now
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <p
                className="font-medium text-gray-900"
                id="women-clothing-heading-mobile"
              >
                Clothing
              </p>
              <ul
                aria-labelledby="women-clothing-heading-mobile"
                className="mt-6 flex flex-col space-y-6"
                role="list"
              >
                {fashionLinks.map((link, index) => (
                  <li className="flow-root" key={index}>
                    <a className="-m-2 block p-2 text-gray-500" href="#">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <p
                className="font-medium text-gray-900"
                id="women-accessories-heading-mobile"
              >
                Accessories
              </p>
              <ul
                aria-labelledby="women-accessories-heading-mobile"
                className="mt-6 flex flex-col space-y-6"
                role="list"
              >
                {accessoriesLinks.map((link, index) => (
                  <li className="flow-root" key={index}>
                    <a className="-m-2 block p-2 text-gray-500" href="#">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <p
                className="font-medium text-gray-900"
                id="women-brands-heading-mobile"
              >
                Brands
              </p>
              <ul
                aria-labelledby="women-brands-heading-mobile"
                className="mt-6 flex flex-col space-y-6"
                role="list"
              >
                {brandsLinks.map((link, index) => (
                  <li className="flow-root" key={index}>
                    <a className="-m-2 block p-2 text-gray-500" href="#">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="men">
            <div className="grid grid-cols-2 gap-x-4">
              <div className="group relative text-sm">
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                  <img
                    alt="Drawstring top with elastic loop closure and textured interior padding."
                    className="object-cover object-center"
                    src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
                  />
                </div>
                <a className="mt-6 block font-medium text-gray-900" href="#">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 z-10"
                  ></span>
                  New Arrivals
                </a>
                <p aria-hidden="true" className="mt-1">
                  Shop now
                </p>
              </div>
              <div className="group relative text-sm">
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                  <img
                    alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
                    className="object-cover object-center"
                    src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg"
                  />
                </div>
                <a className="mt-6 block font-medium text-gray-900" href="#">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 z-10"
                  ></span>
                  Artwork Tees
                </a>
                <p aria-hidden="true" className="mt-1">
                  Shop now
                </p>
              </div>
            </div>
            <div className="mt-6">
              <p
                className="font-medium text-gray-900"
                id="men-clothing-heading-mobile"
              >
                Clothing
              </p>
              <ul
                aria-labelledby="men-clothing-heading-mobile"
                className="mt-6 flex flex-col space-y-6"
                role="list"
              >
                {fashionLinks.map((link, index) => (
                  <li className="flow-root" key={index}>
                    <a className="-m-2 block p-2 text-gray-500" href="#">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <p
                className="font-medium text-gray-900"
                id="men-accessories-heading-mobile"
              >
                Accessories
              </p>
              <ul
                aria-labelledby="men-accessories-heading-mobile"
                className="mt-6 flex flex-col space-y-6"
                role="list"
              >
                {accessoriesLinks.map((link, index) => (
                  <li className="flow-root" key={index}>
                    <a className="-m-2 block p-2 text-gray-500" href="#">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <p
                className="font-medium text-gray-900"
                id="men-brands-heading-mobile"
              >
                Brands
              </p>
              <ul
                aria-labelledby="men-brands-heading-mobile"
                className="mt-6 flex flex-col space-y-6"
                role="list"
              >
                {brandsLinks.map((link, index) => (
                  <li className="flow-root" key={index}>
                    <a className="-m-2 block p-2 text-gray-500" href="#">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
        <div className="mt-2"></div>

        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
          <div className="flow-root">
            <a className="-m-2 block p-2 font-medium text-gray-900" href="#">
              Company
            </a>
          </div>
          <div className="flow-root">
            <a className="-m-2 block p-2 font-medium text-gray-900" href="#">
              Stores
            </a>
          </div>
        </div>

        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
          <div className="flow-root">
            <a className="-m-2 block p-2 font-medium text-gray-900" href="#">
              Sign in
            </a>
          </div>
          <div className="flow-root">
            <a className="-m-2 block p-2 font-medium text-gray-900" href="#">
              Create account
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6">
          <a className="-m-2 flex items-center p-2" href="#">
            <img
              alt=""
              className="block h-auto w-5 flex-shrink-0"
              src="https://tailwindui.com/img/flags/flag-canada.svg"
            />
            <span className="ml-3 block text-base font-medium text-gray-900">
              CAD
            </span>
            <span className="sr-only">, change currency</span>
          </a>
        </div>
      </div>
    </div>
  </div>
));
MobileNavigationMenu.displayName = "MobileNavigationMenu";

const DesktopNavigationMenu = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ children, className, ...props }, ref) => (
  <header className="relative bg-white">
    <TopBanner>Get free delivery on orders over $100</TopBanner>

    <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="border-b border-gray-200">
        <div className="flex h-16 items-center">
          {/* <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. --> */}
          <button
            className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
            type="button"
          >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open menu</span>
            <svg
              aria-hidden="true"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          {/* <!-- Logo --> */}
          <div className="ml-4 flex lg:ml-0">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?shade=600"
              />
            </a>
          </div>

          {/* <!-- Flyout menus --> */}
          <div className="hidden lg:ml-8 lg:block lg:self-stretch">
            <div className="flex h-full space-x-8">
              <div className="flex">
                <div className="relative flex">
                  {/* <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" --> */}
                  <button
                    aria-expanded="false"
                    className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
                    type="button"
                  >
                    Women
                  </button>
                </div>

                {/* <!--
                'Women' flyout menu, show/hide based on flyout menu state.

                Entering: "transition ease-out duration-200"
                  From: "opacity-0"
                  To: "opacity-100"
                Leaving: "transition ease-in duration-150"
                  From: "opacity-100"
                  To: "opacity-0"
              --> */}
                <div className="absolute inset-x-0 top-full text-sm text-gray-500">
                  {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 top-1/2 bg-white shadow"
                  ></div>

                  <div className="relative bg-white">
                    <div className="mx-auto max-w-7xl px-8">
                      <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-6">
                        <div className="col-start-2 grid grid-cols-2 gap-x-8">
                          {featuredLinsk.map(
                            ({ altText, imageUrl, label }, index) => (
                              <div className="group relative text-base sm:text-sm">
                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                  <img
                                    alt={altText}
                                    className="object-cover object-center"
                                    src={imageUrl}
                                  />
                                </div>
                                <a
                                  className="mt-6 block font-medium text-gray-900"
                                  href="#"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="absolute inset-0 z-10"
                                  ></span>
                                  {label}
                                </a>
                                <p aria-hidden="true" className="mt-1">
                                  Shop now
                                </p>
                              </div>
                            ),
                          )}
                        </div>
                        <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                          <div>
                            <p
                              className="font-medium text-gray-900"
                              id="Clothing-heading"
                            >
                              Clothing
                            </p>
                            <ul
                              aria-labelledby="Clothing-heading"
                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                              role="list"
                            >
                              {fashionLinks.map((link, index) => (
                                <li className="flex" key={index}>
                                  <a className="hover:text-gray-800" href="#">
                                    {link.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p
                              className="font-medium text-gray-900"
                              id="Accessories-heading"
                            >
                              Accessories
                            </p>
                            <ul
                              aria-labelledby="Accessories-heading"
                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                              role="list"
                            >
                              {accessoriesLinks.map((link, index) => (
                                <li className="flex" key={index}>
                                  <a className="hover:text-gray-800" href="#">
                                    {link.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p
                              className="font-medium text-gray-900"
                              id="Brands-heading"
                            >
                              Brands
                            </p>
                            <ul
                              aria-labelledby="Brands-heading"
                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                              role="list"
                            >
                              {brandsLinks.map((link, index) => (
                                <li className="flex" key={index}>
                                  <a className="hover:text-gray-800" href="#">
                                    {link.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="relative flex">
                  {/* <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" --> */}
                  <button
                    aria-expanded="false"
                    className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
                    type="button"
                  >
                    Men
                  </button>
                </div>

                {/* <!--
                'Men' flyout menu, show/hide based on flyout menu state.

                Entering: "transition ease-out duration-200"
                  From: "opacity-0"
                  To: "opacity-100"
                Leaving: "transition ease-in duration-150"
                  From: "opacity-100"
                  To: "opacity-0"
              --> */}
                <div className="absolute inset-x-0 top-full text-sm text-gray-500">
                  {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 top-1/2 bg-white shadow"
                  ></div>
                  <div className="relative bg-white">
                    <div className="mx-auto max-w-7xl px-8">
                      <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-6">
                        <div className="col-start-2 grid grid-cols-2 gap-x-8">
                          <div className="group relative text-base sm:text-sm">
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <img
                                alt="Drawstring top with elastic loop closure and textured interior padding."
                                className="object-cover object-center"
                                src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
                              />
                            </div>
                            <a
                              className="mt-6 block font-medium text-gray-900"
                              href="#"
                            >
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 z-10"
                              ></span>
                              New Arrivals
                            </a>
                            <p aria-hidden="true" className="mt-1">
                              Shop now
                            </p>
                          </div>
                          <div className="group relative text-base sm:text-sm">
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <img
                                alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
                                className="object-cover object-center"
                                src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg"
                              />
                            </div>
                            <a
                              className="mt-6 block font-medium text-gray-900"
                              href="#"
                            >
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 z-10"
                              ></span>
                              Artwork Tees
                            </a>
                            <p aria-hidden="true" className="mt-1">
                              Shop now
                            </p>
                          </div>
                        </div>
                        <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                          <div>
                            <p
                              className="font-medium text-gray-900"
                              id="Clothing-heading"
                            >
                              Clothing
                            </p>
                            <ul
                              aria-labelledby="Clothing-heading"
                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                              role="list"
                            >
                              {fashionLinks.map((link, index) => (
                                <li className="flex" key={index}>
                                  <a className="hover:text-gray-800" href="#">
                                    {link.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p
                              className="font-medium text-gray-900"
                              id="Accessories-heading"
                            >
                              Accessories
                            </p>
                            <ul
                              aria-labelledby="Accessories-heading"
                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                              role="list"
                            >
                              {accessoriesLinks.map((link, index) => (
                                <li className="flex" key={index}>
                                  <a className="hover:text-gray-800" href="#">
                                    {link.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p
                              className="font-medium text-gray-900"
                              id="Brands-heading"
                            >
                              Brands
                            </p>
                            <ul
                              aria-labelledby="Brands-heading"
                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                              role="list"
                            >
                              {brandsLinks.map((link, index) => (
                                <li className="flex" key={index}>
                                  <a className="hover:text-gray-800" href="#">
                                    {link.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                href="#"
              >
                Company
              </a>
              <a
                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                href="#"
              >
                Stores
              </a>
            </div>
          </div>

          <div className="ml-auto flex items-center">
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <a
                className="text-sm font-medium text-gray-700 hover:text-gray-800"
                href="#"
              >
                Sign in
              </a>
              <span aria-hidden="true" className="h-6 w-px bg-gray-200"></span>
              <a
                className="text-sm font-medium text-gray-700 hover:text-gray-800"
                href="#"
              >
                Create account
              </a>
            </div>

            <div className="hidden lg:ml-8 lg:flex">
              <a
                className="flex items-center text-gray-700 hover:text-gray-800"
                href="#"
              >
                <img
                  alt=""
                  className="block h-auto w-5 flex-shrink-0"
                  src="https://tailwindui.com/img/flags/flag-canada.svg"
                />
                <span className="ml-3 block text-sm font-medium">CAD</span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>

            {/* <!-- Search --> */}
            <div className="flex lg:ml-6">
              <a className="p-2 text-gray-400 hover:text-gray-500" href="#">
                <span className="sr-only">Search</span>
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* <!-- Cart --> */}
            <div className="ml-4 flow-root lg:ml-6">
              <a className="group -m-2 flex items-center p-2" href="#">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                  0
                </span>
                <span className="sr-only">items in cart, view bag</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
));
DesktopNavigationMenu.displayName = "DesktopNavigationMenu";

export { DesktopNavigationMenu, MobileNavigationMenu, NavigationMenu };
